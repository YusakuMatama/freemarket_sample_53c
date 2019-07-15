$(document).on('turbolinks:load', function(e){
  var current_options = $("#item_delivery_method").children();
  var select = document.getElementById('item_delivery_method');

  function CashOnDelivery(){
    $("#item_delivery_method").children().remove();
    var option1 = document.createElement('option');
    var option2 = document.createElement('option');
    var option3 = document.createElement('option');
    var option4 = document.createElement('option');
    var option5 = document.createElement('option');
    option1.setAttribute('value', "");
    option1.innerHTML = "------";
    select.appendChild(option1);

    option2.setAttribute('value', "1");
    option2.innerHTML = "未定";
    select.appendChild(option2);
    
    option3.setAttribute('value', "3");
    option3.innerHTML = "ゆうメール";
    select.appendChild(option3);

    option4.setAttribute('value', "6");
    option4.innerHTML = "クロネコヤマト";
    select.appendChild(option4);

    option5.setAttribute('value', "7");
    option5.innerHTML = "ゆうパック";
    select.appendChild(option5);
    $("#select-place").css({
      "display" : "block"
    });        
  }
  function PostAgeIncluded(){
    $("#item_delivery_method").children().remove();

    for(var i = 0; i<current_options.length; i++){
      var option = document.createElement('option');
      option.setAttribute('value', current_options[i].value);
      option.innerHTML = current_options[i].innerHTML;
      select.appendChild(option);
    };
    $("#select-place").css({
      "display" : "block"
    });   
  }
  if(typeof gon != 'undefined') {
    if(typeof gon.category_user_select != 'undefined') {
      if (location.href == window.location.protocol + '//' + window.location.host + '/items/' + gon.category_user_select.id + '/edit'){
        $("#delivery_method_wrap").css({
          "display" : "block"
        });    
        if (gon.category_user_select.delivery_cost == "着払い(購入者負担)"){
          CashOnDelivery();
          var new_options = $("#item_delivery_method").children();
          for(var i = 0; i<new_options.length; i++){
            if (new_options[i].innerHTML == gon.category_user_select.delivery_method){
              $('#item_delivery_method').val(new_options[i].value);            
            }
          };
        }
        if (gon.category_user_select.delivery_cost == "送料込み(出品者負担)"){
          PostAgeIncluded();
          var new_options = $("#item_delivery_method").children();
          for(var i = 0; i<new_options.length; i++){
            if (new_options[i].innerHTML == gon.category_user_select.delivery_method){
              $('#item_delivery_method').val(new_options[i].value);            
            }
          };
        }
      }  
    }
  }
  $("#item_delivery_cost").on("change", function(){
    $("#delivery_method_wrap").css({
      "display" : "block"
    });
    var user_select_category = $("#item_delivery_cost option:selected").val(); 
    if (user_select_category == 1){
      CashOnDelivery();
    }
    if (user_select_category == 2){
      PostAgeIncluded();     
    }
  });
});
