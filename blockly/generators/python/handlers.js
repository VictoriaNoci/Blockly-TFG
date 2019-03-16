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
             '                print \'Puerto salida \'+ str(out_port) + \'(' + dropdown_port + ')\'\n'+ 
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

