// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .


var textArray = ['Rails is a web application development framework written in the Ruby programming language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started.','JavaScript is the programming language of HTML and the Web.JavaScript is easy to learn.Because JavaScript code can run locally in a user\'s browser (rather than on a remote server), the browser can respond to user actions quickly, making an application more responsive.','The PHP Hypertext Preprocessor (PHP) is a programming language that allows web developers to create dynamic content that interacts with databases. PHP is basically used for developing web based software applications. This tutorial helps you to build your base with PHP.'];

$(document).ready(function()
{
  var randomIndex = Math.floor(Math.random() * textArray.length);
  var randomElement = textArray[randomIndex];
  $('#text').html(randomElement);

  var start_time = 0;
  var max_time = 60;
  var total_words = 0;
  // array
  var neededValues = randomElement.split(" ");
  //total count of given text to be typed
  var count = neededValues.length;
  var typedString = "";
  var rightLetter = 0;
  var finalCount = 0;

  $('#word_count').one('keypress', function() {
    //return time in millisecond
    start_time = Date.now()
  });

  function checkCount(actual, typed) {
    var rightLetter = 0;
    for(i = 0; i < typed.length; i++) {
      if (randomElement[i] == typedString[i]){
        rightLetter+= 1;
      }
    }
    return rightLetter;
  }

  $('#word_count').bind('input', function(e) {
    typedString = this.value;
    if (typedString != ""){
      finalCount = typedString.split(" ").length;
    }
    else{
      finalCount = 0;
    }
    rightLetter =  checkCount(randomElement, typedString);
    $('#display_count').html(finalCount);
    var time = (Date.now() - start_time);
    //time in sec
    var time_sec = Math.floor(time/1000);
    var actual_time = time_sec + " " + "sec";

    if (typedString != ""){
      var percentage = Math.round((rightLetter/typedString.length)*100) + " %"
    }
    else{
     var  percentage = 100 + ' %';
    }
    // var percentage = Math.round((rightLetter/typedString.length)*100) + " %"
    $('#accuracy').html(percentage);
    if (time_sec >= max_time){
      var time_min = Math.floor(time_sec/60);
      var actual_time = time_min + " " + "min";
      var words_per_min = finalCount + " wpm";
      $('#word_count').bind('keypress', function(e) {
        alert('Time completed');
        //If this method is called, the default action of the event will not be triggered
        e.preventDefault();
      });
      $('#display_words').html(words_per_min);
    }
    if (start_time != 0) {
      $('#display_time').html(actual_time);
    }
  });
});