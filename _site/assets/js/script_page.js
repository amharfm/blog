var header;
function load (){
	if (document.getElementsByTagName('header')[0] && !document.getElementsByTagName('header')[0].classList.value){
		header = document.getElementsByTagName('header')[1];
		$('header').css('background-color', 'transparent');
		$('header').css('background-image', 'none');
		var bg = document.createElement('iframe');
			bg.id = "header_mod";
			bg.style.zIndex = 0;		
			bg.style.position = "fixed";
			bg.style.top = "0";
			bg.style.overflow = "hidden";
			//bg.style.border = "none";
			bg.style.left = "0";
			//bg.setAttribute("width", window.innerWidth-15);
			bg.setAttribute("width", window.innerWidth-90);
		//console.log(bg, bg.width, window.innerWidth-15)
			bg.setAttribute("height", parseInt($('header').css("height")));
			//bg.setAttribute("scrolling", "no");
			bg.setAttribute('src', (window.location.origin+"/blog/assets/em/gh_header/index.html" ))
		header.appendChild(bg);
	}

	/*for (var i=0; i<document.getElementsByTagName('h2').length; i++){
		document.getElementsByTagName('h2')[i].style.color = "#555";
	}*/

	for (var n=0; n<$('#kanvas').length; n++){
		var kanvasnya = $('#kanvas')[n];
		var kanvasnya_w = 0;	var kanvasnya_h = 0;
		var wait = setInterval(function(){
			if (kanvasnya.contentDocument.body.children){
			if (kanvasnya.contentDocument.body.children[0].tagName=="CANVAS"){
				clearInterval(wait);
				kanvasnya_w = parseFloat(kanvasnya.contentDocument.body.children[0].style.width);
				kanvasnya_h = parseFloat(kanvasnya.contentDocument.body.children[0].style.height);
				if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					var max_w = window.outerWidth - 30;
					kanvasnya.style.width = max_w + "px";
					kanvasnya.style.height = kanvasnya_h+"px";
					kanvasnya.contentDocument.body.children[0].style.zoom = max_w/kanvasnya_w;
					kanvasnya.style.height = Number(kanvasnya_h * max_w/kanvasnya_w)+"px";
				} else {
					var max_w = window.innerWidth;
					kanvasnya.style.height = kanvasnya_h+"px";
					kanvasnya.style.width = Number(-20 + kanvasnya_w * max_w/kanvasnya_w)+"px";
				}
			}}
		},100);
		var tom = document.createElement('button');
			tom.id = "kanv_"+n;
			tom.innerText = "Fullscreen";

			tom.onclick = function(){
				if(kanvasnya.webkitRequestFullScreen)
				 kanvasnya.webkitRequestFullScreen();
				  else kanvasnya.mozRequestFullScreen();
			};
			document.body.appendChild(tom);

		document.getElementsByClassName('post-content')[0].insertBefore(tom, $('#kanvas')[n]);
		document.getElementsByClassName('post-content')[0].insertBefore(document.createElement('br'), $('#kanvas')[n]);
	}

	window.onresize = function(){
		// https://stackoverflow.com/questions/3514784/what-is-the-best-way-to-detect-a-mobile-device
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			if (window.screen.width>540){
				$('#content').css('width', '540'); //xperia m2 dual
				$('#content').css('margin', '0 auto');
			}
			//if ($('iframe')[0]) $('iframe')[0].style.width = "100%";
			//if ($('header')[0]) $('header')[0].style.width = "100%";
		} else {
			$('#content').css('width', '650');
		}
	}

	window.onresize();

}