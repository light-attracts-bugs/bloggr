<template>
  <div class="home col-12">
    <h1>Welcome</h1>
    <div class="row">
      <create-blog></create-blog>
      <blog v-for="blog in blogs" :blogData="blog" :key="blog._id"></blog>
    </div>
  </div>
</template>

<script>
import Blog from "../components/Blog";
import CreateBlog from "../components/CreateBlog";
export default {
  name: "home",
   data() {
    return {};
  },
  computed: {
    blogs() {
      return this.$store.state.blogs.sort(
        (a, b) => a.make.charCodeAt(0) - b.make.charCodeAt(0)
      );
    }
  },
  created() {
    this.$store.dispatch("getBlogs");
  },
  methods: {},
  components: {
    Blog,
    CreateBlog
  }
};
</script>
