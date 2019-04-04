Rails.application.routes.draw do
  root 'pages#home'

  get 'our-work' => 'our_work#index'
  get 'case-studies' => 'pages#case_studies'
end
