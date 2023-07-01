const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Socks')
        const description = ref('Comfortable socks made with high-quality materials.')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        const details = ref([
            '50% cotton',
            '30% wool',
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'Green' },
            { id: 2235, color: 'Blue' }
        ])

        const sizes = ref(['S', 'M', 'L'])

        return {
            product,
            description,
            image,
            link,
            inStock,
            inventory,
            onSale,
            details,
            variants,
            sizes
        }
    }
}).mount('#app')