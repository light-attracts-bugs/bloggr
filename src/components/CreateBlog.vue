<template>
  <div class="create-blog border col-12">
    <form @submit.prevent="createBlog()">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text" name="title" id="" class="form-control" placeholder="enter title..." aria-describedby="helpId"
          v-model="newBlog.title" required>
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input type="text" name="body" id="" class="form-control" placeholder="enter body..."
          aria-describedby="helpId" v-model="newBlog.body" required>
      </div>
      <div class="form-group">
        <label for="imgUrl">Image URL</label>
        <input type="text" name="imgUrl" id="" class="form-control" placeholder="enter image url..."
          aria-describedby="helpId" v-model="newBlog.imgUrl">
      </div>
      <button type="submit" class="btn btn-success">Create Blog</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'create-blog',
    data() {
      return {
        newBlog: {}
      }
    },
    methods: {
      createBlog() {
        this.$store.dispatch('createBlog', this.newBlog)
        this.newBlog = {}
      }
    }
  }
</script>

<style>
  .blogs {
    outline: 1px solid black;
  }
</style>