Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  
  # Users routes
  get "/users", to: "users#index"         # Fetch all users
  get "/users/:id", to: "users#show"     # Fetch a specific user
  post "/users", to: "users#create"      # Create a new user
  put "/users/:id", to: "users#update"   # Update an existing user
  delete "/users/:id", to: "users#destroy" # Delete a user
 
  # Tickets routes
  get "/tickets", to: "tickets#index"         # Fetch all tickets
  get "/tickets/:id", to: "tickets#show"      # Fetch a specific ticket
  post "/tickets", to: "tickets#create"       # Create a new ticket
  put "/tickets/:id", to: "tickets#update"    # Update a specific ticket
  delete "/tickets/:id", to: "tickets#destroy" # Delete a specific ticket
 
  # Routes for Comments
  get "/comments", to: "comments#index"       # List all comments for a ticket
  get "/comments/:id", to: "comments#show"    # Show details of a specific comment
  post "/comments", to: "comments#create"     # Create a new comment for a ticket
  put "/comments/:id", to: "comments#update"  # Update a specific comment
  delete "/comments/:id", to: "comments#destroy" # Delete a specific comment

  # Routes for Attachments
  get "/attachments", to: "attachments#index"       # List all attachments for a ticket
  get "/attachments/:id", to: "attachments#show"    # Show details of a specific attachment
  post "/attachments", to: "attachments#create"     # Add a new attachment to a ticket
  delete "/attachments/:id", to: "attachments#destroy" # Remove a specific attachment from a ticket

  # API namespace
  namespace :api do
    namespace :v1 do
      resources :tickets, only: [:index, :create]
    end
  end
end