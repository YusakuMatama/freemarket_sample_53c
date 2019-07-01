class ItemsController < ApplicationController
  before_action :set_item, only: [:show]

  def index
    @top = "hoge"
  end

  def new
    @top = "hoge"
  end

  def show
    # binding.pry
  end

  def sell
  end
end

private
def set_item
  @item = Item.find(params[:id])
end