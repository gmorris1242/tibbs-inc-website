Rails.application.routes.draw do
  root 'pages#home'

  get 'our-work' => 'our_work#index'
  get 'case-studies' => 'pages#case_studies'
  get 'case-studies/mike-the-barber' => 'pages#mike_the_barber'
  get 'case-studies/4x4_day' => 'pages#4x4_day'
end
