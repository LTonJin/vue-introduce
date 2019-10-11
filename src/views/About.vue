<template>
  <div class="about">
    <h1>This is an about page</h1>
    <br>
    <SendValue :name="sendSonData" @sendMsg='acceptSonMsg'></SendValue>
    <p>父组件：{{ msg }}</p>
    <p>父组件：{{ sendMsgEventBus }}</p>
    <br>
    <Form></Form>
  </div>
</template>

<script>
import Form from '@/components/Form.vue';
import SendValue from '@/components/SendValue.vue';
import bus from '../utils/eventBus.js'
    export default {
        data() {
            return {
                sendSonData: '我是父组件数据',
                msg: '',
                sendMsgEventBus: '',
            }
        },
        mounted() {
            bus.$on('sendMsgEventBus', ( msg) => {
                this.sendMsgEventBus = msg;
            });
        },
        components: {
            Form,
            SendValue,
        },
        methods: {
            acceptSonMsg( data ) {
                this.msg = data;
            }
        }
    }
</script>