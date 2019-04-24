<template>
    <div>
        <section ref="printTemplate" style="margin-top: 26px;line-height: 44px;">
            <p style="font-family: 'SimSun',font-size: 12px;margin-left: 80px;"><span>{{formData.dateCap}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{formData.paymentBankName}}</span></p>
            <p style="font-family: 'SimSun',font-size: 12px;margin-left: 20px;"><span>{{formData.payee}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>{{formData.drawerAccount}}</span></p>
            <p style="font-family: 'SimSun',font-size: 20px;margin-left: 25px;">&nbsp;&nbsp;<span>{{formData.rmbCap}}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style="letter-spacing: 15px;">{{formData.money}}</span></p>
            <p style="font-family: 'SimSun',font-size: 16px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{formData.purpose}}</p>
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
    this.formData.dateCap = `${this.formData.dateCap.substr(0, 4)}\xa0\xa0\xa0\xa0\xa0\xa0${this.formData.dateCap.substr(4, 2)}\xa0\xa0\xa0\xa0\xa0\xa0${this.formData.dateCap.substr(6)}`
    this.formData.money = `¥${this.formData.money}`
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
