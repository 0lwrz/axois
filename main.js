async function getProducts(){
    const response = await axios.get("https://dummyjson.com/products");
    const data = await response.data;
    const products = data.products;

    const result = products.map(function(ele){
        return `
        <div class="product">
        <h2>${ele.title}</h2>
        <img src = "${ele.thumbnail}"/>
        <a href="details.html?id=${ele.id}">More Details</a>
        </div>
        `;
    }).join('');

    document.querySelector(".products").innerHTML=result;
};
getProducts();