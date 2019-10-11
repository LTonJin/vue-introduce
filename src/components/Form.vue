<template>
  <div>
      <p>表单组件</p>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>
    <br>
    <div id='example-3'>
        <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label>
        <input type="checkbox" id="john" value="John" v-model="checkedNames">
        <label for="john">John</label>
        <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
        <label for="mike">Mike</label>
        <br>
        <span>Checked names: {{ checkedNames }}</span>
    </div>
    <br>
    <div id="example-5">
    <select v-model="selected">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
    </select>
    <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lifecycle',
  data() {
      return {
          message: 'hello',
          selected: '',
          checkedNames: [],
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
