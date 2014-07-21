Trellino::Application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :boards do
      resources :lists, only: [:index, :show, :create, :update, :destroy]
    end
  end
  resource :session, only: [:new, :create, :destroy]
  resources :users, only: [:new, :create, :destroy]
end
