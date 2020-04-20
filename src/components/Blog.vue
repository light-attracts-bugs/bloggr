<template>
  <div class="blog border col-3" @click="selectBlog()">
    <p>{{blogData.title}}</p>
    <p>{{blogData.body}}</p>
  </div>
</template>

<script>
export default {
  name: "blog",
  props: ["blogData"],
  data() {
    return {};
  },
  methods: {
    selectBlog() {
      this.$store.commit("setActiveBlog", {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.blogData._id }
      });
    }
  }
};
</script>

<style>
.blog {
  outline: 1px solid black;
}
</style>