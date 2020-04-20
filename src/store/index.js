import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    userBlogs: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs
    },
  },
  actions: {
    async getBlogs({ commit, dispatch }) {
      try {
        let res = await api.get('blog')
        console.log(res.data.data)
        commit('setBlog', res.data.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createBlog({ commit, dispatch }, newBlog) {
      try {
        let res = await api.post('blog', newBlog)
        dispatch('getBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
