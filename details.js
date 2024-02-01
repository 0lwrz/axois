async function getData(){
    const urlParams = new URLSearchParams(window.location.search);
    const pid = urlParams.get('id');
    const response = await axios.get(`https://dummyjson.com/products/${pid}`);
    const data = response.data;
    const {title , description , brand , price , thumbnail} = data;
    document.querySelector(".details-products").innerHTML = 
    `
    <div class = "details">
    <h2 class="title">${title}</h2>
    <p class="des">${description}</p>
    <span class = "brand">${brand}</span>
    <span class="price">${price}</span>
    <img src = "${thumbnail}" alt = "pruduct image"/>
    </div>
    
    
    `
};
getData();