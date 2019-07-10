class TopsController < ApplicationController

  def index
    @top = "hoge"
    @ladysitems = Item.where(category_id:1).limit(4)
    @mensitems = Item.where(category_id:2).limit(4)
    @babykidsitems = Item.where(category_id:3).limit(4)
    @cosmeitems = Item.where(category_id:7).limit(4)
    @zyaneruitems = Item.where(brand_id:1).limit(4)
    @shufureemitems = Item.where(brand_id:4).limit(4)
    @ruiwetonitems = Item.where(brand_id:3).limit(4)
    @naigiitems = Item.where(brand_id:2).limit(4)
  end

  def show
    @user = "hoge"
  end

  def edit
    @user = User.find(current_user)
  end
end
