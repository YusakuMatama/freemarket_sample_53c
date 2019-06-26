class ItemsController < ApplicationController
  def sell
    @item = Item.new
  end
end
