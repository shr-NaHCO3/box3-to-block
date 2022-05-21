import Blockly from "blockly";

export default {
    label: "天气",
    blocks: {
        "weather_fog": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("创建天气 雾");
                    this.appendValueInput("A")
                        .setCheck("Number")
                        .appendField("最大雾量");
                    this.appendValueInput("B")
                        .setCheck("Box3RGBColor")
                        .appendField("雾的颜色");
                    this.appendValueInput("C")
                        .setCheck("Number")
                        .appendField("起始距离");
                    this.appendValueInput("D")
                        .setCheck("Number")
                        .appendField("起始高度");
                    this.appendValueInput("E")
                        .setCheck("Number")
                        .appendField("均匀雾量");
                    this.appendValueInput("F")
                        .setCheck("Number")
                        .appendField("高度衰减系数");
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                    this.setColour(230);
                 this.setTooltip("");
                 this.setHelpUrl("");
                  }
            },
            code: function (block) {
                var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
                var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
                var value_c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
                var value_d = Blockly.JavaScript.valueToCode(block, 'D', Blockly.JavaScript.ORDER_ATOMIC);
                var value_e = Blockly.JavaScript.valueToCode(block, 'E', Blockly.JavaScript.ORDER_ATOMIC);
                var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
                return "world.maxFog = "+value_a+";\n world.fogColor = "+value_b+";\n world.fogHeightOffset = "+value_c+";\n world.fogStartDistance = "+value_d+";\n world.fogUniformDensity = "+value_e+";\n world.fogHeightFalloff = "+value_f+";\n";
            },
        },

        "weather_water": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("创建天气 雨");
                    this.appendValueInput("A")
                        .setCheck("Number")
                        .appendField("速度");
                    this.appendValueInput("B")
                        .setCheck("Box3RGBColor")
                        .appendField("雨的颜色");
                    this.appendValueInput("C")
                        .setCheck("Number")
                        .appendField("方向");
                    this.appendValueInput("D")
                        .setCheck("Number")
                        .appendField("密度");
                    this.appendValueInput("E")
                        .setCheck("Number")
                        .appendField("扰动大小");
                    this.appendValueInput("F")
                        .setCheck("Number")
                        .appendField("最小直径");
                        this.appendValueInput("G")
                        .setCheck("Number")
                        .appendField("最大直径");
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                    this.setColour(230);
                 this.setTooltip("");
                 this.setHelpUrl("");
                  }
            },
            code: function (block) {
                var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
                var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
                var value_c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
                var value_d = Blockly.JavaScript.valueToCode(block, 'D', Blockly.JavaScript.ORDER_ATOMIC);
                var value_e = Blockly.JavaScript.valueToCode(block, 'E', Blockly.JavaScript.ORDER_ATOMIC);
                var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
                var value_g = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
                return "world.rainSpeed = "+value_a+";\n world.rainColor = "+value_b+";\n world.rainDirection = "+value_c+";\n world.rainDensity = "+value_d+";\n world.rainInterference = "+value_e+";\n world.rainSizeLo = "+value_f+";\nworld.rainSizeHi = "+value_g+";\n";
            },
        },

        "weather_snow": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("创建天气 雪");
                    this.appendValueInput("A")
                        .setCheck("string")
                        .appendField("雪花纹理");
                    this.appendValueInput("B")
                        .setCheck("Box3RGBColor")
                        .appendField("雪的颜色");
                    this.appendValueInput("C")
                        .setCheck("Number")
                        .appendField("密度");
                    this.appendValueInput("D")
                        .setCheck("Number")
                        .appendField("下落速度");
                    this.appendValueInput("E")
                        .setCheck("Number")
                        .appendField("自旋速度");
                    this.appendValueInput("F")
                        .setCheck("Number")
                        .appendField("最小直径");
                        this.appendValueInput("G")
                        .setCheck("Number")
                        .appendField("最大直径");
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                    this.setColour(230);
                 this.setTooltip("");
                 this.setHelpUrl("");
                  }
            },
            code: function (block) {
                var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
                var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
                var value_c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
                var value_d = Blockly.JavaScript.valueToCode(block, 'D', Blockly.JavaScript.ORDER_ATOMIC);
                var value_e = Blockly.JavaScript.valueToCode(block, 'E', Blockly.JavaScript.ORDER_ATOMIC);
                var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
                var value_g = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
                return "world.snowTexture = "+value_a+";\n world.snowColor = "+value_b+";\n world.snowDensity = "+value_c+";\n world.snowFallSpeed = "+value_d+";\n world.snowSpinSpeed = "+value_e+";\n world.snowSizeLo = "+value_f+";\nworld.snowSizeHi = "+value_g+";\n";
            },
        },

        "weather_light": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("设置光照");
                    this.appendValueInput("A")
                        .setCheck("String")
                        .appendField("照明类型");
                    this.appendValueInput("B")
                        .setCheck("Number")
                        .appendField("太阳运动频率");
                    this.appendValueInput("C")
                        .setCheck("Number")
                        .appendField("太阳在天空中的位置");
                    this.appendValueInput("D")
                        .setCheck("Number")
                        .appendField("月亮的相位");
                    this.appendValueInput("E")
                        .setCheck("Box3Vector3")
                        .appendField("太阳光照明方向");
                    this.appendValueInput("F")
                        .setCheck("Box3RGBColor")
                        .appendField("太阳光颜色亮度");
                    this.appendValueInput("G")
                        .setCheck("Box3RGBColor")
                        .appendField("环境光在-X轴方向的颜色亮度");
                    this.appendValueInput("H")
                        .setCheck("Box3RGBColor")
                        .appendField("环境光在+X轴方向的颜色亮度");
                    this.appendValueInput("I")
                        .setCheck("Box3RGBColor")
                        .appendField("环境光在-Y轴方向的颜色亮度");
                    this.appendValueInput("J")
                        .setCheck("Box3RGBColor")
                        .appendField("环境光在+Y轴方向的颜色亮度");
                    this.appendValueInput("K")
                        .setCheck("Box3RGBColor")
                        .appendField("环境光在-Z轴方向的颜色亮度");
                    this.appendValueInput("L")
                        .setCheck("Box3RGBColor")
                        .appendField("环境光在+Z轴方向的颜色亮度");
                    this.setPreviousStatement(true, null);
                    this.setNextStatement(true, null);
                    this.setColour(230);
                 this.setTooltip("");
                 this.setHelpUrl("");
                  }
            },
            code: function (block) {
                var value_a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
                var value_b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
                var value_c = Blockly.JavaScript.valueToCode(block, 'C', Blockly.JavaScript.ORDER_ATOMIC);
                var value_d = Blockly.JavaScript.valueToCode(block, 'D', Blockly.JavaScript.ORDER_ATOMIC);
                var value_e = Blockly.JavaScript.valueToCode(block, 'E', Blockly.JavaScript.ORDER_ATOMIC);
                var value_f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
                var value_g = Blockly.JavaScript.valueToCode(block, 'G', Blockly.JavaScript.ORDER_ATOMIC);
                var value_h = Blockly.JavaScript.valueToCode(block, 'H', Blockly.JavaScript.ORDER_ATOMIC);
                var value_i = Blockly.JavaScript.valueToCode(block, 'I', Blockly.JavaScript.ORDER_ATOMIC);
                var value_j = Blockly.JavaScript.valueToCode(block, 'J', Blockly.JavaScript.ORDER_ATOMIC);
                var value_k = Blockly.JavaScript.valueToCode(block, 'K', Blockly.JavaScript.ORDER_ATOMIC);
                var value_l = Blockly.JavaScript.valueToCode(block, 'L', Blockly.JavaScript.ORDER_ATOMIC);
                return "world.lightMode = "+value_a+";\n world.sunFrequency = "+value_b+";\n world.sunPhase = "+value_c+";\n world.lunarPhase = "+value_d+";\n world.sunDirection = "+value_e+";\n world.sunLight = "+value_f+";\n world.skyLeftLight = "+value_g+"; world.skyRightLight = "+value_h+";\n world.skyBottomLight = "+value_i+";\n world.skyTopLight = "+value_j+";\n world.skyFrontLight = "+value_k+";\n world.skyBackLight = "+value_l+";\n";
            },
        },
    }
}