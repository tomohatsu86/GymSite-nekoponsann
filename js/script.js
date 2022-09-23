jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $(".pagetop");
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

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300,
      "swing"
    );
    return false;
  });

  //ドロワーメニュー
  $("#MenuButton").click(function () {
    // $(".l-drawer-menu").toggleClass("is-show");
    // $(".p-drawer-menu").toggleClass("is-show");
    $(".js-drawer-open").toggleClass("open");
    $(".drawer-menu").toggleClass("open");
    $("html").toggleClass("is-fixed");
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)

  $(document).on("click", 'a[href*="#"]', function () {
    let time = 400;
    let header = $("header").innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $("html,body").animate({ scrollTop: targetY }, time, "swing");
    return false;
  });

  //タブの切り替え

    //#tab01以外を非表示にする
    $('.js-trainer__items > div[id!="tab01"]').hide();

    //タブをクリック
    $('.js-trainer__tab a').click(function () {
      // console.log('はしった')
      //一度すべてのコンテンツを非表示する
      $('.js-trainer__items > div').hide();

      //href属性を取得し、選択されたコンテンツを再表示する
      $($(this).attr("href")).show();

      //現在のcurrentクラスを削除
      $('.current').removeClass('current');
      //選択されたタブにcurrentクラスを付ける
      $(this).addClass('current');
      
      return false;

    });

    /* swiper */

      //トップページワークスのswiper
      const swiper = new Swiper('.swiper', {
        loop: true,
        effect: 'slide',
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        speed: 2000,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }
      }


});
