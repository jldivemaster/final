class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      redirect_to @user
    else
      render :new
    end
  end

  def show
  end

  def edit
  end

  def update
    @user.update(user_params)
    if @user.save
      redirect_to @user
    else
      render :edit
    end
  end

  def destroy
    @user.delete
    redirect_to :root_path
  end

  private

      def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :location, :program, :current_mod, :type, :password_digest, :username)
      end

      def set_user
        @user = User.find(params[:id])
      end

end
