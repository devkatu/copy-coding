$(function () {

  // ★ハンバーガーメニュー
  $(".menu-btn").click(function () {
    // ハンバーガーメニューボタンとナビゲーションメニューに
    // 同時にopenクラスを付けたり外したりする
    $(this).toggleClass("open");
    $(".header_nav").toggleClass("open");
  });

  // ★スムーススクロール
  $('a[href^="#"]').click(function () {

    // ハンバーガーメニューを閉じる
    $(".menu-btn").removeClass("open");
    $(".header_nav").removeClass("open");

    // 各aタグに指定されたhref属性を取得する
    var href = $(this).attr("href");

    // href属性で指定された要素(各section要素)をセレクタで指定し、位置を取得する
    // ※offset()メソッドはtop,leftをプロパティに持つオブジェクトを返す
    var pos = $(href).offset().top;

    // 取得した位置へ1秒でアニメーションスクロールする
    $("body,html").animate({ scrollTop: pos }, 500);

    // aタグのデフォルト動作(画面遷移)を取り消す
    return false;
  });

  // ★topへ戻るボタンにクリックイベントを指定
  $(".go-top").click(function () {
    // <html>,<body>要素を1秒間のアニメーションしながらTOP位置へスクロール
    $("html,body").animate({ scrollTop: 0 }, 500);
  });

  // ★windowにスクロールイベントを指定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      // windowのスクロール位置を取得し、100pxを超えたらTOPへ戻るボタンを表示
      $(".go-top").fadeIn();
    } else {
      // windowのスクロール位置が100pxを超えなければTOPへ戻るボタンを非表示
      $(".go-top").fadeOut();
    }
  });

  // ★slick
  $('.portfolio_slick').slick({
    autoplay: true, // 自動再生を有効にする
    autoplaySpeed: 3500, // 次のスライドへ移るまでの時間
    arrows: true, // 前後の矢印を有効にする
    prevArrow: "<button class='slide-arrow slide-prev'></button>", // 前へボタン
    nextArrow: "<button class='slide-arrow slide-next'></button>", // 次へボタン
    centerMode: true, // スライドを中央に表示する
    dots: true, // ドットナビゲーションを有効にする
    dotsClass: "slide-dots", // ドットナビのクラス名を指定
    speed: 500, // スライドの移動にかかる時間
    responsive: [
      // レスポンシブスタイルを指定
      {
        // 画面幅768px以下は、settingsプロパティ内のオプションに変更
        breakpoint: 769,
        settings: {
          arrows: false, // 矢印を消す
          centerMode: false, // センターモードをやめる
          dots: false // ドットナビを消す
        }
      }
    ]
  });

});


$(window).load(() => {
  // ★スクロールしたらふわっと表示
  ScrollReveal().reveal('.reveal-item', {
    origin: 'top', // 上から表示
    distance: '50px', // 開始距離は50px離れたところから
    duration: 700, // アニメーションを700ミリ秒に指定
    interval: 300, // アニメーションが連続する際の間隔を300ミリ秒指定
    easing: 'ease-out', // アニメーション効果を指定
  });
});
