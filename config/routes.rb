Trellino::Application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :boards do
      resources :lists, only: [:index, :show, :create, :update, :destroy]
    end
    resources :lists do
      resources :cards, only: [:index, :show, :create, :update, :destroy]
    end
    
    #resources :cards
    #resources :cards
    # do
      #resources :lists, only: [:index, :show, :create, :update, :destroy]
      #end
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
end
