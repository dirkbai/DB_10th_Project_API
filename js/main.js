$('.Photos_wrapper').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
		}

	});

	$(document).ready(function () {
	  $('button').click(function () {
	    $("button").removeClass("selected");
	    $(this).addClass("selected");
	    var flickerAPI = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
	    // var animal = "cat";
	    // var flickrOptions = {
	    //   tags: animal,
	    //   format: "json"
	    // };
	    function displayPhotos(data) {
	      var photoHTML = '<div>';
	      $.each( data.items, function (i, photo) {
	        photoHTML += '<a href="' + photo.link + '" class="image">';
	        photoHTML += '<img src="' + photo.media.m + '"></a>';
	      });
	      photoHTML += '</div>';
	      $('#photos').html(photoHTML);
	    };
	    $.getJSON(flickerAPI, displayPhotos);
	  });

	}); // end ready
