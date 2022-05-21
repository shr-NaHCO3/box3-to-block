// noinspection JSUnresolvedVariable

import * as Blockly from 'blockly';

Blockly.JavaScript['random_execute'] = function (block) {
  const value = block.getFieldValue("value");
  const content = Blockly.JavaScript.statementToCode(block, 'content');
  return `if (Math.random() <= ${value / 100}) {\n${content}\n}`;
};

Blockly.JavaScript['sleep'] = function (block) {
  const value = block.getFieldValue("value");
  return `await sleep(${value});`;
}
