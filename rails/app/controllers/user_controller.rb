class UserController < ApplicationController
   skip_before_action :authorize, only: [:create]

   def index 
       @users = User.all
       render json: @users
    #    render json: { "errors": user.errors.full_messages}
   end

   def create 
        user = User.create(email: params[:email], username: params[:username], password: params[:password])
        if user.valid?
            puts("xxx ", user)
            render json: user
        else
            render json: user.errors.messages
        end
   end

   def show
        render json: @current_user
   end

   def logged_in
    user = User.find_by(id: session[:user_id])
    if user
      render json: {
        logged_in: true,
        user: user        
    }
    else
      render json: {
        logged_in: false
      }
    end
  end


end