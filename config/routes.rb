Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # devise_for :users
  get 'mypage/identification', to: 'users#identification'
  get 'mypage/card', to: 'users#card'
  get 'sell', to: 'items#sell'
end
