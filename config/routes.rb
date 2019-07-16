Rails.application.routes.draw do

  devise_for :users,
  controllers: {
  registrations: 'users/registrations',
  omniauth_callbacks: 'users/omniauth_callbacks'
  }

  root "tops#index"
  get 'mypage/profile' => 'users#profile'
  get 'mypage/identification' => 'users#identification'
  get 'mypage/card' => 'users#card'

  get 'signup' => 'users#signup'
  get 'logout' => 'users#logout'
  get 'sell' => 'items#sell'

  get 'mypage' => 'users#show'

  get 'tops/edit' => 'tops#edit'
  
  resources :items do
    member do
      post 'purchase'
      get 'confirm'
      get 'complete'
    end
    collection do
      match 'search' => 'items#search', via: [:get, :post]
    end
    # member do
    #   get 'category'
    # end
    # member do
    #   get 'brand'
    # end
    collection do
      get 'selling'
    end
    collection do
      get 'trading'
    end
    collection do
      get 'sold'
    end
    resources :comments, only: [:create]
    resources :order_statuses, only: [:update]
  end
  resources :tops, only: [:index, :edit]
  resources :users, only: [:index, :update]
  resources :categories, only: [:show]

end
