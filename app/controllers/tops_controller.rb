class TopsController < ApplicationController

  def index
    @ladysitems = Item.all.eager_load(:category).where(categories:{grandparent_id: 1}).limit(4)
    @mensitems = Item.all.eager_load(:category).where(categories:{grandparent_id: 2}).limit(4)
    @babykidsitems = Item.all.eager_load(:category).where(categories:{grandparent_id: 3}).limit(4)
    @cosmeitems = Item.all.eager_load(:category).where(categories:{grandparent_id: 7}).limit(4)
    @zyaneruitems = Item.where(brand_id:1).limit(4)
    @shufureemitems = Item.where(brand_id:4).limit(4)
    @ruiwetonitems = Item.where(brand_id:3).limit(4)
    @naigiitems = Item.where(brand_id:2).limit(4)
  end

  def edit
    @user = User.find(current_user)
  end
end
