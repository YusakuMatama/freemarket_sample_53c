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
  link "ログアウト", new_top_path
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

crumb :keyword do
  link "#{params[:keyword]}"
  parent :root
end

crumb :category_index do
  link "カテゴリー一覧", root_path
  parent :root
end

crumb :category do |category|
  link category.name, root_path
  parent :category_index
end

crumb :brand_index do 
  link "ブランド一覧", root_path
  parent :root
end

crumb :brand do |brand|
  link brand.name, root_path
  parent :brand_index
end

