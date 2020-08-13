// function checks the word count in the text area, if tweet is over 140 characters, the number will turn red
$(document).ready(function() {
  console.log("Document is READY.....");


  $('#tweet-text').on('keyup', function() {
    let tweetLength = this.value.length;

    let counter = $(this).parent().children().children('.counter');

    counter.html(140 - tweetLength);
  
    if (tweetLength > 140) {
      counter.addClass('negative');
    } else {
      counter.removeClass('negative');
    }

  });
});
