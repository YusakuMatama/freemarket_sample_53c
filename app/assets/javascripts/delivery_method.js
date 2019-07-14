$(document).on('turbolinks:load', function(e){
  var current_options = $("#item_delivery_method").children();
  var select = document.getElementById('item_delivery_method');
  var user_select_category = $("#item_delivery_cost option:selected").val();

  $("#item_delivery_cost").on("change", function(){
    $("#delivery_method_wrap").css({
      "display" : "block"
    });
 
    if (user_select_category == 1){
      $("#item_delivery_method").children().remove();
      var option = document.createElement('option');
      var option1 = document.createElement('option');
      var option3 = document.createElement('option');
      var option6 = document.createElement('option');
      var option7 = document.createElement('option');
      option.setAttribute('value', "");
      option.innerHTML = "------";
      select.appendChild(option);

      option1.setAttribute('value', "1");
      option1.innerHTML = "未定";
      select.appendChild(option1);
      
      option3.setAttribute('value', "3");
      option3.innerHTML = "ゆうメール";
      select.appendChild(option3);

      option6.setAttribute('value', "6");
      option6.innerHTML = "クロネコヤマト";
      select.appendChild(option6);

      option7.setAttribute('value', "7");
      option7.innerHTML = "ゆうパック";
      select.appendChild(option7);

      $("#select-place").css({
        "display" : "block"
      });
    }
    if (user_select_category == 2){
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
  });
});
