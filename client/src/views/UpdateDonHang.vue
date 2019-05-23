<template>
  <div class="update-don-hang">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-form :model="form" ref="form" label-width="180px">
            <el-form-item label="Nhap Ma Don Hang" prop="orderNumber" error="Phai Nhap Ma Don Hang" required>
                <el-col :span="12">
                     <el-input v-model="form.orderNumber"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Nhap So Dien Thoai Khach" error="Phai Nhap SDT khach"  prop="phoneNumber" required>
                <el-col :span="12">
                    <el-input v-model="form.phoneNumber"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Nhap Dia Chi (Tinh/TP)" error="Phai Nhap DIA CHI" prop="address" required>
                <el-col :span="12">
                  <el-input v-model="form.address"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Nhap Shop Ban Hang" error="Phai Nhap SHOP" prop="shopID" required>
                <el-col :span="12">
                    <el-select
                        v-model="form.shopID"
                        placeholder="Shop Ban Ten Gi? TREXHOUSE, SHOP KEO BONG"
                        style="width: 100%;"
                    >
                        <el-option
                        v-for="item in shopList"
                        :key="item.value"
                        :label="item.name"
                        :value="item.value"
                        ></el-option>
                    </el-select>
                </el-col>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">Submit</el-button>
              <el-button @click="resetForm('form')">Xoa Form Lam Lai</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "UpdateDonHang",
  components: {},
  data() {
    return {
      shopList: [],
      form: {
        orderNumber: '',
        shopID: '',
        phoneNumber:''
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    this.shopList = [
      {
        name: "Nga Bay , LZD - Shop Keo Bong",
        value: "NB_LZD_SHOPKEOBONG"
      },
      {
        name: "Nga Bay , SENDO - Trexhouse",
        value: "NB_SENDO_TREXHOUSE"
      },
      {
        name: "Nga Bay , SENDO - AILAYOU",
        value: "NB_SENDO_AILAYOU"
      },
      {
        name: "HCM , SENDO - SHOP KEO BONG",
        value: "HCM_SENDO_SHOPKEOBONG"
      }
    ];
  }
};
</script>
