import Blockly from "blockly";
import { FieldSlider } from "@blockly/field-slider";

export default {
  label: "控制",
  blocks: {
    "random_execute": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const value = block.getFieldValue("value");
        const content = Blockly.JavaScript.statementToCode(block, 'content');
        return `if(Math.random() <= ${value / 100}){\n${content}\n}`;
      }
    },
    
    "sleep": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField("等待")
            .appendField(new Blockly.FieldNumber(), "value")
            .appendField("秒");
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setTooltip("等待xx秒后，再执行下面的代码");
          this.setStyle("logic_blocks")
        }
      },
      code: function (block) {
        const value = block.getFieldValue("value");
        return `await sleep(${value * 1000});`;
      }
    },

    "try_catch": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField("尝试执行");
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('');
          this.appendDummyInput()
            .appendField("如果发生错误");
          this.appendStatementInput("try")
            .setCheck(null)
            .appendField('');
            
          this.setPreviousStatement(true);
          this.setNextStatement(true);
          this.setStyle("logic_blocks");
          this.setTooltip("尝试执行代码，如果出错则执行指定代码。");
        }
      },
      code: function (block) {
        const content = Blockly.JavaScript.statementToCode(block, 'content');
        const content_try = Blockly.JavaScript.statementToCode(block, 'try');
        return (`\ntry{\n    ${content}\n}catch(err){\n    ${content_try}\n}\n`);
      },
    }
  }
}

