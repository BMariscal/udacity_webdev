
/*
 For this quiz, use a jQuery class selector and featuredArticle variable to toggle the 'featured' class!
 */

// don't change this variable!
var featuredArticle;

featuredArticle = $('.featured')
featuredArticle.toggleClass('featured');



/*
 For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

 You must use jQuery's toggleClass method!
 */

// don't change these variable!
var article2, article3;
article2 = $('.featured');
article2.toggleClass("featured");
article3 = article2.next(".article-item");
article3.toggleClass("featured");


/*
 For this quiz, set the href of the <a> in the first nav item to "#1".

 You must use jQuery's attr() method!
 */

// Start with this variable!
var navList;

navList = $('.nav-list').children().first(); //selects the first in the nav-list set;
first = navList.find('a'); //finds the 'a' tag inside the first item;
first.attr('href', '#1'); //sets href = #1 attribute;





/*
 For this quiz, change the font-size of all the article-items to 20px!

 You must use jQuery's css() method!
 */

// Start with this variable!
var articleItems;

articleItems = $('.article-item').css('font-size', '20px');




/*
 For this quiz, use jQuery's val method to make live changes to the 'Cool Articles' <h1>!

 The starter code below creates an event listener that will run any time the input changes.
 For more on events, check the instructor notes.
 */


$('#input').on('change', function() {
    var val;
    val = $('#input').val();
    $('h1').text(val);// Your code goes here!
});


/*
 For this quiz, remove the <ul> from the first article item!

 You must use jQuery's remove() method.
 */

// Start with this variable!
var articleItems, first, find;
first = $('.article-list').children().first();
find = first.find('ul');
articleItems = find.remove('ul');








