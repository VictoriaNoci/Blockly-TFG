Blockly.Python['packet_in'] = function(block) {
  var dropdown_conditions = block.getFieldValue('conditions');
  var text_mac_escrita = block.getFieldValue('mac-escrita');
  var statements_events = Blockly.Python.statementToCode(block, 'events');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['packet_out'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var checkbox_checkop = block.getFieldValue('checkOP') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_checkop2 = block.getFieldValue('checkOP2') == 'TRUE';
  var text_port_out = block.getFieldValue('port-out');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['flow_mod'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var checkbox_checkop = block.getFieldValue('checkOP') == 'TRUE';
  var dropdown_port = block.getFieldValue('port');
  var checkbox_checkop2 = block.getFieldValue('checkOP2') == 'TRUE';
  var text_port_out = block.getFieldValue('port-out');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['packet_in2'] = function(block) {
  var dropdown_conditions = block.getFieldValue('conditions');
  var text_mac_escrita = block.getFieldValue('mac-escrita');
  var statements_packetout = Blockly.Python.statementToCode(block, 'packetout');
  var statements_flowmod = Blockly.Python.statementToCode(block, 'flowmod');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};

Blockly.Python['port_status'] = function(block) {
  var dropdown_switch = block.getFieldValue('switch');
  var text_port_out = block.getFieldValue('port-out');
  // TODO: Assemble Python into code variable.
  var code = '...\n';
  return code;
};