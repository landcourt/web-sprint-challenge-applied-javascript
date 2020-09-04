/* eslint-disable no-unused-vars */
// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('header')

    let div1 = document.createElement('div')
    div1.className = 'date'
   
    div1.textContent = 'SEPT 4 2020'
    div1.style.fontSize = '.5rem'
    div1.style.marginTop = '19%'
    div1.style.marginLeft = '3%'
    

    console.log(div1)

    let div2 = document.createElement('div')
    div2.className = 'lambda'
    div2.style.marginTop = '7%'
    div2.textContent = 'Lambda Times'
    div2.style.fontSize = '3rem'

    let div3 = document.createElement('div')
    div3.className = 'temp'
    div3.textContent = '98\u00B0'
    div3.style.fontSize = '.7rem'
    div3.style.marginTop = '19%'
    div3.style.marginRight = '3%'

    header.appendChild(div1)
    header.appendChild(div2)
    header.appendChild(div3)

    header.style.width = '100%'
    
    header.style.display = 'flex'
    header.style.justifyContent = 'space-between'
    header.style.height = '20vh'
    header.style.borderBottom = '3px solid lightgrey'
    header.style.fontFamily = 'Times New Roman, Times, serif'
    header.style.backgroundColor = 'white'
    // header.style.border = '1px solid grey'
    
    return header
    
}

console.log(Header())

const header = Header(header)




// const header1 = Header('Sept 4 2020')

let container1 = document.querySelector('.header-container')

container1.style.width = '95%'
container1.style.marginTop = '2%'
container1.style.display = 'flex'


container1.appendChild(header)
container1.appendChild()
// container1.appendChild(header1)

console.log(container1)
