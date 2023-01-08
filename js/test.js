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

    // Sydney Weather Info
    SydneyWeatherInfo
    $.ajax({
        url: "http://api.weatherapi.com/v1/current.json?key=ed62c75db6ed4fd0bb310114230801&q=Sydney&aqi=no",
        method: "GET",
        data: {},
        dataType: "JSON",
        success: function (data) {
            window.dataWeather = data;
            $country = data.location.country;
            $name = data.location.name;
            $region = data.location.region;
            $conditionText = data.current.condition.text;
            $image = data.current.condition.icon;
            $('#SydneyWeatherInfo').append('<h3>' + $country + '</h3><br/><h2>'+$name+'</h2><br/><h1>'+$region+'</h1><br/><p>'+$conditionText+'</p><br/><img src =' + $image + '></img><br/>');
        }
    });
});