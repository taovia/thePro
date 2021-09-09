<template>
  <div>
    <BlogHeader />
    <div id="article-create">
      <h3>更新文章</h3>
      <form>
        <div class="form-elem">
          <span>标题：</span>
          <input v-model="title" type="text" placeholder="输入标题" />
        </div>

        <div class="form-elem">
          <span>分类：</span>
          <span v-for="category in categories" :key="category.id">
            <button
              class="category-btn"
              :style="categoryStyle(category)"
              @click.prevent="chooseCategory(category)"
            >{{ category.title }}</button>
          </span>
        </div>

        <div class="form-elem">
          <span>标签：</span>
          <input v-model="tags" type="text" placeholder="输入标签，用逗号分隔" />
        </div>

        <div class="form-elem">
          <span>正文：</span>
          <textarea v-model="body" placeholder="输入正文" rows="20" cols="80"></textarea>
        </div>

        <div class="form-elem">
          <button v-on:click.prevent="submit">提交</button>
        </div>
        <div class="form-elem">
          <button v-on:click.prevent="deleteArticle" style="background-color: darkred">删除</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BlogHeader from '../components/BlogHeader.vue'
import axios from 'axios'
import authorization from '../utils/authorization'

export default {
  name: 'ArticleEdit',
  components: { BlogHeader },
  data: function () {
    return {
      title: '',
      body: '',
      categories: [],
      selectedCategory: null,
      tags: '',
      articleID: null,
    }
  },
  mounted() {
    // 页面初始化时获取所有分类
    axios
      .get('/api/category/')
      .then(response => this.categories = response.data);

    const that = this;
    axios
      .get('/api/article/' + that.$route.params.id + '/')
      .then(function (response) {
        const data = response.data;
        that.title = data.title;
        that.body = data.body;
        that.selectedCategory = data.category;
        that.tags = data.tags.join(',');
        that.articleID = data.id;
      })

  },
  methods: {
    // 根据分类是否被选中，按钮的颜色发生变化
    categoryStyle(category) {
      if (this.selectedCategory !== null && category.id === this.selectedCategory.id) {
        return {
          backgroundColor: 'black',
        }
      }
      return {
        backgroundColor: 'lightgrey',
        color: 'black',
      }
    },
    // 选取分类
    chooseCategory(category) {
      // 如果点击已选取的分类，则将 selectedCategory 置空
      if (this.selectedCategory !== null && this.selectedCategory.id === category.id) {
        this.selectedCategory = null
      }
      else {
        this.selectedCategory = category;
      }
    },
    // 点击提交按钮
    submit() {
      const that = this;
      authorization()
        .then(function (response) {
          if (response[0]) {

            let data = {
              title: that.title,
              body: that.body,
            };

            data.category_id = that.selectedCategory ? that.selectedCategory.id : null;

            data.tags = that.tags
              .split(/[,，]/)
              .map(x => x.trim())
              .filter(x => x.charAt(0) !== '');

            const token = localStorage.getItem('access.myblog');
            axios
              .put('/api/article/' + that.articleID + '/',
                data,
                {
                  headers: { Authorization: 'Bearer ' + token }
                })
              .then(function (response) {
                that.$router.push({ name: 'ArticleDetail', params: { id: response.data.id } });
              })
          }
          else {
            alert('令牌过期，请重新登录。')
          }
        }
        )
    },
    deleteArticle() {
      const that = this;
      const token = localStorage.getItem('access.myblog');
      authorization()
        .then(function (response) {
          if (response[0]) {
            axios
              .delete('/api/article/' + that.articleID + '/',
                {
                  headers: { Authorization: 'Bearer ' + token }
                })
              .then(() => that.$router.push({ name: 'Home' }))
          }
          else {
            alert('令牌过期，请重新登录。')
          }
        }
        )
    }
  }
}
</script>

<style scoped>
.category-btn {
  margin-right: 10px;
}

#article-create {
  text-align: center;
  font-size: large;
}

form {
  text-align: left;
  padding-left: 100px;
  padding-right: 10px;
}

.form-elem {
  padding: 10px;
}

input {
  height: 25px;
  padding-left: 10px;
  width: 50%;
}

button {
  height: 35px;
  cursor: pointer;
  border: none;
  outline: none;
  background: steelblue;
  color: whitesmoke;
  border-radius: 5px;
  width: 60px;
}
</style>