crumb :root do
  link "メルカリ", root_path
end

crumb :mypage do
  link "マイページ", 'tops/edit'
  parent :root
end

crumb :profile do
  link "プロフィール", 'tops/show'
  parent :mypage
end

crumb :logout do
  link "ログアウト", 'tops/new'
  parent :mypage
end

crumb :identification do
  link "本人情報の登録", 'mypage/identification'
  parent :mypage
end

crumb :card do
  link "支払い方法", 'mypage/card'
  parent :mypage
end

crumb :cardcreate do
  link "クレジットカード情報入力", 'mypage/card'
  parent :card
end

