import Blockly from "blockly";
/**
 * @module 积木开发辅助工具函数库
 */
export default {
  /**
   * @function 数字阴影积木(用于xmlContent)
   * @param array 参数数组, 格式: [valueName, 数字默认值]
   * @example
   * ```javascript
   * xmlContent: _tools.numberValueShadow(
   *   [
        ["particleRate", 100],
        ["particleRateSpread", 0],
        ["particleLimit", 500],
        ["particleLifetime", 5],
        ["particleLifetimeSpread", 0]
      ]
   * )
   * ```
   */
  numberValueShadow: array =>
    array
      .map(
        i =>
          `<value name="${i[0]}"><shadow type="math_number"><field name="NUM">${i[1]}</field></shadow></value>`
      )
      .join(""),
  /**
   * @function 快速生成`valueToCode`
   * @description 适用于ORDER_ATOMIC
   * @example
   * ```javascript
   * const values = _tools.valuesToCodes(block, [
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
   * ```
   */
  valuesToCodes: (block, array) => {
    let o = {};
    for (let id of array) {
      o[id] = Blockly.JavaScript.valueToCode(
        block,
        id,
        Blockly.JavaScript.ORDER_ATOMIC
      );
    }
    return o
  }
};
