
	$(document).ready(function () {
	  $('button').click(function () {
	    $("button").removeClass("selected");
	    $(this).addClass("selected");
	    var cardsAPI = "https://deckofcardsapi.com/api/deck/new/draw/?count=8"

	    function displayCards(data) {
	      var cardHTML = '<div>';
	      $.each( data.cards, function (i, card) {
	        cardHTML += '<a href="' + card.image + '" title=" Value : ' + card.value + '<br> <br>Suit : ' + card.suit + '<br> <br> Code : ' + card.code + '">';
	        cardHTML += '<img src="' + card.image + '" class="Photos"></a>';
	      });
	      cardHTML += '</div>';
	      $('#photos').html(cardHTML);
	    };
	    $.getJSON(cardsAPI, displayCards);
	  });

	}); // end ready



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
