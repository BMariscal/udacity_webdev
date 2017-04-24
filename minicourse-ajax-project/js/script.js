
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var street = $('input#street').val();
    var city = $('input#city').val();
    var address = street + ', ' + city;

    $greeting.text( 'So you want to live at ' + address + '?');

    $body.append('<img class="bgimg" src="http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+ street + city +'">');

    // NYTimes AJAX request goes here
    var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + city + '&sort=newest&api-key=b882cbd65750466b972f51071cfbeae0';



    $.getJSON(url, function( result) {
        $nytHeaderElem.text('New York Times Articles About ' + city);
        var articleTitle = '';
        var snippet ='';
        var articleUrl = '';
        var objectParse = result.response.docs;

        for (var i = 0; i < objectParse.length; i++){


            articleTitle = result.response.docs[i].headline.main;
            articleUrl = result.response.docs[i].web_url;
            snippet = result.response.docs[i].snippet;
            //$('#nytimes-articles').append("<li>"+ "<a style = 'text-decoration: none;' target='_blank' href=" + finalurl +">"+ final + "</a>" +"</li>"+ "<br>");
            $nytElem.append('<li class="article">' + '<a style = "text-decoration: none;color: mediumblue" " target="_blank" href=' + articleUrl + ' >' + articleTitle + '</a>' + '<p>' + snippet + '</p>' + '</li>');



        }


    }).error(function(e){
        $nytHeaderElem.text('Sorry, The New York Times Articles Could Not Be Loaded.');
    });



    var wikipediaURL = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&format=json&callback=wikiCallback';

    //error handling 1
    var wikiRequestTimeout = setTimeout(function() {
        $wikiElem.text("Failed to get Wikipedia Resources.");
    }, 8000); //after 8 seconds

    $.ajax({
        url: wikipediaURL,
        dataType: "jsonp", //https://www.sitepoint.com/jsonp-examples/
        success: function( response ) {
            var articleList = response[1];

            for(var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a style = "text-decoration: none; color: mediumblue" target="_blank" href="' + url + '">' + articleStr + '</a></li>');
            };
            //error handling 2
            clearTimeout(wikiRequestTimeout);//clears or stops timeout
        }
    }) ;


    return false;
};

$('#form-container').submit(loadData);

//Speeding Up The First Render:
//request generic html -> request unique html -> render generic html -> render unique html


//https://en.wikipedia.org/wiki/JSONP
