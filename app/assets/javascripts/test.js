// $(document).on('turbolinks:load', function(){

//   function display_image(files){
//     reader = new FileReader();
//     display_preview = $("#preview");
  
//   // ファイル読み込みが完了した際のイベント登録
//   reader.onload = (function(files) {
//   return function(e) {
//     //既存のプレビューを削除
//     // .prevewの領域の中にロードした画像を表示するimageタグを追加
//     display_preview.append($('<img>').attr({
//               src: e.target.result,
//               width: "150px",
//               class: "preview",
//               title: files.name
//           }));
  
//   };
//   })(files);
//   reader.readAsDataURL(files);
//   };
  
//   //drop zoneの実装
//   function handleFileSelect(evt) {
//     evt.stopPropagation();
//     evt.preventDefault();
//     console.log("a")
  
//     files = evt.dataTransfer.files[0]; // FileList object.
//     display_image(files);
//   }
  
//   function handleDragOver(evt) {
//     evt.stopPropagation();
//     evt.preventDefault();
//     evt.dataTransfer.dropEffect = 'copy'; 
//   }
  
//   // イベントリスナーを設定
//   var dropZone = document.getElementById('file-drop-zone');
//   dropZone.addEventListener('dragover', handleDragOver, false);
//   dropZone.addEventListener('drop', handleFileSelect, false);
  
//   $('.new_item').on('submit', function(e){
//     e.preventDefault();  
//     let formdata = new FormData(this);
//     if(typeof files != 'undefined'){
//       formdata.append('item[item_images_attributes][0][image]',files[0])
//     }
//     console.log("ajax");
//     console.log(formdata);
  
//     $.ajax({
//       url: 'http://localhost:3000/items',
//       type: "POST",
//       data: formdata,
//       cache: false,
//       processData: false,
//       contentType: false,
//       dataType: 'html'
//     })
  
//     .done(function(data, textStatus, jqXHR){
//       console.log(data);
//     })
//     .fail(function(jqXHR, textStatus, errorThrown){
//       console.log("fail");
//       console.log("XMLHttpRequest : " + XMLHttpRequest.status);
//       console.log("textStatus     : " + textStatus);
//       console.log("errorThrown    : " + errorThrown.message);
//       })
//   });
  
//   $('.new_item').on('change','input[type="file"]', function(e){
//     console.log("1");
//     var image_file = e.target.files[0];
//     display_image(image_file);
//   });
  
//   $(".price_input").on("keyup", function(){
//     $(".right-price").empty();
//     $(".right-price-maney").empty();
  
//     var input = $(".price_input").val(),
//         fee = $(".right-price"),
//         fee_maney = Math.floor(input * 0.1),
//         maney = $(".right-price-maney"),
//         maney_maney = "¥" + (input - fee_maney);
//     if (input >= 300 && input <= 9999999){
//     fee.append(fee_maney);
//     maney.append(maney_maney);
//     }
//     else {
//       fee.append("-----");
//       maney.append("-----");
//     }
//   });
  
//   });