/* global $ */

$(document).ready(function(){
  $('.jquery').on('click',function(){
    $(this).css('color','red');
  });
});

$(document).ready(function(){
  $('#tab-contents .tab[id != "tab1"]').hide();
  $('#tab-menu a').on('click', function(event) {
    $("#tab-contents .tab").hide();
    $("#tab-menu .active").removeClass("active");
    $(this).addClass("active");
    $($(this).attr("href")).show();
    // タブクリック時のページリロードをキャンセル
    event.preventDefault();
  });
});

$(document).ready(function () {
  $("#theTarget").skippr({
    // スライドショーの変化 ("fade" or "slide")
    transition : 'slide',
    // 変化に係る時間(ミリ秒)
    speed : 1000,
    // easingの種類
    easing : 'easeOutQuart',
    // ナビゲーションの形("block" or "bubble")
    navType : 'block',
    // 子要素の種類('div' or 'img')
    childrenElementType : 'div',
    // ナビゲーション矢印の表示(trueで表示)
    arrows : true,
    // スライドショーの自動再生(falseで自動再生なし)
    autoPlay : true,
    // 自動再生時のスライド切替間隔(ミリ秒)
    autoPlayDuration : 2000,
    // キーボードの矢印キーによるスライド送りの設定(trueで有効)
    keyboardOnAlways : true,
    // 一枚目のスライド表示時に戻る矢印を表示するかどうか(falseで非表示)
    hidePrevious : false
  });
});