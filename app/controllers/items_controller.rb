class ItemsController < ApplicationController

  def index
    @top = "hoge"
  end

  def new
    @top = "hoge"
  end

  def show
    @top = "hoge"
  end

  def sell
    @item = Item.new
    @item.build_brand
    @item.build_category
    10.times {@item.item_images.build
    @category = Category.all
    @brand = Brand.all

    # @item.build_order_statu
  end

  def create
    @category = Category.all
    @brand = Brand.all
    
    items_params
    @item = Item.new(@params_item)
   
    if @item.save 
      @item_status = OrderStatus.create(status: 1, item_id: Item.all.last().id)
      redirect_to root_path
    else
      render :sell
    end
  end

private
def items_params
  @params_category = params.require(:item).require(:category_attributes).permit(:id)

  @params_brand = params.require(:item).require(:brand_attributes).permit(:name)
  @params_brand = @brand.find_by(name: @params_brand[:name])

  if @params_brand.present?
    @params_brand = @params_brand[:id]
  end

  @params_item = params.require(:item).permit(:name, :detail, :condition, :delivery_cost, :delivery_prefecture, :days_to_ship, :delivery_method, :price, item_images_attributes: {image: []}).merge(user_id: 1, sales_condition: 1, category_id: @params_category[:id], brand_id: @params_brand)
  params_int(@params_item)
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
