<template>
    <div>
        <section ref="printTemplate" style="margin-top: 26px;line-height: 33pt;">
            <p style="margin:0pt; orphans:0; text-align:justify; text-indent:65pt; widows:0">
              <span style="font-family:宋体; font-size:10.5pt">{{formData.year}}</span>
              <span style="font-family:宋体; font-size:10.5pt">&nbsp;&nbsp;&nbsp; </span>
              <span style="font-family:宋体; font-size:10.5pt">{{formData.month}}</span>
              <span style="font-family:宋体; font-size:10.5pt">&nbsp;&nbsp;&nbsp; </span>
              <span style="font-family:宋体; font-size:10.5pt">{{formData.day}}</span>
              <span style="font-family:宋体; font-size:10.5pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:宋体; font-size:10.5pt">{{formData.paymentBankName}}</span>
            </p>
            <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20.25pt; widows:0">
              <span style="font-family:宋体; font-size:10.5pt">{{formData.payee}}</span>
              <span style="font-family:宋体; font-size:10.5pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:Calibri; font-size:10.5pt">{{formData.drawerAccount}}</span>
            </p>
            <p style="margin:0pt; orphans:0; text-align:justify; text-indent:20.25pt; widows:0">
              <span style="font-family:Calibri; font-size:10.5pt">&nbsp; </span>
              <span style="font-family:宋体; font-size:15pt">{{formData.rmbCap}}</span>
              <span style="font-family:宋体; font-size:15pt">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>
              <span style="font-family:宋体; font-size:10.5pt; letter-spacing:2.3pt">￥</span>
              <span style="font-family:Calibri; font-size:10.5pt; letter-spacing:14px">{{formData.money}}</span>
            </p>
            <p style="margin:0pt; orphans:0; text-align:justify; text-indent:5pt; widows:0">
              <span style="font-family:宋体; font-size:12pt">{{formData.purpose}}</span>  
            </p>
        </section>
        <div class="button-area">
            <el-button type="primary" style="margin-bottom: 20px;" @click="goBack">返回上一级</el-button>
            <el-button type="primary" @click="handlePrint">打印</el-button>
        </div>
        
    </div>
</template>
<script>
export default {
  name: 'print-template',
  data () {
    return {
      formData: {
        issueDate: '',
        dateCap: '',
        paymentBankName: '',
        payee: '',
        drawerAccount: '',
        rmbCap: ''
      }
    }
  },
  mounted () {
    this.formData = this.$route.params
    // this.formData.dateCap = `${this.formData.dateCap.substr(0, 4)}\xa0\xa0\xa0\xa0${this.formData.dateCap.substr(4, 2)}\xa0\xa0\xa0\xa0${this.formData.dateCap.substr(6)}`
    this.formData.year = this.formData.dateCap.substr(0, 4)
    this.formData.month = this.formData.dateCap.substr(4, 2)
    this.formData.day = this.formData.dateCap.substr(6)
    // this.formData.dateCap = `${this.formData.dateCap.substr(0, 4)}${this.formData.dateCap.substr(4, 2)}     ${this.formData.dateCap.substr(6)}`
    this.formData.money = `${this.formData.money}`
    console.log(this.$route)
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    handlePrint () {
      this.$print(this.$refs.printTemplate)
    }
  }
}
</script>
<style lang="scss">
    
</style>
