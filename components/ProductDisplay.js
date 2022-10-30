app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `<div class="product-display">
      <div class="product-container">
        <div class="product-image">
          <img :src="image" alt="">
        </div>
        <div class="product-info">
          <h1>{{ title }}</h1>
          <p v-if="inStock">In Stock</p>
          <p v-else="inStock">Out of Stock</p>
          <ul>
            <li v-for="detail in details">{{ detail }}</li>
          </ul>
          <p>Shipping: {{ shipping }}</p>
          <div
            v-for="(variant, index) in variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{backgroundColor: variant.color}"></div>
          <button class="button" @click="addToCart" :disabled="!inStock" :class="{disabledButton: !inStock}">Add to Cart</button>
        </div>
      </div>
    </div>`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 8 },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ]
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart')
        },
        updateVariant(index){
            this.selectedVariant = index;
        }
    },
    computed: {
        title() {
            return `${this.product} - ${this.brand}`
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        shipping(){
            if (this.premium){
                return `Free`
            }
            return `2.99`
        }
    }
})