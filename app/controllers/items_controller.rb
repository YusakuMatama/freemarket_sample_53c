class ItemsController < ApplicationController
  before_action :set_item, only: [:show]

  def index
    
  end

  def new
    
  end

  def show
  end

  def sell
    @items = Item.new
    @items.build_brand
    @items.build_category
    @items.item_images.build

    @categories = Category.where(parent_id: nil)
    gon.category = Category.all
    @brands = Brand.all

  end

  def create
    @categories = Category.all
    @brands = Brand.all
    
    items_params
    @items = Item.new(@params_items)
   
    if @items.save 
      @items_status = OrderStatus.create(status: 1, item_id: Item.all.last().id)
      redirect_to root_path
    else
      render :sell
    end
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
    
    @item.update(buyer_id: 1, selled_at: "#{DateTime.now}", ) #buyer_idの値は仮置き

    @status = OrderStatu.find(1)
    
    @status.update(status: 3)
    redirect_to '/items/1' #このパスは仮置き
  end


  private
  def items_params
    @params_categories = params.require(:item).require(:category_attributes).permit(:id)

    @params_brands = params.require(:item).require(:brand_attributes).permit(:name)
    @params_brands = @brands.find_by(name: @params_brands[:name])

    if @params_brands.present?
      @params_brands = @params_brands[:id]
    end

    @params_items = params.require(:item).permit(:name, :detail, :condition, :delivery_cost, :delivery_prefecture, :days_to_ship, :delivery_method, :price, item_images_attributes: [:image]).merge(user_id: 1, sales_condition: 1, category_id: @params_categories[:id], brand_id: @params_brands)
    params_int(@params_items)
  end

  def params_int(model_params)
    model_params.each do |key,value|
      unless key == "item_images_attributes" 
        if integer_string?(value)
          model_params[key] = value.to_i
        end
      end
      if key == "item_images_attributes"
        model_params[key] = value 
      end
    end
  end

  def integer_string?(str)
    if str.present?
    Integer(str)
    true
    end
  rescue ArgumentError
    false
  end

  def set_item
    @item = Item.find(params[:id])
  end

end
