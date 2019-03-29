Rails.application.routes.draw do
  root 'pages#home'

  get 'our-work' => 'our_work#index'
end
