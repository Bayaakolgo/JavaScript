const productD = document.querySelector('.product');
const url = 'https://course-api.com/javascript-store-single-product';

const fetchProduct = async () => {
    try{
        productD.innerHTML = '<h4  class="product-loading">Loading... </h4>';
        //console.log(window.location.search);
        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        const response = await fetch(`${url}?id=${id}`);
        const data = await response.json();
        return data;
    }catch(error){
        productD.innerHTML = '<p class="error"> There was a problem loading the product. Please try again later </p>';
    }
};

const displayProduct = (product) => {
    const {
        company,
        colors,
        description,
        name:title,
        price,
        image,
    } = product.fields;
    const {url: img} = image[0];
    document.title = title.toUpperCase();

    const colorList = colors
    .map((color) => {
        return `<span class="product-color" style="background: ${color}"></span>`;
    })
    .join('');

    productD.innerHTML = `<div class = "product-wrapper">
    <img src = "${img}" class="img" alt="${title}" />
    <div class="product-info">
        <h3>${title}</h3>
        <h5>${company}</h5>
        <span>${price / 100}</span>
        <div class="colors">
            ${colorList}
        </div>
        <p>
             ${description}
        </p>
        <button class="btn"> Add to Cart </button>
    </div>
</div>`;
};

const start = async () => {
    const data = await fetchProduct();
    displayProduct(data);
};

start();