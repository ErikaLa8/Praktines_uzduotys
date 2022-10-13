const backButton = document.querySelector('#goBack');
backButton.addEventListener('click', () => {location.href = "../index.html"})

const main = document.querySelector('main');
const itemID = sessionStorage.getItem('productID');

const updateUI = (data) => {

    data.forEach( el => {
        let itemBox = 
        `<div class="itemWindow" id="${el.id}">
            <img src="${el.img}" class="itemImage">
            <div class="itemInfo">
                <div class="name">${el.name}</div>
                <div class="price">Price: ${el.price}</div>
                <div class="city">${el.location}</div>
                <div class="description">${el.description}</div>
            </div>
            <button class="removeItem" onclick="removeFn()"> Remove </button>
        </div>
       `
        main.innerHTML += itemBox;
    })
}

fetch(`https://63471c8b04a6d45757a0babd.mockapi.io/Shop/shop?id=${itemID}`)
.then(data => data.json())
.then(data => updateUI(data))


const removeFn = () => {
    setTimeout(() => {
        alert("Item has been deleted.");
        location.href = "../index.html";
    }, 2000);

    fetch(`https://63471c8b04a6d45757a0babd.mockapi.io/Shop/shop/${itemID}`, {method: 'DELETE'})
}