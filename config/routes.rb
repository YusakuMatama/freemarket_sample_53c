Rails.application.routes.draw do
  # devise_for :users
  root "tops#index"
  get 'mypage/identification' => 'users#identification'
  get 'mypage/card' => 'users#card'
  get 'sell' => 'items#sell'

  get  'new' => 'registrations#new'
  get  'address' => 'registrations#address'
  get  'create' => 'registrations#create'
  get  'credit' => 'registrations#credit'
  get  'sns' => 'registrations#sns'
  get  'phone' => 'registrations#phone'

  resources :items
  resources :tops, only: [:index, :show, :new, :edit]
  resources :users, only: [:index]

end
