// --------------- header ---------------
const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');

window.addEventListener("click", e => {
  if ( e.target.classList.contains("menu") ) {
    nav.classList.toggle('active');
  }
  else{
    nav.classList.remove('active');
  }
});

window.addEventListener("scroll", () => {
  nav.classList.remove('active');
});

// --------------- galeri ---------------
var swiper = new Swiper(".testi-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 10,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
    },
    autoplay: {
      delay: 3500,
    },
});

// --------------- galeri ---------------
var swiper = new Swiper(".galeri-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 10,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        500: {
          slidesPerView: 2,
        },
        800: {
          slidesPerView: 3,
        },
    },
    autoplay: {
      delay: 3000,
    },
});

// --------------- faq ---------------
const question = document.querySelectorAll(".question");
question.forEach( q => {
	q.addEventListener("click", pe => {
		pe.target.classList.toggle("active");
		const answer = pe.target.nextElementSibling;
		if (answer.style.maxHeight) {
			answer.style.maxHeight = null;
		} else {
			answer.style.maxHeight = answer.scrollHeight + "px";
		}
	});
});

// --------------- footer credit ---------------
const tahun = new Date().getFullYear();
document.querySelector(".tahun").innerHTML = tahun;

// --------------- for All ---------------
const forbiddenKeys = ['c', 'u', 's', 'p'];
const forbiddenKeyCodes = [123, 73, 74];

document.addEventListener("contextmenu", e => {
	e.preventDefault();
}, false);

document.addEventListener("keydown", e => {
	if (e.ctrlkey || forbiddenKeys.includes(e.key) || forbiddenKeyCodes.includes(e.keyCode)) {
		e.stopPropagation();
		e.preventDefault();
	};
});