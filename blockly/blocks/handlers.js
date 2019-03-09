Blockly.Blocks['_packet_in_handler'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PacketIn");
    this.setColour(230);
 this.setTooltip("Handler for packetIn event");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['_packet_in_handler2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PacketIn");
    this.appendValueInput("MAC")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("MAC");
    this.setColour(55);
 this.setTooltip("Handler for packetIn event");
 this.setHelpUrl("");
  }
};