<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'lifecycle',
  data() {
      return {}
  },
//   props: ['msg'],
  props: {
    msg: String
  },
  // 数据初始化之前调用
  beforeCreate(){
      console.log('数据初始化之前:beforeCreate');
  },
  // 数据初始化完成调用 可获取到data里的数据 常用！！！
  created() {
      console.log('数据初始化完成:created');
  },
  // dom挂载之前
  beforeMount(){
      console.log('dom挂载之前:beforeMount');
  },
  // dom渲染完成 常用！！！
  mounted() {
      console.log('dom渲染完成:mounted');
  },
  // data 中的数据更新之前调用
  beforeUpdate() {
      console.log('data 中的数据更新之前:beforeUpdate');
  },
  // data中的数据更新完成
  updated() {
      console.log('data中的数据更新完成:updated');
  },
  // 销毁组件之前
  beforeDestroy() {
      console.log('销毁组件之前:beforeDestroy');
  },
  // 销毁组件之后
  destroyed() {
      console.log('销毁组件之后:destroyed');
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
