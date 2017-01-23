
var YouTube_BASE_URL = 'https://www.googleapis.com/youtube/v3/search'

function getDataFromAPI(searchTerm, callback) {
	var query = {
		q: searchTerm,
		part: 'snippet',
		key: 'AIzaSyCoG1qUHVTZ1c0cdAI-imqBTuMrlROnfCE'
	}

	$.getJSON(YouTube_BASE_URL, query, callback);
}

function displayYouTubeSearchData(data){
	var resultElement = '';
	if(data.kind) {
		data.items.forEach(function(item) {
			resultElement += '<img src="' + item.snippet.thumbnails.medium.url + '" class="thumbnail-result">';
		});
	} else {
		resultElement += '<p>No results</p>';
	}
	$('.js-search-results').html(resultElement);
}

function watchSearch(){
	$('.js-input-search-form').submit(function(event) {
		event.preventDefault();
		var query = $(this).find('.js-input-search-text').val();
		getDataFromAPI(query, displayYouTubeSearchData);
	});
}

$(function(){
	watchSearch();
	console.log("Hello world");
})