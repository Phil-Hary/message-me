class ChatroomController < ApplicationController
	before_action :already_logged_in, only: [:index]
  def index
  	@messages = Message.all
  	respond_to do |format|
  		format.html
  		format.json {
  			render json: {
  				messages: Message.all.as_json(
  					only: [:message, :created_at],
  					include:{
  						user: {
  							only:[:user_name]
  						}
  					}
  				),
  				users: User.all.as_json(
  					only: [:user_name]
  				)
  			}
  		}
  	end
  end

  protected

  def already_logged_in
  	if !current_user
  		flash[:alert] = "Login before performing this action"
  		redirect_to login_path
  	end
  end

end
