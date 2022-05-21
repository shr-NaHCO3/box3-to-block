import Blockly from "blockly";
import _tools from "./_tools";

export default {
  label: "玩家",
  blocks: {
    textDialog: {
      define: {
        init: function() {
          this.appendValueInput("entity").appendField("设置实体");
          this.appendValueInput("title").appendField("标题");
          this.appendValueInput("content").appendField("正文");
          this.appendValueInput("titleBackgroundColor").appendField(
            "标题的背景颜色"
          );
          this.appendValueInput("contentBackgroundColor").appendField(
            "正文的背景颜色"
          );
          this.appendValueInput("titleTextColor").appendField("标题的颜色");
          this.appendValueInput("contentTextColor").appendField("正文的颜色");
          this.appendValueInput("hasArrow").appendField("箭头提示");
          this.setStyle("player_blocks");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
        }
      },
      code: function(block) {
        const attrs = [
          "title",
          "content",
          "titleBackgroundColor",
          "contentBackgroundColor",
          "titleTextColor",
          "contentTextColor",
          "hasArrow"
        ];
        const values = _tools.valuesToCodes(block, ["entity", ...attrs]);
        return `${values.entity}.player.dialog({${attrs
          .map(attr => `${attr}: ${values[attr]}`)
          .join(",\n")}})`;

      }
    },
    inputDialog: {
      define: {
        init: function() {
          this.appendValueInput("entity").appendField("设置实体");
          this.appendValueInput("title").appendField("标题");
          this.appendValueInput("content").appendField("正文");
          this.appendValueInput("Tbackgroud").appendField(
            "标题的背景颜色(选填)(RGBA颜色)"
          );
          this.appendValueInput("Cbackgroud").appendField(
            "正文的背景颜色(选填)(RGBA颜色)"
          );
          this.appendValueInput("T").appendField("标题的颜色(选填)(RGBA颜色)");
          this.appendValueInput("C").appendField("正文的颜色(选填)(RGBA颜色)");
          this.appendValueInput("confirmText").appendField(
            "确认按钮显示的文本(选填)"
          );
          this.appendValueInput("placeholder").appendField(
            "在输入框背景显示的提示文字(选填)"
          );
          this.setStyle("player_blocks");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
        }
      },
      code: function(block) {
        var defaul = `${Blockly.JavaScript.valueToCode(
          block,
          "entity",
          Blockly.JavaScript.ORDER_ATOMIC
        )}.player.dialog({
                    type:"select",
                    title:${
                      Blockly.JavaScript.valueToCode(
                        block,
                        "title",
                        Blockly.JavaScript.ORDER_ATOMIC
                      ) == ""
                        ? ""
                        : Blockly.JavaScript.valueToCode(
                            block,
                            "title",
                            Blockly.JavaScript.ORDER_ATOMIC
                          )
                    },
                    content:${
                      Blockly.JavaScript.valueToCode(
                        block,
                        "content",
                        Blockly.JavaScript.ORDER_ATOMIC
                      ) == ""
                        ? ""
                        : Blockly.JavaScript.valueToCode(
                            block,
                            "content",
                            Blockly.JavaScript.ORDER_ATOMIC
                          )
                    },
                `;
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "T",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\ttitleTextColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "T",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "C",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\tcontentTextColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "C",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "Tbackgroud",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\ttitleBackgroundColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "Tbackgroud",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "Cbackgroud",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\tcontentBackgroundColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "Cbackgroud",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "confirmText",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\tconfirmText:" +
            Blockly.JavaScript.valueToCode(
              block,
              "confirmText",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "placeholder",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\tplaceholder:" +
            Blockly.JavaScript.valueToCode(
              block,
              "placeholder",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        //add("Tbackgroud","titleBackgroundColor")
        //add("Cbackgroud","contentBackgroundColor")
        //add("T","titleTextColor")
        //add("C","contentTextColor")

        defaul += "})";
        return defaul;
      }
    },
    player_dialog_select: {
      define: {
        init: function() {
          this.appendValueInput("entity").appendField("设置实体");
          this.appendValueInput("title").appendField("标题");
          this.appendValueInput("content").appendField("正文");
          this.appendValueInput("options")
            .appendField("正文")
            .setCheck("Array");
          this.appendValueInput("Tbackgroud").appendField(
            "标题的背景颜色(选填)(RGBA颜色)"
          );
          this.appendValueInput("Cbackgroud").appendField(
            "正文的背景颜色(选填)(RGBA颜色)"
          );
          this.appendValueInput("T").appendField("标题的颜色(选填)(RGBA颜色)");
          this.appendValueInput("C").appendField("正文的颜色(选填)(RGBA颜色)");
          this.setStyle("player_blocks");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
        }
      },
      code: function(block) {
        var defaul = `${Blockly.JavaScript.valueToCode(
          block,
          "entity",
          Blockly.JavaScript.ORDER_ATOMIC
        )}.player.dialog({
                    type:"select",
                    title:${
                      Blockly.JavaScript.valueToCode(
                        block,
                        "title",
                        Blockly.JavaScript.ORDER_ATOMIC
                      ) == ""
                        ? ""
                        : Blockly.JavaScript.valueToCode(
                            block,
                            "title",
                            Blockly.JavaScript.ORDER_ATOMIC
                          )
                    },
                    content:${
                      Blockly.JavaScript.valueToCode(
                        block,
                        "content",
                        Blockly.JavaScript.ORDER_ATOMIC
                      ) == ""
                        ? ""
                        : Blockly.JavaScript.valueToCode(
                            block,
                            "content",
                            Blockly.JavaScript.ORDER_ATOMIC
                          )
                    },
                    options:${
                      Blockly.JavaScript.valueToCode(
                        block,
                        "options",
                        Blockly.JavaScript.ORDER_ATOMIC
                      ) == ""
                        ? "[]"
                        : Blockly.JavaScript.valueToCode(
                            block,
                            "options",
                            Blockly.JavaScript.ORDER_ATOMIC
                          )
                    },
                `;
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "T",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\ttitleTextColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "T",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "C",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\tcontentTextColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "C",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "Tbackgroud",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\ttitleBackgroundColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "Tbackgroud",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        if (
          Blockly.JavaScript.valueToCode(
            block,
            "Cbackgroud",
            Blockly.JavaScript.ORDER_ATOMIC
          ) != ""
        ) {
          defaul +=
            "\tcontentBackgroundColor:" +
            Blockly.JavaScript.valueToCode(
              block,
              "Cbackgroud",
              Blockly.JavaScript.ORDER_ATOMIC
            ) +
            ",\n";
        }
        defaul += "})";
        return defaul;
      }
    },
    player_name_get: {
      define: {
        init: function() {
          this.appendValueInput("ENTITY")
            .setCheck("Box3Entity")
            .appendField("获取玩家");
          this.appendDummyInput().appendField("的名字");
          this.setOutput(true, "String");
          this.setTooltip("获取玩家名字");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.player.name`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_boxid_get: {
      define: {
        init: function() {
          this.appendValueInput("ENTITY")
            .setCheck("Box3Entity")
            .appendField("获取玩家");
          this.appendDummyInput().appendField("的box-id");
          this.setOutput(true, "String");
          this.setTooltip("获取玩家box-id(游客的box-id为空)");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.player.boxId`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_userKey_get: {
      define: {
        init: function() {
          this.appendValueInput("ENTITY")
            .setCheck("Box3Entity")
            .appendField("获取玩家");
          this.appendDummyInput().appendField("的唯一识别码");
          this.setOutput(true, "String");
          this.setTooltip("获取玩家唯一识别码,16字符(游客的userKey为空)");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.player.userKey`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_spawn_point_get: {
      define: {
        init: function() {
          this.appendValueInput("ENTITY")
            .setCheck("Box3Entity")
            .appendField("获取玩家");
          this.appendDummyInput().appendField("的出生点");
          this.setOutput(true, "Box3Vector3");
          this.setTooltip("玩家的出生点");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.player.spawnPoin`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_movement_bounds_get: {
      define: {
        init: function() {
          this.appendValueInput("ENTITY")
            .setCheck("Box3Entity")
            .appendField("获取玩家");
          this.appendDummyInput().appendField("的出生点");
          this.setOutput(true, "Box3Vector3");
          this.setTooltip("玩家的活动范围限制");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.player.movementBounds`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_get_wearable: {
      define: {
        init: function() {
          this.appendValueInput("entity")
            .setCheck("Box3Entity")
            .appendField("获取玩家");
          this.appendDummyInput().appendField("的所有穿戴(列表)");
          this.setOutput(true, "Array");
          this.setTooltip("移除玩家的穿戴");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.player.wearables()`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_remove_wearable: {
      define: {
        init: function() {
          this.appendValueInput("wear").appendField("移除穿戴");
          this.setTooltip("移除玩家的穿戴");
          this.setStyle("player_blocks");
        }
      },
      code: function(block) {
        var e = Blockly.JavaScript.valueToCode(
          block,
          "ENTITY",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        return [`${e}.remove()`, Blockly.JavaScript.ORDER_NONE];
      }
    },
    player_add_wearable: {
      define: {
        init: function() {
          this.appendValueInput("entity")
            .setCheck("Box3Entity")
            .appendField("添加玩家");
          this.appendDummyInput().appendField("穿戴");
          this.appendValueInput("mash")
            .setCheck("String")
            .appendField("皮肤");
          this.appendValueInput("pos")
            .setCheck("Box3BodyPart")
            .appendField("位置(选填)");
          this.appendValueInput("ori")
            .setCheck("Box3Quaternion")
            .appendField("旋转角度(选填)");
          this.appendValueInput("scale")
            .setCheck("Box3Vector3")
            .appendField("缩放(选填)");
          this.appendValueInput("offset")
            .setCheck("Box3Vector3")
            .appendField("偏移(选填)");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
          this.setTooltip("玩家身体部位穿戴配件物");
          this.setStyle("entity_blocks");
        }
      },
      code: function(block) {
        var value_entity = Blockly.JavaScript.valueToCode(
          block,
          "entity",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        var value_mash = Blockly.JavaScript.valueToCode(
          block,
          "mash",
          Blockly.JavaScript.ORDER_ATOMIC
        );
        var value_pos =
          Blockly.JavaScript.valueToCode(
            block,
            "pos",
            Blockly.JavaScript.ORDER_ATOMIC
          ) || "Box3BodyPart.HEAD";
        var value_ori =
          Blockly.JavaScript.valueToCode(
            block,
            "ori",
            Blockly.JavaScript.ORDER_ATOMIC
          ) || "new Box3Quaternion(0, 1, 0, 0)";
        var value_scale =
          Blockly.JavaScript.valueToCode(
            block,
            "scale",
            Blockly.JavaScript.ORDER_ATOMIC
          ) || "new Box3Vector3(1, 1, 1)";
        var value_offset =
          Blockly.JavaScript.valueToCode(
            block,
            "offset",
            Blockly.JavaScript.ORDER_ATOMIC
          ) || "new Box3Vector3(0, 0, 0)";
        var code =
          `${value_entity}.player.addWearable({
                    bodyPart: ${value_pos},
                    mesh: ${value_mash},
                    orientation: ${value_ori},
                    scale: ${value_scale},
                    offset: ${value_offset},
                });` + "\n";
        return code;
      }
    }
  }
};
