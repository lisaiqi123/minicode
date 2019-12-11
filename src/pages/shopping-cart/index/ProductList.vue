<template>
  <ul>
    <li class="fl-row-justy"
      v-for="product in products"
      :key="product.id">
      <span>{{ product.title }} - {{ product.price }} - {{product.inventory}}</span>
      
      <span class="button"
        :class="!product.inventory?'disabled':''"
        @click="addProductToCart(product)">
        Add
      </span>
    </li>
  </ul>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
    'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
<style lang="scss" scoped>
  ul{
    padding: .15rem;
    li{
      padding: 0.1rem 0;
    }
  }
  .button{
    width: .8rem;
    height: .3rem;
    line-height: .28rem;
    border: 1px solid #ececec;
    text-align: center;
    outline: none;
    border-radius: 4px;
    &.disabled{
      background: #ececec;
    }
  }
</style>
