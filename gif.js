
var topics = ["Happy", "Sad", "Mad", "Hate", "Disappointment", "Love", "Annoyed", "Surprised", "Embarrassed","Peaceful"]
console.log(topics);

      function renderButtons() {
     
        $("#gifs-here").empty();
        
        for (var i = 0; i < topics.length; i++) {
    
          var a = $("<button>");
          
          a.addClass("gif");
          
          a.attr("data-name", topics[i]);
          
          a.text(topics[i]);
          
          $("#gifs-here").append(a);
        }
      }
      
      $("#add-gif").on("click", function(event) {
       
        var gifs = $("#gif-input").val().trim();
       
        topics.push(gifs);
        
        renderButtons();
      });
   
      renderButtons();


       var input = $('#add-gif');
        
        var api ='http://api.giphy.com/v1/gifs/search?q='
        
        var apiKey ='&api_key=dc6zaTOxFJmzC'
         var queryURL = api + input.val() + apiKey;
      
       function searchGif() {
        queryURL = api + input.val() + apiKey;
        loadJSON(url, gotData);
      }
       $.ajax({
          url: queryURL,
          method: "GET"
        })
         .done(function(response) {
          var searchResults = response.data;
          for (var i = 0; i < searchResults.length; i++) {
            var gifDiv = $("<div class='item'>");
            var rating = searchResults[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var emotionImage = $("<img>");
            emotionImage.attr("src", searchResults[i].images.fixed_height.url);
            gifDiv.prepend(p);
            gifDiv.prepend(emotionImage);
            $("#gifs-here").prepend(gifDiv);
          }
        });



















