import Blockly from "blockly";

export default {
    label: "通用",
    blocks: {
        "Box3Vector3": {
            define: {
                init: function() {
                    this.setOutput(true, "Box3Vector3");
                    // this.appendDummyInput()
                    //   .appendField('向量：X')
                    //   .appendField(new Blockly.FieldNumber(), "x")
                    //   .appendField('Y')
                    //   .appendField(new Blockly.FieldNumber(), "y")
                    //   .appendField('Z')
                    //   .appendField(new Blockly.FieldNumber(), "z");
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
            code: function(block) {
                const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
                const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
                const z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
                return [`new Box3Vector3(${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_ATOMIC];
            }
        },
        "Box3Quaternion": {
            define: {
                init: function() {
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
            code: function(block) {
                const w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
                const x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
                const y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
                const z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
                return [`new Box3Quaternion(${w}, ${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_ATOMIC];
            }
        },
        "Box3RGBAColor": {
            define: {
                init: function() {
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
            code: function(block) {
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
                    return [`new Box3RGBAColor(${sColorChange.join(",")},${a||0})`, Blockly.JavaScript.ORDER_ATOMIC];
                }
                return [`new Box3RGBAColor(0,0,0,0,${a||0})`, Blockly.JavaScript.ORDER_ATOMIC];
            }
        },
        "Box3RGBColor": {
            define: {
                init: function() {
                    this.setOutput(true, "Box3RGBColor");
                    this.appendDummyInput()
                        .appendField("RGB颜色")
                        .appendField(new Blockly.FieldColour("#ff0000"), "colour");
                    this.setInputsInline(true);
                    this.setStyle("attributes_blocks");
                    this.setTooltip("RGB颜色");
                }
            },
            code: function(block) {
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