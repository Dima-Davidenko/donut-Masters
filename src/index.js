// -------------------------------------------------
// Make background circles
// -------------------------------------------------
function circlePaint() {
  const backgroundCanvas = document.querySelector('.background');
  const bodyHeight = document.body.offsetHeight;
  const bodyWidth = document.body.offsetWidth;
  const canvasHeight = bodyHeight - Math.round(bodyHeight / 5);
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
}
circlePaint();
// Remoove circles when resize
let backgroundCanvas = document.querySelector('.background');
window.addEventListener('resize', function () {
  backgroundCanvas = document.querySelector('.background');
  if (backgroundCanvas) {
    document.body.removeChild(backgroundCanvas);
    backgroundCanvas = document.createElement('div');
    backgroundCanvas.className = 'background';
    document.body.append(backgroundCanvas);
    circlePaint();

    // backgroundCanvas = document.querySelector('.background');
  } else {
  }
});
// -------------------------------------------------
// Paralax on circles
// -------------------------------------------------

window.addEventListener('scroll', function () {
  const backgroundCanvas = document.querySelector('.background');
  backgroundCanvas.style.top = Math.round(window.pageYOffset / 5) + 'px';
});

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

const toggleHiddenText = () => {
  stashText.classList.toggle('invisible');
  stashTextBtn.classList.toggle('invisible');
};

stashTextBtn.addEventListener('click', toggleHiddenText);

if (document.documentElement.clientWidth >= 1280) {
  if (stashText.classList.contains('invisible')) {
    stashText.classList.toggle('invisible');
  }
}

window.addEventListener('resize', function () {
  if (document.documentElement.clientWidth >= 1280) {
    if (stashText.classList.contains('invisible')) {
      stashText.classList.toggle('invisible');
    }
  }
  if (document.documentElement.clientWidth < 1280) {
    if (!stashText.classList.contains('invisible')) {
      stashText.classList.add('invisible');
      stashTextBtn.classList.remove('invisible');
    }
  }
});
