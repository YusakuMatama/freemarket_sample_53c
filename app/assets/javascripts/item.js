$(document).on('turbolinks:load', function(){
//drop zoneの実装
function handleFileSelect(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  files = evt.dataTransfer.files; // FileList object.

  // 以下に必要なFile Objectのプロパティを記述
  var output = [];
  for (var i = 0, f; f = files[i]; i++) {
    output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, last modified: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
  }
  document.getElementById('drop-box_text').innerHTML = '<ul>' + output.join('') + '</ul>';
}

function handleDragOver(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy'; 
}

// イベントリスナーを設定
var dropZone = document.getElementById('sell-box_container');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);  console.log("hoge");

function file_upload(){
  let formdata = new FormData($('.new_item').get(0));
  var url = (window.location.href);
  if($('input[name="item[item_images_attributes][0][image]"]').val() == ""){
    formdata.append('item[item_images_attributes][0][image]',files[0])    
  }
  console.log(url);
  console.log(formdata);

  $.ajax({
    url: url,
    type: "POST",
    data: formdata,
    cache: false,
    processData: false,
    contentType: false,
    dqtaType: 'html'
  })

  .done(function(data, textStatus, jqXHR){
    console.log(data);
  })
  .fail(function(jqXHR, textStatus, errorThrown){
    console.log("fail");
  })
}

$(".price_input").on("keyup", function(){
  $(".right-price").empty();
  $(".right-price-maney").empty();

  var input = $(".price_input").val();
  var fee = $(".right-price");
  var fee_maney = Math.floor(input * 0.1);
  var maney = $(".right-price-maney");
  var maney_maney = "¥" + (input - fee_maney);
  if (input >= 300 && input <= 9999999){
  fee.append(fee_maney);
  maney.append(maney_maney);
  }
  else {
    fee.append("-----");
    maney.append("-----");
  }


});

});

// function file_upload()
// {
//     // フォームデータを取得
//     let formdata = () => new FormData($('#my_form').get(0));
//     // ファイルが未登録なら一番最初のファイルを追加
//     // 複数ファイルアップロードの場合ここを修正
//     if($('input[name="upload_file"]').val() == ""){
//       formdata.append('upload_file',files[0])
//     }

//     //非同期通信
//     $.ajax({
//         url  : "/upload2",
//         type : "POST",
//         data : formdata,
//         cache       : false,
//         contentType : false,
//         processData : false,
//         dataType: 'html',

//     })
//     .done(function(data, textStatus, jqXHR){
//         console.log(data);
//     })
//     .fail(function(jqXHR, textStatus, errorThrown){
//         console.log("fail");
//     })
//     .always(function(data){
//         console.log("complete")
//     });
// }