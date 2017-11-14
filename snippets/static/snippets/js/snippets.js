( () => {
    // Fetch JSON data and populate a list...

    $.getJSON("snippets", function(itemList) {
        $.each(itemList, function(i, item) {
            let $item = $('<div>').addClass("thumbnail col-md-3");
            $.each(item, function(key,val) {
                $item.append($("<p>" + key + ":" + val + "</p>"));
            })
            $("#snippet").append($item);
        })

    })








})();