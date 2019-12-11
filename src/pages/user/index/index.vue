<template>
  <div class="content">4444
  </div>
</template>

<script>
import { apiList, configData, getNoLoad, get, post } from "@/http/api.js";
import { mapState, mapMutations } from "vuex";
export default {
  onLoad() {
  },
  components: {},
  data() {
    return {
    };
  },
  computed: {},
  methods: {
     //路由
    setRouter (path,id,n,t,s){
        this.$router.push({ path: path, query: {id: id,name:n,title:t,search:s} })
    },
  },
  watch: {}
};
</script>

<style lang="scss" scoped>
</style>
