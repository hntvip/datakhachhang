<template>
  <div class="danh-sach-don-hang">
    <GridComponent @event-get-info="getInfoKhachHang" :heros="list"/>
    <HelloWorld msg="hehe" />
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
          id: 1,
          name: 'Tu',
          address: 'Nga Bay',
          phoneNumber: '0888109595',
          orderNumber: '11111111',
          shopID: 'LZD Nga Bay',
          created: new Date()
        },
        {
          id: 2,
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
    getInfoKhachHang(hero) {
      this.$router.push({name:'edit-don-hang', params: {id: hero.id}})
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
