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
  $('.tab li').click(function(){
    var index = $('.tab li').index(this);
    $('.tab li').remove('active');
    $(this).addClass('active');
    $('.area ul').removeClass('show').eq(index).addClass('show');
  });
});