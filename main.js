const product = 'Socks'
const { createApp, ref } = Vue

createApp({
    setup(){
        const product = ref('Boots')
        const description = ref('Comfortable socks made with high-quality materials.')
         
        return {
            product,description
        }
    }
}).mount('#app')

