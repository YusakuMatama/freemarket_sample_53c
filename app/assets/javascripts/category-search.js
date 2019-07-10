$(document).on('turbolinks:load', function(){
// 子カテゴリーを表示
  function category_child_box(category, user_select){
    var child_category = [];
    var html = `<select name="item[category_attributes][id]" id="item_category_attributes_child_id">                 `
    $(".select-wrap-category").append(html);

    child_category = category.filter(function(value){// 子カテゴリーの配列を作成
      if (user_select == value.parent_id)
      return true;
    });
    var select = document.getElementById('item_category_attributes_child_id');
    var option = document.createElement('option');// 子カテゴリー用のoption要素を作成
    option.setAttribute('value', "");
    option.innerHTML = "-----";// 子カテゴリーの何も選択していない時の表示。（最初の表示）
    select.appendChild(option);

    for(var i = 0; i<child_category.length; i++){// 子カテゴリーの配列に、option要素をそれぞれ適用し、プルダウンで表示がでるようにする。
      option = document.createElement('option');
      option.setAttribute('value', child_category[i].id);
      option.innerHTML = child_category[i].name;
      select.appendChild(option);
    };
  }
//孫カテゴリーを表示
  function category_grandchild_box(category, user_select){
    var grandchild_category = [];
    var html = `<select name="item[category_attributes][id]" id="item_category_attributes_grandchild_id"> 
                <i class="fas fa-chevron-down"></i>    
                `
    $(".select-wrap-category").append(html);

    grandchild_category = category.filter(function(value){
      if (user_select == value.parent_id)
      return true;
    });

    var select = document.getElementById('item_category_attributes_grandchild_id');
    var option = document.createElement('option');
    option.setAttribute('value', "");
    option.innerHTML = "-----";
    select.appendChild(option);
    
    for(var i = 0; i<grandchild_category.length; i++){
      var option = document.createElement('option');
      option.setAttribute('value', grandchild_category[i].id);
      option.innerHTML = grandchild_category[i].name;
      select.appendChild(option);
    };
  }
// 親カテゴリーの選択をuserが変更したら子カテゴリーを表示
  $("#item_category_attributes_id").on("change", function(){
    $("#item_category_attributes_child_id").remove();
    $("#item_category_attributes_grandchild_id").remove();
    var user_select_category = $("#item_category_attributes_id option:selected").val();
    category_child_box(gon.category,user_select_category);
  });

// 子カテゴリーの選択をuserが変更したら孫カテゴリーを表示
  $(document).on("change","#item_category_attributes_child_id", function(){
    $("#item_category_attributes_grandchild_id").remove();
    var user_select_category = $("#item_category_attributes_child_id option:selected").val();
    category_grandchild_box(gon.category,user_select_category);
  });
});

