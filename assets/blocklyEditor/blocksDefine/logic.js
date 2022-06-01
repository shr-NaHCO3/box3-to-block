import Blockly from 'blockly';
import { FieldSlider } from '@blockly/field-slider';

Blockly.Blocks["random_execute"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("几率触发")
      .appendField(new FieldSlider(50, 0, 100), "value")
      .appendField("%");
    this.appendStatementInput("content");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("根据设定的几率来决定要不要执行")
    this.setStyle("logic_blocks")
  }
};

Blockly.Blocks["sleep"] = {
  init: function() {
    this.appendDummyInput()
      .appendField("等待")
      .appendField(new Blockly.FieldNumber(), "value")
      .appendField("秒");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip("等待xx秒后，再执行下面的代码");
    this.setStyle("logic_blocks")
  }
};
Blockly.Blocks['try_catch'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('尝试');
    this.appendStatementInput('try')
    this.appendDummyInput()
      .appendField('抓取错误信息')
      .appendField(new Blockly.FieldVariable());
    this.appendStatementInput('catch')
    this.setStyle("logic_blocks")
    this.setTooltip("尝试与抓取")
  }
}; 
