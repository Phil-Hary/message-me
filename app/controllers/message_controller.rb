class MessageController < ApplicationController
	
	def create
		Message.create(message: params[:message], user: current_user)
		@messages = Message.all.as_json(
			only: [:message, :created_at],
			include: {
				user: {
					only: [:user_name, :online]
				}
			}
		)
		@users = User.all
		ActionCable.server.broadcast 'chatroom_channel', {
			messages: @messages,
			users: @users,
			messageFrom: current_user.user_name
		}
	end
end