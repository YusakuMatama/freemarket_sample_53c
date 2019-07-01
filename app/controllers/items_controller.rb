class ItemsController < ApplicationController

  def index
    @top = "hoge"
  end

  def new
    @top = "hoge"
  end

  def show
    @item = Item.find(1)
  end

  def sell
  end

  def purchase
    
    # @item = Item.find(params[:item_id])
    @item = Item.find(1)
    
    Payjp.api_key = 'sk_test_3a44432a5832448337757685'
    Payjp::Charge.create(currency: 'jpy', amount: 100, card: params['payjp-token'])

    
    @item.update(buyer_id: 1, selled_at: "#{DateTime.now}")
    
    redirect_to '/items/1'
  end
end
