<template>
  <div class="home">
    <img alt="Vue logo" width="50px" height="50px" src="../assets/logo.png">
    <HelloWorld msg="VUEJS"/>

    <el-container style="height:100%; border: 2px solid red">
      <!-- header -->
      <el-header >Header content</el-header>
      <!-- end header -->
      <el-container>
        <el-aside :style="{ width: changeWidth + 'px' }" style="border: 5px solid black">
          <el-button type="primary" icon="el-icon-edit" @click="toggle"></el-button>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">Đơn hàng</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">Tạo đơn Hàng</el-menu-item>
                <el-menu-item index="1-2">Đơn hang mới nhất</el-menu-item>
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
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">About</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main style="border: 2px solid green">Main</el-main>
      </el-container>
      <el-footer style="border: 2px solid green">footer of page</el-footer>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {
    changeWidth() {
      if(this.isCollapse){
        return 55;
      }else {
        return 300;
      }
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
      this.isCollapse = !this.isCollapse
    }
  }
};
</script>
