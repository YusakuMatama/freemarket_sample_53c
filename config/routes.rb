Rails.application.routes.draw do

  devise_for :users,
  controllers: {
  registrations: 'users/registrations',
  omniauth_callbacks: 'users/omniauth_callbacks'
  }

  root "tops#index"
  get 'mypage/identification' => 'users#identification'
  get 'mypage/card' => 'users#card'
  get 'signup' => 'users#signup'
  get 'logout' => 'users#logout'
  get 'sell' => 'items#sell'

  resources :items
  resources :tops, only: [:index, :show, :new, :edit]
  resources :users, only: [:index]

end
