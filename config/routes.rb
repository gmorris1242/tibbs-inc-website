Rails.application.routes.draw do
  root 'pages#home'

  get 'our-work' => 'pages#our_work'
end
