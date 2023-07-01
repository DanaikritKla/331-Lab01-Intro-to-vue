const product = 'Socks'
const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable socks made with high-quality materials.')
        const image = ref('./assets/images/socks_green.jpg')
        const link = ref('https://www.camt.cmu.ac.th')
        const inStock = ref(true)
        const inventory = ref(100)
        const onSale = ref(true)
        return {
            product,description,image,link,inStock,inventory,
            onSale
        }
    }
}).mount('#app')

