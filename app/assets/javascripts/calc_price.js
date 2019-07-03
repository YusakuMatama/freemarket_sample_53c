$(".price_input").on("keyup", function(){
  $(".right-price").empty();
  $(".right-price-maney").empty();

  var input = $(".price_input").val(),
      fee = $(".right-price"),
      fee_maney = Math.floor(input * 0.1),
      maney = $(".right-price-maney"),
      maney_maney = "¥" + (input - fee_maney);
  if (input >= 300 && input <= 9999999){
  fee.append(fee_maney);
  maney.append(maney_maney);
  }
  else {
    fee.append("-----");
    maney.append("-----");
  }
});