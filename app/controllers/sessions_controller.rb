class SessionsController < ApplicationController

	before_action :already_logged_in, only: [:new, :create]

  def new
  end

  def create
  	user = User.find_by(email: params[:email])
  	if(user && user.authenticate(params[:password]))
      user.update_column(:online, :true)
  		session[:user_id] = user.id
  		render json: {
  			redirect: root_path
  		}
  	else
  		flash[:alert] = "Invalid creds"
  		render json: {
  			redirect: login_path
  		}
  	end
  end

  def destroy
    user = User.find(params[:user_id])
    user.update_column(:online, :false)
  	session[:user_id] = nil;
  	render json: {
        redirect: login_path
      }
  end

  protected

  def already_logged_in
  	puts logged_in?
  	if logged_in?
  		flash[:alert] = "You are already logged in"
  		redirect_to root_path
  	end
  end

end
