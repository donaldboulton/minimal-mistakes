// search.js
$(function(Query) {
	'use strict';

	var query = new Query();

	$('.search').on('submit',submit);	

	function submit(e) {
		// stop the form from doing its default behavior
		e.preventDefault();

		// set the query, and go to the search page with our query URL
		query
		.set($('.search-box').val().trim())
		.goToLocation('/search');
	}
}(Query));

