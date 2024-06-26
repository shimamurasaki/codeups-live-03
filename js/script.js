
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  let topBtn = $('.c-to-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ヘッダークラス名付与
  let header = $('.p-header');
  let headerHeight = $('.p-header').height();
  let height = $('.p-mv').height();
  $(window).scroll(function () {
    if ($(this).scrollTop() > (height - headerHeight)) {
      header.addClass('is-color');
    } else {
      header.removeClass('is-color');
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  //ハンバーガーメニュー
  $(".js-hamburger").click(function () {
    if($(".js-hamburger").hasClass("is-active")){
      $(".js-hamburger").removeClass("is-active");
      $(".js-sp-nav__item").removeClass("is-active");
      // $("html").toggleClass("is-fixed");
      $(".js-sp-nav").fadeOut();
    }else {
      $(".js-hamburger").addClass("is-active");
      $(".js-sp-nav__item").addClass("is-active");
      // $("html").toggleClass("is-fixed");
      $(".js-sp-nav").fadeIn();
    };
  });



  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });


  // Initialize Swiper
  var swiper = new Swiper(".js-works-swiper", {
    pagination: {
      el: ".js-works-paginations",
    },
    clickable: true,
    loop: true,
    autoplay: {
      delay: 3000,
    },
  });

});
