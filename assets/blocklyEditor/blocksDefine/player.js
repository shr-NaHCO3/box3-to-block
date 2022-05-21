import Blockly from 'blockly';

Blockly.Blocks['player_directMessage'] = {
    init: function(){
        this.appendValueInput("player")
            .appendField("向玩家")
            .setCheck("entity");
        this.appendValueInput("message")
            .appendField("发送私信")
            .setCheck("String");
        this.appendDummyInput()
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("向指定玩家发送私信");
        this.setStyle("player_blocks");
    }
}
Blockly.Blocks['player_textDialog'] = {
    init: function(){
        this.appendValueInput("player")
            .appendField("向玩家")
            .setCheck("entity");
        this.appendValueInput("message")
            .appendField("显示文字对话框")
            .setCheck("dialog");
        this.appendDummyInput()
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("向指定玩家发送文字对话框");
        this.setStyle("player_blocks");
    }
}
Blockly.Blocks['player_selectDialog'] = {
    init: function(){
        this.appendValueInput("player")
            .appendField("向玩家")
            .setCheck("entity");
        this.appendValueInput("message")
            .appendField("显示选择对话框")
            .setCheck("dialog");
        this.appendDummyInput()
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("向指定玩家发送选择对话框");
        this.setStyle("player_blocks");
    }
}
Blockly.Blocks['player_inputDialog'] = {
    init: function(){
        this.appendValueInput("player")
            .appendField("向玩家")
            .setCheck("entity");
        this.appendValueInput("message")
            .appendField("显示输入对话框")
            .setCheck("dialog");
        this.appendDummyInput()
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("向指定玩家发送输入对话框");
        this.setStyle("player_blocks");
    }
}
Blockly.Blocks['player_cancelDialogs'] = {
    init: function(){
        this.appendValueInput("player")
            .appendField("关闭玩家")
            .setCheck("entity");
        this.appendDummyInput()
            .appendField("的所有对话框");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("关闭指定玩家的所有对话框");
        this.setStyle("player_blocks");
    }
}

Blockly.Blocks['player_playerShows'] = {
    init: function(){
        this.appendValueInput("player")
            .appendField("设置玩家外观")
            .setCheck("entity");
        this.appendDummyInput()
            .appendField("");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip("设置玩家外观");
        this.setStyle("player_blocks");
    }
}

/*
 * 属性
*/

Blockly.Blocks['player_muted'] = {
    init: function() {
      this.appendValueInput("value")
        .appendField("禁言玩家实体")
        .setCheck("entity");
      this.appendDummyInput()
        .appendField("");
      this.setPreviousStatement(true);
      this.setNextStatement(true);
      this.setTooltip("禁言某玩家");
      this.setStyle("player_blocks");
    }
};


/*
 * events
*/
