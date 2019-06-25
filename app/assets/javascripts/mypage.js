$(function(){
  $(".list-item").hover(function(){
    $(this).scss("background-color", "#F1940B");
    $(this).scss("font-weight", "bold");
  }, function(){
    $(this).scss("background-color", "#FFFFFF");
    $(this).scss("font-weight", '');
  });
});

$(function(){
  $('.tab').click(function(){
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.show').removeClass('show');
        // クリックしたタブからインデックス番号を取得
		const index = $(this).index();
        // クリックしたタブと同じインデックス番号をもつコンテンツを表示
		$('.panel').eq(index).addClass('show');
	});
});