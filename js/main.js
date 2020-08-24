'use scrict';
  	
document.addEventListener('DOMContentLoaded',() => {

  //ハンバーガーボタンクリック時の関数
  //querySelector：CSSセレクタで要素を取得
  const $hamburger = document.querySelector('.hamburger');
  //addEventListener：イベント処理（click）
  $hamburger.addEventListener('click', function(){
    //ON時はis-activeクラス付与、OFF時はis-activeクラス削除
    $hamburger.classList.toggle('is-active')
  });
 
  //全体を囲む要素をid[#sp-menu]で指定
  const $spMenu = document.getElementById('sp-menu');
  //メニューオープン・クローズのボタン要素をid[nav-btn]で指定
  const $navBtn = document.getElementById('nav-btn');
 
  //クリックしたら navToggle関数実行
  $navBtn.addEventListener('click', navToggle);
 
  //navToggleの関数
  function navToggle() {
    //contains:文字列が引数に指定した文字列を含まれているかどうか[nav-open]
    if ($spMenu.classList.contains('nav-open')) {
      //メニュークローズ時
      navCloseFunc();
    } else {
      //メニューオープン時
      navOpenFunc();
    }
  }
 
  //メニューオープン時の関数
  function navOpenFunc() {
    //wrapperのclass[nav-open]付与
    $spMenu.classList.add('nav-open');
  }
  //メニュークローズ時の関数
  function navCloseFunc() {
    //wrapperのclass[nav-open]削除
    $spMenu.classList.remove('nav-open');
  }
 

  const title = document.querySelectorAll('.js-accordion-title');
  
  for (let i = 0; i < title.length; i++){
    let titleEach = title[i];
    let content = titleEach.nextElementSibling;
    titleEach.addEventListener('click', () => {
      titleEach.classList.toggle('is-active');
      content.classList.toggle('is-open');
    });
  }
});
 
 
