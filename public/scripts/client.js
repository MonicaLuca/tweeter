
//Takes the given info, passes through createTweetElement function to create the proper formatting for HTML, then actually modifies the existing HTML

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

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
        <h1 class="profile">  <img src ="${object.user.avatars}"> ${escape(object.user.name)}</h1>
        <h2 class='handle'> ${escape(object.user.handle)} </h2> 
       </header>
      <p> ${escape(object.content.text)}</p>
      <footer>
        <p class='date'> ${escape(object.created_at)}days ago </p>
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
    $('.error-message').slideUp()
    if ($('#tweet-text').val() === '' || $('#tweet-text').val() === null){
      return $('.error-message').text('ERROR: Please write a tweet before sending!').slideDown();
    } else if ($('#tweet-text').val().length > 140){ 
      return $('.error-message').text('ERROR: Too many characters!').slideDown();
    } else{
      $.post( "/tweets", $('form').serialize(), function () {
        loadtweets();
      });
    }
  });
  
});



