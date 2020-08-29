class UsersController < ApplicationController

	def new
		respond_to do |format|
			format.html
			format.json {
				if User.create(user_params)
					flash[:notice] = "You've signed up successfully. Login to continue!!!"
					render json: {
						redirect: root_path
					}
				else
					flash[:notice] = "Invalid data"
					render json: {
						redirect: signUp_path
					}
				end
			}
		end
	end

	private
		def user_params
			params.require(:user_details).permit(:user_name, :email, :password)
		end
end
