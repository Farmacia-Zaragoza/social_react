import $ from 'jquery';

export const action = (node) => {
    console.log('div')
}

	// text container function "scroll-up" and "scroll-down" start here
	// -----------------------------------------------------------------
	//  random id genarator function start (to detact scroll element dynamically)
	//  glabally for thit wedding site
	//  -------------------------------------------------------------------------
	function makeid() {
		var text = '';
		var possible =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

		for (var i = 0; i < 5; i++)
			text += possible.charAt(
				Math.floor(Math.random() * possible.length),
			);

		return text;
	}
	// end ID genarator

	// paragraph scroll-up "upore" function start here
	// -----------------------------------------------
	export function verticalSlideUp(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remHeight = div[0].scrollHeight - $(this).height();
			// var scrollableHeight = remHeight - div.scrollTop();
			var pos = div.scrollTop();
			var remainingTime = ((remHeight - pos) * 100) / 20; //here 5 is a speed
			div.animate(
				{
					scrollTop: remHeight,
				},
				{
					duration: remainingTime,
					easing: 'linear',
				},
			);
		});
	}
	//  end scroll-up function
	// paragraph scroll-down "neche" function start here
	// -----------------------------------------------
	export function verticalSlideDown(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			// var remHeight = div[0].scrollHeight - $(this).height();
			// var scrollableHeight = remHeight - div.scrollTop();
			var pos = div.scrollTop();
			var remainingTime = (pos * 100) / 20; //here 5 is a speed

			div.animate(
				{
					scrollTop: 0,
				},
				{
					duration: remainingTime,
					easing: 'linear',
				},
			);
		});
    }
    
    //stop scroll
    export function stopTabScroll(node) {
        $(node).stop();
    }

    //  end scroll-down function
    

    // horizontal lang scroll-right"upore" function start here
	// -----------------------------------------------
	export function horizontalSlideRight(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remWidth = div[0].scrollWidth - $(this).width();
			var scrollableWidth = remWidth - div.scrollLeft();
			var pos = div.scrollLeft();
			var remainingTime = ((scrollableWidth - pos) * 100) / 10; //here 5 is a speed
			div.animate(
				{
					scrollLeft: remWidth,
				},
				{
					duration: remainingTime,
					easing: 'linear',
				},
			);
		});
    }
    
    // horizontal lang scroll-right"upore" function start here
	// -----------------------------------------------
	export function horizontalSlideleft(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			// var remWidth = div[0].scrollWidth - $(this).width();
			// var scrollableWidth = remWidth - div.scrollLeft();
			// var pos = div.scrollLeft();
			// var remainingTime = ((scrollableWidth - pos) * 100) / 5; //here 5 is a speed
			div.animate(
				{
					scrollLeft: 0,
				},
				{
					duration: 1500,
					easing: 'linear',
				},
			);
		});
	}


	// paragraph fast-scroll-up "upore" function start here
	// -----------------------------------------------
	export function fastVerticalSlideUp(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remHeight = div[0].scrollHeight - $(this).height();
			// var scrollableHeight = remHeight - div.scrollTop();
			var pos = div.scrollTop();
			var remainingTime = ((remHeight - pos) * 100) / 5; //here 5 is a speed
			div.animate(
				{
					scrollTop: remHeight,
				},
				{
					duration: 500,
					easing: 'linear',
				},
			);
		});
	}

	// paragraph fast-scroll-down "neche" function start here
	// -----------------------------------------------
	export function fastVerticalSlideDown(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			// var remHeight = div[0].scrollHeight - $(this).height();
			// var scrollableHeight = remHeight - div.scrollTop();
			var pos = div.scrollTop();
			var remainingTime = (pos * 100) / 5; //here 5 is a speed

			div.animate(
				{
					scrollTop: 0,
				},
				{
					duration: 500,
					easing: 'linear',
				},
			);
		});
	}
	

	// horizontal lang scroll-right"upore" function start here
	// -----------------------------------------------
	export function fastHorizontalSlideRight(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			var remWidth = div[0].scrollWidth - $(this).width();
			var scrollableWidth = remWidth - div.scrollLeft();
			var pos = div.scrollLeft();
			var remainingTime = ((scrollableWidth - pos) * 100) / 20; //here 5 is a speed
			div.animate(
				{
					scrollLeft: remWidth,
				},
				{
					duration: 500,
					easing: 'linear',
				},
			);
		});
    }
    
    // horizontal lang scroll-right"upore" function start here
	// -----------------------------------------------
	export function fastHorizontalSlideleft(node) {
		$(node).each(function() {
			let id = makeid();
			var div = $(this);
			div.stop();
			$(this).attr('id', id);
			// var remWidth = div[0].scrollWidth - $(this).width();
			// var scrollableWidth = remWidth - div.scrollLeft();
			// var pos = div.scrollLeft();
			// var remainingTime = ((scrollableWidth - pos) * 100) / 5; //here 5 is a speed
			div.animate(
				{
					scrollLeft: 0,
				},
				{
					duration: 500,
					easing: 'linear',
				},
			);
		});
	}