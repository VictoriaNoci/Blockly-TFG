Blockly.Blocks['_packet_in_handler'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PACKET IN");
    this.appendDummyInput()
        .appendField("if MAC_dst")
        .appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="]]), "conditions")
        .appendField(new Blockly.FieldTextInput("'Escribe la MAC'"), "Mac-escrita");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("--------------------------------------------------");
    this.appendDummyInput()
        .appendField("Port_Out")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "any_flood")
        .appendField(new Blockly.FieldDropdown([["ANY","ANY"], ["FLOOD","FLOOD"]]), "port")
        .appendField("or ")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "write_port")
        .appendField(new Blockly.FieldTextInput("'Escribe el puerto'"), "port-escrito");
    this.setColour(330);
 this.setTooltip("Simple handler for packet in event");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_packet_in_handler2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PACKET IN");
    this.appendDummyInput()
        .appendField("if MAC_dst")
        .appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="]]), "conditions")
        .appendField(new Blockly.FieldTextInput("'Escribe la MAC'"), "mac-escrita");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("--------------------------------------------------");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#33ff33"), "out-port")
        .appendField("PACKETOUT ")
        .appendField("Out_Port:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "checkOP")
        .appendField(new Blockly.FieldDropdown([["ANY","ANY"], ["FLOOD","FLOOD"]]), "port")
        .appendField("or")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkOP2")
        .appendField(new Blockly.FieldTextInput("'Escribe el puerto'"), "port-out");
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "flow-mod")
        .appendField("FLOWMOD");
    this.setColour(210);
 this.setTooltip("Packet In handler with OutPort and FlowMod Actions");
 this.setHelpUrl("");
  }
};
