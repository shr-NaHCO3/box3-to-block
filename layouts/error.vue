<template>
  <v-app dark>
    <v-dialog :value="true" persistent width="450">
      <v-card color="error" dark v-if="error.statusCode!==404">
        <v-card-title>我滴个天, 出bug啦!!</v-card-title>
        <v-card-subtitle>请加QQ: 2979893134 反馈此问题</v-card-subtitle>
        <v-card-text>错误信息:{{ error }}<br/>您的反馈对我们来说很重要!</v-card-text>
        <v-card-actions>
          <v-btn rounded outlined :disabled="!canBack" @click="back()">返回首页</v-btn>
        </v-card-actions>
      </v-card>
      <v-card color="warning" dark v-else>
        <v-card-title>这是哪里</v-card-title>
        <v-card-subtitle>页面不存在</v-card-subtitle>
        <v-card-text>你所访问的页面已经失效或不存在</v-card-text>
        <v-card-actions>
          <v-btn rounded outlined :disabled="!canBack" @click="back()">返回首页</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      canBack: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.canBack = true
    }, 3e3)
  },
  methods: {
    back() {
      location.href='/'
      // try {
      //   this.$router.replace('/')
      // } catch (e) {
      //   location.reload()
      // }
    }
  },
  head() {
    return {title: "错误"}
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
