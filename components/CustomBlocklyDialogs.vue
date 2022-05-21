<!--
用于覆盖Blockly自带对话框
-->
<template>
  <div>
    <v-dialog v-model="promptDialog" width="400" persistent>
      <v-card>
        <v-card-title>请输入</v-card-title>
        <v-card-text>
          <v-text-field v-model="promptValue" @keypress.enter="promptCallback()"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" :disabled="!promptValue" @click="promptCallback()">
            <v-icon>mdi-check</v-icon>
            确定
          </v-btn>
          <v-spacer/>
          <v-btn text color="warning" @click="promptValue='';promptCallback()">
            <v-icon>mdi-close</v-icon>
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="confirmDialog" width="300" persistent>
      <v-card>
        <v-card-title>确认?</v-card-title>
        <v-card-text>{{ confirmMessage }}</v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="confirmCallback(true)">
            <v-icon>mdi-check</v-icon>
            确定
          </v-btn>
          <v-spacer/>
          <v-btn text color="warning" @click="confirmCallback(false)">
            <v-icon>mdi-close</v-icon>
            取消
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="alertDialog" width="300" persistent>
      <v-card>
        <v-card-title>提示</v-card-title>
        <v-card-text>{{ alertMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn text color="warning" @click="alertCallback(false)">
            <v-icon>mdi-close</v-icon>
            关闭
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import * as Blockly from "blockly";

export default {
  name: "CustomBlocklyDialogs",
  data: () => ({
    promptDialog: false,
    promptValue: "",
    promptCallback: () => {
    },
    confirmDialog: false,
    confirmMessage: "",
    confirmCallback: () => {
    },
    alertDialog: false,
    alertMessage: "",
    alertCallback: () => {
    },
  }),
  methods: {},
  mounted() {
    Blockly.prompt = (message, defaultValue, callback) => {
      this.promptDialog = true;
      this.promptValue = defaultValue;
      this.promptCallback = () => {
        callback(this.promptValue);
        this.promptDialog = false;
      };
    }
    Blockly.confirm = (message, opt_callback) => {
      this.confirmDialog = true;
      this.confirmMessage = message;
      this.confirmCallback = (bool) => {
        opt_callback(bool);
        this.confirmDialog = false;
      }
    }
    Blockly.alert=(message)=>{
      this.alertDialog = true;
      this.alertMessage = message;
      this.alertCallback = () => {
        this.alertDialog = false;
      }
    }

  }
}
</script>

<style scoped>

</style>
