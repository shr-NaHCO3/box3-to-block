import Blockly from 'blockly';

Blockly.JavaScript['world_say'] = function(block) {
  const value = Blockly.JavaScript.valueToCode(block, 'param', Blockly.JavaScript.ORDER_ATOMIC);
  return `world.say(${value});\n`;
}

Blockly.JavaScript['world_tick'] = function() {
  return ['world.currentTick', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['world_gravity'] = function(block) {
  const value = block.getFieldValue("value");
  return `world.gravity = ${value};\n`;
}

Blockly.JavaScript['world_airFriction'] = function(block) {
  const value = block.getFieldValue("value");
  return `world.airFriction = ${value};\n`;
}

Blockly.JavaScript['position'] = function(block) {
  const x = block.getFieldValue("x");
  const y = block.getFieldValue("y");
  const z = block.getFieldValue("z");
  return [`new Box3Vector3(${x}, ${y}, ${z})`, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['bgm'] = function(block) {
  const fileName = block.getFieldValue("value");
  return `world.ambientSound.sample = 'audio/${fileName}';\n`;
}


/* 
 * 通用属性
 */
// Blockly.JavaScript['world_querySelectorById'] = function(block) {
//   const eid = block.getFieldValue("value");
//   return [`world.querySelector('#${eid}')`, Blockly.JavaScript.ORDER_ATOMIC];
// }
Blockly.JavaScript['world_querySelectorById'] = function(block) {
  const v = block.getFieldValue("value");
  return [`world.querySelector('#${v}')`, Blockly.JavaScript.ORDER_ATOMIC];
}


// -------------------碰撞箱-------------------


Blockly.JavaScript['addcol'] = function(block) {
  const v = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
  const v2 = Blockly.JavaScript.valueToCode(block, "value2", Blockly.JavaScript.ORDER_ATOMIC);
  return `world.addCollisionFilter('${v}', '${v2}');\n`
}

Blockly.JavaScript['removecol'] = function(block) {
  const v = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
  const v2 = Blockly.JavaScript.valueToCode(block, "value2", Blockly.JavaScript.ORDER_ATOMIC);
  return `world.removeCollisionFilter('${v}', '${v2}');\n`
}

Blockly.JavaScript['removeallcol'] = function() {
  return `world.clearCollisionFilters();\n`;
}

Blockly.JavaScript['col_player'] = function() {
  return ["player", Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['col_class'] = function(block) {
  const v = block.getFieldValue("value");
  return [`.${v}`, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['col_id'] = function(block) {
  const v = block.getFieldValue("value");
  return [`#${v}`, Blockly.JavaScript.ORDER_ATOMIC];
}
