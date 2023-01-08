$(document).ready(function () {
    $name = "";
    // Section Top Stories
    $.ajax({
        url: "https://newsapi.org/v2/top-headlines?country=us&apiKey=00f7b498d6174daeac53548a343345de",
        method: "GET",
        data: { name: $name },
        dataType: "JSON",
        success: function (data) {
            window.dataArticles = data;
            $.each(data.articles, function (index, value) {
                var title = data.articles[index].title;
                var image = data.articles[index].urlToImage;
                // $('#demo').append(title+"<br/>"+image+"<br/>"+"<br/>");
                $('#demo').append('<h2>' + title + '</h2><br/><img src =' + image + '></img><br/>');
            });
        }
    });
});