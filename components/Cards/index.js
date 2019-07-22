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

let getRequest = 'https://lambda-times-backend.herokuapp.com/articles';

function articleData (getRequest) {

    // Get article data from url
    axios.get(getRequest)
    .then( axiosData => {

          // Get articles  
          let articleContent = axiosData["data"]["articles"];      
        console.log(articleContent);


          let articleName = Object.entries(articleContent);
          console.log(articleName)
        
          articleName.forEach((articleContent) => {
            createArticle(articleContent)
        })
    })
     .catch( error => {
         console.log("Error:", error);
     })
};

function createArticle(articleContent) {

        let cards = document.querySelector(".cards-container");

        let card = document.createElement('div');
        card.classList.add('card'); 
        cards.appendChild(card)

        let headline = document.createElement('div');
        headline.classList.add('headline'); 
        headline.textContent = articleContent['headline'];

        let author = document.createElement('div');
        author.classList.add('author'); 
        author.innerText = articleContent['authorName'];

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');

        let by = document.createElement('span');

        let img =  document.createElement('img');
        img.src = articleContent['authorPhoto'];    
        imgContainer.appendChild(img);     
        author.appendChild(imgContainer);
        author.appendChild(by);
        headline.appendChild(author);

        card.appendChild(headline);

       }

// return articles
articleData(getRequest);