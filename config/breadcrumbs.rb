crumb :root do
  link "メルカリ", root_path
end

crumb :mypage do
  link "マイページ", edit_top_path(current_user)
  parent :root
end

crumb :profile do
  link "プロフィール", mypage_profile_path
  parent :mypage
end

crumb :logout do
  link "ログアウト", tops_path
  parent :mypage
end

crumb :identification do
  link "本人情報の登録", mypage_identification_path
  parent :mypage
end

crumb :card do
  link "支払い方法", mypage_card_path
  parent :mypage
end

crumb :cardcreate do
  link "クレジットカード情報入力", 'mypage/card'
  parent :card
end

