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