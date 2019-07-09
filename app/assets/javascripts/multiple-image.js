$(document).on('turbolinks:load', function(){
  var dropzone = document.getElementById('file-drop-zone');
  var dropzone_next = document.getElementById('file-drop-zone--next');
  var dropzone_edit = document.getElementById('file-drop-zone--edit');
  var upload_files = [];
  var edit_file = [];
  var user_select_edit_image;
  var user_select_edit_image_select_last;

  function display_new_upload_zone(){
    if(5 <= upload_files.length && upload_files.length <= 10 ){
      $(".sell-box_container__drop-box--next").css({
        "display" : "block"
      })
    }
  };
// 入力ゾーンの幅変更
  function adjust_file_field(){
    if(upload_files.length == 0){
      $("#file-drop-zone").css({
        "display" : "block",
        "width" : "100%"  
    });
    }  
    if(0 < upload_files.length && upload_files.length < 5){
      $("#file-drop-zone").css({
      "display" : "block",
      "width" : "80%"  
    });
    }  
    if(upload_files.length == 5){
      $("#file-drop-zone").css({
        "display" : "none"
    });    
    }
    if(upload_files.length == 5){
      $("#file-drop-zone--next").css({
        "display" : "block",
        "width" : "100%"  
      });    
    }
    if(5 < upload_files.length && upload_files.length < 10 ){
      $("#file-drop-zone--next").css({
        "display" : "block",
        "width" : "80%"  
    });
    }
    if(upload_files.length == 10){
      $("#file-drop-zone--next").css({
        "display" : "none"
    });    
    } 
  };

  // 入力した画像＋削除・編集ボタンの表示
  function display_preview(src,title){
    html =` <ul id="add_file_image">
             <li id="image_display_container">
               <img src="${src}" class="preview" title="${title}"></img>
               <div id ="remove_edit_container">
                 <div class='image-edit-btn'>編集</div>                                
                 <div class='image-remove-btn'>削除</div>
               </div>
             </li>
           </ul>
          `
    if(upload_files.length <= 5){
    $("#preview").append(html);
    };

    if(5 < upload_files.length && upload_files.length <= 10 ){
      $("#preview--next").append(html);
    };  
  }


// 画像の表示と削除、編集ボタンの追加
  function display_image(display_file){
    var  reader = new FileReader();

    reader.onload = (function(display_file) {
      return function(e) {
        var src = e.target.result;
        var title = display_file.name;
        display_preview(src,title);
      };

    })(display_file);
    reader.readAsDataURL(display_file);
  };
  
// 画像のドラッグ後、ドロップエリアにコピーを許可
  $(dropzone).on("dragover", function(e){
    e = e.originalEvent;
    e.dataTransfer.dropEffect = 'copy';
    e.preventDefault();
  })

  $(dropzone_next).on("dragover", function(e){
    e = e.originalEvent;
    e.dataTransfer.dropEffect = 'copy';
    e.preventDefault();
  })

  $(document).on("dragover", dropzone_edit, function(e){
    e = e.originalEvent;
    e.dataTransfer.dropEffect = 'copy';
    e.preventDefault();

  })

// ドロップした画像を$upload_filesに代入する。
  $(dropzone).on("drop", function(e){
    e = e.originalEvent;
    var drop_file = e.dataTransfer.files;
    upload_files.push(drop_file);

    display_image(drop_file[0]);
    adjust_file_field();
    display_new_upload_zone();
    $(this).val();

    e.preventDefault();
  })

  $(dropzone_next).on("drop", function(e){
    e = e.originalEvent;
    var drop_file = e.dataTransfer.files;
    upload_files.push(drop_file);

    display_image(drop_file[0]);
    adjust_file_field();

    e.preventDefault();
  })

  $(document).on("drop", dropzone_edit, function(e){
    e = e.originalEvent;
    var drop_file = e.dataTransfer.files;
    edit_file.length = 0;
    edit_file.push(drop_file);

    display_image_edit_display(drop_file[0]);

    e.preventDefault();
  })

  // ファイルから選択したファイルを画像で表示
  $(document).on('change','.file-send-btn',function(e){
    var input_file = e.target.files;
    if(input_file.length != 0){
      upload_files.push(input_file);
    
      display_image(input_file[0]);
      adjust_file_field();
      display_new_upload_zone();
    
      if(5 <= upload_files.length && upload_files.length <= 10 ){
        $(".sell-box_container__drop-box--next").css({
          "display" : "block"
        })
      }
      else{
        $(".sell-box_container__drop-box--next").css({
        "display" : "none"
      })
      }
    }
    console.log(upload_files);

  });

    // 選択した画像の削除
    $(document).on('click', ".image-remove-btn",function(e){
      user_select_delete_image = $(this).parent().parent().parent();
      user_select_delete_image_result = user_select_delete_image.index() - 1;

      user_select_delete_image.remove();
      preview_children_attr = document.getElementById("preview");
      preview_children_count = preview_children_attr.childElementCount - 1;

      if (preview_children_count < 5){
        for (i = 0; i < upload_files.length; i++){
          if (i == user_select_delete_image_result){
            upload_files.splice(i, 1);
            console.log(user_select_delete_image_result);
          }
        };
      }
      if (preview_children_count == 5){
        for (i = 0; i < upload_files.length; i++){
          if (i == user_select_delete_image_result + 5){
            upload_files.splice(i, 1);
          }
        };
      }
      if(preview_children_count == 4){
        move_image = $("#preview--next ul:first");
        $(move_image).appendTo("#preview");
      }

      if(5 <= upload_files.length && upload_files.length <= 10 ){
        $(".sell-box_container__drop-box--next").css({
          "display" : "block"
        })
      }
      else{
        $(".sell-box_container__drop-box--next").css({
        "display" : "none"
        })
      }
      adjust_file_field();
    });

  // 選択した画像の編集

  function display_preview_edit(src,title,edit_btn_parent){
    modalwindow_html =`<div id='overlay'>
                        <div id='modalwindow'>
                          <div class= "item_image_change_wrap">
                            <div class="item_image_change_wrap__text">写真を切り取る</div>
                            <div class="item_image_change_wrap__change-btn">
                              <label = "item_image_change_wrap__change-btn__label">                        
                                <i class="fas fa-camera"></i>  
                                写真を変更する
                                <input class="file-send-btn--edit" multiple="multiple" type="file" name="item[item_images_attributes][0][image][]" id="edit_image">
                                </label>
                            </div>
                          </div>
                          <div class="file-drop-zone-edit-wrap">
                            <label id="file-drop-zone--edit">
                              <img src="${src}" class="preview--edit" title="${title}"></img>
                            </label>
                            <div class="file-drop-zone-edit-wrap__size-change">
                              <div class="file-drop-zone-edit-wrap__size-change__small-icon">
                                <i class="fas fa-camera"></i>  
                              </div>
                              <div class="file-drop-zone-edit-wrap__size-change__bar"></div>
                                ----------------------------------------------------------
                              <div class="file-drop-zone-edit-wrap__size-change__big-icon">
                                <i class="fas fa-camera"></i>  
                              </div>
                            </div>
                          </div>
                          <div class="item_image_change_ok_btn">
                            <div id='image-cancel-btn'>キャンセル</div>
                            <div id='image-comformation-btn'>完了</divn>
                          </div>
                        </div>
                      </div>
                      `
      $(edit_btn_parent).append(modalwindow_html);
      $("#overlay").fadeIn();
    }

    function display_image_edit(display_file,edit_btn_parent){
      var  reader = new FileReader();

      reader.onload = (function(display_file) {
        return function(e) {
          var src = e.target.result;
          var title = display_file.name;
          display_preview_edit(src,title,edit_btn_parent);
        };

      })(display_file);
      reader.readAsDataURL(display_file);
    };

    function display_image_edit_display(display_file){
      var  reader = new FileReader();

      reader.onload = (function(display_file) {
        return function(e) {
          var src = e.target.result;
          var title = display_file.name;
          $('#file-drop-zone--edit').children().remove();
          $('#file-drop-zone--edit').append(`<img src="${src}" class="preview--edit" title="${title}"></img>`);

        };

      })(display_file);
      reader.readAsDataURL(display_file);
    };

    function display_image_edit_display_last(display_file, append_file){
      var  reader = new FileReader();
      reader.onload = (function(display_file) {
        return function(e) {
          var src = e.target.result;
          var title = display_file.name;
          $(append_file).prepend(`<img src="${src}" class="preview" title="${title}"></img>`);

        };

      })(display_file);
      reader.readAsDataURL(display_file);
    };

    $(document).on('change','.file-send-btn--edit',function(e){
      edit_file.length = 0;
      var input_edit_file = document.getElementById('edit_image').files;
      edit_file.push(input_edit_file);
      display_image_edit_display(input_edit_file[0]);         
    });

  $(document).on('click', ".image-edit-btn",function(e){
    var user_select_edit_image_select = $(this).parent().parent().parent();
    user_select_edit_image_select_last = user_select_edit_image_select.parent().attr("id")
    user_select_edit_image = $(this).parent().parent();
    user_select_edit_image_result = user_select_edit_image_select.index() - 1;

    preview_children_attr = document.getElementById("preview");
    preview_children_count = preview_children_attr.childElementCount - 1;

    if (user_select_edit_image_select_last == "preview"){
      for (i = 0; i < upload_files.length; i++){
        if (i == user_select_edit_image_result){
          display_image_edit(upload_files[i][0], $(this).parent());
        }
      };
    }
    if (user_select_edit_image_select_last == "preview--next"){
      for (i = 0; i < upload_files.length; i++){
        if (i == user_select_edit_image_result + 5){
          display_image_edit(upload_files[i][0], $(this).parent());
        }
      };
    }
  });

  $(document).on('click', "#image-cancel-btn",function(e){
    $('#overlay').fadeOut();
    $('#overlay').remove();
  });
  $(document).on('click', "#image-comformation-btn",function(e){
    $('#overlay').fadeOut();
    $('#overlay').remove();
    preview_children_attr = document.getElementById("preview");
    preview_children_count = preview_children_attr.childElementCount - 1;

    if(edit_file.length != 0){

      if (user_select_edit_image_select_last == "preview"){
        for (i = 0; i < upload_files.length; i++){
          if (i == user_select_edit_image_result){
            upload_files.splice(i+1, 0, edit_file[0]);
            upload_files.splice(i, 1);
            user_select_edit_image.children("img").remove();
            display_image_edit_display_last(edit_file[0][0], user_select_edit_image);
          }
        }
      }
      if (user_select_edit_image_select_last == "preview--next"){
        for (i = 0; i < upload_files.length; i++){
          if (i == user_select_edit_image_result + 5){
            upload_files.splice(i+1, 0, edit_file[0]);
            upload_files.splice(i, 1);
            user_select_edit_image.children("img").remove();
            display_image_edit_display_last(edit_file[0][0], user_select_edit_image);
          }
        }
      }
    }      
  });

  // $files＋formdataをajax通信でDBに渡す。
  $('.new_item').on('submit', function(e){
    e.preventDefault();
    var formdata = new FormData(this);
    var url = window.location.protocol + '//' + window.location.host + '/items';    
    var ajax_files = [];

    for (i = 0; i < upload_files.length; i++){
      ajax_files[i] = "item[item_images_attributes]" + "[" + i + "]" + '[image]';
      formdata.append(ajax_files[i], upload_files[i][0]);
    };

    $.ajax({
      url: url,
      type: "POST",
      data: formdata,
      cache: false,
      processData: false,
      contentType: false,
      dataType: 'json'
    })

    .always(function(items){
      sell_function_validation(items);
    })
  });
});