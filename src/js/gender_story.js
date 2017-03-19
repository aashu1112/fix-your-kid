var users_gender_bias_score = 0;
// Flowtime.enableNavigation(false, false, false, false);
Flowtime.updateNavigation(false);
Flowtime.disableNavigation();
Flowtime.setKeyboardNavigation(false);
Flowtime.start();

// // Initial Setup Code
function init() {
  setTimeout(function() {
    Flowtime.nextFragment();
    setTimeout(function() {
      Flowtime.nextFragment();
      Flowtime.nextFragment();
      setTimeout(function() {
        Flowtime.nextFragment();
    }, 1500);
    }, 1000);
  }, 1000);
}
init();
hideResult();

function loadPage() {
  setTimeout(function() {
    Flowtime.nextFragment();
    setTimeout(function() {
      Flowtime.nextFragment();
    }, 1000);
    setTimeout(function() {
      Flowtime.nextFragment();
    }, 1000);
    setTimeout(function() {
      Flowtime.nextFragment();
    }, 1000);
  }, 1000);
}

function computeScore(e) {
  users_gender_bias_score += (+e.target.getAttribute('data-score'));
}

function resetScore() {
  users_gender_bias_score = 0;
  hideResult();
}

function hideResult() {
  $("[data-id='bad']").css('display', 'none');
  $("[data-id='success']").css('display', 'none');
  $("[data-id='worst']").css('display', 'none');
}

function renderResultPage() {
  var result_div = $("[data-id='myResultDiv']");

  hideResult();

  if (users_gender_bias_score >= 0 && users_gender_bias_score <= 2) {
    $("[data-id='worst']").css('display', 'block');
  } else if (users_gender_bias_score >= 3 && users_gender_bias_score <= 5) {
    $("[data-id='bad']").css('display', 'block');
  } else if (users_gender_bias_score === 6) {
    $("[data-id='success']").css('display', 'block');
  }
  setTimeout(function () {Flowtime.nextFragment();Flowtime.nextFragment();Flowtime.nextFragment();}, 1000);
}

$('#GE-start').on('click', function (e) {
  Flowtime.next();
  loadPage();
});

$('.GE-step1').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage();
});

$('.GE-step2').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage();
});

$('.GE-step3').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage();
});

$('.GE-step4').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage();
});

$('.GE-step5').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage();
});

$('.GE-step6').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  renderResultPage();
});

$('#GE-Reset.GE-correct-result').on('click', function () {
  resetScore();
  Flowtime.gotoHome();
});

$('#GE-Reset.GE-wrong-result').on('click', function () {
  resetScore();
  Flowtime.gotoHome();
});

$('#GE-info-content').on('click', function () {
  Flowtime.gotoPage(document.getElementById('projectInfoPage'));
});

$('#GE_go_backhome').on('click', function () {
  Flowtime.gotoHome();
});