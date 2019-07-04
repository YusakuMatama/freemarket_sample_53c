// $(document).on('turbolinks:load', function(){
// // var category_search = $("#item_category_attributes_id").children();

// function category_box(category, user_select){
//   var child_category = [];
//   var grandchild_category = [];
//   var select_category_id = "";
//   var select_category_grandchild_id = "";

//   var html = `<select name="item[category_attributes][id]" id="item_category_attributes_child_category_id"> `
//   $(".select-wrap-category").append(html);

//   category.forEach(function(value){
//     if (value.name == user_select){
//       select_category_id = value.id;
//     }
//   });

//   child_category = category.filter(function(value){
//     if (select_category_id == value.parent_id)
//     return true;
//   });

// // selectタグのID取得
// var select = document.getElementById('item_category_attributes_child_category_id');
// // option要素の宣言
// let option = document.createElement('option');
// // option要素のvalue属性に値をセット
// child_category.forEach(function(value){
//   option.setAttribute('value', value.name);
//   option.innerHTML = value.name;
//   console.log(option.innerHTML);
//   console.log(option.setAttribute('value', value.name));
// });
//   console.log(select);

// // option要素に値をセット
// // 作成したoption要素をselectタグに追加
// select.appendChild(option);
// }


// $("#item_category_attributes_id").on("change", function(){
//   var test = $(this).val();
//   console.log(test);
//   var user_select_category = $("#item_category_attributes_id option:selected").text();
//   console.log(user_select_category);  
//   category_box(gon.category,user_select_category);
// });
// });

