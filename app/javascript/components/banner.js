import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Create your favourite movie lists"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
