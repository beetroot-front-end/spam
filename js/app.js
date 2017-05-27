(function($){
	let search = $('.search'),
		container = $('.container'),
		list = $('.container_list-notActive'),
		song = $('.container_song-outside'),
		controller = $('.controller'),
		search_input = $('.search_input'),
		value = search_input.val(),
		action = $('.container_icon_action'),
		info = $('.container_list-info'),
		name = $('.container_list-name'),
		like = $('.container_icon_like'),
		liImg = $('.container_list-img');

		search.fadeIn(1500);

		action.on('click', function() {
			name.toggleClass('invisible');
			info.toggleClass('invisible');
		})


		search_input.keyup(function() {
			let search_input = $('.search_input'),
				value = search_input.val();
			if (value.trim().length) {
				container.removeClass('opacity');
				search.removeClass('search_clear')
			  		  	.addClass('search_full');
			
		} else { 
			container.addClass('opacity');
			list.removeClass('container_list')
				.addClass('container_list-notActive');
			song.removeClass('container_song');
			song.addClass('container_song-outside');
			search.removeClass('search_full')
				  .addClass('search_clear');
			controller.addClass('invisible');
			info.addClass('invisible');
			name.removeClass('invisible');
			controller.css({"display": "none"});
	}
		})
	name.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.removeClass('container_song-outside');
		song.addClass('container_song');
		controller.fadeIn(1000);
		controller.css({"display": "flex"});
	})
	info.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.css({"display": "flex"});
		controller.fadeIn(1000);
		controller.css({"display": "flex"});
	})
	like.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.css({"display": "flex"});
		controller.fadeIn(1000);
		controller.css({"display": "flex"});
	})
	liImg.on('click', function(){
		list.removeClass('container_list-notActive')
			.addClass('container_list');
		song.css({"display": "flex"});	
		controller.fadeIn(1000);
		controller.css({"display": "flex"});
	})


	let stopButton = $('.stopButton');

	stopButton.on('click', function() {
		stopButton.toggleClass("playButton stopButton");
	})

}(jQuery));