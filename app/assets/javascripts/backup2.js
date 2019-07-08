// $(document).on('turbolinks:load', function(){

//   var dropzone = document.getElementById('file-drop-zone');
//   var dropzone_next = document.getElementById('file-drop-zone--next');
//   var drop_zone_count = 0;
//   var $upload_files = [];

//   function countUp(){
//     drop_zone_count++;
//   };

//   function countDown(){
//     drop_zone_count--;
//   };

// // 入力ゾーンの修正
//   function adjust_file_field(){
//       if($upload_files.length <= 5){
//         $("#file-drop-zone").css({
//         "width" : "80%"  
//       });  
//       if($upload_files.length == 5){
//         $("#file-drop-zone").css({
//           "pointer-events" : "none",
//           "border" : "none"
//         });    
//       }
//     }
//       if(5 < $upload_files.length && $upload_files.length <= 10 ){
//         $("#file-drop-zone--next").css({
//         "width" : "80%"  
//       });
//       if($upload_files.length == 10){
//         $("#file-drop-zone--next").css({
//           "pointer-events" : "none",  
//           "border" : "none"
//         });    
//       } 
//     }
//   };

//   function display_preview(src,title){
//     html =` <ul>
//              <li id="image_display_container">
//                <img src="${src}" class="preview" title="${title}"></img>
//                <div id ="remove_edit_container">
//                  <div class='image-edit-btn'>編集</div>                                
//                  <div class='image-remove-btn'>削除</div>
//                </div>
//              </li>
//            </ul>
//           `
//     if($upload_files.length <= 5){
//     $("#preview").append(html);
//     };

//     if(5 < $upload_files.length && $upload_files.length <= 10 ){
//       $("#preview--next").append(html);
//     };  
//   }

  

// // 画像の表示と削除、編集ボタンの追加
//   function display_image(display_file){
//     var  reader = new FileReader();
//     console.log($upload_files);

//     reader.onload = (function(display_file) {
//       return function(e) {
//         var src = e.target.result;
//         var title = display_file.name;
//         display_preview(src,title);
//       };

//     })(display_file);
//     reader.readAsDataURL(display_file);

//   };
  
// // 画像のドラッグ後、ドロップエリアにコピーを許可
//   $(dropzone).on("dragover", function(e){
//     e = e.originalEvent;
//     e.dataTransfer.dropEffect = 'copy';
//     e.preventDefault();
//   })

//   $(dropzone_next).on("dragover", function(e){
//     e = e.originalEvent;
//     e.dataTransfer.dropEffect = 'copy';
//     e.preventDefault();
//   })

// // ドロップした画像を$upload_filesに代入する。
//   $(dropzone).on("drop", function(e){
//     e = e.originalEvent;
//     var drop_file = e.dataTransfer.files;
//     $upload_files.push(drop_file);

//     display_image(drop_file[0]);
//     countUp();
//     adjust_file_field();

//     if(5 <= $upload_files.length && $upload_files.length <= 10 ){
//         $(".sell-box_container__drop-box--next").css({
//           "display" : "block"
//         })
//       }

//     e.preventDefault();
//   })

//   $(dropzone_next).on("drop", function(e){
//     e = e.originalEvent;
//     var drop_file = e.dataTransfer.files;
//     $upload_files.push(drop_file);

//     display_image(drop_file[0]);
//     countUp();
//     adjust_file_field();

//     e.preventDefault();
//   })

//   // ファイルから選択したファイルを画像で表示
//   $('input[type="file"]').on('change', function(e){
//     var input_file = e.target.files;
//     $upload_files.push(input_file);

//     display_image(input_file[0]);
//     countUp();
//     adjust_file_field();
//   });

//   // $files＋formdataをajax通信でDBに渡す。
//   $('.new_item').on('submit', function(e){
//     e.preventDefault();
//     var formdata = new FormData(this);
//     var url = window.location.protocol + '//' + window.location.host + '/items';    
//     var ajax_files = [];

//     for (i = 0; i < $upload_files.length; i++){
//     ajax_files[i] = "item[item_images_attributes]" + "[" + i + "]" + '[image]';
//     formdata.append(ajax_files[i], $upload_files[i][0]);
//     };

//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formdata,
//       cache: false,
//       processData: false,
//       contentType: false,
//       dataType: 'json'
//     })

//     .always(function(items){
//       console.log(items);
//       $('#product-sell-btn').prop('disabled', false);
//       $(".form_item-name p:last").remove();
//       $(".form_item-intro p:last").remove();
//       $(".form_item-intro p:last").remove();
//       $(".select-wrap-category p:last").remove();
//       $(".select-wrap-condition p:last").remove();
//       $(".select-wrap-days_to_ship p:last").remove();
//       $(".select-wrap-delivery_cost p:last").remove();
//       $(".select-wrap-delivery_method p:last").remove();
//       $(".select-wrap-delivery_prefecture p:last").remove();
//       $(".sell-price_form p:last").remove();

//       if(typeof items != 'undefined'){
//         if (items.name == ""){
//           $(".form_item-name").append(`<p>入力してください。</p>`)
//           $(".form_item-name p:last").css({"color" : "red"});
//         }
//         if (items.name.length > 40){
//           $(".form_item-name").append(`<p>40文字以下で入力してください。</p>`)
//           $(".form_item-name p:last").css({"color" : "red"});
//         }
//         if (items.detail == ""){
//           $(".form_item-intro").append(`<p>入力してください。</p>`)
//           $(".form_item-intro p:last").css({"color" : "red"});
//         }
//         if (items.detail.length > 1000){
//           $(".form_item-intro").append(`<p>1000文字以下で入力してください。</p>`)
//           $(".form_item-intro p:last").css({"color" : "red"});
//         }
//         if (items.category_id === null){
//           $(".select-wrap-category").append(`<p>入力してください。</p>`)
//           $(".select-wrap-category p:last").css({"color" : "red"});
//         }
//         if (items.condition === null){
//           $(".select-wrap-condition").append(`<p>入力してください。</p>`)
//           $(".select-wrap-condition p:last").css({"color" : "red"});
//         }
//         if (items.days_to_ship === null){
//           $(".select-wrap-days_to_ship").append(`<p>入力してください。</p>`)
//           $(".select-wrap-days_to_ship p:last").css({"color" : "red"});
//         }
//         if (items.delivery_cost === null){
//           $(".select-wrap-delivery_cost").append(`<p>入力してください。</p>`)
//           $(".select-wrap-delivery_cost p:last").css({"color" : "red"});
//         }
//         if (items.delivery_method === null){
//           $(".select-wrap-delivery_method").append(`<p>入力してください。</p>`)
//           $(".select-wrap-delivery_method p:last").css({"color" : "red"});
//         }
//         if (items.delivery_prefecture === null){
//           $(".select-wrap-delivery_prefecture").append(`<p>入力してください。</p>`)
//           $(".select-wrap-delivery_prefecture p:last").css({"color" : "red"});
//         }
//         if (items.price < 300 || items.price > 9999999){
//           $(".sell-price_form").append(`<p>300〜9999999円の範囲で入力してください。</p>`)
//           $(".sell-price_form p:last").css({"color" : "red"});
//         }
//         $('html,body').animate({scrollTop: 0},'fast');
//       }
//       else{
//         window.location.href = '/';
//       }
//     })
//   });
// });