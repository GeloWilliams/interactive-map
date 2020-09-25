let placeImages = document.querySelectorAll('.place');
let textBoxes = document.querySelectorAll('.text');
let arrowLeft = document.querySelector('#arrow-left');
let arrowRight = document.querySelector('#arrow-right');

let current = 0
let SVG = document.querySelector('svg.dd-world-map');
let boxArr = SVG.getAttribute('viewBox').split(/\s+|,/);

let inDot = document.querySelector('.zoom-in');
let outDot = document.querySelector('.zoom-out');
let ddMapDot = document.querySelectorAll('.dd-map-dot');
let ddMapText = document.querySelectorAll('.dd-map-text');
let ddMapHoverText = document.querySelectorAll('.dd-map-hover-text');
let ddMapBox = document.querySelectorAll('.dd-map-box');
let ddHoverBox = document.querySelectorAll('.dd-map-hover-box');
let ddActiveDot = document.querySelectorAll('.dd-map-active-dot');
let ddHoverDot = document.querySelectorAll('.dd-map-hover-dot');

let mapBox = document.querySelector('.map-box');
let mapContainer = document.querySelector('#map-container');

let locNum = ["820 160 500 500", "820 160 500 500", "550 180 500 500", "820 200 500 500", "850 0 500 500"];


startSlide();


function reset() {
	for(let i = 0; i < placeImages.length; i++) {
		placeImages[i].style.display = 'none';
	}
	for(let i = 0; i < textBoxes.length; i++) {
		textBoxes[i].style.display = 'none';
	}
	for(let i = 0; i < placeImages.length; i++) {
		ddMapText[i].style.display = 'none';
	}
	for(let i = 0; i < placeImages.length; i++) {
		ddMapHoverText[i].style.display = 'none';
	}
	for(let i = 0; i < placeImages.length; i++) {
		ddMapDot[i].style.display = 'block';
	}
	for(let i = 0; i < placeImages.length; i++) {
		ddActiveDot[i].style.display = 'none';
	}
	for(let i = 0; i < ddMapBox.length; i++) {
		ddMapBox[i].style.display = 'none';
	}
	for(let i = 0; i < ddMapBox.length; i++) {
		ddHoverBox[i].style.display = 'none';
	}

}

function startSlide() {
	reset();
	placeImages[0].style.display = 'block';
	textBoxes[0].style.display = 'block';
	ddMapText[0].style.display = "block";
	ddMapDot[0].style.display = "none";
	ddActiveDot[0].style.display = "block";
	ddMapBox[0].style.display = "block";
	SVG.setAttribute('viewBox', '0 0 1360 1000');
}

function slideLeft() {
	reset();
	placeImages[current - 1].style.display = "block";
	textBoxes[current - 1].style.display = "block";
	ddMapText[current - 1].style.display = "block";
	ddMapDot[current - 1].style.display = "none";
	ddActiveDot[current - 1].style.display = "block";
	ddMapBox[current - 1].style.display = "block";
	current--;
}

function slideRight() {
	reset();
	placeImages[current + 1].style.display = "block";
	textBoxes[current + 1].style.display = "block";
	ddMapText[current + 1].style.display = "block";
	ddMapDot[current + 1].style.display = "none";
	ddActiveDot[current + 1].style.display = "block";
	ddMapBox[current + 1].style.display = "block";
	current++;
}

function setPlace() {
	if (document.querySelector('div.map-box').classList.contains('dd-world')) {
		SVG.setAttribute("viewBox", locNum[current]);
	} else if (document.querySelector('div.map-box').classList.contains('new-map-class-here')) {
		SVG.setAttribute("viewBox", locNum[current + 10]);
	}
}

function zoomIn() {
	var x = SVG.getAttribute('viewBox').split(/\s+|,/);

	var oldA = x[0];
	var oldB = x[1];
	var oldC = x[2];
	var oldD = x[3];

	var integerA = parseInt(x[0], 10);
	var integerB = parseInt(x[1], 10);
	var integerC = parseInt(x[2], 10);
	var integerD = parseInt(x[3], 10);

	var keepA = integerA + 0;
	var keepB = integerB + 0;
	var newA = integerA + 40;
	var newB = integerB + 40;
	var keepC = integerC + 0;
	var keepD = integerD + 0;
	var newC = integerC - 100;
	var newD = integerD - 100;

	var keepStringA = keepA.toString();
	var keepStringB = keepB.toString();
	var newStringA = newA.toString();
	var newStringB = newB.toString();
	var keepStringC = keepC.toString();
	var keepStringD = keepD.toString();
	var newStringC = newC.toString();
	var newStringD = newD.toString();

	x.splice(0,8, keepStringA, keepStringB, keepStringC, keepStringD);
	var keepAndKeep = x.join(' ');
	x.splice(0,8, keepStringA, keepStringB, newStringC, newStringD);
	var keepAndNew = x.join(' ');
	x.splice(0,8, newStringA, newStringB, newStringC, newStringD);
	var newAndNew = x.join(' ');

	if(integerC > 300 && integerD > 300) {
		SVG.setAttribute('viewBox', newAndNew);
	}
}

function zoomOut() {
	var x = SVG.getAttribute('viewBox').split(/\s+|,/);

	var oldA = x[0];
	var oldB = x[1];
	var oldC = x[2];
	var oldD = x[3];

	var integerA = parseInt(x[0], 10);
	var integerB = parseInt(x[1], 10);
	var integerC = parseInt(x[2], 10);
	var integerD = parseInt(x[3], 10);

	var zeroA = integerA - integerA;
	var zeroB = integerB - integerB;
	var newA = integerA - 40;
	var newB = integerB - 40;
	var endC = 1360;
	var endD = 1000;
	var newC = integerC + 100;
	var newD = integerD + 100;


	var zeroStringA = zeroA.toString();
	var zeroStringB = zeroB.toString();
	var newStringA = newA.toString();
	var newStringB = newB.toString();
	var endStringC = endC.toString();
	var endStringD = endD.toString();
	var newStringC = newC.toString();
	var newStringD = newD.toString();

	x.splice(0,2, zeroStringA, zeroStringB);
	var zeroViewBoxH = x.join(' ');
	x.splice(0,2, newStringA, newStringB);
	var newViewBoxH = x.join(' ');
	x.splice(2,2, endStringC, endStringD);
	var endViewBoxZ = x.join(' ');
	x.splice(2,2, newStringC, newStringD);
	var newViewBoxZ = x.join(' ');
	x.splice(0,8, zeroStringA, zeroStringB, endStringC, endStringD);
	var zeroAndEnd = x.join(' ');
	x.splice(0,8, newStringA, newStringB, newStringC, newStringD);
	var newAndNew = x.join(' ');

	if(integerC >= 1200 || integerD >= 1000) {
		SVG.setAttribute('viewBox', zeroAndEnd);
		mapContainer.classList.add("set-map");
	} else if(integerA >= 650 && integerB >= 650) {
		SVG.setAttribute('viewBox', zeroAndEnd);
		mapContainer.classList.add("set-map");
	} else {
		SVG.setAttribute('viewBox', newAndNew);
		mapContainer.classList.remove("set-map");
	}
}

function slowZoomIn() {
	var x = SVG.getAttribute('viewBox').split(/\s+|,/);

	var oldA = x[0];
	var oldB = x[1];
	var oldC = x[2];
	var oldD = x[3];

	var integerA = parseInt(x[0], 10);
	var integerB = parseInt(x[1], 10);
	var integerC = parseInt(x[2], 10);
	var integerD = parseInt(x[3], 10);
	
	var keepA = integerA + 0;
	var keepB = integerB + 0;
	var newA = integerA + 2;
	var newB = integerB + 1;
	var keepC = integerC + 0;
	var keepD = integerD + 0;
	var newC = integerC - 4;
	var newD = integerD - 4;

	var keepStringA = keepA.toString();
	var keepStringB = keepB.toString();
	var newStringA = newA.toString();
	var newStringB = newB.toString();
	var keepStringC = keepC.toString();
	var keepStringD = keepD.toString();
	var newStringC = newC.toString();
	var newStringD = newD.toString();

	x.splice(0,8, keepStringA, keepStringB, keepStringC, keepStringD);
	var keepAndKeep = x.join(' ');
	x.splice(0,8, keepStringA, keepStringB, newStringC, newStringD);
	var keepAndNew = x.join(' ');
	x.splice(0,8, newStringA, newStringB, newStringC, newStringD);
	var newAndNew = x.join(' ');

	if(integerC > 200 && integerD > 200) {
		SVG.setAttribute('viewBox', newAndNew);
	}
}

function slowZoomOut() {
	var x = SVG.getAttribute('viewBox').split(/\s+|,/);

	var oldA = x[0];
	var oldB = x[1];
	var oldC = x[2];
	var oldD = x[3];

	var integerA = parseInt(x[0], 10);
	var integerB = parseInt(x[1], 10);
	var integerC = parseInt(x[2], 10);
	var integerD = parseInt(x[3], 10);

	var zeroA = integerA - integerA;
	var zeroB = integerB - integerB;
	var newA = 100;
	var newB = integerB - 2;
	var endC = 1360;
	var endD = 1000;
	var newC = integerC + 5;
	var newD = integerD + 5;


	var zeroStringA = zeroA.toString();
	var zeroStringB = zeroB.toString();
	var newStringA = newA.toString();
	var newStringB = newB.toString();
	var endStringC = endC.toString();
	var endStringD = endD.toString();
	var newStringC = newC.toString();
	var newStringD = newD.toString();

	x.splice(0,2, zeroStringA, zeroStringB);
	var zeroViewBoxH = x.join(' ');
	x.splice(0,2, newStringA, newStringB);
	var newViewBoxH = x.join(' ');
	x.splice(2,2, endStringC, endStringD);
	var endViewBoxZ = x.join(' ');
	x.splice(2,2, newStringC, newStringD);
	var newViewBoxZ = x.join(' ');
	x.splice(0,8, zeroStringA, zeroStringB, endStringC, endStringD);
	var zeroAndEnd = x.join(' ');
	x.splice(0,8, newStringA, newStringB, newStringC, newStringD);
	var newAndNew = x.join(' ');

	if(integerC >= 1200 || integerD >= 1000) {
		SVG.setAttribute('viewBox', zeroAndEnd);
		mapContainer.classList.add("set-map");
	} else if(integerA >= 650 && integerB >= 650) {
		SVG.setAttribute('viewBox', zeroAndEnd);
		mapContainer.classList.add("set-map");
	} else {
		SVG.setAttribute('viewBox', newAndNew);
		mapContainer.classList.remove("set-map");
	}
}

arrowLeft.addEventListener('click', function() {
	if(current === 0) {
		current = placeImages.length;
	}
		slideLeft();
		setPlace();
});


document.addEventListener('keydown', function(e) {
	if (e.keyCode == '37') {
		if(current === 0) {	
			current = placeImages.length;	
		}
		slideLeft();
		setPlace();
	}
});

arrowRight.addEventListener('click', function() {
	if(current === placeImages.length - 1) {
		current = -1;
	}
		slideRight();
		setPlace();
});	

document.addEventListener('keydown', function(e) {
	if (e.keyCode == '39') {
		if(current === placeImages.length - 1) {
			current = -1;
		}
		 slideRight();
		 setPlace();
	}

});

inDot.addEventListener('click', function() {
	zoomIn();
});

outDot.addEventListener('click', function() {
	zoomOut();
});


if (ddHoverDot.length !== 0) {
	function setClickNum() {
		if (window.matchMedia("(min-width: 500px)").matches) {
			for(let i = 0; i < ddHoverDot.length; i++) {
				ddHoverDot[i].addEventListener('dblclick', function() {
					if (document.querySelector('div.map-box').classList.contains('dd-world')) {
						SVG.setAttribute("viewBox", locNum[i]);
					} else if (document.querySelector('div.map-box').classList.contains('new-map-class-here')) {
						SVG.setAttribute("viewBox", locNum[i + 10]);
					}
					reset();
					placeImages[i].style.display = "block";
					textBoxes[i].style.display = "block";
					ddMapText[i].style.display = "block";
					ddMapDot[i].style.display = "none";
					ddActiveDot[i].style.display = "block";
					ddMapBox[i].style.display = "block";
				});
			} 
		} else {
			for(let i = 0; i < ddHoverDot.length; i++) {
				ddHoverDot[i].addEventListener('click', function() {
					if (document.querySelector('div.map-box').classList.contains('dd-world')) {
						SVG.setAttribute("viewBox", locNum[i]);
					} else if (document.querySelector('div.map-box').classList.contains('new-map-class-here')) {
						SVG.setAttribute("viewBox", locNum[i + 10]);
					}
					reset();
					placeImages[i].style.display = "block";
					textBoxes[i].style.display = "block";
					ddMapText[i].style.display = "block";
					ddMapDot[i].style.display = "none";
					ddActiveDot[i].style.display = "block";
					ddMapBox[i].style.display = "block";
				});
			}
		}	
	}
	setClickNum();
	window.addEventListener('resize', ()=> {setClickNum();});
	
	for(let i = 0; i < ddHoverDot.length; i++) {
			ddHoverDot[i].addEventListener('click', function() {
				reset();
				placeImages[i].style.display = "block";
				textBoxes[i].style.display = "block";
				ddMapText[i].style.display = "block";
				ddMapDot[i].style.display = "none";
				ddActiveDot[i].style.display = "block";
				ddMapBox[i].style.display = "block";
		});
	}
	for(let i = 0; i < ddHoverDot.length; i++) {
			ddHoverDot[i].addEventListener('mouseover', function() {
			ddMapHoverText[i].style.display = "block";
			ddHoverBox[i].style.display = "block";
		});
	}

	for(let i = 0; i < ddHoverDot.length; i++) {
			ddHoverDot[i].addEventListener('mouseleave', function() {
			ddMapHoverText[i].style.display = "none";
			ddHoverBox[i].style.display = "none";
		});
	}
} 


function placeName() {
	var theH2s = document.querySelectorAll('.arrows > h2');
	var theH3s = document.querySelectorAll('#info-box > .text > h3');

	for(var i = 0; i < theH3s.length; i++) {
		if(theH3s[i].parentElement.style.display == 'block') {
			for(var x = 0; x < theH2s.length; x++) {
				theH2s[x].innerText = theH3s[i].innerText;
			}
		}
	}
}
placeName();
window.addEventListener('click', () => {placeName();});
window.addEventListener('keydown', () => {placeName();});