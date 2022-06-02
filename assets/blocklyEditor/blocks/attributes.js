import Blockly from "blockly";

export default {
  label: "通用",
  blocks: {
    "entity": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Entity");
          this.appendDummyInput()
            .appendField("实体");
          this.setStyle("attributes_blocks");
          this.setTooltip("事件里的实体常量（（结束）触碰方块的实体、触碰（离开）液体的实体）");
        }
      },
      code: function () {
        return ['entity', Blockly.JavaScript.ORDER_ATOMIC];
      },
      xmlBefore: '<label text="Box3事件相关常量"></label>'
    },

    "use_demo": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Entity");
          this.appendDummyInput()
            .appendField("use_demo实体");
          this.setStyle("attributes_blocks");
          this.setTooltip("将代码在带有use_demo的标签的实体上运行的实体");
        }
      },
      code: function () {
        return ['__self', Blockly.JavaScript.ORDER_ATOMIC];
      }
    },

    "message": {
      define: {
        init: function () {
          this.setOutput(true, "String");
          this.appendDummyInput()
            .appendField("玩家说的话");
          this.setStyle("attributes_blocks");
          this.setTooltip("玩家在说的话（和“当玩家在聊天区说话时”连用）");
        }
      },
      code: function () {
        return ['message', Blockly.JavaScript.ORDER_ATOMIC];
      }
    },

    "attacker": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Entity");
          this.appendDummyInput()
            .appendField("伤害一个实体的玩家");
          this.setStyle("attributes_blocks");
          this.setTooltip("代表一个伤害一个实体的玩家（和伤害类事件连用）");
        }
      },
      code: function () {
        return ['attacker', Blockly.JavaScript.ORDER_ATOMIC];
      }
    },

    "other": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Entity");
          this.appendDummyInput()
            .appendField("碰撞事件中的另一个实体");
          this.setStyle("attributes_blocks");
          this.setTooltip("碰撞事件中的另一个实体(被玩家碰撞的实体，与“当实体与另一个实体碰撞时”事件连用)");
        }
      },
      code: function () {
        return ['other', Blockly.JavaScript.ORDER_ATOMIC];
      }
    },

    "clicker": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Entity");
          this.appendDummyInput()
            .appendField("点击实体的玩家");
          this.setStyle("attributes_blocks");
          this.setTooltip("点击实体的玩家（与“当实体被点击”事件连用）");
        }
      },
      code: function () {
        return ['clicker', Blockly.JavaScript.ORDER_ATOMIC];
      }
    },

    "voxel": {
      define: {
        init: function () {
          this.setOutput(true, "Number");
          this.appendDummyInput()
            .appendField("被触碰的方块（液体）id");
          this.setStyle("attributes_blocks");
          this.setTooltip("被触碰的方块（液体）id（与“当实体触碰方块时”、“当实体进入液体时”事件连用）");
        }
      },
      code: function () {
        return ['voxel', Blockly.JavaScript.ORDER_ATOMIC];
      }
    },

    "eventXYZ": {
      define: {
        init: function () {
          this.setOutput(true, "Number");
          this.appendDummyInput()
            .appendField("被触碰方块的")
            .appendField(new Blockly.FieldDropdown([
              ['X', 'x'],
              ['Y', 'y'],
              ['Z', 'z']
            ]), 'row')
            .appendField("坐标");
          this.setStyle("attributes_blocks");
          this.setTooltip("被触碰方块的X/Y/Z坐标（与“当实体触碰方块时”事件连用）");
        }
      },
      code: function (block) {
        return [block.getFieldValue("row"), Blockly.JavaScript.ORDER_ATOMIC];
      }
    },
    
    "Box3Vector3": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Vector3");
          this.appendDummyInput()
            .appendField("向量：");
          this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
          this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
          this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z");
          this.setInputsInline(true);
          this.setStyle("attributes_blocks");
          this.setTooltip("一个3维向量[Box3的一个位置]");
        }
      },
      code: function (block) {
        const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
        const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
        const z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Box3Vector3(${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_ATOMIC];
      },
      xmlBefore: '<label text="Box3通用属性"></label>'
    },
    "Box3Quaternion": {
      define: {
        init: function () {
          this.setOutput(true, "Box3Quaternion");
          this.appendDummyInput()
            .appendField('四元数：');
          this.appendValueInput("w")
            .setCheck("Number")
            .appendField("w");
          this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
          this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
          this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z");
          this.setInputsInline(true);
          this.setStyle("attributes_blocks");
          this.setTooltip("一个四元数");
        }
      },
      code: function (block) {
        const w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
        const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
        const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
        const z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
        return [`new Box3Quaternion(${w}, ${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_ATOMIC];
      }
    },
    "Box3RGBAColor": {
      define: {
        init: function () {
          this.setOutput(true, "Box3RGBAColor");
          this.appendDummyInput()
            .appendField("颜色")
            .appendField(new Blockly.FieldColour("#ff0000"), "colour");
          this.appendValueInput("a")
            .setCheck("Number")
            .appendField("透明度");
          this.setInputsInline(true);
          this.setStyle("attributes_blocks");
          this.setTooltip("RGBA颜色");
        }
      },
      code: function (block) {
        const a = Blockly.JavaScript.valueToCode(block, 'a', Blockly.JavaScript.ORDER_ATOMIC);
        var sColor = block.getFieldValue('colour');
        sColor = sColor.toLowerCase();
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
          }
          var sColorChange = [];
          for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)) / 25.5);
          }
          return [`new Box3RGBAColor(${sColorChange.join(",")},${a || 0})`, Blockly.JavaScript.ORDER_ATOMIC];
        }
        return [`new Box3RGBAColor(0,0,0,0,${a || 0})`, Blockly.JavaScript.ORDER_ATOMIC];
      }
    },
    "Box3RGBColor": {
      define: {
        init: function () {
          this.setOutput(true, "Box3RGBColor");
          this.appendDummyInput()
            .appendField("RGB颜色")
            .appendField(new Blockly.FieldColour("#ff0000"), "colour");
          this.setInputsInline(true);
          this.setStyle("attributes_blocks");
          this.setTooltip("RGB颜色");
        }
      },
      code: function (block) {
        var sColor = block.getFieldValue('colour');
        sColor = sColor.toLowerCase();
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
          }
          var sColorChange = [];
          for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)) / 25.5);
          }
          return [`new Box3RGBColor(${sColorChange.join(",")})`, Blockly.JavaScript.ORDER_ATOMIC];
        }
        return [`new Box3RGBColor(0,0,0)`, Blockly.JavaScript.ORDER_ATOMIC];
      }
    },
  }
}