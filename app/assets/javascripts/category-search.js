$(document).on('turbolinks:load', function(){

  function category_child_box(category, user_select){
    var child_category = [];
    var select_category_id = "";
    var html = `<select name="item[category_attributes][id]" id="item_category_attributes_child_id"> 
                <i class="fas fa-chevron-down"></i>    
                `
    $(".select-wrap-category").append(html);
    category.forEach(function(value){
      if (value.id == user_select){
        select_category_id = value.id;
      }
    });

    child_category = category.filter(function(value){
      if (select_category_id == value.parent_id)
      return true;
    });

    var select = document.getElementById('item_category_attributes_child_id');
    var option = document.createElement('option');
    option.setAttribute('value', "");
    option.innerHTML = "-----";
    select.appendChild(option);

    for(var i = 0; i<child_category.length; i++){
      option = document.createElement('option');
      option.setAttribute('value', child_category[i].id);
      option.innerHTML = child_category[i].name;
      select.appendChild(option);
    };
  }

  function category_grandchild_box(category, user_select){
    var grandchild_category = [];
    var select_category_id = "";
    var html = `<select name="item[category_attributes][id]" id="item_category_attributes_grandchild_id"> 
                <i class="fas fa-chevron-down"></i>    
                `
    $(".select-wrap-category").append(html);
    category.forEach(function(value){
      if (value.id == user_select){
        select_category_id = value.id;
      }
    });

    grandchild_category = category.filter(function(value){
      if (select_category_id == value.parent_id)
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

  $("#item_category_attributes_id").on("change", function(){
    $("#item_category_attributes_child_id").remove();
    $("#item_category_attributes_grandchild_id").remove();
    var user_select_category = $("#item_category_attributes_id option:selected").val();
    category_child_box(gon.category,user_select_category);
  });

  $(document).on("change","#item_category_attributes_child_id", function(){
    $("#item_category_attributes_grandchild_id").remove();
    var user_select_category = $("#item_category_attributes_child_id option:selected").val();
    category_grandchild_box(gon.category,user_select_category);
  });
});

