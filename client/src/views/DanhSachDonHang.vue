<template>
  <div class="danh-sach-don-hang">
    <GridComponent v-on:get-id-event="getId" :heros="list"/>
    <HelloWorld msg="hehe"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import GridComponent from '@/components/GridComponent.vue'
export default {
  name: 'DanhSachDonHang',
  components: {
    HelloWorld,
    GridComponent
  },
  data () {
    return {
      list: [
        {
          name: 'Tu',
          address: 'Nga Bay',
          phoneNumber: '0888109595',
          orderNumber: '11111111',
          shopID: 'LZD Nga Bay',
          created: new Date()
        },
        {
          name: 'Tai',
          address: 'HCM',
          phoneNumber: '0888209595',
          orderNumber: '2222222',
          shopID: 'SenDo Hau Giang',
          created: new Date()
        }
      ],
      userData: {
        name: '',
        address: '',
        orderPlace: '',
        orderNumber: '',
        phoneNumber: ''
      }
    }
  },
  methods: {
    getId (){
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
