import Blockly from "blockly";

export default {
    label: "世界",
    blocks: {
        "say": {
            define: {
                init: function() {
                    this.appendValueInput("param")
                        .appendField("广播消息");
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                    this.setTooltip("在聊天区广播一条消息");
                    this.setStyle("world_blocks");
                }
            },
            code: function(block) {
                const value = Blockly.JavaScript.valueToCode(block, 'param', Blockly.JavaScript.ORDER_ATOMIC);
                return `world.say(${value});\n`;
            },
            xmlBefore: "<label text=\"世界方法\"></label>"
        },

        "world_querySelectorByTag": {
            define: {
                init: function () {
                    this.setOutput(true, "Box3Entity");
                    this.appendDummyInput()
                        .appendField("获取标签为")
                        .appendField(new Blockly.FieldTextInput(), "value")
                        .appendField("的一个实体");
                    this.setTooltip("搜索标签为特定值的第一个实体");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const v = block.getFieldValue("value");
                return [`world.querySelector('.${v}')`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "world_querySelectorByAllTag": {
            define: {
                init: function () {
                    this.setOutput(true, "Box3Entity");
                    this.appendDummyInput()
                        .appendField("获取标签为")
                        .appendField(new Blockly.FieldTextInput(), "value")
                        .appendField("的所有实体");
                    this.setTooltip("搜索标签为特定值的所有实体");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const v = block.getFieldValue("value");
                return [`world.querySelectorAll('.${v}')`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "world_querySelectorById": {
            define: {
                init: function () {
                    this.setOutput(true, "Box3Entity");
                    this.appendDummyInput()
                        .appendField("获取ID为")
                        .appendField(new Blockly.FieldTextInput(), "value")
                        .appendField("的一个实体");
                    this.setTooltip("搜索ID为特定值的第一个实体");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const v = block.getFieldValue("value");
                return [`world.querySelector('#${v}')`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "world_querySelectorByAllId": {
            define: {
                init: function () {
                    this.setOutput(true, "Box3Entity");
                    this.appendDummyInput()
                        .appendField("获取ID为")
                        .appendField(new Blockly.FieldTextInput(), "value")
                        .appendField("的所有实体");
                    this.setTooltip("搜索ID为特定值的所有实体");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const v = block.getFieldValue("value");
                return [`world.querySelectorAll('#${v}')`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "tick": {
            define: {
                init: function() {
                    this.setOutput(true, "Number");
                    this.appendDummyInput()
                        .appendField("获取世界的tick计数");
                    this.setStyle("world_blocks");
                    this.setTooltip("Box3世界运行的tick计数");
                }
            },
            code: function() {
                return ['world.currentTick', Blockly.JavaScript.ORDER_ATOMIC];
            },
            xmlBefore: "<label text=\"世界数据\"></label>"
        },

        "entityQuota": {
            define: {
                init: function() {
                    this.setOutput(true, "Number");
                    this.appendDummyInput()
                        .appendField("获取当前仍可创建的实体数量");
                    this.setStyle("world_blocks");
                    this.setTooltip("返回脚本当前仍可创建的实体数量");
                }
            },
            code: function() {
                return ['world.entityQuota()', Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "project_name": {
            define: {
                init: function() {
                    this.setOutput(true, "Number");
                    this.appendDummyInput()
                        .appendField("获取地图名称");
                    this.setStyle("world_blocks");
                    this.setTooltip("获取地图的名称（只读）");
                }
            },
            code: function() {
                return ['world.projectName', Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "position": {
            define: {
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
            },
            code: function() {
                const x = block.getFieldValue("x");
                const y = block.getFieldValue("y");
                const z = block.getFieldValue("z");
                return [`new Box3Vector3(${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "gravity": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("设置世界的地心引力数值为")
                        .appendField(new Blockly.FieldNumber(), "value");
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                    this.setTooltip("设置世界的地心引力数值 对应编辑器菜单 [场景-物理-地心引力] 控件属性");
                    this.setStyle("world_blocks");
                }
            },
            code: function(block) {
                const value = block.getFieldValue("value");
                return `world.gravity = ${value};\n`;
            },
            xmlBefore: "<label text=\"世界物理\"></label>"
        },

        "airFriction": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("设置世界的速度阻尼数值为")
                        .appendField(new Blockly.FieldNumber(), "value");
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                    this.setTooltip("设置世界的速度阻尼数值 对应编辑器菜单 [场景-物理-速度阻尼] 控件属性");
                    this.setStyle("world_blocks");
                }
            },
            code: function(block) {
                const value = block.getFieldValue("value");
                return `world.gravity = ${value};\n`;
            },
        },

        "removecol": {
            define: {
                init: function() {
                    this.appendValueInput("value")
                    .appendField("开启")
                    .setCheck("TouchBox3Entity");
                    this.appendValueInput("value2")
                    .appendField("和")
                    .setCheck("TouchBox3Entity");
                    this.appendDummyInput()
                        .appendField("的碰撞箱");
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                    this.setTooltip("开启两类实体的碰撞箱");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const v = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
                const v2 = Blockly.JavaScript.valueToCode(block, "value2", Blockly.JavaScript.ORDER_ATOMIC);
                return `world.removeCollisionFilter('${v}', '${v2}');\n`
            },
        },

        "addcol": {
            define: {
                init: function() {
                    this.appendValueInput("value")
                    .appendField("关闭")
                    .setCheck("TouchBox3Entity");
                    this.appendValueInput("value2")
                    .appendField("和")
                    .setCheck("TouchBox3Entity");
                    this.appendDummyInput()
                        .appendField("的碰撞箱");
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                    this.setTooltip("关闭两类实体的碰撞箱");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const v = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
                const v2 = Blockly.JavaScript.valueToCode(block, "value2", Blockly.JavaScript.ORDER_ATOMIC);
                return `world.addCollisionFilter('${v}', '${v2}');\n`
            },
        },

        "removeallcol": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField('清除全部碰撞过滤器');
                    this.setPreviousStatement(true);
                    this.setNextStatement(true);
                    this.setColour('#CD59E1');
                    this.setTooltip("清除全部碰撞过滤器");
                }
            },
            code: function() {
                return `world.clearCollisionFilters();\n`;
            },
        },

        "col_player": {
            define: {
                init: function() {
                    this.setOutput(true, "TouchBox3Entity");
                    this.appendDummyInput("value")
                        .appendField("碰撞箱参数：玩家");
                    this.setTooltip("碰撞箱的一个参数：玩家");
                    this.setColour('#CD59E1');
                }
            },
            code: function() {
                return ["player", Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "col_class": {
            define: {
                init: function() {
                    this.setOutput(true, "TouchBox3Entity");
                    this.appendDummyInput("value")
                        .appendField("碰撞箱参数：带有")
                        .appendField(new Blockly.FieldTextInput(), "value")
                        .appendField("标签的实体");
                    this.setTooltip("碰撞箱的一个参数：带有某个标签的实体");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const value = block.getFieldValue("value");
                return [`.${value}`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },

        "col_id": {
            define: {
                init: function() {
                    this.setOutput(true, "TouchBox3Entity");
                    this.appendDummyInput('value')
                        .appendField("碰撞箱参数：带有")
                        .appendField(new Blockly.FieldTextInput(), "value")
                        .appendField("id的实体");
                    this.setTooltip("碰撞箱的一个参数：带有某个id的实体");
                    this.setColour('#CD59E1');
                }
            },
            code: function(block) {
                const value = block.getFieldValue("value");
                return [`#${value}`, Blockly.JavaScript.ORDER_ATOMIC];
            },
        },
        "raycast": {
            define: {
                init: function() {
                    this.appendDummyInput()
                        .appendField("射线检测");
                    this.appendValueInput("origin")
                        .setCheck("Box3Vector3")
                        .appendField("起点");
                    this.appendValueInput("direction")
                        .setCheck("Box3Vector3")
                        .appendField("方向");
                    this.setOutput(true, "raycastResult");
                    this.setStyle("world_blocks");
                    this.setTooltip("射线检测，从原点位置向方向投射一条隐形的射线，返回碰到的实体或方块。");
                    this.setHelpUrl("https://docs.box3.codemao.cn/box3world.html#worldraycast");
                }
            },
            code: function(block) {
                var origin = Blockly.JavaScript.valueToCode(block, 'origin', Blockly.JavaScript.ORDER_ATOMIC);
                var direction = Blockly.JavaScript.valueToCode(block, 'direction', Blockly.JavaScript.ORDER_ATOMIC);
                return `world.raycast(${origin}, ${direction})`;
            }
        },
        "raycastResult": {
            define: {
                init: function() {
                    this.appendValueInput("raycastResult")
                        .setCheck("raycastResult")
                        .appendField("射线检测结果解析")
                        .appendField(new Blockly.FieldDropdown([
                            ["方向", "direction"],
                            ["距离", "distance"],
                            ["击中目标", "hit"],
                            ["击中的实体", "hitEntity"],
                            ["击中的位置", "hitPosition"],
                            ["击中的方块id", "hitVoxel"],
                            ["击中平面的法向量", "normal"],
                            ["起点", "origin"],
                            ["击中方块的网格坐标", "voxelIndex"]
                        ]), "choose");
                    this.setOutput(true, null);
                    this.setStyle("world_blocks");
                    this.setTooltip("射线检测(raycast)的结果，包含射线和所击中目标的信息。");
                    this.setHelpUrl("https://docs.box3.codemao.cn/box3raycastresult.html#class-box3raycastresult");
                }
            },
            code: function() {
                var choose = block.getFieldValue('choose');
                var raycastresult = Blockly.JavaScript.valueToCode(block, 'raycastResult', Blockly.JavaScript.ORDER_ATOMIC);
                return `${raycastresult}.${choose}`;
            }
        },
    }
}
