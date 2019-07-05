class TopsController < ApplicationController

  def index
    @user = User.find(current_user)
  end

  def edit
    @user = User.find(current_user)
  end
end
