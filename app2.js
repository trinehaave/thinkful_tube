//event listener for submit



YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'
//API call
function getSearchResults(searchTerm, callback) {
	var query = {
		q: searchTerm,
		key: "AIzaSyC3p_ImJqRJUvR58RAqzj8YaAKYpdtGnBk",
		part: "snippet",
		type: "video",
		maxResults: 12,
    r: "json"
	};
	$.getJSON(YOUTUBE_BASE_URL, query, callback);
}

function showResults(data) {

  var resultElement = '';
  if (data.items) {
    data.items.forEach(function(item) {
     resultElement += '<h5>' + item.snippet.title + '</h5>';
     resultElement += '<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '"">' + '<img src="' + item.snippet.thumbnails.medium.url + '" alt ="thumbnail of result">' + '</a>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}

function watchSubmit() {
  $('.js-button').click(function(event) {
		event.preventDefault();
		
		var userInput = $('.js-query').val();
    console.log(userInput);
    	getSearchResults(userInput, showResults);
      $('.js-query').val('');
  });
}

$(function(){
	watchSubmit();
});

