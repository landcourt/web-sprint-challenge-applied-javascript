/* eslint-disable no-unused-vars */
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cards = axios.get('https://lambda-times-backend.herokuapp.com/articles')
 console.log(cards)



 function constructor(fun) {
     let container3 = document.createElement('div')
     let div2 = document.createElement('div')
     let div3 = document.createElement('div')
     let div4 = document.createElement('div')
     let img = document.createElement('img')
     let span = document.createElement('span')

     container3.classList.add('card')
     div2.classList.add('headline')
     div3.classList.add('author')
     div4.classList.add('img-container')

     div2.textContent = fun.headline
     img.src = fun.authorPhoto
     span.textContent = `By ${fun.authorName}`

     container3.addEventListener('click', (event) => {
         console.log(fun.headline)
     })
     container3.append(div2,div3)
     div3.append(div4,span)
     div4.append(img)

     return container3

 }


 const entryPoint = document.querySelector('.cards-container')

 cards.then((response => {
     response.data.articles.bootstrap.forEach(dolly => {
         const article = constructor(dolly)
         entryPoint.appendChild(article)

     })
 }))

 cards.then((response => {
     response.data.articles.javascript.forEach(ariana => {
         const article = constructor(ariana)
         entryPoint.appendChild(article)

     })
 }))

 cards.then((response => {
     response.data.articles.jquery.forEach(beyonce => {
         const article = constructor(beyonce)
         entryPoint.appendChild(article)

     })
 }))

 cards.then((response => {
     response.data.articles.node.forEach(rihanna => {
         const article = constructor(rihanna)
         entryPoint.appendChild(article)

     })
 }))

 cards.then((response => {
     response.data.articles.technology.forEach(gaga => {
         const article = constructor(gaga)
         entryPoint.appendChild(article)

     })
 }))