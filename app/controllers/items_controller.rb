class ItemsController < ApplicationController

  def index
    
  end

  def new
    
  end

  def show
    
  end

  def sell
  end

  def purchase
    
    # @item = Item.find(params[:item_id])
    @item = Item.find(1) #仮置き。実際は上の記述を使う
    
    Payjp.api_key = ENV['PAYJP_TEST_SECRET_KEY']
    begin
      Payjp::Charge.create(currency: 'jpy', amount: 100, card: params['payjp-token'])
    rescue
      redirect_to items_path
    end
    
    @item.update(buyer_id: 1, selled_at: "#{DateTime.now}") #buyer_idの値は仮置き
    redirect_to '/items/1' #このパスは仮置き
  end
end
