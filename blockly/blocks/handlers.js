Blockly.Blocks['packet_in'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldTextInput("1"), "block");
    this.appendDummyInput()
        .appendField("PACKET IN");
    this.appendDummyInput()
        .appendField("MAC_dst")
        .appendField(new Blockly.FieldDropdown([["==","=="], ["!=","!="]]), "conditions")
        .appendField(new Blockly.FieldTextInput("33:33:00:00:00:16"), "mac-escrita");
    this.appendDummyInput()
        .appendField("switch ==")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "switch");
    this.appendStatementInput("events")
        .setCheck("handler");
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['packet_out'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("PACKET_OUT ");
    this.appendDummyInput()
        .appendField("Switch:")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "switch");
    this.appendDummyInput()
        .appendField("Out_Port:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "checkOP")
        .appendField(new Blockly.FieldDropdown([["ALL","ALL"], ["FLOOD","FLOOD"]]), "port")
        .appendField("or")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkOP2")
        .appendField(new Blockly.FieldTextInput("'Puerto'"), "port-out");
    this.setPreviousStatement(true, "handler");
    this.setNextStatement(true, "handler");
    this.setColour(180);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['flow_mod'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("FLOW_MOD");
    this.appendDummyInput()
        .appendField("MAC_dst")
        .appendField(new Blockly.FieldTextInput("33:33:00:00:00:16"), "mac-escrita");
    this.appendDummyInput()
        .appendField("Switch:")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "switch")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkBorrar")
        .appendField("Borrar switch");
    this.appendDummyInput()
        .appendField("Out_Port:")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "checkOP")
        .appendField(new Blockly.FieldDropdown([["ALL","ALL"], ["FLOOD","FLOOD"]]), "port")
        .appendField("or")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checkOP2")
        .appendField(new Blockly.FieldTextInput("'Puerto'"), "port-out");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['port_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PORT_STATUS");
    this.appendDummyInput()
        .appendField("Switch:")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "switch")
        .appendField("Port:")
        .appendField(new Blockly.FieldTextInput("'Puerto'"), "port-out");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("LINK-DOWN");
    this.appendStatementInput("events-down")
        .setCheck("handler");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("LINK-UP");
    this.appendStatementInput("events-up")
        .setCheck("handler");
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};