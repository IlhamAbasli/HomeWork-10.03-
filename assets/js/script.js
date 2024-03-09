"use strict";


//#region storages


// sessionStorage.setItem("name","Ilham");
// sessionStorage.setItem("surname","Abaslı");

// console.log(sessionStorage.getItem("name"));

// sessionStorage.clear();

// sessionStorage.removeItem("name");

// localStorage.setItem("name","Ilham");

// let keyInput = document.querySelector(".input-key");
// let valueInput = document.querySelector(".input-value");

// let addBtn = document.querySelector("button");

// addBtn.addEventListener("click",function(){
//     let key = keyInput.value;
//     let value = valueInput.value;

//     localStorage.setItem(key,value);

//     keyInput.value = "";
//     valueInput.value = "";
// })

// let datas = ["Oruc","Metanet","Tunzale","Semed"];

// localStorage.setItem("datas",datas);

// let jsonData = {
//     name: "aaa",
//     surnam: "assad",
//     phones: [
//         2323,1313
//     ],
//     group:[
//         {
//             name: "P418",
//             capacity: 40,
//             teachers:[
//                 "MMM","NNN"
//             ]
//         }
//     ]
// }

// console.log(jsonData.group[0].capacity);

// for (const iterator of jsonData.group[0].teachers) {
//     console.log(iterator);
// }

// console.log(jsonData);

// let datas = ["Oruc","Metanet","Tunzale","Semed"];

// localStorage.setItem("datas",JSON.stringify(datas));

// console.log(JSON.parse(localStorage.getItem("datas")));

// let datas = [
//   {
//     name: "Semed",
//     surname: "Huseynov",
//   },
//   {
//     name: "Meryem",
//     surname: "Eliyeva"
//   }
// ];



// localStorage.setItem("datas",JSON.stringify(jsonData));

// console.log(localStorage.getItem("datas"));

// console.log(JSON.parse(localStorage.getItem("datas")));




//#endregion



//#region basket


let basket = [];

if(JSON.parse(localStorage.getItem("basket")) == null){
    localStorage.setItem("basket",JSON.stringify(basket));
}else{
    basket = JSON.parse(localStorage.getItem("basket"));
}


getBasketCount(basket);

function getBasketCount(arr){
    let basketCount = 0;
    if(arr.length != 0){
        for (const item of arr) {     
            basketCount += item.count;
        }
    }
    document.querySelector(".navigation .basket-count").innerText = basketCount;
}


getBasketPrice(basket);

function getBasketPrice(arr){
    let basketPrice = 0;
    if(arr.length != 0){
        for (const item of arr) {
            basketPrice += item.price * item.count;
        }
    }

    document.querySelector(".navigation .basket-price").innerHTML = `${basketPrice}$`;
}




let addBtns = document.querySelectorAll("#products .add-btn")


addBtns.forEach(btn => {
    btn.addEventListener("click",function(e){
        e.preventDefault();

        let productId = parseInt(btn.parentNode.previousElementSibling.getAttribute("data-id"));
        let productName = btn.parentNode.firstElementChild.innerText;
        let productPrice = parseInt(btn.previousElementSibling.previousElementSibling.innerText);
        let productImage = btn.parentNode.previousElementSibling.getAttribute("src");

        let existProduct = basket.find(m => m.id == productId);
        

        if(existProduct != undefined){
            existProduct.count++;
        }else{
            basket.push({
                id: productId,
                name: productName,
                price: productPrice,
                image: productImage,
                count: 1
            })
        }



        localStorage.setItem("basket",JSON.stringify(basket));
        getBasketCount(basket);
        getBasketPrice(basket);
    })
});


//#endregion


