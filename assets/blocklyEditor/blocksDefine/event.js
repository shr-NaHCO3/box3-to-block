import Blockly from 'blockly';

Blockly.Blocks['event_playerJoin'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当玩家进入时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当玩家进入时触发");
  }
};

Blockly.Blocks['event_playerLeave'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当玩家离开时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当玩家离开时触发");
  }
};

Blockly.Blocks['event_tick'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当触发tick时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("每当Box3世界运行1个tick时触发");
  }
};

Blockly.Blocks['event_chat'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当玩家在聊天区说话时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当玩家在聊天区说话时触发");
  }
};

Blockly.Blocks['event_press'] = {
  init: function() {
    this.appendValueInput("button")
      .setCheck("String")
      .appendField("当玩家按下按钮");
    this.appendDummyInput()
      .appendField("时");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setInputsInline(true);
    this.setStyle("event_blocks");
    this.setTooltip("当玩家按下指定按钮时触发");
  }
};

Blockly.Blocks['event_release'] = {
  init: function() {
    this.appendValueInput("button")
      .setCheck("String")
      .appendField("当玩家松开按钮");
    this.appendDummyInput()
      .appendField("时");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setInputsInline(true);
    this.setStyle("event_blocks");
    this.setTooltip("当玩家松开指定按钮时触发");
  }
};

Blockly.Blocks['event_interact'] = {
  init: function() {
    this.appendValueInput("entity")
      .setCheck("Box3Entity")
      .appendField("当玩家与");
    this.appendDummyInput()
      .appendField("交互时");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setInputsInline(true);
    this.setStyle("event_blocks");
    this.setTooltip("当玩家与指定实体交互时触发");
  }
};

Blockly.Blocks['event_taked'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当实体受到伤害时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当实体受到伤害时触发");
  }
};

Blockly.Blocks['event_die'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当实体死亡时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当实体死亡时触发");
  }
};

Blockly.Blocks['event_respawn'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当玩家重生时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当玩家重生时触发");
  }
};



Blockly.Blocks['event_entityContact'] = {
  init: function() {
    this.appendValueInput("entity")
      .setCheck("Box3Entity")
      .appendField("当实体");
    this.appendDummyInput()
      .appendField("与另一个实体碰撞时");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setInputsInline(true);
    this.setStyle("event_blocks");
    this.setTooltip("当一个实体与另一个实体碰撞时触发");
  }
};

Blockly.Blocks['event_entitySeparate'] = {
  init: function() {
    this.appendValueInput("entity")
      .setCheck("Box3Entity")
      .appendField("当实体");
    this.appendDummyInput()
      .appendField("与另一个实体结束碰撞时");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setInputsInline(true);
    this.setStyle("event_blocks");
    this.setTooltip("当一个实体与另一个实体结束碰撞时触发");
  }
};

Blockly.Blocks['event_click'] = {
  init: function() {
    this.appendValueInput("entity")
      .setCheck("Box3Entity")
      .appendField("当实体");
    this.appendDummyInput()
      .appendField("被点击");
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setInputsInline(true);
    this.setStyle("event_blocks");
    this.setTooltip("当一个实体被点击时触发");
  }
};

Blockly.Blocks['event_voxelContact'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当实体触碰方块时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当实体触碰方块时触发");
  }
};

Blockly.Blocks['event_voxelSeparate'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当实体结束触碰方块时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当实体结束触碰方块时触发");
  }
};

Blockly.Blocks['event_fluidEnter'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当实体进入液体时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当实体进入液体时触发");
  }
};

Blockly.Blocks['event_fluidLeave'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当实体离开液体时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当实体离开液体时触发");
  }
};



Blockly.Blocks['when_run'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('当开始运行时');
    this.appendStatementInput("content")
      .setCheck(null)
      .appendField('执行');
    this.setStyle("event_blocks");
    this.setTooltip("当开始运行时触发");
  }
};



Blockly.Blocks['event_return'] = {
  init: function() {
    this.appendDummyInput()
      .appendField("退出事件");
    this.setPreviousStatement(true);
    this.setNextStatement(false);
    this.setTooltip("退出该事件（仅在事件模块内使用）");
    this.setStyle("event_blocks");
  }
};

Blockly.Blocks['event_entity'] = {
  init: function() {
    this.setOutput(true, "Box3Entity");
    this.appendDummyInput()
      .appendField("实体");
    this.setStyle("event_blocks");
    this.setTooltip("事件里的实体常量（（结束）触碰方块的实体、触碰（离开）液体的实体）");
  }
};

Blockly.Blocks['event_self'] = {
  init: function() {
    this.setOutput(true, "Box3Entity");
    this.appendDummyInput()
      .appendField("自己");
    this.setStyle("event_blocks");
    this.setTooltip("带有use_demo标签的实体");
  }
};

Blockly.Blocks['event_message'] = {
  init: function() {
    this.setOutput(true, "String");
    this.appendDummyInput()
      .appendField("玩家说的话");
    this.setStyle("event_blocks");
    this.setTooltip("玩家在说的话（和“当玩家在聊天区说话时”连用）");
  }
};

Blockly.Blocks['event_attacker'] = {
  init: function() {
    this.setOutput(true, "Box3Entity");
    this.appendDummyInput()
      .appendField("伤害一个实体的玩家");
    this.setStyle("event_blocks");
    this.setTooltip("代表一个伤害一个实体的玩家（和伤害类事件连用）");
  }
};

Blockly.Blocks['event_other'] = {
  init: function() {
    this.setOutput(true, "Box3Entity");
    this.appendDummyInput()
      .appendField("碰撞事件中的另一个实体");
    this.setStyle("event_blocks");
    this.setTooltip("碰撞事件中的另一个实体(被玩家碰撞的实体)");
  }
};

Blockly.Blocks['event_clicker'] = {
  init: function() {
    this.setOutput(true, "Box3Entity");
    this.appendDummyInput()
      .appendField("点击实体的玩家");
    this.setStyle("event_blocks");
    this.setTooltip("点击实体的玩家（与“当实体被点击”事件连用）");
  }
};

Blockly.Blocks['event_voxel'] = {
  init: function() {
    this.setOutput(true, "Number");
    this.appendDummyInput()
      .appendField("被触碰的方块（液体）id");
    this.setStyle("event_blocks");
    this.setTooltip("被触碰的方块（液体）id（与“当实体触碰方块时”、“当实体进入液体时”事件连用）");
  }
};

Blockly.Blocks['eventX'] = {
  init: function() {
    this.setOutput(true, "Number");
    this.appendDummyInput()
      .appendField("被触碰方块的X坐标");
    this.setStyle("event_blocks");
    this.setTooltip("被触碰方块的X坐标（与“当实体触碰方块时”事件连用）");
  }
};

Blockly.Blocks['eventY'] = {
  init: function() {
    this.setOutput(true, "Number");
    this.appendDummyInput()
      .appendField("被触碰方块的Y坐标");
    this.setStyle("event_blocks");
    this.setTooltip("被触碰方块的Y坐标（与“当实体触碰方块时”事件连用）");
  }
};

Blockly.Blocks['eventZ'] = {
  init: function() {
    this.setOutput(true, "Number");
    this.appendDummyInput()
      .appendField("被触碰方块的Z坐标");
    this.setStyle("event_blocks");
    this.setTooltip("被触碰方块的Z坐标（与“当实体触碰方块时”事件连用）");
  }
};
