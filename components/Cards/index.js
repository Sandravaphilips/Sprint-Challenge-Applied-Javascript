// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createComponent(articleTopic) {
    let articleTopicArray = articleTopic.map(article => {
        const [div, div1, div2, div3, img, span] = ['div', 'div', 'div', 'div', 'img', 'span'].map(
            element => document.createElement(element)
        );
    
        div.classList.add('card');
        div1.classList.add("headline");
        div2.classList.add('author');
        div3.classList.add("img-container");
    
        img.setAttribute('src', article.authorPhoto);
    
        div1.textContent = article.headline;
        span.textContent = `By: ${article.authorName}`;

        div3.appendChild(img);
        div2.appendChild(div3);
        div2.appendChild(span);
        div.appendChild(div2);
        div.appendChild(div1);

        return div;
    });

    return articleTopicArray; 
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    const cardsContainer = document.querySelector('.cards-container')
    let javascriptArray = createComponent(response.data.articles.javascript)
    cardsContainer.appendChild(javascriptArray[0])
    cardsContainer.appendChild(javascriptArray[1])
    cardsContainer.appendChild(javascriptArray[2])
    cardsContainer.appendChild(javascriptArray[3])
    
    let bootstrapArray = createComponent(response.data.articles.bootstrap)
    cardsContainer.appendChild(bootstrapArray[0])
    cardsContainer.appendChild(bootstrapArray[1])
    cardsContainer.appendChild(bootstrapArray[2])

    let technologyArray = createComponent(response.data.articles.technology)
    cardsContainer.appendChild(technologyArray[0])
    cardsContainer.appendChild(technologyArray[1])
    cardsContainer.appendChild(technologyArray[2])

    let jqueryArray = createComponent(response.data.articles.jquery)
    cardsContainer.appendChild(jqueryArray[0])
    cardsContainer.appendChild(jqueryArray[1])
    cardsContainer.appendChild(jqueryArray[2])

    let nodeArray = createComponent(response.data.articles.node)
    cardsContainer.appendChild(nodeArray[0])
    cardsContainer.appendChild(nodeArray[1])
    
})
.catch(err => console.log(err));