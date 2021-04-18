<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}分类  </h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data () {
    return {
      model: {}
    }
  },
  methods: {
    async save () { // 提交数据
      let res
      if (this.id) { // “编辑分类”界面 提交修改数据
        res = await this.$http.put(`categories/${this.id}`, this.model)
      } else { // “新建分类”界面 第一次提交数据
        res = await this.$http.post('categories', this.model)
      }
      this.$router.push('/categories/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () { // 拿到修改前数据
      const res = await this.$http.get(`categories/${this.id}`)
      this.model = res.data
    }
  },
  created () { // 拿到修改前数据
    this.id && this.fetch()
  }
}
</script>

<style>

</style>