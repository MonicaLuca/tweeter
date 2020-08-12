
//Takes the given info, passes through createTweetElement function to create the proper formatting for HTML, then actually modifies the existing HTML
const renderTweets = function(tweets) {
  $('.tweeter-reel').empty()
  for (let tweet of tweets){
    $('.tweeter-reel').append(createTweetElement(tweet))
  }
}


//Creates the formatting for a given tweet/user in order to modify the existing HTML
const createTweetElement = function(object) {
  let $tweet = `
    <article>
      <header>
        <h1 class="profile">  <img src ="${object.user.avatars}"> ${object.user.name}</h1>
        <h2 class='handle'> ${object.user.handle} </h2> 
       </header>
      <p> ${object.content.text}</p>
      <footer>
        <p class='date'> ${object.created_at}days ago </p>
        <i class="material-icons">&#xe3a0; &#xe86a; favorite</i>
      </footer>
    </article>
  `
  return $tweet;
}


//JQUERY 
$(document).ready(function() {

  const loadtweets = function () {
    $.ajax({url: "/tweets", method: 'GET'}).then(renderTweets); 
  }
  loadtweets()
  

  $('form').submit(function(event) {
    event.preventDefault();
    if ($('#tweet-text').val() === '' || $('#tweet-text').val() === null){
      return alert("ERROR: please write a tweet");
    } else if ($('#tweet-text').val().length > 140){ 
      return alert("ERROR: Tweet is too long")
    } else{
      $.post( "/tweets", $('form').serialize(), function () {
        loadtweets()
      });
    }
  });
  
});



