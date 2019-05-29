
<template>
  <div>
      <table>
        <tr>
            <th>
                Name
            </th>
            <th>
                SDT
            </th>
            <th>
                Dia Chi
            </th>
            <th>
                Ma Don Hang
            </th>
            <th>
                Ten Shop
            </th>
            <th>
                TG Dat Hang
            </th>
            <th>
                Xóa
            </th>
        </tr>
        <tr v-for="(hero, index) in heros" :key="hero.id">
          <td><a href="#" @click.prevent="getInfo(index)">{{ hero.customerName }} </a></td>
          <td> {{ hero.address }} </td>
          <td> {{ hero.phoneNumber }} </td>
          <td> {{ hero.orderNumber }} </td>
          <td> {{ hero.shopID }} </td>
          <td> {{ hero.created }} </td>
          <td> <a href="#" @click.prevent="deleteHero(index)">Xóa</a></td>
        </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'GridComponent',
  props: {
    heros: Array,
    title: String
  },
  data () {
    return {
      mgs: 'Hi Grid component'
    }
  },
  methods:{
    deleteHero(index) {
      this.heros.splice(index, 1);
    },
    getInfo(index) {
      console.log(index)
      var hero = this.heros[index];
      console.log(hero)
      this.$emit('event-get-info', hero);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

th.active {
  color: #fff;
}

th.active .arrow {
  opacity: 1;
}

.arrow {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;
}

.arrow.asc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #fff;
}

.arrow.dsc {
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid #fff;
}
</style>
