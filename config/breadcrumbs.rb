crumb :root do
  link "メルカリ", root_path
end

crumb :mypage do
  link "マイページ", mypage_path(current_user)
  parent :root
end

crumb :profile do
  link "プロフィール", mypage_profile_path
  parent :mypage
end

crumb :logout do
  link "ログアウト", logout_path
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
  category_me = category.find(params[:id])
  category_parent = category.find_by(id: category_me.parent_id)
  category_grandparent = category.find_by(id: category_parent&.parent_id)

  unless (category_grandparent.blank?)
    link category_grandparent.name, category_path(category_parent&.parent_id)
  end
  unless (category_parent.blank?)
    link category_parent.name, category_path(category_me.parent_id)
  end
  link category_me.name, root_path
  parent :category_index
end

crumb :item_detail do |item|
  link item.name, item_path(params[:id])
  parent :root
end

crumb :brand_index do 
  link "ブランド一覧", root_path
  parent :root
end

crumb :brand do |brand|
  link brand.name, root_path
  parent :brand_index
end



