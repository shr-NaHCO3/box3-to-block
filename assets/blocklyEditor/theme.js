/**
 * @module 主题颜色
 * @author AlanBest
 */
import * as Blockly from "blockly";

try {
  // noinspection JSUnusedLocalSymbols
  const theme = new Blockly.Theme(
    "box3",
    {
      colour_blocks: {
        colourPrimary: "20"
      },
      list_blocks: {
        colourPrimary: "#F9CC37",
        colourTertiary: "#C4A12B"
      },
      logic_blocks: {
        colourPrimary: "#68CDFF",
        colourTertiary: "#53A2C9"
      },
      db_blocks:{
        colourPrimary: "	#FF1493",
        colourTertiary: "	#DDA0DD"
      },
      loop_blocks: {
        colourPrimary: "#68CDFF",
        colourTertiary: "#53A2C9"
      },
      math_blocks: {
        colourPrimary: "#A073FF",
        colourTertiary: "#7E5BC9"
      },
      procedure_blocks: {
        colourPrimary: "#5574F8",
        colourTertiary: "#4259C2"
      },
      text_blocks: {
        colourPrimary: "#F88767",
        colourTertiary: "#E17A5D"
      },
      variable_blocks: {
        colourPrimary: "#E04852",
        colourTertiary: "#AB373E"
      },
      variable_dynamic_blocks: {
        colourPrimary: "310"
      },
      hat_blocks: {
        colourPrimary: "330",
        hat: "cap"
      },
      world_blocks: {
        colourPrimary: "#CD59E1",
        colourTertiary: "#C71ECE"
      },
      event_blocks: {
        colourPrimary: "#6DACFF",
        colourTertiary: "#5C7DEC"
      },
      block_blocks: {
        colourPrimary: "#ffa0a0",
        colourTertiary: "#ffa0a0"
      },
      color_blocks: {
        colourPrimary: "#FF6E40",
        colourTertiary: "#CC5733"
      },
      sjs_blocks: {
        colourPrimary: "#8647F3",
        colourTertiary: "#6837BD"
      },
      debug_blocks: {
        colourPrimary: "#8DD260",
        colourTertiary: "#71A74D"
      },
      adv_blocks: {
        colourPrimary: "#5574F8",
        colourTertiary: "#4259C2"
      },
      player_blocks: {
        colourPrimary: "#FF4081",
        colourTertiary: "#F2006A"
      },
      entity_blocks: {
        colourPrimary: "#59B292",
        colourTertiary: "#4B967B"
      },
      attributes_blocks: {
        colourPrimary: "#00a3bd",
        colourTertiary: "#4B967B"
      },
      web_blocks: {
        colourPrimary: "#CD59E1",
        colourTertiary: "#C71ECE"
      }
    },
    {
      event_category: {
        colour: "#6DACFF"
      },
      list_category: {
        colour: "#F9CC37"
      },
      logic_category: {
        colour: "#68CDFF"
      },
      world_category: {
        colour: "#CD59E1"
      },
      loop_category: {
        colour: "120"
      },
      math_category: {
        colour: "#A073FF"
      },
      procedure_category: {
        colour: "#5574F8"
      },
      text_category: {
        colour: "#F88767"
      },
      variable_category: {
        colour: "#E04852"
      },
      variable_dynamic_category: {
        colour: "310"
      },
      gui_category: {
        colour: "#2BC9A7"
      },
      attributes_category: {
        colour: "#00a3bd"
      },
      player_category: {
        colour: "#FF4081"
      },
      entity_category: {
        colour: "#59B292"
      },
      web_category: {
        colour: "#CD59E1",
      },
      db_category:{
        colour:"#FF1493",
      },
      weather_category: {
        colour: "#485283",
      }
    },
    {
      workspaceBackgroundColour: "#F5F9FF"
    }
  );
} catch (e) {
}
