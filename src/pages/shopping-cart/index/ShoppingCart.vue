<template>
  <div class="cart">
    <h2>Your Cart</h2>
    <p v-show="!products.length"><i>Please add some products to cart.</i></p>
    <ul>
      <li class="fl-row-justy"
        v-for="product in products"
        :key="product.id">
        <span>{{ product.title }} - {{ product.price }} x {{ product.quantity }}</span>
        <span class="button" @click="remove(product)">remove</span>
      </li>
    </ul>
    <p>Total: {{ totelPrice}}</p>
    <p><span class="checkout" :class="!products.length?'disabled':''" @click="!products.length?false:checkout(products)">Checkout</span></p>
    <p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import { currency } from "@/utils/currency";

export default {
  created(){
    
  },
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    }),
    totelPrice(){
      return currency(this.total,"$",2)
    },
  },
  methods:{
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    },
    remove (product) {
      this.$store.dispatch('cart/removeProductFromCart', product)
    },
    currency(a){
      currency(a)
    }
  }
}
</script>
<style lang="scss" scoped>
  .cart{
    padding: 0 .15rem;
  }
  ul{
    width: 100%;
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
  .checkout{
    display: block;
    width: 3.45rem;
    height: .44rem;
    line-height: .42rem;
    border: 1px solid #ececec;
    text-align: center;
    outline: none;
    border-radius: 4px;
    margin: .1rem auto;
    &.disabled{
      background: #ececec;
    }
  }
</style>
