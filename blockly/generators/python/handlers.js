Blockly.Python['packet_in'] = function(block) {
  var text_block = block.getFieldValue('block');
  var dropdown_conditions = block.getFieldValue('conditions');
  var text_mac_escrita = block.getFieldValue('mac-escrita');
  var dropdown_switch = block.getFieldValue('switch');
  var statements_events = Blockly.Python.statementToCode(block, 'events');

  // TODO: Assemble Python into code variable.
  var code = '  \n# PACKET IN\n'+ 
             '    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)\n' +
             '    def _packet_in_handler' + text_block + '(self, ev):\n'+
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
             '        mac_text = \"' + text_mac_escrita + '\"\n'+
             '        mac_dst = mac_text.split(",")\n'+
             '        for i in mac_dst:\n'+
             '            if dst '+ dropdown_conditions +' i and datapath.id == ' + dropdown_switch + ':\n'+
             '        #CODIGO DE BLOQUES AÑADIDOS\n'+
             '        ' +statements_events ;          
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
             '              # COMPROBACION DE LOS DOS CHECKS\n'+
	     '              if \'' + checkbox_checkop + '\' == \'true\' and \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '                  print \'Solo puedes seleccionar una condicion para el puerto\'\n'+
             '                  print \'----------------------------------\'\n'+
             '              # DESPLEGABLE (any o flood)\n'+
	     '              elif \'' + checkbox_checkop + '\' == \'true\':\n'+
             '                  out_port = ofproto.OFPP_' + dropdown_port + '\n'+
             '              # PUERTO ESCRITO A MANO\n'+
             '              elif \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '                  puerto_out = \"' + text_port_out + '\"\n'+
             '                  p_out = puerto_out.split(",")\n'+
             '                  out_port = int(p_out[mac_dst.index(i)])\n\n'+
             '              # CONSTRUCCION DEL PACKET OUT\n'+
             '              actions = [parser.OFPActionOutput(out_port)]\n'+
             '              dp = api.get_datapath(self,' + dropdown_switch+ ')\n'+
             '              out = parser.OFPPacketOut(datapath=dp, buffer_id=ofproto.OFP_NO_BUFFER, in_port=in_port, actions=actions, data=msg.data)\n'+
             '              dp.send_msg(out)\n';
  return code;
};

Blockly.Python['flow_mod'] = function(block) {
  var text_mac_escrita = block.getFieldValue('mac-escrita');
  var dropdown_switch = block.getFieldValue('switch');
  var checkbox_checkborrar = block.getFieldValue('checkBorrar') == 'TRUE';
  var checkbox_checkop = block.getFieldValue('checkOP') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_checkop2 = block.getFieldValue('checkOP2') == 'TRUE';
  var text_port_out = block.getFieldValue('port-out');
  var checkbox_checkborrar = block.getFieldValue('checkBorrar') == 'TRUE';
  var checkbox_checkprioridad = block.getFieldValue('checkPrioridad') == 'TRUE';
  // TODO: Assemble Python into code variable.
  // FALTA AÑADIR COSAS DEL SWITCH
  var code = '          # FLOW MOD\n'+
             '              # Comprobacion check borrar entradas del switch\n'+
             '              dpath = api.get_datapath(self,' + dropdown_switch+ ')\n'+
             '              if \'' + checkbox_checkborrar + '\' == \'true\':\n'+
             '                  empty_match = parser.OFPMatch()\n'+
             '                  instructions = []\n'+
             '                  flow_mod = self.remove_table_flows(dpath, 0, empty_match, instructions)\n'+
             '                  dpath.send_msg(flow_mod)\n'+
             '                  self.switch_features_handler(ev)\n'+
             '                  print \'Se han borrado las entradas\'\n'+
             '                  print \'----------------------------------\'\n\n'+
             '              mac_FM = \"' + text_mac_escrita + '\"\n'+
             '              mac_dst_FM = mac_FM.split(",")\n'+
             '              puerto_out = \"' + text_port_out + '\"\n'+
             '              p_out = puerto_out.split(",")\n'+ 
             '              for FM_dst in mac_dst_FM:\n'+
             '                  if \'' + checkbox_checkop + '\' == \'true\' and \'' + checkbox_checkop2 + '\' == \'true\':\n'+
             '                      print \'Solo puedes seleccionar una opcion para el puerto\'\n'+
             '                  elif \'' + checkbox_checkop + '\' == \'true\':\n'+
             '                      out_port = ofproto.OFPP_' + dropdown_port + '\n'+ 
             '                  elif \'' + checkbox_checkop2 + '\' == \'true\':\n'+    
             '                      out_port = int(p_out[mac_dst_FM.index(FM_dst)])\n\n'+
             '                  #Construir action list\n'+
             '                  actions = [parser.OFPActionOutput(out_port)]\n'+
             '                  #Instalar regla para evitar packet_in la proxima vez\n'+
             '                  match = parser.OFPMatch(eth_dst=FM_dst)\n'+
             '                  self.add_flow(dpath,1,match,actions)\n'+
             '                  print \'----------------------------------\'\n'+
             '                  print \'Regla aprendida en switch \' + str(dpath.id) +\' y port_out \'+ str(out_port)\n' ;  
  return code;
};

Blockly.Python['port_status'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var text_port_out = block.getFieldValue('port-out');
  var statements_events_down = Blockly.Python.statementToCode(block, 'events-down');
  var statements_events_up = Blockly.Python.statementToCode(block, 'events-up');
  // TODO: Assemble Python into code variable.
  var code = '  \n# PORT STATUS\n'+
             '    @set_ev_cls(ofp_event.EventOFPPortStatus, MAIN_DISPATCHER)\n' +
             '    def port_status_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        reason = msg.reason \n' +
             '        dp = msg.datapath\n'+
             '        parser = dp.ofproto_parser\n'+
             '        ofproto = dp.ofproto\n'+
             '        ofpport = msg.desc\n' +
             '        state = ofpport.state\n\n'+
             '        if reason == dp.ofproto.OFPPR_MODIFY and dp.id == '+ dropdown_switch + ' and ofpport.port_no == ' + text_port_out + ':\n'+
             '            # LINK DOWN\n'+
             '            if state == 1:\n'+
             '                print \'----------------------------------\'\n'+
             '                print \'----------------------------------\'\n'+
             '                print \'El estado del un enlace ha cambiado -> LINK DOWN\'\n'+
             '' + statements_events_down + '\n'+
             '            # LINK UP\n'+
             '            if state == 0:\n'+
             '                print \'----------------------------------\'\n'+
             '                print \'----------------------------------\'\n'+
             '                print \'El estado del un enlace ha cambiado -> LINK UP\'\n'+
             '' + statements_events_up+ '\n';
  return code;
};
