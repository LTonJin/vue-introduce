<template>
  <div class="home">
    <Header msg="我是全局注册的Header组件"/>
    <p> {{ msg }}</p>
    <p> {{ aDouble }}</p>

    <button @click="plus()">{{ num }}点击增加</button>
    <button @click="agePlus()">张三今年{{ person.age }}岁</button>

    <p> 过滤掉偶数：{{ numArr | getOddNumber}}</p>
    <p> 过滤掉奇数：{{ numArr | getEvenNumber}}</p>

    <LifeCycle :msg="'我是lifecycle组件'+num"/>
  </div>
</template>

<script>
// @ is an alias to /src
import LifeCycle from '@/components/LifeCycle.vue'

export default {
  name: 'home',
  data() {
      return {
          msg: '我是home组件的一条消息',
          num: 2,
          person: {
              name: '张三',
              age: 18
          },
          numArr: [1,2,3,4,5,6,7,8,9,10],
      }
  },
  // 注册组件 局部注册
  components: {
    LifeCycle
  },
  // 计算属性 设计它们的初衷是用于简单运算的
  computed: {
    aDouble() {
        return this.num * this.num;
    } 
  },
  // 定义方法
  methods: {
    plus() {
      this.num++;
    },
    agePlus() {
      this.person.age ++;
    }
  },
  // 监控数据变化
  watch: {
      // 监控对象
      person: {
          handler(val, oldVal) {
              console.log( val.age );
          },
          deep: true, 
      },
      // 监控普通类型
      num(val, oldVal) {
          console.log('num:',val);
      }
  },
  // 过滤器 局部注册
  filters: {
      getOddNumber( value ) {
          return value.filter( val => val % 2 != 0);
      }
  }
}
</script>
