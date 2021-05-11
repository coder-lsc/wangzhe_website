<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}广告位  </h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

          
      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})"><i class="el-icon-plus"></i> 添加广告</el-button>
        <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="24" v-for="(item,i) in model.items" :key="i">
              <el-form-item label="跳转链接(url)">
                <el-input v-model="item.url"></el-input>
              </el-form-item>
              <el-form-item label="图片" style="margin-top: 0.5rem;">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res => $set(item, 'image', res.url)">
                  <img v-if="item.image" :src="item.image" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon" style="line-height: 5rem"></i>
                </el-upload>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger"
                @click="model.items.splice(i, 1)"
                >删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
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
      model: {
        items: []
      }
    }
  },
  methods: {
    async save () { // 提交数据
      let res
      if (this.id) { // “编辑分类”界面 提交修改数据
        res = await this.$http.put(`rest/ads/${this.id}`, this.model)
      } else { // “新建分类”界面 第一次提交数据
        res = await this.$http.post('rest/ads', this.model)
      }
      this.$router.push('/ads/list')
      this.$message({
        type: 'success',
        message: '保存成功'
      })
    },
    async fetch () { // 拿到修改前数据
      const res = await this.$http.get(`rest/ads/${this.id}`)
      this.model = Object.assign({}, this.model, res.data)
    }
  },
  created () { // 拿到修改前数据
    this.id && this.fetch()
  }
}
</script>

<style>

</style>