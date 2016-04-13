$(document).ready(function() {

//Create array to hold names of work photos 
	var work = [
		'work1',
		'work2',
		'work3',
		'work4',
		'work6',
		'work7'
	];

function createWorkHTML (workPhoto) {
		var imageHTML = '<img id="carousel" src="images/' + workPhoto.toLowerCase() + '.png" />';

		return imageHTML;
	}

	var workImageHTML = [];

	for (var i = 0; i < work.length; i++) {
		var workPhoto = work[i];
		var html = createWorkHTML(workPhoto);

		workImageHTML.push(html);
	}

	var carouselIndex = 0;

	$('#next').click(showNextImage);
	$('#previous').click(showPreviousImage);


	function showNextImage() {
		carouselIndex++;

		if (carouselIndex > workImageHTML.length - 1) {
			carouselIndex = 0;
		}

		var nextWorkImageHTML = workImageHTML[carouselIndex];

		$('#carousel-view').html(nextWorkImageHTML);
		$('nextWorkImageHTML').slide({left: 0});
	}

	function showPreviousImage() {
		carouselIndex--;

		if (carouselIndex < 0) {
			carouselIndex = workImageHTML.length - 1;
		}

		var nextWorkImageHTML = workImageHTML[carouselIndex];

		$('#carousel-view').html(nextWorkImageHTML);
	}

	});
