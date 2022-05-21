import Blockly from 'blockly';

// Blockly.JavaScript['player_directMessage'] = function(block) {
//   const entity = Blockly.JavaScript.valueToCode(block, 'player', Blockly.JavaScript.ORDER_ATOMIC);
//   const value = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
//   return `${entity}.player.directMessage("${value}")`;
// }

Blockly.JavaScript['player_muted'] = function(block){
    const v = Blockly.JavaScript.valueToCode(block, "value", Blockly.JavaScript.ORDER_ATOMIC);
    return `${v}.player.muted = true;\n`
}