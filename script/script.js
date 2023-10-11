const title = document.getElementsByClassName('card-title')[0]
const text = document.getElementsByClassName('card-text')[0]


fetch('https://striveschool-api.herokuapp.com/books')
.then(res=>res.json())
.then((bookData)=>{
    title.innerText = bookData[0].title
    text.innerText = bookData[0].category + '  ' + bookData[0].price
})