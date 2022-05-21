import Blockly from 'blockly';

Blockly.Blocks['world_say'] = {
  init: function() {
    this.appendValueInput("param")
      .appendField("广播消息");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("在聊天区广播一条消息");
    this.setStyle("world_blocks");
  }
};

Blockly.Blocks['world_tick'] = {
  init: function() {
    this.setOutput(true, "Number");
    this.appendDummyInput()
      .appendField("世界的tick计数");
    this.setStyle("world_blocks");
    this.setTooltip("Box3世界运行的tick计数");
  }
};

Blockly.Blocks["world_gravity"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("设置世界的地心引力数值为")
      .appendField(new Blockly.FieldNumber(), "value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("设置世界的地心引力数值 对应编辑器菜单 [场景-物理-地心引力] 控件属性");
    this.setStyle("world_blocks");
  }
};

Blockly.Blocks["world_airFriction"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("设置世界的速度阻尼数值为")
      .appendField(new Blockly.FieldNumber(), "value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("设置世界的速度阻尼数值 对应编辑器菜单 [场景-物理-速度阻尼] 控件属性");
    this.setStyle("world_blocks");
  }
};

Blockly.Blocks["position"] = {
  init: function() {
    this.setOutput(true, "Box3Vector3");
    this.appendDummyInput()
      .appendField('位置  X:')
      .appendField(new Blockly.FieldNumber(), "x")
      .appendField('Y:')
      .appendField(new Blockly.FieldNumber(), "y")
      .appendField('Z:')
      .appendField(new Blockly.FieldNumber(), "z");
    this.setStyle("world_blocks");
    this.setTooltip("一个Box3的位置");
  }
};

Blockly.Blocks["bgm"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("设置世界的背景音乐为")
      .appendField(new Blockly.FieldTextInput(), "value");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("设置世界的背景音乐（文件名里面要填后缀名 例如.mp3 .wav）");
    this.setStyle("world_blocks");
  }
};


/* 
 * 通用属性
 */
// Blockly.Blocks['world_querySelectorById'] = {
//   init: function() {
//     this.setOutput(true, "entity");
//     this.appendDummyInput()
//       .appendField("获取 名字 为")
//       .appendField(new Blockly.FieldTextInput(), "value")
//       .appendField("的实体");
//     this.setTooltip("通过ID获取第一个实体");
//     //this.setStyle("world_blocks");
//   }
// };

Blockly.Blocks['world_querySelectorById'] = {
  init: function() {
    this.setOutput(true, "entity");
    this.appendDummyInput()
      .appendField("获取标签为")
      .appendField(new Blockly.FieldTextInput(), "value")
      .appendField("的一个实体");
    this.setTooltip("搜索标签为特定值的第一个实体");
    this.setColour('#cd59e1');
  }
};



// -------------------碰撞箱-------------------


Blockly.Blocks['addcol'] = {
  init: function() {
    this.appendValueInput("value")
      .appendField("关闭")
      .setCheck("ColString");
    this.appendValueInput("value2")
      .appendField("和")
      .setCheck("ColString");
    this.appendDummyInput()
      .appendField("的碰撞箱");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("关闭两类实体的碰撞箱");
    this.setColour('#FFA883');
  }
};

Blockly.Blocks['removecol'] = {
  init: function() {
    this.appendValueInput("value")
      .appendField("开启")
      .setCheck("ColString");
    this.appendValueInput("value2")
      .appendField("和")
      .setCheck("ColString");
    this.appendDummyInput()
      .appendField("的碰撞箱");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("开启两类实体的碰撞箱");
    this.setColour('#FFA883');
  }
};

Blockly.Blocks['removeallcol'] = {
  init: function() {
    this.appendDummyInput()
      .appendField('清除全部碰撞过滤器');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour('#FFA883');
    this.setTooltip("清除全部碰撞过滤器");
  }
};

Blockly.Blocks['col_player'] = {
  init: function() {
    this.setOutput(true, "ColString");
    this.appendDummyInput()
      .appendField("碰撞箱参数：玩家");
    this.setTooltip("碰撞箱的一个参数：玩家");
    this.setColour('#FFA883');
  }
};

Blockly.Blocks['col_class'] = {
  init: function() {
    this.setOutput(true, "ColString");
    this.appendDummyInput()
      .appendField("碰撞箱参数：带有")
      .appendField(new Blockly.FieldTextInput(), "value")
      .appendField("标签的实体");
    this.setTooltip("碰撞箱的一个参数：带有某个标签的实体");
    this.setColour('#FFA883');
  }
};

Blockly.Blocks['col_id'] = {
  init: function() {
    this.setOutput(true, "ColString");
    this.appendDummyInput()
      .appendField("碰撞箱参数：带有")
      .appendField(new Blockly.FieldTextInput(), "value")
      .appendField("id的实体");
    this.setTooltip("碰撞箱的一个参数：带有某个id的实体");
    this.setColour('#FFA883');
  }
};
