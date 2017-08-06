* jQuery watches one parent element for event on any of its children:


The jQuery event listener examples we've been looking at so far select the target item(s) using jQuery and then attach an event listener to that target directly. But what about when the target doesn't exist yet? This can happen in a lot of situations. For example, if you have a list of items, and you want to listen to clicks on any of them, what happens if you add an extra list item after your page is done?

Be careful when setting up an event listener and then creating the target item afterwards. For example:

<<<<<<< HEAD
$( 'article' ).on( 'click', function() {
    $( 'body' ).addClass( 'selected' );
});

$( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new article </p> </article>' );
=======

    $( 'article' ).on( 'click', function() {
        $( 'body' ).addClass( 'selected' );
    });

    $( 'body' ).append( '<article> <h1>Appended Article</h1> <p>Content for the new article </p> </article>' );
    
>>>>>>> 5b3db328c32b3a312c6d9ceb63a4871b645f8c8a
Clicking on the "appended" article will not add a class to the body because the "appended" article was created after the event listeners were set up. When we targeted the 'article', it didn't exist yet, so jQuery added the click listener to all ZERO of our articles!

But there is a way to make this scenario work by using Event Delegation. We'll listen to events that hit a parent element, and pay attention to the target of those events. Event Delegation with jQuery uses the same code we've been using, but passes an additional argument to the "on" method.

<<<<<<< HEAD
$( '.container' ).on( 'click', 'article', function() { … });
=======
    $( '.container' ).on( 'click', 'article', function() { … });
    
>>>>>>> 5b3db328c32b3a312c6d9ceb63a4871b645f8c8a
...this code tells jQuery to watch the .container element for clicks, and then if there are any, check if the click event's target is an article element.

Another advantage in using Event Delegation is that you can use it to consolidate the number of event listeners. For example, what if you had 1,000 list items on a page:

<<<<<<< HEAD
<ul id="rooms">
    <li>Room 1</li>
    <li>Room 2</li>
            .
            .
            .
    <li>Room 999</li>
    <li>Room 1000</li>
</ul>
The following code would set up an event listener for each 1,000 event listeners - one for each list item...that's 1,000 event listeners!

$( '#rooms li' ).on( 'click', function() {
    ...
});
Alternatively, we can use jQuery's event delegation to set the event listener on just one element (the ul#rooms) and check if the target element is a list item;

$( '#rooms' ).on( 'click', 'li', function() {
    ...
});
To find out more, check out jQuery's page on [Event Delegation.](https://learn.jquery.com/events/event-delegation/)
=======
    <ul id="rooms">
        <li>Room 1</li>
        <li>Room 2</li>
                .
                .
                .
        <li>Room 999</li>
        <li>Room 1000</li>
    </ul>
The following code would set up an event listener for each 1,000 event listeners - one for each list item...that's 1,000 event listeners!

    $( '#rooms li' ).on( 'click', function() {
        ...
    });
Alternatively, we can use jQuery's event delegation to set the event listener on just one element (the ul#rooms) and check if the target element is a list item;

    $( '#rooms' ).on( 'click', 'li', function() {
        ...
    });
To find out more, check out jQuery's page on [Event Delegation.](https://learn.jquery.com/events/event-delegation/)
>>>>>>> 5b3db328c32b3a312c6d9ceb63a4871b645f8c8a
