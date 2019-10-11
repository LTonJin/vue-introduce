<template>
  <div>
    <p> 子组件： {{ name }} </p>
    <button @click="send()">点击 给父组件发消息</button>
  </div>
</template>

<script>
import bus from '../utils/eventBus.js'
export default {
  name: 'sendvalue',
  data() {
      return {
          msg: '我是子组件的数据',
      }
  },
  props: {
      name: String,
  },
  methods: {
      send() {
          this.$emit('sendMsg', this.msg);
          bus.$emit('sendMsgEventBus', this.msg + 'sendMsgEventBus');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
