
	$(document).ready(function () {
	  $('#get_cards').click(function () {
	    $("button").removeClass("selected");
	    $(this).addClass("selected");
			$("#height_btn").css("display", "none");
			$("#suit_btn").css("display", "block");
	    var cardsAPI = "https://deckofcardsapi.com/api/deck/new/draw/?count=8"

	    function displayCards(data) {
	      var cardHTML = '<div>';
	      $.each( data.cards, function (i, card) {
	        cardHTML += '<a href="' + card.image + '" title=" Value : ' + card.value + '<br> <br>Suit : ' + card.suit + '<br> <br> Code : ' + card.code + '" data-suit="' + card.suit + '" class="cards">';
	        cardHTML += '<img src="' + card.image + '" class="Photos"></a>';
	      });
	      cardHTML += '</div>';
	      $('#photos').html(cardHTML);
	    };
	    $.getJSON(cardsAPI, displayCards);
	  });

	$('#suit_btn').click(function() {
		  $("#photos a").sort(sort_cards).appendTo('#photos');
		  function sort_cards(a, b) {
		    return ($(b).data('suit')) < ($(a).data('suit')) ? 1 : -1;
		  }
		});


		$('#star_wars').click(function () {
			$("button").removeClass("selected");
			$(this).addClass("selected");
			$("#suit_btn").css("display", "none");
			$("#height_btn").css("display", "block");
			var starWarsAPI = "https://swapi.co/api/people/?count=1"

			function displayWars(data) {
				var warsHTML = '<div>';
				$.each( data.results, function (i, result) {
					warsHTML += '<a href="img/starwars_551c43f4.jpeg" title=" Name : ' + result.name + '<br> <br>Height : ' + result.height + '<br> <br> Eye color : ' + result.eye_color + ' <br> <br> Birth Year : ' + result.birth_year + '" data-height="' + result.height + '" class="Stats-sw"> ' + result.name + '';
					warsHTML += '<img src="" alt=" " class="no_disply"></a>';
				});
				warsHTML += '</div>';
				$('#photos').html(warsHTML);
			};
			$.getJSON(starWarsAPI, displayWars);
		});

		$('#height_btn').click(function() {
				$("#photos a").sort(sort_wars).appendTo('#photos');
				function sort_wars(a, b) {
					return ($(b).data('height')) < ($(a).data('height')) ? 1 : -1;
				}
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
