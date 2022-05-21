// noinspection JSUnresolvedVariable

import Blockly from 'blockly';

Blockly.JavaScript['event_playerJoin'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onPlayerJoin(async ({ entity }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_playerLeave'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onPlayerLeave(async ({ entity }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_tick'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onTick(async () => {\n${statements_content}\n});`
}

Blockly.JavaScript['event_chat'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onChat(async ({ entity, message }) => {\n${statements_content}\n});`
}

Blockly.JavaScript['event_press'] = function(block) {
  const value_button = Blockly.JavaScript.valueToCode(block, 'button', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');

  return `world.onPress(async ({ entity, button }) => {\nif (button == ${value_button}) {\n${statements_content}\n}\n});\n`;
}

Blockly.JavaScript['event_release'] = function(block) {
  const value_button = Blockly.JavaScript.valueToCode(block, 'button', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');

  return `world.onRelease(async ({ entity, button }) => {\nif (button == ${value_button}) {\n${statements_content}\n}\n});\n`;
}

Blockly.JavaScript['event_interact'] = function(block) {
  const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `${value_entity}.onInteract(async ({ entity }) => {\n${statements_content}\n});\n`;
};

Blockly.JavaScript['event_taked'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onTakeDamage(async ({ entity, attacker }) => {\n${statements_content}\n});`;
}

Blockly.JavaScript['event_die'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onDie(async ({ entity, attacker }) => {\n${statements_content}\n});`;
}

Blockly.JavaScript['event_respawn'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onRespawn(async ({ entity }) => {\n${statements_content}\n});`;
}



Blockly.JavaScript['event_entityContact'] = function(block) {
  const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `${value_entity}.onEntityContact(async ({ other }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_entitySeparate'] = function(block) {
  const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `${value_entity}.onEntitySeparate(async ({ other }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_click'] = function(block) {
  const value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `${value_entity}.onClick(async ({ clicker }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_voxelContact'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onVoxelContact(async ({ entity, voxel, x, y, z }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_voxelSeparate'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onVoxelSeparate(async ({ entity, voxel, x, y, z }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_fluidEnter'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onFluidEnter(async ({ entity, voxel }) => {\n${statements_content}\n});\n`;
}

Blockly.JavaScript['event_fluidLeave'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `world.onFluidLeave(async ({ entity, voxel }) => {\n${statements_content}\n});\n`;
}



Blockly.JavaScript['when_run'] = function(block) {
  const statements_content = Blockly.JavaScript.statementToCode(block, 'content');
  return `(async () => {\n${statements_content}\n})();\n`;
}



Blockly.JavaScript['event_return'] = function() {
  return `return;\n`;
}

Blockly.JavaScript['event_entity'] = function() {
  return ['entity', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['event_self'] = function() {
  return ['__self', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['event_message'] = function() {
  return ['message', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['event_attacker'] = function() {
  return ['attacker', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['event_other'] = function() {
  return ['other', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['event_clicker'] = function() {
  return ['clicker', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['event_voxel'] = function() {
  return ['voxel', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['eventX'] = function() {
  return ['voxel', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['eventY'] = function() {
  return ['voxel', Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['eventZ'] = function() {
  return ['voxel', Blockly.JavaScript.ORDER_ATOMIC];
}
