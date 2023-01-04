<template>
  <div class="container">
    <el-form v-loading="vloading" ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px"
      class="demo-ruleForm" :size="formSize" status-icon>
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      <el-form-item label="性别" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择性别">
          <el-option label="男" value="0" />
          <el-option label="女" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item label="数值" prop="count">
        <el-select-v2 v-model="ruleForm.count" placeholder="请选择数值" :options="options" />
      </el-form-item>
      <el-form-item label="时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker v-model="ruleForm.date1" type="date" label="Pick a date" placeholder="选择日期"
              style="width: 100%" />
          </el-form-item>
        </el-col>
        <el-col style="text-align: center" :span="2">
          <span class="text-gray-500">-</span>
        </el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker v-model="ruleForm.date2" label="Pick a time" placeholder="选择时间"
              style="width: 100%" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="开关" prop="delivery">
        <el-switch v-model="ruleForm.delivery" />
      </el-form-item>
      <el-form-item label="品牌(可多选)" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="苹果" name="type" />
          <el-checkbox label="小米" name="type" />
          <el-checkbox label="特斯拉" name="type" />
          <el-checkbox label="宝马" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="阵营(单选)" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="进攻方" />
          <el-radio label="防守方" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="描述" prop="desc">
        <el-input v-model="ruleForm.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)" :loading="ruleForm.loading">
          提交
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, toRefs, getCurrentInstance } from 'vue'

const proxy = getCurrentInstance()
const data = reactive({
    formSize: 'default',
    ruleFormRef: null,
    vloading: false,
    ruleForm: {
        name: 'Hello',
        region: '',
        count: undefined,
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        loading: false
    },
    rules: {
        name: [
            { required: true, message: '请输入用户名', trigger: ['blur', 'submit'] },
            { min: 3, max: 5, message: '用户名长度为3-5个字符', trigger: ['blur', 'submit'] }
        ],
        region: [
            {
                required: true,
                message: '请选择性别',
                trigger: ['change', 'submit']
            }
        ],
        count: [
            {
                required: true,
                message: '请选择数值',
                trigger: ['change', 'submit']
            }
        ],
        date1: [
            {
                type: 'date',
                required: true,
                message: '请选择日期',
                trigger: ['change', 'submit']
            }
        ],
        date2: [
            {
                type: 'date',
                required: true,
                message: '请选择时间',
                trigger: ['change', 'submit']
            }
        ],
        type: [
            {
                type: 'array',
                required: true,
                message: '请选择至少一个类型（可多选）',
                trigger: ['change', 'submit']
            }
        ],
        resource: [
            {
                required: true,
                message: '请选择阵营',
                trigger: ['change', 'submit']
            }
        ],
        desc: [
            { required: true, message: '请输入补充信息', trigger: ['blur', 'submit'] }
        ]
    }
})
const { vloading, formSize, ruleFormRef, ruleForm, rules } = toRefs(data)

const submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log(proxy, 'proxy')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`
}))
</script>

<style lang="scss" scoped>

</style>
