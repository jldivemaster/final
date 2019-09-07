class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]
  # before_action :authorize, except: [:new, :create, :edit, :update]

  skip_before_action :verify_authenticity_token

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    # byebug
    if @user.valid?
      @user.save
      render json: { user: @user }
    else
      render json: { error: @user.errors.full_messages }
    end
  end

  def show
    @user = User.find_by(username: params['username'])
    @notes = Notes.filter(user_id == @user.id)
    render json: {
      status: 'logged_in',
      logged_in: true,
      user: @user,
      notes: @notes
    }
  end

  def edit
  end

  def update
    @user.update(user_params)
    if @user.save
      render json: {
        logged_in: true,
        user: @user,
        notes: @notes
      }
    else
      render json: { error: @user.errors.full_messages }
    end
  end

  def destroy
    @user.delete
    redirect_to :root_path
  end

  private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :username, :password, :password_confirmation, :location, :program, :current_mod, :type)
      end

      def set_user
        @user = User.find(params[:id])
      end

end
