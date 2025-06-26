// Operation of opening & closing mobile navigation
const mobileNavOpenBtn = document.getElementById('mobile-nav-open-btn');
const mobileNavCloseBtn = document.getElementById('mobile-nav-close-btn');
const mobileNav = document.getElementById('mobile-nav-wrapper');
mobileNavOpenBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.remove('hidden');
})
mobileNavCloseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  mobileNav.classList.add('hidden');
});

// Operation of choosing feature
const featureOptions = Array.from(document.querySelectorAll('.feature-option'));
const featureOptionInfos = Array.from(document.querySelectorAll('.feature-option-info'));
// console.log(featureOptionInfos)
const removeOptionActive = () => {
  featureOptions.forEach(option => {
    option.classList.remove('option-active');
  });
};
const showFeatureInfo = (optionId) => {
  featureOptionInfos.forEach(info => {
    info.classList.add('hidden');
  });
  featureOptionInfos[optionId].classList.remove('hidden');
};

featureOptions.forEach((option, id) => {
  option.addEventListener('click', (e) => {
    e.preventDefault();

    removeOptionActive();
    option.classList.add('option-active');
    showFeatureInfo(id);
  });
});

// Operation of displaying answers
const questions = Array.from(document.querySelectorAll('.question-container'));
const answers = Array.from(document.querySelectorAll('.answer'));
const questionArrows = Array.from(document.querySelectorAll('.arrow'));

questions.forEach((question, id) => {
  question.addEventListener('click', (e) => {
    e.preventDefault();

    answers[id].classList.toggle('hidden');
    questionArrows[id].classList.toggle('answer-active');
  });
});