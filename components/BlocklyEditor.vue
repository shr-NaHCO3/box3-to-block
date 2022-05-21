<!--
Blockly 编辑器
-->
<template>
  <div>
    <div ref="blocklyWarp"/>
    <CustomBlocklyDialogs/>
    <v-dialog v-model="loading" width="300">
      <v-card color="primary" dark>
        <v-card-text>
          {{ loadingText }}
          <v-progress-linear indeterminate color="white"></v-progress-linear>
        </v-card-text>

      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Blockly from 'blockly';
import CustomBlocklyDialogs from "@/components/CustomBlocklyDialogs";
import '@blockly/block-plus-minus';
import "../assets/blocklyEditor/blocksDefine";
// import "../assets/blocklyEditor/blocksCode";
import initBlocks from "../assets/blocklyEditor/blocks/index"
import lang from '../assets/blocklyEditor/msg/zhHans';
import {DisableTopBlocks} from '@blockly/disable-top-blocks';
import "../assets/blocklyEditor/theme";
// import axios from "axios";
import "../assets/blocklyEditor/BlocklyRender";

export default {
  name: "BlocklyEditor",
  components: {
    CustomBlocklyDialogs
  },
  data: () => ({
    loading: true,
    loadingText: "...",
    code: ""
  }),
  async mounted() {

  },
  methods: {
    async init(){
      const toolboxXmlString = await initBlocks();
      this.loadingText = "正在获取积木信息";
      // const toolbox = (await axios.get('/blocklyToolbox.xml')).data;
      Blockly.setLocale(lang);

      this.loadingText = "正在创建编辑器";
      // noinspection SpellCheckingInspection
      this.workspace = Blockly.inject(this.$refs.blocklyWarp, {
        renderer: "custom_renderer",// "zelos",
        media: "/media/",
        toolbox: toolboxXmlString,
        theme: "box3",
        zoom:
          {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 3,
            minScale: 0.3,
            scaleSpeed: 1.2,
            pinch: true
          },
        grid:
          {
            spacing: 20,
            length: 20,
            colour: '#ECF4FF',
            snap: true
          },
      });
      const resize = () => {
        try {
          this.$refs.blocklyWarp.style.height = (window.innerHeight - 48) + "px";
          this.$refs.blocklyWarp.style.width = window.innerWidth + "px";
          Blockly.svgResize(this.workspace);
        } catch (e) {
        }
      }
      resize()
      window.addEventListener("resize", () => {
        resize()
      });
      this.loadingText = "即将完成...";
      this.workspace.addChangeListener(Blockly.Events.disableOrphans);
      const disableTopBlocksPlugin = new DisableTopBlocks();
      disableTopBlocksPlugin.init();
      this.workspace.addChangeListener(() => {
        this.code = this.getCode()
        this.$emit("change", this.code);

      });
      this.loading = false;
    },
    getCode() {
      // noinspection JSUnresolvedVariable
      const codeSrc = Blockly.JavaScript.workspaceToCode(this.workspace) || "// Empty";
      return "// [BVP宏] 自动应用于带有'use_demo'标签的实体\n" +
        // "world.onTick(()=>{\n" +
        // "const __self=world.querySelector('.use_demo');\n" +
        // "if(!__self)return;\n" +
        // "__self.removeTag('use_demo');\n" +
        // "\n/**************/\n" +
        // codeSrc +
        // "\n/**************/\n" +
        // "});\n" +
        "const __self = world.querySelector('.use_demo');\n" +
        "__self.enableInteract = true;\n" +
        codeSrc;
    },
    getXmlText() {
      return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(this.workspace))
    },
    loadXmlText(t) {
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(t), this.workspace);
    }
  }

}
</script>

<style scoped>

</style>
