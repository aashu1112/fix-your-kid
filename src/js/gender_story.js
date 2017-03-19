var users_gender_bias_score = 0;
// Flowtime.useHistory(false);
Flowtime.enableNavigation(false, false, false, false);
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

function loadPage2() {
  setTimeout(function() {
    Flowtime.nextFragment();
    setTimeout(function() {
      Flowtime.nextFragment();
      Flowtime.nextFragment();
      Flowtime.nextFragment();
    }, 1000);
  }, 1000);
}

function loadPage3() {
  setTimeout(function() {
    Flowtime.nextFragment();
    setTimeout(function() {
      Flowtime.nextFragment();
      Flowtime.nextFragment();
      Flowtime.nextFragment();
    }, 1000);
  }, 1000);
}

function computeScore(e) {
  users_gender_bias_score += (+e.target.getAttribute('data-score'));
}

function resetScore() {
  users_gender_bias_score = 0;
  $("[data-id='success']").css('display', 'block');
  $("[data-id='worst']").css('display', 'block');
  $("[data-id='bad']").css('display', 'block');
}

function renderResultPage() {
  var result_div = $("[data-id='myResultDiv']"),
    html_str = "";
  if (users_gender_bias_score >= 0 && users_gender_bias_score <= 2) {
    $("[data-id='bad']").css('display', 'none');
    $("[data-id='success']").css('display', 'none');
    $("[data-id='worst']").css('display', 'block');
    // html_str = "";
    // html_str +=  '<div data-id="worst">';
    // html_str +=  '<div class="ft-fragment">';
    // html_str +=  '<img class="responsive-img" src="./src/img/worst-result.png" style="height: 300px !important;" >';
    // html_str +=  '<button class="waves-effect waves-purple btn-large btn-large GE-button GE-correct-result" id="GE-Reset">Rais another boy!</button>';
    // html_str +=  '</div>';
    // html_str +=  '</div>';
    // result_div.append(html_str);
  } else if (users_gender_bias_score >= 3 && users_gender_bias_score <= 5) {
    $("[data-id='success']").css('display', 'none');
    $("[data-id='worst']").css('display', 'none');
    $("[data-id='bad']").css('display', 'block');
    // html_str = "";
    // html_str +=  '<div data-id="bad">';
    // html_str +=  '<div class="ft-fragment">';
    // html_str +=  '<img class="responsive-img" src="./src/img/bad-result.png" style="height: 300px !important;" >';
    // html_str +=  '<button class="waves-effect waves-purple btn-large btn-large GE-button GE-correct-result" id="GE-Reset">Rais another boy!</button>';
    // html_str +=  '</div>';
    // html_str +=  '</div>';
    // result_div.append(html_str);
  } else if (users_gender_bias_score === 6) {
    $("[data-id='success']").css('display', 'block');
    $("[data-id='worst']").css('display', 'none');
    $("[data-id='bad']").css('display', 'none');
    // html_str = "";
    // html_str +=  '<div data-id="success">';
    // html_str +=  '<div class="ft-fragment">';
    // html_str +=  '<img class="responsive-img" src="./src/img/success-result.png" style="height: 300px !important;" >';
    // html_str +=  '<button class="waves-effect waves-purple btn-large btn-large GE-button GE-wrong-result" id="GE-Reset">Give it another try!</button>';
    // html_str +=  '</div>';
    // html_str +=  '</div>';
    // result_div.append(html_str);
  }
  setTimeout(function () {Flowtime.nextFragment();Flowtime.nextFragment();Flowtime.nextFragment();}, 1000);
}

$('#GE-start').on('click', function (e) {
  Flowtime.next();
  loadPage2();
});

$('.GE-step1').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage3();
});

$('.GE-step2').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage3();
});

$('.GE-step3').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage3();
});

$('.GE-step4').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage3();
});

$('.GE-step5').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  loadPage3();
});

$('.GE-step6').on('click', function (e) {
  Flowtime.next();
  computeScore(e);
  // loadPage3();
  renderResultPage();
});

$('#GE-Reset.GE-correct-result').on('click', function () {
  resetScore();
  Flowtime.gotoHome();
  // Flowtime.gotoPage(document.querySelector("[ data-start-page='true']"));
});

$('#GE-Reset.GE-wrong-result').on('click', function () {
  resetScore();
  Flowtime.gotoHome();
  // Flowtime.gotoPage(document.querySelector("[ data-start-page='true']"));
});
