Rails.application.routes.draw do

  root :to => 'homes#top'

  resources :lists
  
  get 'home/all_lists' => 'homes#test',as: 'all_lists'


  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
