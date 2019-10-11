# vue-introduce

### 1，生成项目 

- 全局安装 @vue/cli

```
npm install -g @vue/cli
```

- 创建项目

```
vue create vue-demo
```

###  2，组件介绍

- 基础介绍

  + 插值表达式 {{}}

  + v-bind: ，简写 : // 绑定属性 ；

  + v-on:，简写@ // 绑定事件；

  + 类名绑定

    :class="{ active: isActive }  // 变量为true会渲染active类名  :class="[ isActive ]" // 会读取变量的值渲染成类名

  + 样式绑定

  + :style="{ color: activeColor}" // 绑定变量；  :style="styleObject" // 绑定样式对象；:style="[baseStyles, overridingStyles]" // 绑定多个样式对象；

  + 条件渲染 v-if="type===1" v-else-if="type===2" v-else // 为false时隐藏dom

    v-show="type===1" // 操作css

  + 列表渲染

    v-for="(item, index) in items" // 每次渲染最好绑定key

  + 表单输入绑定 <input v-model="message" placeholder="edit me">

- 参考home组件

### 3，父子组件传值 

- $emit是触发事件，$on监控$emit触发的事件，然后接受$emit发来的参数

- 父=>子：

- ``` 
  // 父组件
  <SendValue :name="sendSonData"></SendValue>
  data() {
    return {
      	sendSonData: '我是父组件数据',
    }
  }
  // 子组件
  <p> 子组件： {{ name }} </p>
  props: {
     name: String,
  },
  ```

- 子=>父

  ```
  // 父组件
  <SendValue @sendMsg='acceptSonMsg'></SendValue>
  <p>父组件：{{ msg }}</p>
  acceptSonMsg( data ) {
     this.msg = data;
  }
  // 子组件
  <button @click="send()">点击 给父组件发消息</button>
  send() {
      this.$emit('sendMsg', this.msg);
  }
  ```

  

- 无关联组件

  ```
  // eventBus.js
  import Vue from "vue";
  export default new Vue;
  // 组件A
  import bus from '../utils/eventBus.js'
  bus.$on('sendMsgEventBus', ( msg) => {
     this.sendMsgEventBus = msg;
  });
  // 组件B
  import bus from '../utils/eventBus.js'
  send() {
     bus.$emit('sendMsgEventBus', this.msg + 'sendMsgEventBus'); 
  }
  ```

  

### 4，路由

### 5，生命周期



![Vue 实例生命周期](https://cn.vuejs.org/images/lifecycle.png)