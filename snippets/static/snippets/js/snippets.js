( () => {
    
    // Fetch JSON data and populate a list...
    $.getJSON("snippets", function(itemList) {
        $.each(itemList, function(i, item) {
            let $item = $('<div>').addClass("thumbnail col-md-3");

            $item.append($('<h3>').text(item.title));
            $item.append( $('<pre>').text(item.code));

            $("#snippet").append($item);
        })

    })








})();