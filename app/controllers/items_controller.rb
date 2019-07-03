class ItemsController < ApplicationController
  before_action :set_item, only: [:show]

  def index
    @top = "hoge"
  end

  def new
    @top = "hoge"
  end

  def show
  end

  def sell
    @items = Item.new
    @items.build_brand
    @items.build_category
    @items.item_images.build
    @categories = Category.all
    @brands = Brand.all

    # @item.build_order_statu
  end

  def create
    @categories = Category.all
    @brands = Brand.all
    
    items_params
    @items = Item.new(@params_item)
   
    if @items.save 
      @items_status = OrderStatus.create(status: 1, item_id: Item.all.last().id)
      redirect_to root_path
    else
      render :sell
    end
  end

private
def items_params
  @params_categories = params.require(:item).require(:category_attributes).permit(:id)

  @params_brands = params.require(:item).require(:brand_attributes).permit(:name)
  @params_brands = @brands.find_by(name: @params_brands[:name])

  if @params_brands.present?
    @params_brands = @params_brands[:id]
  end

  @params_items = params.require(:item).permit(:name, :detail, :condition, :delivery_cost, :delivery_prefecture, :days_to_ship, :delivery_method, :price, item_images_attributes: {image: []}).merge(user_id: 1, sales_condition: 1, category_id: @params_categories[:id], brand_id: @params_brands)
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

end

private
def set_item
  @items = Item.find(params[:id])
end