import Blockly from "blockly";
import _tools from "./_tools";

export default {
  label: "实体",
  blocks: {
    setParticle: {
      define: {
        init: function() {
          this.appendValueInput("Box3Entity")
            .setCheck("Box3Entity")
            .appendField("设置实体");
          this.appendDummyInput().appendField("的粒子特效：");

          this.appendValueInput("particleRate")
            .setCheck("Number")
            .appendField("每秒粒子数量");
          this.appendValueInput("particleRateSpread")
            .setCheck("Number")
            .appendField("每秒粒子数量随机性");
          this.appendValueInput("particleLimit")
            .setCheck("Number")
            .appendField("可产生粒子数上限");
          this.appendValueInput("particleLifetime")
            .setCheck("Number")
            .appendField("粒子存活时间");
          this.appendValueInput("particleLifetimeSpread")
            .setCheck("Number")
            .appendField("粒子存活时间随机性");
          this.appendValueInput("particleVelocity")
            .setCheck("Box3Vector3")
            .appendField("粒子初始速度");
          this.appendValueInput("particleAcceleration")
            .setCheck("Box3Vector3")
            .appendField("粒子加速度");

          this.setPreviousStatement(true);
          this.setNextStatement(true);

          this.setStyle("entity_blocks");
          this.setTooltip("实体");
          this.setInputsInline(false);
        }
      },
      code: function(block) {
        const values = _tools.valuesToCodes(block, [
          "entity",
          "particleRate",
          "particleRateSpread",
          "particleLimit",
          "particleLifetime",
          "particleLifetimeSpread",
          "particleVelocity",
          "particleAcceleration"
        ]);

        return `${values.entity}.particleRate = ${values.particleRate};\n\
${values.entity}.particleRateSpread = ${values.particleRateSpread};\n\
${values.entity}.particleLimit = ${values.particleLimit};\n\
${values.entity}.particleLifetime = ${values.particleLifetime};\n\
${values.entity}.particleLifetimeSpread = ${values.particleLifetimeSpread};\n\
${values.entity}.particleVelocity = ${values.particleVelocity};\n\
${values.entity}.particleAcceleration = ${values.particleAcceleration};\n`;
      },
      xmlContent: `
      <value name="Box3Entity"><shadow type="event_entity"></shadow></value>
      ${_tools.numberValueShadow([
        ["particleRate", 100],
        ["particleRateSpread", 0],
        ["particleLimit", 500],
        ["particleLifetime", 5],
        ["particleLifetimeSpread", 0]
      ])}
        <value name="particleVelocity">
        <shadow type="attributes_Box3Vector3">
        <value name="x"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="y"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        <value name="z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        </shadow>
        </value>
        <value name="particleAcceleration">
        <shadow type="attributes_Box3Vector3">
        <value name="x"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="y"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="z"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        </shadow>
        </value>
      `
    }
  }
};
