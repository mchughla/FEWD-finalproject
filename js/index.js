    
//create function for navigation clicks to scroll and change color
$(document).ready(function() {
    $(".scroll").click(function(event) {
    event.preventDefault();
    $('html,body').animate( { scrollTop:$(this.hash).offset().top } , 1000);
    } );
  });

//Create array to hold names of work photos 
$(document).ready(function() {
	 event.preventDefault();
	var work = [
		'work1',
		'work2',
		'work3',
		'work4',
		'work6',
		'work7'
	];

function createWorkHTML (workPhoto) {
		var imageHTML = '<img id="work" src="images/work/' + workPhoto.toLowerCase() + '.png" />';
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
		event.preventDefault();
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

//Create array to hold names of travel photos 
$(document).ready(function() {
	 event.preventDefault();
	var travel = [
		'travel1',
		'travel3',
		'travel4',
		'travel5',
		'travel6'
	];

function createTravelHTML (travelPhoto) {
		var imageHTML = '<img id="travel" src="images/travel/' + travelPhoto.toLowerCase() + '.jpg" />';

		return imageHTML;
	}

	var travelImageHTML = [];

	for (var i = 0; i < travel.length; i++) {
		var travelPhoto = travel[i];
		var html = createTravelHTML(travelPhoto);

		travelImageHTML.push(html);
	}

	var carouselIndex = 0;

	$('#next-travel').click(showNextImage);
	$('#previous-travel').click(showPreviousImage);


	function showNextImage() {
		event.preventDefault();
		carouselIndex++;

		if (carouselIndex > travelImageHTML.length - 1) {
			carouselIndex = 0;
		}

		var nextTravelImageHTML = travelImageHTML[carouselIndex];

		$('#carousel-view-travel').html(nextTravelImageHTML);
		$('nextTravelImageHTML').slide({left: 0});
	}

	function showPreviousImage() {
		event.preventDefault();
		carouselIndex--;

		if (carouselIndex < 0) {
			carouselIndex = travelImageHTML.length - 1;
		}

		var nextTravelImageHTML = travelImageHTML[carouselIndex];

		$('#carousel-view-travel').html(nextTravelImageHTML);
	}

	});

	//Create array to hold names of food photos 
$(document).ready(function() {
	 event.preventDefault();
	var food = [
		'food1',
		'food2',
		'food3',
		'food5',
		'food6',
		'food7',
		'food8'
	];

function createFoodHTML (foodPhoto) {
		var imageHTML = '<img id="food" src="images/food/' + foodPhoto.toLowerCase() + '.jpg" />';

		return imageHTML;
	}

	var foodImageHTML = [];

	for (var i = 0; i < food.length; i++) {
		var foodPhoto = food[i];
		var html = createFoodHTML(foodPhoto);

		foodImageHTML.push(html);
	}

	var carouselIndex = 0;

	$('#next-food').click(showNextImage);
	$('#previous-food').click(showPreviousImage);


	function showNextImage() {
		event.preventDefault();
		carouselIndex++;

		if (carouselIndex > foodImageHTML.length - 1) {
			carouselIndex = 0;
		}

		var nextFoodImageHTML = foodImageHTML[carouselIndex];

		$('#carousel-view-food').html(nextFoodImageHTML);
		$('nextFoodImageHTML').slide({left: 0});
	}

	function showPreviousImage() {
		event.preventDefault();
		carouselIndex--;

		if (carouselIndex < 0) {
			carouselIndex = foodImageHTML.length - 1;
		}

		var nextFoodImageHTML = foodImageHTML[carouselIndex];

		$('#carousel-view-food').html(nextFoodImageHTML);
	}

	});
