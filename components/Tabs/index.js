// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let link = 'https://lambda-times-backend.herokuapp.com/topics';

function tabTopics (link) {

    axios.get(link)
    .then( axiosData => {

        let topicContent = axiosData["data"]["topics"];
        // console.log(topicContent);
        topicContent.forEach((topic) => {
            createTabs(topic);
        })
    })
     .catch( error => {
         console.log("Error:", error); 
     })
};
   
function createTabs(tabTopic){
    let topics = document.querySelector('.topics')
    let tab = document.createElement('div');
    tab.classList.add('tab'); 
    tab.textContent = tabTopic;

    topics.appendChild(tab);
 };

// Return tab topics
tabTopics(link);