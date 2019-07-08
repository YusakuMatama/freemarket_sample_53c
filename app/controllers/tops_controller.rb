class TopsController < ApplicationController

  def index
  end

  def edit
    @user = User.find(current_user)
  end
end
