<script>
import { mapState, mapMutations } from "vuex";
export default {
 
  onShow(opt) {
  },
  computed: {
    ...mapState({
    })
  },
  methods: {
    ...mapMutations([])
  }
};
</script>

<style>
page {
  background: #f7f7f7;
}
view {
  color: inherit;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
.clearfix:after {
  display: block;
  clear: both;
  height: 0;
  content: "";
  visibility: hidden;
  overflow: hidden;
}

.clearfix {
  zoom: 1;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.c-fff {
  color: #fff;
}
.empty-box {
  padding-top: 0.45rem;
  height: 1px;
}
.determine-btn {
  width: 100%;
  height: 0.45rem;
  line-height: 0.45rem;
  text-align: center;
  background: rgba(243, 110, 32, 1);
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 0.16rem;
  color: rgba(255, 255, 255, 1);
  z-index: 10;
}
radio {
  transform: scale(0.7);
}
</style>
