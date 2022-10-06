// Remove old background div and creates the new one
function reCreateBackground() {
  const bodyHeight = document.body.offsetHeight;
  const canvasContainer = document.querySelector('.js-canvas-container');
  let backgroundCanvas = document.querySelector('.background');
  if (backgroundCanvas) {
    canvasContainer.removeChild(backgroundCanvas);
  }
  backgroundCanvas = document.createElement('div');
  canvasContainer.append(backgroundCanvas);
  backgroundCanvas.className = 'background';
  backgroundCanvas.style.height = bodyHeight - 200 + 'px';
}
// Make background circles
function circlePaint() {
  const backgroundCanvas = document.querySelector('.background');
  const bodyHeight = document.body.offsetHeight;
  const bodyWidth = document.body.offsetWidth;

  for (let i = 0; i <= bodyHeight - 200; i += 40 + Math.round(Math.random() * 200)) {
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
      // Если не помещаемся - обрезаем ширину круга
      circleDiv.style.width = radius + diffWidth + 'px';
    }
  }

  // Create donut paralax bg
}
// Move background images to create parallax effect
function parallaxBackground() {
  const bodyHeight = document.body.offsetHeight;
  const backgroundCanvas = document.querySelector('.background');
  const bgDivHeight = Math.round(bodyHeight / 3);
  const viewPortHeight = window.innerHeight;

  let bgDivs = [];
  let bgDivsPostion = [];
  for (let i = 0; i <= 2; i += 1) {
    bgDivs[i] = document.createElement('div');
    backgroundCanvas.append(bgDivs[i]);
    bgDivs[i].className = 'donat-bg-' + (i + 1);
    bgDivs[i].style.height = bgDivHeight + 'px';
    bgDivsPostion[i] = 0 - bgDivHeight * i + window.pageYOffset + viewPortHeight / 2 - 180;
    bgDivs[i].style.cssText =
      'height: ' + bgDivHeight + 'px; background-position: 50% ' + bgDivsPostion[i] + 'px;';
  }

  window.addEventListener('scroll', function () {
    const viewPortHeight = window.innerHeight;

    for (let i = 0; i <= 2; i += 1) {
      bgDivsPostion[i] = 0 - bgDivHeight * i + window.pageYOffset + viewPortHeight / 2 - 180;
    }

    if (window.pageYOffset < bgDivHeight) {
      bgDivs[0].style.cssText =
        'height: ' + bgDivHeight + 'px; background-position: 50% ' + bgDivsPostion[0] + 'px;';
    }
    if (
      window.pageYOffset > bgDivHeight - viewPortHeight / 2 - 300 &&
      window.pageYOffset < 2 * bgDivHeight
    ) {
      bgDivs[1].style.cssText =
        'height: ' + bgDivHeight + 'px; background-position: 50% ' + bgDivsPostion[1] + 'px;';
    }
    if (
      window.pageYOffset > 2 * bgDivHeight - viewPortHeight / 2 - 300 &&
      window.pageYOffset < 3 * bgDivHeight
    ) {
      bgDivs[2].style.cssText =
        'height: ' +
        (bgDivHeight + 1000) +
        'px; background-position: 50% ' +
        bgDivsPostion[2] +
        'px;';
    }
  });
}
// Listen to 'resize' and check if current range has changed
// If it's changed - calls for reCreateBackground, circlePaint, parallaxBackground,
// showHiddenText or hideHiddenText
function checkChangeRange() {
  const bodyWidth = document.body.offsetWidth;
  let oldRange = 0;
  if (bodyWidth >= 1280) {
    oldRange = 3;
    showHiddenText();
  } else if (bodyWidth < 1280 && bodyWidth >= 768) {
    oldRange = 2;
    hideHiddenText();
  } else {
    oldRange = 1;
    hideHiddenText();
  }

  let newRange = oldRange;
  window.addEventListener('resize', function () {
    const bodyWidth = document.body.offsetWidth;
    let oldRange = 0;
    if (bodyWidth >= 1280) {
      oldRange = 3;
    } else if (bodyWidth < 1280 && bodyWidth >= 768) {
      oldRange = 2;
    } else {
      oldRange = 1;
    }
    if (newRange !== oldRange) {
      // Set timeouts to get proper bodyHeight (give time to render the page)
      this.setTimeout(reCreateBackground, 500);
      this.setTimeout(circlePaint, 510);
      this.setTimeout(parallaxBackground, 520);
      newRange = oldRange;
      if (newRange === 3) {
        showHiddenText();
      } else {
        hideHiddenText();
      }
    }
  });
}
// Show or hide mobile menu
function mobileMenu() {
  const mobileMenu = document.querySelector('.mob-menu');
  const menuBtnOpen = document.querySelector('.mob-menu__button-open');
  const menuBtnClose = document.querySelector('.mob-menu__button-close');
  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-mob-menu-open');
  };
  menuBtnOpen.addEventListener('click', toggleMenu);
  menuBtnClose.addEventListener('click', toggleMenu);
}

// Smooth smooth scroll on all #links and close mobile menu on mobile menu link click
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

    const topOffset = 80;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// Hidden text show
function showHiddenText() {
  let hiddenTextList = document.querySelectorAll('.js-hidden-text');
  hiddenTextList.forEach(item => {
    const hiddenTextparagraph = item.querySelector('.js-hidden-text-paragraph');
    const hiddenTextButton = item.querySelector('.js-hidden-text-button');
    if (hiddenTextparagraph.classList.contains('invisible')) {
      hiddenTextparagraph.classList.remove('invisible');
    }
    if (!hiddenTextButton.classList.contains('invisible')) {
      hiddenTextButton.classList.add('invisible');
    }
  });
}
// Hidden text hide
function hideHiddenText() {
  let hiddenTextList = document.querySelectorAll('.js-hidden-text');
  hiddenTextList.forEach(item => {
    const hiddenTextparagraph = item.querySelector('.js-hidden-text-paragraph');
    const hiddenTextButton = item.querySelector('.js-hidden-text-button');
    if (!hiddenTextparagraph.classList.contains('invisible')) {
      hiddenTextparagraph.classList.add('invisible');
    }
    if (hiddenTextButton.classList.contains('invisible')) {
      hiddenTextButton.classList.remove('invisible');
    }
    hiddenTextButton.innerText = 'Read more';
  });
}
// Show and hide hidden text on button Read more or Less press
function buttonHiddentTextAction() {
  let hiddenTextList = document.querySelectorAll('.js-hidden-text');
  hiddenTextList.forEach(item => {
    const button = item.querySelector('.js-hidden-text-button');
    button.addEventListener('click', function (item) {
      const hiddenTextparagraph = item.currentTarget.parentNode.querySelector(
        '.js-hidden-text-paragraph'
      );
      hiddenTextparagraph.classList.toggle('invisible');
      if (hiddenTextparagraph.classList.contains('invisible')) {
        button.innerText = 'Read more';
      } else {
        button.innerText = 'Less';
      }
    });
  });
}
// Slick slider initialization
$(document).ready(function () {
  $('.reviews-slide').slick({
    arrows: true,
    slidesToShow: 3,
    // autoplay: true,
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
function animation() {
  const viewPortHeight = window.screen.height;
  let isSpeakersShown = false;
  let isProgramShown = false;
  window.addEventListener('scroll', function () {
    if (!isSpeakersShown) {
      const speakersTitle = document.querySelector('.speakers-title');
      const scrollToSpeakers = speakersTitle.offsetTop;
      const speakerFirst = document.querySelector('.speaker-first');
      const speakerSecond = document.querySelector('.speaker-second');
      const speakerThird = document.querySelector('.speaker-third');
      const speakerFourth = document.querySelector('.speaker-fourth');
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
      const programTitle = document.querySelector('.program-title');
      const scrollTopPrograms = programTitle.offsetTop;
      const programFirst = document.querySelector('.program-first');
      const programSecond = document.querySelector('.program-second');
      const programThird = document.querySelector('.program-third');
      const programFourth = document.querySelector('.program-fourth');
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
}
//Up button
function upButton() {
  const upButton = document.querySelector('.up-button');
  window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
      upButton.classList.add('up-button--visible');
    } else {
      upButton.classList.remove('up-button--visible');
    }
  };
}

animation();
mobileMenu();
upButton();
buttonHiddentTextAction();
reCreateBackground();
circlePaint();
parallaxBackground();
checkChangeRange();
