Blockly.Python['packet_in'] = function(block) {
  var dropdown_conditions = block.getFieldValue('conditions');
  var text_mac_escrita = block.getFieldValue('mac-escrita');
  var statements_events = Blockly.Python.statementToCode(block, 'events');

  // TODO: Assemble Python into code variable.
  var code = '  \n# PACKET IN\n'+ 
             '    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)\n' +
             '    def _packet_in_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        datapath = msg.datapath \n' +
             '        parser = datapath.ofproto_parser\n'+
             '        ofproto = datapath.ofproto\n' +
             '        dpid=datapath.id\n'+
             '    # ANALIZAR EL PAQUETE\n' +
             '        pkt = packet.Packet(msg.data)\n'+
             '        eth_pkt = pkt.get_protocol(ethernet.ethernet)\n'+
             '        in_port = msg.match[\'in_port\']\n'+
             '        src = eth_pkt.src\n'+
             '        dst = eth_pkt.dst\n\n'+
             '        print \'CONDICION PACKET IN -> dst ' + dropdown_conditions + ' ' + text_mac_escrita + '\'\n'+
             '        if dst '+ dropdown_conditions +' \'' + text_mac_escrita + '\':\n'+
             '    #CODIGO DE BLOQUES AÑADIDOS\n'+
             '    ' +statements_events +
             '        else:\n'+
             '            print \'Descartamos el paquete porque no cumple la condicion (dst = \' + str(dst) + \')\'\n'+
             '            print \'----------------------------------\'\n';
  return code;
};

Blockly.Python['packet_out'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var checkbox_checkop = block.getFieldValue('checkOP') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_checkop2 = block.getFieldValue('checkOP2') == 'TRUE';
  var text_port_out = block.getFieldValue('port-out');
  
  // TODO: Assemble Python into code variable.
  // FALTA AÑADIR COSAS DEL SWITCH
  var code = '  # PACKET OUT\n'+
             '          # COMPROBACION DE LOS DOS CHECKS\n'+
	     '          if \'' + checkbox_checkop + '\' == \'true\' and \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '              print \'Solo puedes seleccionar una condicion para el puerto\'\n'+
             '              print \'----------------------------------\'\n'+
             '          # DESPLEGABLE (any o flood)\n'+
	     '          elif \'' + checkbox_checkop + '\' == \'true\':\n'+
             '              out_port = ofproto.OFPP_' + dropdown_port + '\n'+
             '              print \'Puerto salida \'+ str(out_port) + \'' + dropdown_port + '\'\n'+ 
             '          # PUERTO ESCRITO A MANO\n'+
             '          elif \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '              out_port = ' + text_port_out + '\n'+
             '              print \'Puerto salida: \'+ str(out_port)\n'+
             '          print \'Identificador switch: \' + str(dpid)\n'+
             '          print \'Puerto de entrada: \' + str(in_port)\n'+
             '          print \'MAC destino: \' + str(dst)\n'+
             '          print \'MAC origen: \' + str(src)\n'+
             '          print \'----------------------------------\'\n\n';
  return code;
};

Blockly.Python['flow_mod'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var checkbox_checkop = block.getFieldValue('checkOP') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_checkop2 = block.getFieldValue('checkOP2') == 'TRUE';
  var text_port_out = block.getFieldValue('port-out');
  // TODO: Assemble Python into code variable.
  // FALTA AÑADIR COSAS DEL SWITCH
  var code = '      # FLOW MOD\n'+
             '          if \'' + checkbox_checkop + '\' == \'true\' and \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '              print \'Solo puedes seleccionar una opcion para el puerto\'\n'+
             '          elif \'' + checkbox_checkop + '\' == \'true\':\n'+
             '              print \'No se puede aplicar flow mod con out_port = ANY o FLOOD\'\n'+
             '          elif \'' + checkbox_checkop2 + '\' == \'true\':\n'+    
             '              #Construir action list\n'+
             '              actions = [parser.OFPActionOutput('+text_port_out+')]\n'+
             '              #Instalar regla para evitar packet_in la proxima vez\n'+
             '              match = parser.OFPMatch(in_port=in_port, eth_dst=dst)\n'+
             '              self.add_flow(datapath,1,match,actions)\n'+
             '              print \'Regla aprendida en switch \' + str(datapath.id) + \' con src \' + str(src) + \' con in_port \' + str(in_port) +\' y port_out ' + text_port_out +  '\'\n' +
             '              print \'----------------------------------\'\n\n';  
  return code;
};

Blockly.Python['port_status'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var text_port_out = block.getFieldValue('port-out');
  // TODO: Assemble Python into code variable.
  var code = '  \n# PORT STATUS\n'+
             '    @set_ev_cls(ofp_event.EventOFPPortStatus, MAIN_DISPATCHER)\n' +
             '    def port_status_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        reason = msg.reason \n' +
             '        dp = msg.datapath\n'+
             '        ofpport = msg.desc\n\n' +
             '        if reason == dp.ofproto.OFPPR_MODIFY:\n'+
             '            if dp.id == '+ dropdown_switch + ' and ofpport.port_no == ' + text_port_out + ':\n'+
             '                print \'MODIFIED = (datapath id: ' + dropdown_switch + ' - port number: ' +  text_port_out + ')\'\n';
  return code;
};
