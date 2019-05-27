<template>
  <div class="update-don-hang">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="12">
        <div class="grid-content bg-purple-light">
          <el-form :model="form" :rules="rules" ref="form" label-width="200px">
            <el-form-item label="Nhap Ma Don Hang" prop="orderNumber">
                <el-col :span="12">
                     <el-input v-model="form.orderNumber"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Nhap So Dien Thoai Khach" prop="phoneNumber">
                <el-col :span="12">
                    <el-input v-model="form.phoneNumber"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Nhap Dia Chi (Tinh/TP)" prop="address">
                <el-col :span="12">
                  <el-input v-model="form.address"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="Nhap Shop Ban Hang" prop="shopID">
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
              <el-button type="primary" @click="submitForm('form')">Submit</el-button>
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
  props: ['editMode'],  
  data() {
    return {
      shopList: [],
      form: {
        orderNumber: '',
        shopID: '',
        phoneNumber:''
      },
      hero:{},
      rules:{
        name:[
          { required: true, message: 'Bạn nhập thiếu tên', trigger: 'blur' },
          { min: 3, max: 100, message: 'Bạn nhập tối thiểu 3 ký tự', trigger: 'blur' }
        ],
        orderNumber:[
          { required: true, message: 'Bạn nhập thiếu mã đơn hàng', trigger: 'blur' }
        ],
        phoneNumber:[
          { required: true, message: 'Bạn nhập thiếu sdt', trigger: 'blur' }
        ],
        address:[
          { required: true, message: 'Bạn nhập thiếu sdt', trigger: 'blur' }
        ],
        shopID:[
          { required: true, message: 'Bạn nhập thiếu sdt', trigger: 'blur' }
        ]
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
            let obj = this.form;
            this.hero = {
                name: obj.name,
                address: obj.address,
                orderNumber: obj.orderNumber,
                shopID: obj.shopID,
                id: 1
            };
            this.$router.push({name: 'edit-don-hang',params:{id:1}});
            alert("sumit")
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  mounted() {
      if(this.$route.params.id){
        console.log("have id" +this.$route.params.id)
        this.form = {
          orderNumber : '1',
          shopID:'11',
          phoneNumber:'1111'
        };
      }
  },
  destroyed() {
    console.log("destroy")
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
