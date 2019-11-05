var header;
function load (){
	header = document.getElementsByTagName('header')[0];
	$('header').css('background-color', 'transparent');
	$('header').css('background-image', 'none');
	// var cont = document.createElement('div');
	// 	cont.setAttribute("style", "--aspect-ratio: 16/9;");
	var bg = document.createElement('iframe');
		bg.style.zIndex = 0;
		// bg.href = "https://google.com"
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
		bg.setAttribute('src', window.location.origin+"/blog/assets/em/gen_drawing/")
		// header.removeChild(header.children[0]);
		// header.removeChild(header.children[0]);
		header.appendChild(bg);
	// var kembali = document.createElement('a');
	// 	kembali.style.zIndex = 999;
	// 	kembali.style.textDecoration = "none";
	// 	kembali.innerText = "<ahahha";
	// 	kembali.href = window.location.origin+"/blog";
	// 	header.appendChild(kembali);
}