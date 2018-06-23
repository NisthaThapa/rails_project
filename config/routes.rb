Rails.application.routes.draw do
  resources :homes
  # devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_for :users, controllers: { sessions: 'users/sessions' }
  devise_scope :user do
    get 'sign_in', to: 'users/sessions#create'
    get 'sign_out', to: 'users/sessions#destroy'
    # root to: 'users/sessions#new'
  end
  root to: 'homes#index'
end
