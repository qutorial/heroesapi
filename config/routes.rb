Rails.application.routes.draw do

  scope '/api/v1' do
    resources :heros
  end

  get '/dashboard' => redirect("/index.html")
  get '/heroes/:id' => redirect("/index.html")
  get '/heroes' => redirect("/index.html")

end
