class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create

    user = User.find_by(username: params['username']).try(:authenticate, params['password'])
    # byebug
    if user
      session[:username] = user.username.to_s
      render json: {
        logged_in: true,
        user: user
      }
    else
      render json: { status: 401 }
    end

  end

  def destroy
    session.delete :username
    render json: {
      status: deleted,
      logged_in: false
      }
  end
end
