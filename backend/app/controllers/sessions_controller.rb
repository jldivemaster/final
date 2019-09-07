class SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def new
  end

  def create

    user = User.find_by(username: params['username']).try(:authenticate, params['password'])
    # byebug
    if user
      notes = user.notes
      session[:username] = user.username.to_s
      render json: {
        logged_in: true,
        user: user,
        notes: notes
      }
    else
      render json: { error: "Sign in error" }
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
