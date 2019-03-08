<template>
  <div id="wrapper">
    <div class="demo-input-suffix">
      <span class="input-title">出票日期：</span><br/>
      <el-date-picker
        v-model="formData.issueDate"
        align="right"
        type="date"
        placeholder="选择日期">
      </el-date-picker>
    </div>
    <div class="demo-input-suffix">
      <span class="input-title">付款行名称：</span>
      <el-input 
        placeholder="请输入"
        v-model="formData.paymentBankName" 
        clearable>
      </el-input>
    </div>
    <div class="demo-input-suffix">
      <span class="input-title">收款人：</span>
      <el-input 
        placeholder="请输入"
        v-model="formData.payee" 
        clearable>
      </el-input>
    </div>
    <div class="demo-input-suffix">
      <span class="input-title">出票人账号：</span>
      <el-input 
        placeholder="请输入"
        v-model="formData.drawerAccount" 
        clearable>
      </el-input>
    </div>
    <div class="demo-input-suffix">
      <span class="input-title">人民币金额（小写）：</span>
      <el-input 
        placeholder="请输入"
        v-model="formData.money" 
        clearable>
        <template slot="prepend">¥</template>
      </el-input>
    </div>
    <div class="button-area"><el-button type="primary" @click="handleExport">导出</el-button></div>
  </div>
</template>
<script>
import { RMBConversion } from '../utils/utils'
// import { Message } from 'element-ui'
export default {
  name: 'landing-page',
  components: {
    // Message
  },
  data () {
    return {
      formData: {
        issueDate: '', // 出票日期
        paymentBankName: '', // 付款行名称
        payee: '', // 收款人
        drawerAccount: '', // 出票人账号
        rmbCap: '', // 人民币大写
        money: '' // 人民币金额
      }
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    },
    handleExport () {
      let vm = this
      vm.formData.rmbCap = RMBConversion(this.formData.money)
      const {issueDate, paymentBankName, payee, drawerAccount, rmbCap} = vm.formData
      console.log(this.formData)
      if (!issueDate) {
        vm.$message({
          showClose: true,
          message: '请选择出票日期',
          type: 'warning'
        })
        return false
      }
      if (!paymentBankName) {
        vm.$message({
          showClose: true,
          message: '请输入付款行名称',
          type: 'warning'
        })
        return false
      }
      if (!payee) {
        vm.$message({
          showClose: true,
          message: '请输入收款人',
          type: 'warning'
        })
        return false
      }
      if (!drawerAccount) {
        vm.$message({
          showClose: true,
          message: '请输入出票人账号',
          type: 'warning'
        })
        return false
      }
      if (!rmbCap) {
        vm.$message({
          showClose: true,
          message: '请输入小写人民币金额',
          type: 'warning'
        })
        return false
      }
    }
  }
}
</script>

<style lang="scss">

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  #wrapper {
    margin: 0 auto;
    background:
      radial-gradient(
        ellipse at top left,
        rgba(255, 255, 255, 1) 40%,
        rgba(229, 229, 229, .9) 100%
      );
    height: 100vh;
    padding: 60px 80px;
    width: 100vw;
  }
  .demo-input-suffix {
    // height: 60px;
    margin-bottom: 20px;
    .input-title {
      width: 100px;
    }
  }
  .button-area {
    margin: 0 auto;
    width: 200px;
  }
</style>
