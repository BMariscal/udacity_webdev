
/*
 For this quiz, you'll need to add to the DOM tree that already exists.

 '#family2' should be a sibling of and come after '#family1'. '#bruce' should be the only immediate child
 of '#family2'. '#bruce' should have two <div>s as children, '#madison' and '#hunter'.
 */

// Your code goes here!
var family2 = $('<div id="family2"><h1>Family 2</h1></div>');
family2.insertAfter("#family1");
family2.append('<div id="bruce">Bruce</div>');
$('#bruce').append('<div id="madison">Madison</div>');
$('#bruce').append('<div id="hunter">Hunter</div>');
