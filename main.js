const { createApp, ref, computed } = Vue;

createApp({
  setup() {
    const product = ref('Socks');
    const brand = ref('SE 331');
    const description = ref('Comfortable socks made with high-quality materials.');
    const link = ref('https://www.camt.cmu.ac.th');
    const inventory = ref(100);
    const onSale = ref(false);
    const details = ref(['50% cotton', '30% wool', '20% polyester']);
    const variants = ref([
      { id: 2234, color: 'Green', image: './assets/images/socks_green.jpg', quantity: 50 },
      { id: 2235, color: 'Blue', image: './assets/images/socks_blue.jpg', quantity: 0 }
    ]);
    const selectedVariant = ref(0);

    function updateVariant(index) {
      selectedVariant.value = index;
    }

    const image = computed(() => {
      return variants.value[selectedVariant.value].image;
    });

    const inStock = computed(() => {
      return variants.value[selectedVariant.value].quantity;
    });

    const sizes = ref(['S', 'M', 'L']);
    const cart = ref(0);

    function addToCart() {
      cart.value += 1;
    }

    const title = computed(() => {
      if (onSale.value) {
        return brand.value + ' ' + product.value + ' is on sale';
      } else {
        return brand.value + ' ' + product.value;
      }
    });

    function updateImage(variantImage) {
      image.value = variantImage;
    }

    function toggleStockStatus() {
      inStock.value = !inStock.value;
    }

    return {
      product,
      brand,
      title,
      description,
      image,
      link,
      inStock,
      inventory,
      onSale,
      details,
      variants,
      sizes,
      cart,
      addToCart,
      updateImage,
      toggleStockStatus
    };
  }
}).mount('#app');