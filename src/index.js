// -------------------------------------------------
// Make background circles
// -------------------------------------------------
function circlePaint() {
  const backgroundCanvas = document.querySelector('.background');
  const bodyHeight = document.body.offsetHeight;
  const bodyWidth = document.body.offsetWidth;
  const canvasHeight = bodyHeight;
  backgroundCanvas.style.height = canvasHeight + 'px';

  for (let i = 0; i <= bodyHeight - 100; i += 40 + Math.round(Math.random() * 200)) {
    // Create new div
    let circleDiv = document.createElement('div');
    circleDiv.className = 'circle circle--' + Math.round(Math.random() * (3 - 1) + 1);
    //Add element to background
    backgroundCanvas.append(circleDiv);
    // Define random radius 40->100 px
    let radius = 40 + Math.round(60 * Math.random());
    // Define random horizontal position
    let leftPosition = Math.round(bodyWidth * Math.random());

    circleDiv.style.height = radius + 'px';
    circleDiv.style.top = i + 'px';
    circleDiv.style.left = leftPosition + 'px';
    let diffWidth = bodyWidth - leftPosition - radius;
    // Проверяем помещаемся ли в ширину документа
    if (diffWidth >= 0) {
      circleDiv.style.width = radius + 'px';
      // console.log(circleDiv.style.width);
    } else {
      // Еслине помещаемся - обрезаем ширину круга
      circleDiv.style.width = radius + diffWidth + 'px';
    }
  }
  // const emptyDiv = document.createElement('div');
  // backgroundCanvas.append(emptyDiv);
  // emptyDiv.className = 'empty-bg';
  // emptyDiv.style.height = 500 + 'px';

  const bg1Div = document.createElement('div');
  backgroundCanvas.append(bg1Div);
  bg1Div.className = 'donat-bg-1';
  bg1Div.style.height = Math.round(bodyHeight / 3) + 'px';

  const bg2Div = document.createElement('div');
  backgroundCanvas.append(bg2Div);
  bg2Div.className = 'donat-bg-2';
  bg2Div.style.height = Math.round(bodyHeight / 3) + 'px';

  const bg3Div = document.createElement('div');
  backgroundCanvas.append(bg3Div);
  bg3Div.className = 'donat-bg-3';
  bg3Div.style.height = Math.round(bodyHeight / 3) + 'px';

  window.addEventListener('scroll', function () {
    // const viewPortHeight = window.screen.innerHeight;
    const viewPortHeight = document.documentElement.scrollHeight;
    const viewPortWidth = window.screen.width;
    // console.log(viewPortHeight);
    if (1) {
      const yPosition = Math.round(viewPortHeight / 2);
      if (window.pageYOffset < Math.round(bodyHeight / 3)) {
        bg1Div.style.cssText =
          'height: ' +
          Math.round(bodyHeight / 3) +
          'px; background-position: 50% ' +
          (window.pageYOffset + 255) +
          'px;';
      }
      if (window.pageYOffset > Math.round(bodyHeight / 3) * 2 - viewPortHeight * 2 - 255) {
        bg2Div.style.cssText =
          'height: ' +
          Math.round(bodyHeight / 3) +
          'px; background-position: 50% ' +
          (window.pageYOffset - (Math.round(bodyHeight / 3) - 275)) +
          'px;';
      }
      if (window.pageYOffset > Math.round(bodyHeight / 3) * 3 - viewPortHeight * 2 - 255) {
        console.log(window.pageYOffset);
        console.log(Math.round(bodyHeight / 3) * 2 - viewPortHeight - 200);
        bg3Div.style.cssText =
          'height: ' +
          (Math.round(bodyHeight / 3) + 1000) +
          'px; background-position: 50% ' +
          (window.pageYOffset - (Math.round(bodyHeight / 3) * 2 - 275)) +
          'px;';
      }
    }

    // console.log(window.pageYOffset);
    // console.log(bodyHeight / 3);

    // console.log(Math.round(bodyHeight / 3) * 2);
  });
}
circlePaint();
// -------------------------------------------------
// Paralax on circles
// -------------------------------------------------
// let oldOff = 0;
// window.addEventListener('scroll', function () {
//   const backgroundCanvas = document.querySelector('.background');
//   const backgroundCurrentOffset = backgroundCanvas.offsetTop;

//   let pageOffset = window.pageYOffset;
//   let newOff = Math.round(pageOffset / 5);
//   if (newOff > oldOff) {
//     oldOff = newOff;
//     backgroundCanvas.style.top = backgroundCurrentOffset + 1 + 'px';
//   }
//   if (newOff < oldOff) {
//     oldOff = newOff;
//     backgroundCanvas.style.top = backgroundCurrentOffset - 1 + 'px';
//   }
// });

// -------------------------------------------------
// Mobile menu open, close
// -------------------------------------------------
const mobileMenu = document.querySelector('.mob-menu');
const menuBtnOpen = document.querySelector('.mob-menu__button-open');
const menuBtnClose = document.querySelector('.mob-menu__button-close');

const toggleMenu = () => {
  mobileMenu.classList.toggle('is-mob-menu-open');
};

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);

// -------------------------------------------------
// Header menu + mobile menu smooth scroll and close mobile menu
// -------------------------------------------------
document.querySelectorAll('a[href^="#"').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const mobileMenu = document.querySelector('.mob-menu');
    const toggleMenu = () => {
      mobileMenu.classList.toggle('is-mob-menu-open');
    };
    if (mobileMenu.classList.contains('is-mob-menu-open')) {
      mobileMenu.classList.toggle('is-mob-menu-open');
    }
    let href = this.getAttribute('href').substring(1);

    const scrollTarget = document.getElementById(href);

    // const topOffset = document.querySelector('.scrollto').offsetHeight;
    const topOffset = 80; // если не нужен отступ сверху
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// -------------------------------------------------
// Hidden text show and hide on windowresize
// -------------------------------------------------
const stashText = document.querySelector('.stash-text');
const stashTextBtn = document.querySelector('.stash-text-btn');
const lessStashTextBtn = document.querySelector('.stash-text-btn-less');
const readMoreTxt = document.querySelector('.js-read-more-txt');
const readMoreTxtBtn = document.querySelector('.js-btn-read-more-open');
const lessRreadMoreTxtBtn = document.querySelector('.js-btn-read-more-close');

const toggleHiddenText = () => {
  stashText.classList.toggle('invisible');
  stashTextBtn.classList.toggle('invisible');
  lessStashTextBtn.classList.toggle('invisible');
};
const toggleProgramText = () => {
  readMoreTxt.classList.toggle('invisible');
  readMoreTxtBtn.classList.toggle('invisible');
  lessRreadMoreTxtBtn.classList.toggle('invisible');
};
readMoreTxtBtn.addEventListener('click', toggleProgramText);
stashTextBtn.addEventListener('click', toggleHiddenText);
lessRreadMoreTxtBtn.addEventListener('click', toggleProgramText);
lessStashTextBtn.addEventListener('click', toggleHiddenText);

if (document.documentElement.clientWidth >= 1280) {
  if (stashText.classList.contains('invisible')) {
    stashText.classList.toggle('invisible');
  }
  if (readMoreTxt.classList.contains('invisible')) {
    readMoreTxt.classList.toggle('invisible');
  }
}
window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth >= 1280) {
    if (stashText.classList.contains('invisible')) {
      stashText.classList.toggle('invisible');
    }
    if (!stashTextBtn.classList.contains('invisible')) {
      stashTextBtn.classList.toggle('invisible');
    }
    if (!lessStashTextBtn.classList.contains('invisible')) {
      lessStashTextBtn.classList.toggle('invisible');
    }

    if (readMoreTxt.classList.contains('invisible')) {
      readMoreTxt.classList.toggle('invisible');
    }
    if (!readMoreTxtBtn.classList.contains('invisible')) {
      readMoreTxtBtn.classList.toggle('invisible');
    }
    if (!lessRreadMoreTxtBtn.classList.contains('invisible')) {
      lessRreadMoreTxtBtn.classList.toggle('invisible');
    }
  }
  if (document.documentElement.clientWidth < 1280) {
    if (!stashText.classList.contains('invisible')) {
      stashText.classList.add('invisible');
      stashTextBtn.classList.remove('invisible');
      lessStashTextBtn.classList.add('invisible');
    }
    if (!readMoreTxt.classList.contains('invisible')) {
      readMoreTxt.classList.add('invisible');
      readMoreTxtBtn.classList.remove('invisible');
      lessRreadMoreTxtBtn.classList.add('invisible');
    }
  }
});

// -------------------------------------------------
// Reviews slider
// -------------------------------------------------
$(document).ready(function () {
  $('.reviews-slide').slick({
    arrows: true,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 1000,
    waitForAnimate: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1279,
        settings: {
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          centerPadding: '0px',
          centerMode: true,
          speed: 500,
        },
      },
    ],
  });
});
// Change slide number
var $status = $('.slide-number');
var $slickElement = $('.reviews-slide');
$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

// Animation
const speakersTitle = document.querySelector('.speakers-title');
const speakerFirst = document.querySelector('.speaker-first');
const speakerSecond = document.querySelector('.speaker-second');
const speakerThird = document.querySelector('.speaker-third');
const speakerFourth = document.querySelector('.speaker-fourth');
const scrollToSpeakers = speakersTitle.offsetTop;

const programTitle = document.querySelector('.program-title');
const programFirst = document.querySelector('.program-first');
const programSecond = document.querySelector('.program-second');
const programThird = document.querySelector('.program-third');
const programFourth = document.querySelector('.program-fourth');
const scrollTopPrograms = programTitle.offsetTop;
const viewPortHeight = window.screen.height;
let isSpeakersShown = false;
let isProgramShown = false;
window.addEventListener('scroll', function () {
  if (!isSpeakersShown) {
    if (window.pageYOffset > scrollToSpeakers - viewPortHeight + 300) {
      speakerFirst.className =
        'speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-2s';
      speakerSecond.className =
        'speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-3s';
      speakerThird.className =
        'speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-4s';
      speakerFourth.className =
        'speaker-first speakers__item animate__animated animate__fadeIn animate__slower animate__delay-5s';
      speakersTitle.className =
        'speakers-title section__title speakers__title animate__animated animate__fadeInUp animate__slower animate__delay-1s';
      isSpeakersShown = true;
    }
  }

  if (!isProgramShown) {
    if (window.pageYOffset > scrollTopPrograms - viewPortHeight) {
      programFirst.className =
        'program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-1s';
      programSecond.className =
        'program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-3s';
      programThird.className =
        'program__thumb program__thumb-top animate__animated animate__bounceIn animate__delay-2s';
      programFourth.className =
        'program-fourth transparent program__thumb program__thumb-bottom animate__animated animate__bounceIn animate__delay-4s';
      programTitle.className =
        'program-title program__title animate__animated animate__bounceIn animate__delay-1s';
      isProgramShown = true;
    }
  }
});

// const logoHover = siteLogo => {
//   console.log('hover');
//   siteLogo.href = './images/icons.svg#icon-logo-hover';
// };
// const logo = siteLogo => {
//   console.log('out-hover');

//   siteLogo.href = './images/icons.svg#icon-logo';
// };

// var logos = document.getElementsByClassName('logo');
// for (var i = 0, len = logos.length; i < len; i++) {
//   console.log('for');

//   logos[i].addEventListener('mouseover', logoHover(logos[i]));
//   logos[i].addEventListener('mouseout', logo(logos[i]));
// }
const upButton = document.querySelector('.up-button');
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    upButton.classList.add('up-button--visible');
  } else {
    upButton.classList.remove('up-button--visible');
  }
};
