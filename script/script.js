const myRow = document.getElementsByClassName('row')[0]

fetch('https://striveschool-api.herokuapp.com/books')
.then(res=>res.json())
.then((bookData)=>{
    console.log(bookData)
    bookData.forEach(book => {
        const newCol = document.createElement('div')
        newCol.classList.add('col','col-12','col-sm-6','col-md-4','col-lg-3','col-xl-2')
        // const imgUrl = book.img
        newCol.innerHTML=`<div class="card" style="height: 500px">
        <img src="${book.img}" class="card-img-top" height=60%>
        <div class="card-body">
          <h5 class="card-title">${book.price}</h5>
          <p class="card-text">${book.title}</p>
          <a href="#" class="btn btn-primary">Discard</a>
        </div>
      </div>`
        myRow.appendChild(newCol)
    });
})


const deleteMe = () => {
    
}