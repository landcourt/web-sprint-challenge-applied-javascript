/* eslint-disable no-unused-vars */
// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// const earl = 'https://lambda-times-api.herokuapp.com/topics'

// console.log(earl.response.data.topics)

// let axios1 = axios.get('https://lambda-times-api.herokuapp.com/topics')




    

let container2 = document.querySelector('.tabs')
container2.style.width = '95%'

axios.get('https://lambda-times-backend.herokuapp.com/topics')
 .then(okay => {
    console.log(okay);
    okay.data.topics.forEach(element => {
        const topic = document.createElement('div')
        topic.classList.add('tab')
        topic.textContent = element
        topic.style.border = '1px solid black'
        topic.addEventListener('mouseenter', (event) => { event.target.style.backgroundColor = 'white'})
        topic.addEventListener('mouseenter', (event) => {event.target.style.color = 'dimgrey'})
        topic.addEventListener('mouseleave', (event) => {event.target.style.backgroundColor = 'dimgrey'})
        topic.addEventListener('mouseleave', (event) => {event.target.style.color = 'white'})
        
        let container2 = document.querySelector('.topics').appendChild(topic)
        container2.style.width = '95%'

        let title = document.querySelector('.title')
        title.style.width = '20%'
    })
 })
 .catch(notOkay => {
    console.log(notOkay)
 }) 


