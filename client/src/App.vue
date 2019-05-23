<template>
  <div id="app">
    <el-container style="border: 2px solid red">
      <!-- header -->
      <el-header style="height:120px; border:2px solid blue">
        <img class="logo-vue" alt="Vue logo" width="50px" height="50px" src="./assets/logo.png">
        <div id="nav">
          <router-link to="/">Home</router-link> | 
          <router-link to="/don-hang">Danh Sach Khach Hang</router-link> |
          <router-link to="/about">About</router-link>
        </div>
      </el-header>
      <!-- end header -->
      <el-container>
        <el-aside :style="{ width: changeWidth + 'px' }">
          <el-button 
            type="primary" 
            :icon="setIconCollapseMenu" 
            @click="toggle"
          >
          </el-button>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            :router="true"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Đơn hàng</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/don-hang/create">Tạo đơn hàng</el-menu-item>
                <el-menu-item index="/don-hang">Danh sách đơn hang</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Khách hàng</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">Danh Sách Khách Hàng</el-menu-item>
                <el-menu-item index="1-2">Biểu đồ thống kê</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="about">
              <i class="el-icon-document"></i>
              <span slot="title">About</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="height:700px; border: 2px solid green">
          <router-view/>
        </el-main>
      </el-container>
      <el-footer style="border: 2px solid green">
        <p>Copyright by Tu</p>
      </el-footer>
    </el-container>
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.logo-vue {
  margin:10px;
}
</style>
<script>
export default {
  name: "app",
  components: {

  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    changeWidth() {
      if (this.isCollapse) {
        return 65;
      } else {
        return 300;
      }
    },
    setIconCollapseMenu() {
      return this.isCollapse ? 'el-icon-arrow-right' : 'el-icon-arrow-left';
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggle() {
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>