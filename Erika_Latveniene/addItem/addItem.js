const backButton = document.querySelector('#goBack');
backButton.addEventListener('click', () => {location.href = "../index.html"})

const addItem = () => {
    let name = document.querySelector('#name').value;
    let price = document.querySelector('#price').value;
    let location = document.querySelector('#location').value;
    let img = document.querySelector('#img').value;
    let description = document.querySelector('#description').value;

    let itemsForm = 
        {
         img: img,
         price: price,
         location: location,
         description: description,
         name: name
        }

        console.log(itemsForm)
    fetch('https://63471c8b04a6d45757a0babd.mockapi.io/Shop/shop', {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(itemsForm),
      })
    .then(alert("Item has been added."))
}