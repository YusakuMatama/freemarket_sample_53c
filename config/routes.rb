Rails.application.routes.draw do
  # devise_for :users
  get 'mypage/identification' => 'users#identification'
  get 'mypage/card' => 'users#card'
  get 'sell' => 'items#sell'

  get  'new' => 'registrations#new'
  get  'address' => 'registrations#address'
  get  'create' => 'registrations#create'
  get  'credit' => 'registrations#credit'
  get  'sns' => 'registrations#sns'
  get  'phone' => 'registrations#phone'

end
