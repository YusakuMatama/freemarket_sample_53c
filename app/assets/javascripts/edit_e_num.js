$(document).on('turbolinks:load', function(e){
  var item_condition_options = $("#item_condition").children();
  var item_delivery_cost_options = $("#item_delivery_cost").children();
  var item_delivery_prefecture_options = $("#item_delivery_prefecture").children();
  var item_days_to_ship_options = $("#item_days_to_ship").children();

  if(typeof gon != 'undefined') {
    if(typeof gon.category_user_select != 'undefined') {
      if (location.href == window.location.protocol + '//' + window.location.host + '/items/' + gon.category_user_select.id + '/edit'){

      for(var i = 0; i<item_condition_options.length; i++){
          if (item_condition_options[i].innerHTML == gon.category_user_select.condition){
            $('#item_condition').val(item_condition_options[i].value);            
          }
        };
        for(var i = 0; i<item_delivery_cost_options.length; i++){
          if (item_delivery_cost_options[i].innerHTML == gon.category_user_select.delivery_cost){
            $('#item_delivery_cost').val(item_delivery_cost_options[i].value);            
          }
        };
        for(var i = 0; i<item_delivery_prefecture_options.length; i++){
          if (item_delivery_prefecture_options[i].innerHTML == gon.category_user_select.delivery_prefecture){
            $('#item_delivery_prefecture').val(item_delivery_prefecture_options[i].value);            
          }
        };
        for(var i = 0; i<item_days_to_ship_options.length; i++){
          if (item_days_to_ship_options[i].innerHTML == gon.category_user_select.days_to_ship){
            $('#item_days_to_ship').val(item_days_to_ship_options[i].value);            
          }
        };
      }
    }
  }
});
