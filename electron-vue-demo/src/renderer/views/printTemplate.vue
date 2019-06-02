<template>
    <div>
        <section ref="printTemplate" style="margin-top: 24px;line-height: 16pt;">
            <p style="margin:0pt; orphans:0; text-align:justify; text-indent:75pt; widows:0;position:relative;">
              <span style="font-family:宋体; font-size:10.5pt">{{formData.year}}</span>
              <span style="font-family:宋体; font-size:10.5pt;position:absolute;left:60pt;">{{formData.month}}</span>
              <span style="font-family:宋体; font-size:10.5pt;position:absolute;left:107pt;">{{formData.day}}</span>
              <span style="font-family:宋体; font-size:10.5pt;position:absolute;left:220pt;">{{formData.paymentBankName}}</span>
            </p>
            <p style="margin:0pt; orphans:0; text-align:justify; text-indent:26pt; widows:0;position:relative;">
              <span style="font-family:宋体; font-size:10.5pt">&nbsp;{{formData.payee}}</span>
              <span style="font-family:Calibri; font-size:10.5pt;position:absolute;left:280pt">{{formData.drawerAccount}}</span>
            </p>
            <p style="margin-top:10px; orphans:0; text-align:justify; text-indent:26pt; widows:0;width:425pt;">
              <span style="font-family:Calibri; font-size:10.5pt">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span style="font-family:宋体; font-size:15pt">{{formData.rmbCap}}</span>
              <span style="font-family:宋体; font-size:10.5pt; letter-spacing:8px;float:right">￥{{formData.money}}</span>
            </p>
            <p style="margin-top:8pt; orphans:0; text-align:justify; text-indent:10pt; widows:0">
              <span style="font-family:宋体; font-size:12pt">&nbsp;{{formData.purpose}}</span>  
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
        date: '',
        paymentBankName: '',
        payee: '',
        drawerAccount: '',
        rmbCap: ''
      }
    }
  },
  mounted () {
    this.formData = this.$route.params
    this.formData.year = this.formData.date[0]
    this.formData.month = this.formData.date[1]
    this.formData.day = this.formData.date[2]
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
