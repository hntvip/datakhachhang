<template>
  <div class="danh-sach-don-hang">
    <GridComponent @event-get-info="getInfoKhachHang" :heros="list"/>
    <HelloWorld msg="hehe" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import GridComponent from '@/components/GridComponent.vue'
import RestResource from '../services/RestResource'
export default {
  name: 'DanhSachDonHang',
  components: {
    HelloWorld,
    GridComponent
  },
  data () {
    return {
      list: [],
      userData: {
        name: '',
        address: '',
        orderPlace: '',
        orderNumber: '',
        phoneNumber: ''
      }
    }
  },
  created() {
    RestResource.getAllDonHang().then(ok => {
      this.list = ok.data;
    })
  },
  methods: {
    getInfoKhachHang(hero) {
      this.$router.push({name:'edit-don-hang', params: {id: hero._id}})
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
