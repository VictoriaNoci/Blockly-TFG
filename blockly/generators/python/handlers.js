Blockly.Python['_packet_in_handler'] = function(block) {
  var dropdown_conditions = block.getFieldValue('conditions');
  var text_mac_escrita = block.getFieldValue('Mac-escrita');
  var checkbox_any_flood = block.getFieldValue('any_flood') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_write_port = block.getFieldValue('write_port') == 'TRUE';
  var text_port_escrito = block.getFieldValue('port-escrito');
  
  // TODO: Assemble JavaScript into code variable.
  var code = '    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)\n' +
             '    def _packet_in_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        datapath = msg.datapath \n' +
             '        ofproto = datapath.ofproto\n' +
             '        dpid=datapath.id\n'+
             '    # ANALIZAR EL PAQUETE\n' +
             '        pkt = packet.Packet(msg.data)\n'+
             '        eth_pkt = pkt.get_protocol(ethernet.ethernet)\n'+
             '        dst = eth_pkt.dst\n\n'+
             '        if dst '+ dropdown_conditions +' \'' + text_mac_escrita + '\':\n'+
             '            # COMPROBACION DE LOS DOS CHECKS\n'+
	     '            if \'' + checkbox_any_flood + '\' == \'true\' and \'' + checkbox_write_port + '\' == \'true\':\n'+
             '                print \'Solo puedes seleccionar una condicion para el puerto\'\n'+
             '                print \'----------------------------------\'\n'+
             '            # DESPLEGABLE (any o flood)\n'+
	     '            elif \'' + checkbox_any_flood + '\' == \'true\':\n'+
             '                out_port = ofproto.OFPP_' + dropdown_port + '\n'+
             '                print \'Puerto salida \'+ str(out_port) + \'' + dropdown_port + '\'\n'+ 
             '            # PUERTO ESCRITO A MANO\n'+
             '            elif \'' + checkbox_write_port + '\' == \'true\':\n'+
             '                out_port = ' + text_port_escrito + '\n'+
             '                print \'Puerto salida \'+ str(out_port)\n'+
             '            print \'Identificador switch \' + str(dpid)\n'+
             '            print \'MAC destino \' str(dst)\n'+
             '            print \'----------------------------------\'\n'+
             '        else:\n'+
             '            print \'Descartamos el paquete porque no cumple la condicion\'\n'+
             '            print \'----------------------------------\'\n';
  return code;
};


Blockly.Python['_packet_in_handler2'] = function(block) {
  var dropdown_conditions = block.getFieldValue('conditions');
  var text_mac_escrita = block.getFieldValue('mac-escrita');
  var colour_out_port = block.getFieldValue('out-port');
  var checkbox_checkop = block.getFieldValue('checkOP') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_checkop2 = block.getFieldValue('checkOP2') == 'TRUE';
  var text_port_out = block.getFieldValue('port-out');
  var colour_flow_mod = block.getFieldValue('flow-mod');
  
  // TODO: Assemble Python into code variable.
  var code = '    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)\n' +
             '    def _packet_in_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        datapath = msg.datapath \n' +
             '        ofproto = datapath.ofproto\n' +
             '        parser = datapath.ofproto_parser\n'+
             '        dpid=datapath.id\n'+
             '        # self.mac_to_port.setdefault(dpid, {})\n'+
             '    # ANALIZAR EL PAQUETE\n' +
             '        pkt = packet.Packet(msg.data)\n'+
             '        eth_pkt = pkt.get_protocol(ethernet.ethernet)\n'+
             '        in_port = msg.match[\'in_port\']\n'+
             '        src = eth_pkt.src\n'+
             '        dst = eth_pkt.dst\n\n'+
             '        if dst '+ dropdown_conditions +' \'' + text_mac_escrita + '\':\n'+
             '            # COLOR DE PACKET_OUT\n'+
             '            if \'' + colour_out_port + '\' == \'#33ff33\':\n'+
             '                # COMPROBACION DE LOS DOS CHECKS\n'+
	     '                if \'' + checkbox_checkop + '\' == \'true\' and \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '                    print \'Solo puedes seleccionar una condicion para el puerto\'\n'+
             '                    print \'----------------------------------\'\n'+
             '                # DESPLEGABLE (any o flood)\n'+
	     '                elif \'' + checkbox_checkop + '\' == \'true\':\n'+
             '                    out_port = ofproto.OFPP_' + dropdown_port + '\n'+
             '                    print \'Puerto salida \'+ str(out_port) + \'' + dropdown_port + '\'\n'+ 
             '                # PUERTO ESCRITO A MANO\n'+
             '                elif \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '                    out_port = ' + text_port_out + '\n'+
             '                    print \'Puerto salida \'+ str(out_port)\n'+
             '                print \'Identificador switch \' + str(dpid)\n'+
             '                print \'MAC destino \' str(dst)\n'+
             '                print \'----------------------------------\'\n\n'+
             '            # COLOR DE FLOW_MOD\n'+
             '            if \'' + colour_flow_mod + '\' == \'#33ff33\':\n'+
             '                #Aprender MAC para evitar FLOOD la proxima vez\n'+
             '                self.mac_to_port[dpid][src] = in_port\n'+
             '                #Construir action list\n'+
             '                actions = [parser.OFPActionOutput(out_port)]\n'+
             '                #Instalar regla para evitar packet_in la proxima vez\n'+
             '                if out_port != ofproto.OFPP_FLOOD:\n'+
             '                    match = parser.OFPMatch(in_port=in_port, eth_dst=dst)\n'+
             '                    self.add_flow(datapath,1,match,actions)\n'+
             '        else:\n'+
             '            print \'Descartamos el paquete porque no cumple la condicion\'\n'+
             '            print \'----------------------------------\'\n';           
  return code;
};

