/*
 For this quiz, use jQuery's each() method to iterate through the <p>s,
 calculate the length of each one, and add each length to the end of each <p>.

 Also, make sure you don't change the text inside each <p> except to add the length, otherwise your
 length numbers won't be correct!
 */

// Your code goes here!
$(function(){

var allParagraph;


allParagraph = $('.article-list').children().find('p');
//allParagraph.css('font-size', '100px');

var index = 0;
$( allParagraph ).each(function(index) {
    var total = 0;
    total += $( this ).text().length;
    $(this).append('Length:' + total);
});

});