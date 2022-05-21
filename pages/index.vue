<template>
  <v-app>
    <v-app-bar app dark dense color="primary">
      <h3>欢迎使用Box3-visual-scripting</h3>
      <v-spacer></v-spacer>
      <v-btn icon @click="aboutDialog=true">
        <v-icon>mdi-help-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="indexBackground">
      <v-container v-if="!sizeError" fill-height class="justify-center">
        <v-alert v-if="tempSave" type="warning" prominent dark>
          检测到您有未保存的内容 <v-btn outlined @click="tempSave=false;jumpToEditor('open=tempSave')" rounded>恢复</v-btn>
        </v-alert>
        <v-scroll-y-transition mode="out-in">
          <v-row key="main" v-if="!loading" class="ma-8">

            <v-col :cols="3">
              <v-card :width="200" :height="200" @click="jumpToEditor('new=0')" color="green" dark>
                <v-card-title class="justify-center">新建实体宏</v-card-title>
                <v-card-subtitle style="text-align: center">为实体注入灵魂</v-card-subtitle>
                <v-card-text style="text-align: center">
                  <v-icon :size="100">mdi-archive</v-icon>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="3">
              <v-card :width="200" :height="200" @click="jumpToEditor('new=1')" color="blue" dark>
                <v-card-title class="justify-center">新建全局脚本</v-card-title>
                <v-card-subtitle style="text-align: center">让世界变得更有活力</v-card-subtitle>
                <v-card-text style="text-align: center">
                  <v-icon :size="100">mdi-earth</v-icon>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="3">
              <v-card :width="200" :height="200" @click="jumpToEditor('open=file')" color="orange" dark>
                <v-card-title class="justify-center">打开工程文件</v-card-title>
                <v-card-subtitle style="text-align: center">继续工作</v-card-subtitle>
                <v-card-text style="text-align: center">
                  <v-icon :size="100">mdi-folder</v-icon>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col :cols="3">
              <v-card :width="200" :height="200" color="pink" dark @click="templateSelectDialog=true">
                <v-card-title class="justify-center">模板</v-card-title>
                <v-card-subtitle style="text-align: center">赢在起跑线上</v-card-subtitle>
                <v-card-text style="text-align: center">
                  <v-icon :size="100">mdi-star</v-icon>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row key="loading" v-if="loading" class="ma-10">
            <v-col :cols="12" style="text-align: center">
              <v-progress-circular indeterminate size="80" color="white" width="5"/>
              <br/>
              <h3 style="color: white">{{ tips }}</h3>
            </v-col>
          </v-row>
        </v-scroll-y-transition>
      </v-container>
      <v-container v-else fill-height class="justify-center">
        <v-card class="align-center" color="error" dark>
          <v-card-title>
            <v-icon>mdi-laptop</v-icon>
            屏幕过小
          </v-card-title>
          <v-card-text>请在大屏电脑上使用此网页</v-card-text>
        </v-card>
      </v-container>


    </v-main>
    <v-dialog v-model="aboutDialog" fullscreen transition="fade-transition">
      <v-card>
        <v-toolbar color="primary" dense dark>
          关于BVP
          <v-spacer/>
          <v-btn icon @click="aboutDialog=false">
            <v-icon>mdi-close</v-icon>
          </v-btn>

        </v-toolbar>
        <v-card-text>Box3-visual-programing (Box3可视化编程)<br/>
          <UpdatesLog/>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-banner class="justify-end" color="red" dark>
      有能力的话请<a href="https://afdian.net/@AlanBest" target="_blank">资助</a>此项目, 万分感谢!
      <template v-slot:icon>
        <v-icon>mdi-diamond</v-icon>
      </template>
      <!--        <template v-slot:actions>-->
      <!--          <v-btn text rounded color="primary">资助</v-btn>-->
      <!--        </template>-->
    </v-banner>
    <v-dialog v-model="templateSelectDialog" width="500">
      <v-card>
        <v-card-title>选择模板</v-card-title>
        <v-card-text>
          <v-list>

            <v-list-item v-for="(item,index) of templates" :key="index"
                         @click="jumpToEditor(`template=${item.filename}`);templateSelectDialog=false">
              <v-list-item-avatar>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-avatar>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
import UpdatesLog from "@/components/UpdatesLog";
import Tips from "../assets/loadingTips"
import projectTemplates from "assets/projectTemplates";

export default {
  transition: {name: "slide-y-transition", mode: "out-in"},
  components: {
    UpdatesLog
  },
  data: () => ({
    loading: false,
    aboutDialog: false,
    pageLoading: true,
    sizeError: false,
    templateSelectDialog: false,
    templates: [],
    tempSave: false
  }),
  computed: {
    tips: () => {
      return Tips[Math.floor(Math.random() * (Tips.length))]
    }
  },
  methods: {
    jumpToEditor(query) {
      setTimeout(() => {
        this.$router.push("/editor?" + query);
      }, 2e3)

      this.loading = true;
    }
  },
  mounted() {
    this.templates = projectTemplates
    localStorage.setItem("successBack", "true")
    this.sizeError = innerHeight <= 470 || innerWidth <= 830;
    this.tempSave = localStorage.getItem("tempSave");

  }
}
</script>
<style lang="sass">
html, body
  overflow-y: auto !important

::-webkit-scrollbar
  width: 5px
  height: 5px
  background-color: #F5F5F5

::-webkit-scrollbar-thumb
  background-color: #b6e2ff
  border-radius: 2px

::-webkit-scrollbar-thumb:hover
  background-color: #4fbeff
  transition-duration: 100ms

.indexBackground
  background: url('/indexBackground.svg') no-repeat

.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined)
  box-shadow: 0 0 3px #5b97ff !important

.v-overlay__scrim
  background: #F5F9FF80 !important
  backdrop-filter: blur(10px) !important
</style>
