<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="所属分类">
        <el-select v-model="model.categories" multiple>
          <el-option v-for="item in categories" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="详情">
        <vue-editor v-model="model.body"
        useCustomImageHandler 
        @image-added="handleImageAdded"></vue-editor>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
  components: {
    VueEditor
  },
  props: {
    id: {}
  },
  data () {
    return {
      model: {},
      categories: {},
      htmlForEditor: ""
    }
  },
  methods: {
    async save () { // 提交数据
      let res
      if (this.id) { // “编辑分类”界面 提交修改数据
        res = await this.$http.put(`rest/articles/${this.id}`, this.model)
      } else { // “新建分类”界面 第一次提交数据
        res = await this.$http.post('rest/articles', this.model)
      }
      this.$router.push('/articles/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () { // 拿到修改前数据
      const res = await this.$http.get(`rest/articles/${this.id}`)
      this.model = res.data
    },
    async fetchCategories () { // 得到上级目录
      const res = await this.$http.get(`rest/categories`)
      this.categories = res.data
    },
    async handleImageAdded (file, Editor, cursorLocation, resetUploader) { // 富文本编辑器的上传图片
      // cursorLocation 为光标位置
 
      const formData = new FormData();
      formData.append("file", file); // "file" 在后端upload接收的字段名是file

      const res = await this.$http.post('upload', formData)
      Editor.insertEmbed(cursorLocation, "image", res.data.url);
      resetUploader();
    }
  },
  created () { // 拿到修改前数据
    this.fetchCategories()
    this.id && this.fetch()
  }
}
</script>

<style>

</style>