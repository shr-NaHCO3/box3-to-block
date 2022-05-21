<template>
  <v-timeline
      dense
  >
    <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="colorMap[item.type]"
        :icon="iconMap[item.type]"

    >
      <v-card
          :color="colorMap[item.type]"
          dark
      >
        <v-card-title>
          {{ item.title }}
        </v-card-title>
        <v-card-text class="white text--primary">
          <p v-html="item.content"/>
          <v-btn
              :color="colorMap[item.type]"
              class="mx-0"
              rounded
              v-if="item.link"
              :href="item.link"
          >
            版本时光机
          </v-btn>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
export default {
  name: "UpdatesLog",
  data: () => ({
    items: [
      {title: "v0.2.2", content: "紧急修复几个巨大bug", type: "fix-bug"},
      {title: "v0.2.1", content: "可保存和读取工程文件，另外优化外观", type: "new"},
      {title: "v0.2 - 代码可用!", content: "- 开放导出代码(而且会自动复制到剪贴板)<br/>- 优化了网站加载提示和速度<br/>- 改为扁平化磁吸积木样式", type: "new"},
      {
        title: "v0.1.3",
        content: "- 更细致地优化视觉效果(毛玻璃, 模糊特效等), 更换积木配色<br/>- 更改了网站主题配色, 适应积木颜色<br/>- 更改了积木音效, 适应Material设计(声音较小, 可以尝试调大音量)<br/>- 为积木添加了过渡特效, 具体是怎样就请大家细品啦<br/>- 正在适配导出代码与保存, 代码预览面板暂时下线, 但是将在不久后重新上线",
        type: "new",
        link: "https://box3-visual-programing-9bs9gtmbs-shycjka-gmailcom.vercel.app/"
      },
      {title: "v0.1.2", content: "- 优化视觉效果, 更改了alert对话框<br/>- 口令只需要输入一次即可永久使用(前提是口令没有变化)", type: "fix-bug"},
      {title: "v0.1.1", content: "修复了口令被跳过的bug", type: "fix-bug"},
      {title: "v0.1 - init", content: "第一个内测版本", type: "new"},


    ], colorMap: {'new': 'primary', 'fix-bug': 'green'},
    iconMap: {"new": "mdi-star", "fix-bug": "mdi-bug"}
  })
}
</script>

<style scoped>

</style>