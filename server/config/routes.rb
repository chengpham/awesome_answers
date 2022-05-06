Rails.application.routes.draw do
  root :to => 'welcome#index'
  get "contact" => "contact#index"
  post "contact_submit" => "contact#create", as: "contact_submit"
  get'faq' => "faq#index"
  # resources :questions, namespace: ':admin'
  # get 'questions' => 'questions#index'
  # get 'questions/new' => 'questions#new', as: :new_question
  # post 'questions' => 'questions#create'
  # delete 'questions/:id' => "questions#destroy"
  # get 'questions/:id' => "questions#show", as: :question
  # get 'questions/:id/edit' => "questions#edit", as: :edit_question
  # patch 'questions/:id' => "questions#update"
  
  # namespace :admin do
  #   resources :questions
  # end
  # scope '/admin' do
  #   resources :questions
  # end

  # ROUTES FOR QUESTIONS
  # get('/questions', to:"questions#index")
  # get('/questions/new', to: "questions#new", as: :new_question)
  # post('/questions', to: "questions#create")

  # get('/questions/:id', to: 'questions#show', as: :question)
  # # http://localhost:3000/questions/9
  # delete("/questions/:id",to: "questions#destroy")
  # get('/questions/:id/edit', to: "questions#edit", as: :edit_question)
  # patch('/questions/:id', to: "questions#update")


  # resources will built a CRUD RESTfull routes.(all of the above routes)
  # It assumes that there will be a contoller name as a first argument, pluralized and PascalCase
  # PascalCase
  resources :questions do
    resources :likes, shallow: true, only: [:create, :destroy]

    get :liked, on: :collection
    # All the resources in this block will be prefixed by this👇🏻
    # /questions/:question_id 
    # So we can now grab question_id from params like params[:question_id]

    resources :answers, only:[:create, :destroy] # this will only generate routes for :create and :destroy action
    # /questions/:question_id/answers/:id
    # /questions/:question_id/answers/:id/edit 
  end

  resources :users, only:[:new, :create, :show]
  resource :session, only:[:new, :create, :destroy]
  # resource is singular instead of resources
  # Unlike resources, resource will create routes that do CRUD operations only on one thing. 
  # There will be no index routes and no route will have an :id wildcard
  # Even with singular resource controller will still be plural.

  resources :job_posts, only: [:new, :create, :show, :index, :edit, :update, :destroy]
   # The namespace method in Rails routes makes it so that 
  # your app will automatically look in a directory api
  # and then in a sub directory v1 for QuestionController

  # the options 'defaults: {format: :json}' will set 'json' as the default response
  # format for all the routes contained within the block
  # /api/v1/questions
  namespace :api, defaults: {format: :json} do # we can set default response format of the block
    namespace :v1 do
      resources :questions, only:[:index, :show, :update, :create, :destroy]
      resource :session, only:[:create, :destroy]
      get('/current_user', to: 'sessions#get_current_user')
      resources :users, only: [:create]
    end
    # namespace :v2 do
    #   resources :questions
    # end
  end

end
