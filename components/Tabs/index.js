// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then(response => {
    const [div, div1, div2, div3, div4] = ['div', 'div', 'div', 'div', 'div']
    .map(element => 
        document.createElement(element)
    )
    div.classList.add('tab')
    div1.classList.add('tab')
    div2.classList.add('tab')
    div3.classList.add('tab')
    div4.classList.add('tab')

    div.textContent = response.data.topics[0]
    div1.textContent = response.data.topics[1]
    div2.textContent = response.data.topics[2]
    div3.textContent = response.data.topics[3]
    div4.textContent = response.data.topics[4]

    document.querySelector('.topics').appendChild(div);
    document.querySelector('.topics').appendChild(div1);
    document.querySelector('.topics').appendChild(div2);
    document.querySelector('.topics').appendChild(div3);
    document.querySelector('.topics').appendChild(div4);
})
.catch(err => console.log(err))