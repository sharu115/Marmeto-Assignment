let menTabContianer = document.getElementById('menTab');
let womenTabContainer = document.getElementById('womenTab');
let kidsTabContainer = document.getElementById('kidsTab');


function menTabButton() {
    menTabContianer.style.display = 'flex'
    womenTabContainer.style.display = 'none';
    kidsTabContainer.style.display ="none";
    getProductsData()
}

function womanTabButton() {
    let rupee = 'RS'
    menTabContianer.style.display ='none';
    womenTabContainer.style.display="flex";
    kidsTabContainer.style.display='none'
    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    let options = {
        method : "GET"
    }

    fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            // console.log(jsonData.categories[0].category_products);
            let data = [jsonData.categories[1].category_products];
           
            
            let data1 = "";
            for (let i=0;i<data[0].length;i++){
                let index = 0
                data1+= `<div class="product-container">
                <div class="image-container">
                    <img src=${data[index][i].image} alt="" srcset="">
                    <p>${data[index][i].badge_text}</p>
                </div>
                <div class="product-name-container">
                    <p class="product-name">${data[index][i].title}</p>
                    <p class="product-brand">${data[index][i].vendor}</p>
                </div>
                <div class="price-container">
                    <p>${rupee + data[index][i].price}</p>
                    <p class="actual-price">${data[index][i].compare_at_price}</p>
                    <p class="discount">50% off</p>
                </div>
                <button type="button" class="cart-button">ADD TO CART</button>
            </div>`;
            
            }
            document.getElementById('womenTab').innerHTML = data1;
        })
};

function kidsTabButton() {
    let rupee = 'RS'
    menTabContianer.style.display ='none';
    womenTabContainer.style.display="none";
    kidsTabContainer.style.display='flex';
    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    let options = {
        method : "GET"
    }

    fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            // console.log(jsonData.categories[0].category_products);
            let data = [jsonData.categories[2].category_products];
            
            
            let data1 = "";
            for (let i=0;i<data[0].length;i++){
                let index = 0
                data1+= `<div class="product-container">
                <div class="image-container">
                    <img src=${data[index][i].image} alt="" srcset="">
                    <p>${data[index][i].badge_text}</p>
                </div>
                <div class="product-name-container">
                    <p class="product-name">${data[index][i].title}</p>
                    <p class="product-brand">${data[index][i].vendor}</p>
                </div>
                <div class="price-container">
                    <p>${rupee + data[index][i].price}</p>
                    <p class="actual-price">${data[index][i].compare_at_price}</p>
                    <p class="discount">50% off</p>
                </div>
                <button type="button" class="cart-button">ADD TO CART</button>
            </div>`;
            
            }
            document.getElementById('kidsTab').innerHTML = data1;
        })
};

function getProductsData() {
    let rupee = 'RS'
    let url = "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json"
    let options = {
        method : "GET"
    }

    fetch(url,options)
        .then(function(response){
            return response.json()
        })
        .then(function(jsonData){
            // console.log(jsonData.categories.category_products);
            let data = [jsonData.categories[0].category_products];
            // console.log(data[0][0]);
            // console.log(data[0][1]);
            
            let data1 = "";
            for (let i=0;i<data[0].length;i++){
                let index = 0
                data1+= `<div class="product-container">
                <div class="image-container">
                    <img src=${data[index][i].image} alt="" srcset="">
                    <p>${data[index][i].badge_text}</p>
                </div>
                <div class="product-name-container">
                    <p class="product-name">${data[index][i].title}</p>
                    <p class="product-brand">${data[index][i].vendor}</p>
                </div>
                <div class="price-container">
                    <p>${rupee + data[index][i].price}</p>
                    <p class="actual-price">${data[index][i].compare_at_price}</p>
                    <p class="discount">50% off</p>
                </div>
                <button type="button" class="cart-button">ADD TO CART</button>
            </div>`;
            
            }
            document.getElementById('menTab').innerHTML = data1;
        })
}

getProductsData();



