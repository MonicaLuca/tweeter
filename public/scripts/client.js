
const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]


const renderTweets = function(tweets) {
  for (let tweet of tweets){
    $('.tweeter-reel').append(createTweetElement(tweet))
  }
}



const createTweetElement = function(object) {
  let $tweet = `
    <article>
      <header>
        <h1 class="profile">  <img src ="${object.user.avatars}"> ${object.user.name}</h1>
        <h2 class='handle'> ${object.user.handle} </h2> 
       </header>
      <p> ${object.content.text}</p>
      <footer>
        <p class='date'> ${object.created_at}10 days ago </p>
        <i class="material-icons">&#xe3a0; &#xe86a; favorite</i>
      </footer>
    </article>
  `
  return $tweet;
}



$(document).ready(function() {
  renderTweets(tweetData);
});




// $('#tweet-text')