const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            brand: 'Vue Mastery',
            // image: './assets/images/socks_blue.jpg',
            // inStock: false,
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
            this.cart += 1;
        },
        // updateImage(img){
        //     this.image = img
        // },
        updateVariant(index){
            this.selectedVariant = index;
            console.log(index)
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
        }
    }
})
