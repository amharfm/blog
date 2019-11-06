var header;
function load (){
	header = document.getElementsByTagName('header')[0];
	$('header').css('background-color', 'transparent');
	$('header').css('background-image', 'none');
	// var cont = document.createElement('div');
	// 	cont.setAttribute("style", "--aspect-ratio: 16/9;");
	// 	cont.href = "https://google.com";
	var bg = document.createElement('iframe');
		bg.style.zIndex = 0;		
		bg.style.position = "absolute";
		bg.style.top = "0";
		bg.style.overflow = "hidden";
		bg.style.border = "none";
		bg.style.left = "0";
		bg.setAttribute("width", window.innerWidth-15);
		bg.setAttribute("height", parseInt($('header').css("height")));
		// bg.setAttribute("width", 1600);
		// bg.setAttribute("height", 900);
		bg.setAttribute("scrolling", "no");
		// console.log(window.location);
		bg.setAttribute('src', (window.location.origin+"/blog/assets/em/gh_header/index.html" ))
		// bg.setAttribute('src', window.location.protocol+"//"+window.location.hostname+"/assets/em/gh_header/index.html")
		// bg.setAttribute('src', "./../assets/em/gh_header/index.html")
		// cont.appendChild(bg);
	// header.appendChild(cont);
	header.appendChild(bg);
}