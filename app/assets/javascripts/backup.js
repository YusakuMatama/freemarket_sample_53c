// $(document).on('turbolinks:load', function(){
//   var dropzone = document.getElementById('file-drop-zone');
//   var drop_zone_count = 0;
//   var new_input_area_html = `<input class="file-send-btn" multiple="multiple" type="file" 
//               name="item[item_images_attributes][0][image][]" id="item_item_images_attributes_0_image">
//               </input>
//             `
//   var new_drop_zone_html = `<label id="file-drop-zone">`
//   var upload_file = [];

//   function countUp(){
//     drop_zone_count++;
//     console.log(drop_zone_count);
//   };

//   function countDown(){
//     drop_zone_count--;
//     console.log(drop_zone_count);
//   };
//   function make_drop_zone(){
//     // var new_input_area = document.getElementById('item_item_images_attributes_0_image');
//     // var new_drop_zone = document.getElementById('file-drop-zone');
//     // $("#file-drop-zone").append(new_drop_zone_html);
//     // $("#item_item_images_attributes_0_image").append(new_input_area_html);
// // 


//     // new_drop_zone.id = "file-drop-zone"+[drop_zone_count];
//     // console.log(new_drop_zone.id);  
//   }


// // 画像の表示
//   function display_image(files){
//     var  reader = new FileReader();
//     var  display_preview = $("#preview");

//     reader.onload = (function(files) {
//       return function(e) {
//         display_preview.append($('<img>').attr({
//                   src: e.target.result,
//                   width: "114px",
//                   class: "preview",
//                   title: files.name
//         }));
//       };
//     })(files);
//     reader.readAsDataURL(files);
//   };
// // 画像のドラッグ後、ドロップエリアにコピーを許可
//   $(dropzone).on("dragover", function(e){
//     e = e.originalEvent;
//     e.dataTransfer.dropEffect = 'copy';
//     e.preventDefault();
//   })
// // ドロップした画像を$filesに代入する。
//   $(dropzone).on("drop", function(e){

//     e = e.originalEvent;
//     $files = e.dataTransfer.files;
//     upload_file.push($files);
//     console.log($files[0]);
//     console.log(e.dataTransfer.files);
//     console.log(upload_file);

//     display_image($files[0]);
//     countUp();
//     make_drop_zone();

//     // $("#file-drop-zone").css({
//     //   "width" : "20%",
//     //   "float" : "right",
//     //   "pointer-events": "none"
//     // });

//     // $("#file-drop-zone").remove();
//     // $(".sell-box_container__drop-box__text__second").append(new_input);
//     // $("#file-drop-zone1").css({
//     //   "width" : "80%",
//     //   "display" : "block",
//     //   "float" : "left",
//     //   "height" : "162px"
//     // });
//     e.preventDefault();
//   })

//   // ファイルから選択したファイルを画像で表示
//   $('input[type="file"]').on('change', function(e){
//     var image_file = e.target.files[0];
//     display_image(image_file);
//   });

//   // $files＋formdataをajax通信でDBに渡す。
//   $('.new_item').on('submit', function(e){
//     e.preventDefault();
//     var formdata = new FormData(this);
//     var url = window.location.protocol + '//' + window.location.host + '/items';    

//     if(typeof $files != 'undefined'){
//       for (i = 0; i < upload_file.length; i++){
//         formdata.append('item[item_images_attributes][0][image]',upload_file[i][0]);
//         console.log(formdata.append('item[item_images_attributes][0][image]',upload_file[i][0]));
//       };
//     };
//     console.log($files);
//   //   for (var i = 0; i < upload_file.length; i++) {
//   //     ajax_upload(upload_file[i]);
//   //     console.log(upload_file[i]);
//   //   }

//   // function ajax_upload(file) {
//   //   var formdata = new FormData(this);
//   //   formdata.append('file', file);
//   //   };
//   //   console.log(formdata);

//     $.ajax({
//       url: url,
//       type: "POST",
//       data: formdata,
//       cache: false,
//       processData: false,
//       contentType: false,
//       dataType: 'html'
//     })
//     // window.location.href = '/';
//   });

// });