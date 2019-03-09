Blockly.Python['_packet_in_handler'] = function(block) {
   var code = '    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)\n' +
             '    def _packet_in_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        datapath = msg.datapath \n' +
             '        dpid=datapath.id\n'+
             '    # ANALIZAR EL PAQUETE\n' +
             '        pkt = packet.Packet(msg.data)\n'+
             '        eth_pkt = pkt.get_protocol(ethernet.ethernet)\n'+
             '        dst = eth_pkt.dst\n'+
             '        print("Identificador switch ", dpid)\n'+
             '        print("MAC destino ", dst)\n';
  return code;
};

Blockly.Python['_packet_in_handler2'] = function(block) {
  var value_mac = Blockly.Python.valueToCode(block, 'MAC', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '    @set_ev_cls(ofp_event.EventOFPPacketIn, MAIN_DISPATCHER)\n' +
             '    def _packet_in_handler(self, ev):\n'+
             '        msg = ev.msg\n' +
             '        datapath = msg.datapath \n' +
             '        dpid=datapath.id\n'+
  return code;
};
