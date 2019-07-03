$(document).on('turbolinks:load', function(){


function display_image(files){
  reader = new FileReader();
  display_preview = $("#preview");

// ファイル読み込みが完了した際のイベント登録
reader.onload = (function(files) {
  return function(e) {
    //既存のプレビューを削除
    // .prevewの領域の中にロードした画像を表示するimageタグを追加
    display_preview.append($('<img>').attr({
              src: e.target.result,
              width: "114px",
              class: "preview",
              title: files.name
          }));
  };
  })(files);
  reader.readAsDataURL(files);
};

//drop zoneの実装
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  $files = evt.dataTransfer.files[0];
  display_image($files);
  var output = [];
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; 
}

// イベントリスナーを設定
var dropZone = document.getElementById('file-drop-zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);

$('.new_item').on('submit', function(e){
  e.preventDefault();  
  let formdata = new FormData(this);
  if(typeof $files != 'undefined'){
    formdata.append('item[item_images_attributes][0][image]',$files);
  }

  $.ajax({
    url: 'http://localhost:3000/items',
    type: "POST",
    data: formdata,
    cache: false,
    processData: false,
    contentType: false,
    dataType: 'html'
  })

  .done(function(data, textStatus, jqXHR){
  })
  .fail(function(jqXHR, textStatus, errorThrown){
  })
});

$('input[type="file"]').on('change', function(e){
  var image_file = e.target.files[0];
  display_image(image_file);
});

});

