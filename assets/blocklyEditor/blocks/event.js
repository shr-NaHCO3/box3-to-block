// noinspection JSUnresolvedVariable,HtmlUnknownAttribute

import Blockly from "blockly";

export default {
  label: "事件",
  blocks: {
    "when_run": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当开始运行时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当开始运行时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `(async () => {\n${statements_content}\n})();\n`;
      },
      xmlBefore: "<label text=\"Box3事件\"></label>"
    },

    "event_exit": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField("结束事件");
          this.setPreviousStatement(true);
          this.setNextStatement(false);
          this.setTooltip("结束该事件（仅在事件模块内使用）");
          this.setStyle("event_blocks");
        }
      },
      code: function () {
        return `return;\n`;
      }
    },

    "playerJoin": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当玩家进入游戏时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当玩家进入游戏时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onPlayerJoin(async ({ entity }) => {\n${statements_content}\n});\n`;
      }
    },

    "playerLeave": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当玩家离开游戏时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当玩家离开游戏时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onplayerLeave(async ({ entity }) => {\n${statements_content}\n});\n`;
      }
    },

    "tick": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当触发tick时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("每当Box3世界运行1个tick时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onTick(async () => {\n${statements_content}\n});\n`;
      }
    },

    "chat": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当玩家在聊天区说话时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当玩家在聊天区说话时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onChat(async ({ entity, message }) => {\n${statements_content}\n});\n`;
      }
    },

    "press": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        const value_button = Blockly.JavaScript.valueToCode(block, 'button', Blockly.JavaScript.ORDER_ATOMIC);
        return `world.onPress(async ({ entity, button }) => {\nif (button == ${value_button}) {\n${statements_content}\n}\n});\n`;
      }
    },

    "release": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const value_button = Blockly.JavaScript.valueToCode(block, 'button', Blockly.JavaScript.ORDER_ATOMIC);
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onRelease(async ({ entity, button }) => {\nif (button == ${value_button}) {\n${statements_content}\n}\n});\n`;
      }
    },

    "interact": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `${value_entity}.onInteract(async ({ entity }) => {\n${statements_content}\n});\n`;
      }
    },

    "taked": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体受到伤害时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体受到伤害时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onTakeDamage(async ({ entity, attacker }) => {\n${statements_content}\n});\n`;
      }
    },

    "die": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体死亡时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体死亡时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onDie(async ({ entity, attacker }) => {\n${statements_content}\n});\n`;
      }
    },

    "respawn": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当玩家重生时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当玩家重生时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onRespawn(async ({ entity }) => {\n${statements_content}\n});\n`;
      }
    },

    "entityContact": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `${value_entity}.onEntityContact(async ({ other }) => {\n${statements_content}\n});\n`;
      }
    },

    "entitySeparate": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `${value_entity}.onEntitySeparate(async ({ other }) => {\n${statements_content}\n});\n`;
      }
    },

    "click": {
      define: {
        init: function () {
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
      },
      code: function (block) {
        const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `${value_entity}.onClick(async ({ clicker }) => {\n${statements_content}\n});\n`;
      }
    },
    
    "voxelContact": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体触碰方块时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体触碰方块时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onVoxelContact(async ({ entity, voxel, x, y, z }) => {\n${statements_content}\n});\n`;
      }
    },

    "EntityCreate": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体被创建时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体被创建时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onEntityCreate(({ entity }) => {\n${statements_content}\n});\n`;
      }
    },

    "EntityDestroy": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体被销毁时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体被销毁时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onEntityDestroy(({ entity }) => {\n${statements_content}\n});\n`;
      }
    },

    "voxelSeparate": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体结束触碰方块时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体结束触碰方块时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onVoxelSeparate(async ({ entity, voxel, x, y, z }) => {\n${statements_content}\n});\n`;
      }
    },

    "fluidEnter": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体进入液体时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体进入液体时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onFluidEnter(async ({ entity, voxel }) => {\n${statements_content}\n});\n`;
      }
    },

    "fluidLeave": {
      define: {
        init: function () {
          this.appendDummyInput()
            .appendField('当实体离开液体时');
          this.appendStatementInput("content")
            .setCheck(null)
            .appendField('执行');
          this.setStyle("event_blocks");
          this.setTooltip("当实体离开液体时触发");
        }
      },
      code: function (block) {
        const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
        return `world.onFluidLeave(async ({ entity, voxel }) => {\n${statements_content}\n});\n`;
      }
    },
  }
}
