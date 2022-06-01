<template>
  <div>

    <v-app-bar
      app
      color="primary"
      dark
      dense
      v-ripple
      v-show="!betaPasswordDialog"
      @click="eggClickCount++"
      >
      <v-btn @click="goHome(false)" icon>
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>
      <div class="d-flex align-center">
        <v-img src="/logo.png" aspect-ratio="1/1" :width="48" :height="48"></v-img>
      </div>
      <v-btn icon @click="saveScript">
        <v-icon>mdi-content-save</v-icon>
      </v-btn>
      <!--      <v-btn icon @click="openScript">-->
      <!--        <v-icon>mdi-folder</v-icon>-->
      <!--      </v-btn>-->
      <v-btn icon @click="copyCode">
        <v-icon>mdi-export-variant</v-icon>
      </v-btn>

      <v-spacer></v-spacer>

      <h6>脚本模式:{{ scriptMode }}</h6>
      <v-fab-transition>
        <div v-if="eggClickCount>=10">
          <v-btn rounded dark color="pink"
                 @click="eggColor=['green','red','cyan','purple','orange','white'][Math.floor(Math.random()*6)]">
            彩蛋
            <v-icon :color="eggColor">mdi-egg-easter</v-icon>
            X{{ eggClickCount }}
          </v-btn>
          <v-spacer/>
        </div>
      </v-fab-transition>
    </v-app-bar>

    <v-main :style="`opacity: ${!betaPasswordDialog?1:0}`">
      <BlocklyEditor ref="blocklyEditor" @change="editorChange"/>
      <div ref="codeViewWarp" class="code-view" v-show="true"/>
    </v-main>
    <v-dialog v-model="functionNotCompleteDialog" width="300">
      <v-card color="error" dark>
        <v-card-title>
          <v-icon>mdi-baby-face</v-icon>
          &nbsp;What??
        </v-card-title>
        <v-card-text>恭喜获得成就: 发现了一个没有做完的功能!</v-card-text>
        <v-card-actions>
          <v-btn text @click="functionNotCompleteDialog=false">
            <v-icon>mdi-close</v-icon>
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="betaPasswordDialog" width="450" persistent>
      <v-card color="primary" dark>
        <v-card-title>Hey!</v-card-title>
        <v-card-text>
          这是box-to-block 的内测版本, 你需要输入口令才能体验.<br/>
          另外, 在内测期间, 你可以通过<a target="_blank" style="color:#fff" href="https://jq.qq.com/?_wv=1027&k=k1CpCyXm">加入QQ群</a>来获得口令
          <v-text-field v-model="password" type="password" @keypress.enter="checkPassword"
                        placeholder="请在此处输入口令"></v-text-field>
          <v-btn text :disabled="!password" @click="checkPassword">
            <v-icon>mdi-lock-open-check</v-icon>
            尝试解锁
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="loading" width="450" persistent>
      <v-card color="primary" dark>
        <v-card-title>{{ loadingText }}</v-card-title>
        <v-card-text>
          <v-progress-linear indeterminate color="white"/>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-dialog v-model="notSaveDialog" width="450">
      <v-card>
        <v-card-title>未保存</v-card-title>
        <v-card-text>是否保存所做的更改?</v-card-text>
        <v-card-actions>
          <v-btn rounded text @click="saveScript();goHome()" color="primary">
            <v-icon>mdi-content-save</v-icon>
            保存
          </v-btn>
          <v-spacer/>
          <v-btn rounded text color="error" @click="goHome(true)">
            <v-icon>mdi-close</v-icon>
            放弃
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <textarea style="opacity: 0;position: absolute;top:-999px;left:-999px" ref="dummyInput"/>
    <input style="opacity: 0;position: absolute;top:-999px;left:-999px" type="file" ref="fileInput"/>
  </div>
</template>

<script>

// import UpdatesLog from "@/components/UpdatesLog";
import axios from "axios";
import BlocklyEditor from "@/components/BlocklyEditor";


export default {
  name: "Editor",

  components: {
    BlocklyEditor,
    // UpdatesLog,

  },

  data: () => ({
    functionNotCompleteDialog: false,
    aboutDialog: false,
    betaPasswordDialog: true,
    password: "",
    showCodeView: false,
    code: "",
    eggClickCount: 0,
    eggColor: null,
    scriptMode: "",
    loading: true,
    loadingText: "正在解析参数",
    notSaveDialog: false,
    notSave: false

  }),

  async mounted() {
    await this.$refs.blocklyEditor.init();
    if (localStorage.getItem('successBack') !== "true") {
      localStorage.setItem("successBack", "true");
      this.loadingText = "路径异常, 正在返回";
      setTimeout(() => {
        this.$router.replace("/")
      }, 1e3)
      return
    } else {
      localStorage.setItem("successBack", "false")
    }
    // 记忆内测密码
    if (localStorage.getItem("beta_password")) {
      this.password = localStorage.getItem("beta_password");
      this.checkPassword();
    }
    const query = this.$route.query;
    if (query.new) {
      if (query.new === "0") {
        this.scriptMode = "entityScript"
      } else if (query.new === "1") {
        this.scriptMode = "globalScript"
      }
      this.loading = false;
    } else if (query.open) {
      if (query.open === "file") {
        this.loadingText = "正在打开脚本";
        try {
          await this.openScript();
          this.loading = false;
        } catch (e) {
          this.loadingText = e;
        }
      } else if (query.open === "tempSave") {
        this.loadingText = "正在恢复脚本";
        this.$refs.blocklyEditor.loadXmlText(localStorage.getItem("tempSave"));
        this.loading = false;
      }
    } else if (query.template) {
      this.loadingText = "正在打开模板"
      axios.get(`/templates/${query.template}.bvps`).then(d => {
        this.$refs.blocklyEditor.loadXmlText(d.data)
        this.loading = false;
      }).catch(e => {
        this.loadingText = "模板加载失败: " + e;
        setTimeout(() => {
          this.$router.replace("/")
        }, 1e3)
      })
    }


    // //暂时停用代码预览
    // this.codeEditor = Monaco.editor.create(this.$refs.codeViewWarp, {
    //   readOnly: true,
    //   value: "// 此处将显示代码预览(拖放积木即可开始)",
    //   language: "javascript",
    //   minimap: {enabled: false}
    
    // });


  },

  methods: {
    editorChange(code) {
      this.code = code;
      localStorage.setItem("tempSave", this.$refs.blocklyEditor.getXmlText());
      this.notSave = true;
    },
    goHome(force = false) {
      if (this.notSave && !force) {
        this.notSaveDialog = true;
        return
      }

      localStorage.removeItem("tempSave")
      this.$router.push('/')
    },
    checkPassword() {
      if (this.password === "Alan_Best yyds!" || location.hostname === 'localhost') {
        localStorage.setItem("beta_password", this.password);
        this.betaPasswordDialog = false;
      } else {
        this.password = ""
      }
    },
    saveScript() {
      const link = document.createElement('a');
      link.download = "demo.bvps";
      const blob = new Blob([this.$refs.blocklyEditor.getXmlText()]);
      link.href = URL.createObjectURL(blob);
      document.body.appendChild(link)
      link.click();
      alert("保存成功, 请查看浏览器下载");
      this.notSave = false;
      this.notSaveDialog = false;
    },
    openScript() {
      // if (!confirm("确定读取? 原有内容将会被覆盖!")) return;
      return new Promise(ok => {
        this.$refs.fileInput.click();
        this.$refs.fileInput.addEventListener("change", () => {
          const file = this.$refs.fileInput.files[0];
          if (!file) return alert("请选择文件!");
          const reader = new FileReader();
          reader.addEventListener("load", () => {
            this.$refs.blocklyEditor.loadXmlText(reader.result);
            ok();
          });
          reader.readAsText(file);

        })
      })


    },
    copyCode() {
      let rawCode = this.code;
      this.$refs.dummyInput.value =
        `
/**
 * @type BVP图形化编辑器生成的代码
 * @desc 自动将代码在带有use_demo的标签的实体上运行
*/
 ;(()=>{${rawCode}})();\n`;
      this.$refs.dummyInput.select();
      document.execCommand("copy");
      alert("代码已复制到剪贴板")
    },


  }
};
</script>
<style lang="sass">
@import "../assets/blocklyEditor/customBlockly"

</style>
