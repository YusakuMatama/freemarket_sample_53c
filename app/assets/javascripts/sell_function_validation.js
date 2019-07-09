// function sell_function_validation(items){
  // $('#product-sell-btn').prop('disabled', false);
  // $(".form_item-name p:last").remove();
  // $(".form_item-intro p:last").remove();
  // $(".form_item-intro p:last").remove();
  // $(".select-wrap-category p:last").remove();
  // $(".select-wrap-condition p:last").remove();
  // $(".select-wrap-days_to_ship p:last").remove();
  // $(".select-wrap-delivery_cost p:last").remove();
  // $(".select-wrap-delivery_method p:last").remove();
  // $(".select-wrap-delivery_prefecture p:last").remove();
  // $(".sell-price_form p:last").remove();

  // if(typeof items != 'undefined'){
  //   if (items.name == ""){
  //     $(".form_item-name").append(`<p>入力してください。</p>`)
  //     $(".form_item-name p:last").css({"color" : "red"});
  //   }
  //   if (items.name.length > 40){
  //     $(".form_item-name").append(`<p>40文字以下で入力してください。</p>`)
  //     $(".form_item-name p:last").css({"color" : "red"});
  //   }
  //   if (items.detail == ""){
  //     $(".form_item-intro").append(`<p>入力してください。</p>`)
  //     $(".form_item-intro p:last").css({"color" : "red"});
  //   }
  //   if (items.detail.length > 1000){
  //     $(".form_item-intro").append(`<p>1000文字以下で入力してください。</p>`)
  //     $(".form_item-intro p:last").css({"color" : "red"});
  //   }
  //   if (items.category_id === null){
  //     $(".select-wrap-category").append(`<p>入力してください。</p>`)
  //     $(".select-wrap-category p:last").css({"color" : "red"});
  //   }
  //   if (items.condition === null){
  //     $(".select-wrap-condition").append(`<p>入力してください。</p>`)
  //     $(".select-wrap-condition p:last").css({"color" : "red"});
  //   }
  //   if (items.days_to_ship === null){
  //     $(".select-wrap-days_to_ship").append(`<p>入力してください。</p>`)
  //     $(".select-wrap-days_to_ship p:last").css({"color" : "red"});
  //   }
  //   if (items.delivery_cost === null){
  //     $(".select-wrap-delivery_cost").append(`<p>入力してください。</p>`)
  //     $(".select-wrap-delivery_cost p:last").css({"color" : "red"});
  //   }
  //   if (items.delivery_method === null){
  //     $(".select-wrap-delivery_method").append(`<p>入力してください。</p>`)
  //     $(".select-wrap-delivery_method p:last").css({"color" : "red"});
  //   }
  //   if (items.delivery_prefecture === null){
  //     $(".select-wrap-delivery_prefecture").append(`<p>入力してください。</p>`)
  //     $(".select-wrap-delivery_prefecture p:last").css({"color" : "red"});
  //   }
  //   if (items.price < 300 || items.price > 9999999){
  //     $(".sell-price_form").append(`<p>300〜9999999円の範囲で入力してください。</p>`)
  //     $(".sell-price_form p:last").css({"color" : "red"});
  //   }
  //   $('html,body').animate({scrollTop: 0},'fast');
  // }
  // else{
  //   window.location.href = '/';
  // }
// };