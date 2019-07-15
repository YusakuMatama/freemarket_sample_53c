class ItemsController < ApplicationController
  before_action :set_item, only: [:show, :edit]
  before_action :set_category_and_brand_info, only: [:sell, :edit, :update, :create]

  def index
  end

  def new
  end

  def show
    @comment = Comment.new
    @comments = @item.comments.includes(:user)
  end

  def sell
    @items = Item.new
    @items.build_brand
    @items.build_category
    @items.item_images.build

    @categories = Category.where(parent_id: 0)
    gon.category = Category.all

  end

  def create
    category_brand_params
    items_params
    @items = Item.new(@params_items)
   
    if @items.save
      @items_status = OrderStatus.create(status: 1, item_id: Item.all.last().id)
    else
      render :sell
      respond_to do |format|
        format.json
      end
    end
  end

  def edit
    @items = Item.find(params[:id])
    @items.build_brand
    @items.build_category
    @items.item_images.build

    @categories = Category.where(parent_id: 0)
    gon.category = Category.all
    gon.category_user_select = Item.find(params[:id])
    gon.category_user_select_category = Item.find(params[:id]).category
    gon.items_images = @items.item_images
  end

  def update
    @current_item_images = Item.find(params[:id]).item_images
    category_brand_params
    edit_items_params
    edit_images_params

    @items = Item.find(params[:id])
    if @items.update(@edit_params_items)

      @delete_item_image_data.each do |delete_image|
        ItemImage.find(delete_image.to_i).destroy
      end

      @add_item_image_data.each do |add_image|
        ItemImage.create(add_image)
      end

      else
      respond_to do |format|
        format.json
      end
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to controller: :tops, action: :index
  end

  def purchase
    
    @item = Item.find(params[:item_id])
    
    Payjp.api_key = ENV['PAYJP_TEST_SECRET_KEY']
    begin
      Payjp::Charge.create(currency: 'jpy', amount: 100, card: params['payjp-token'])
    rescue
      redirect_to items_path
    end
    
    @item.update(buyer_id: current_user.id, selled_at: "#{DateTime.now}", )

    @status = OrderStatus.find(params[:item_id])
    
    @status.update(status: 3)
    redirect_to '/items/complete' #このパスは仮置き
  end

  def complete
  end

  def search
    @items = Item.where('name LIKE(?) OR detail LIKE(?)', "%#{params[:keyword]}%", "%#{params[:keyword]}%")
  end

  private
  def category_brand_params
    @params_categories = params.require(:item).require(:category_attributes).permit(:id)

    @params_brands = params.require(:item).require(:brand_attributes).permit(:name)
    @params_brands = @brands.find_by(name: @params_brands[:name])
    if @params_brands.present?
      @params_brands = @params_brands[:id]
    end
  end

  def items_params
    @params_items = params.require(:item).permit(:name, :detail, :condition, :delivery_cost, :delivery_prefecture, :days_to_ship, :delivery_method, :price, item_images_attributes: [:image] ).merge(user_id: current_user.id, sales_condition: 0, category_id: @params_categories[:id], brand_id: @params_brands)
    params_int(@params_items)
  end

  def edit_items_params
    @edit_params_items = params.require(:item).permit(:name, :detail, :condition, :delivery_cost, :delivery_prefecture, :days_to_ship, :delivery_method, :price).merge(user_id: current_user.id, sales_condition: 0, category_id: @params_categories[:id], brand_id: @params_brands)
    params_int(@edit_params_items)
  end

  def edit_images_params
    @current_item_images_all_data = []
    @edit_all_image = []

    edit_images_params = params.require(:item).require(:item_images_attributes)

    @current_item_images.each do |current_image|
      @current_item_images_all_data << current_image.id.to_s
    end
    edit_images_params.each_value {|value|
      @edit_all_image << value[:image]
    }

    @delete_item_image_data = @current_item_images_all_data - @edit_all_image
    @add_item_image = @edit_all_image - @current_item_images_all_data

    @add_item_image_hash = {}
    @add_item_image_data = []

    @add_item_image.each do |image|
      @add_item_image_hash = {image: image, item_id: params[:id]}
      @add_item_image_data << @add_item_image_hash
    end
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

  def set_category_and_brand_info
    @categories = Category.all
    @brands = Brand.all
  end

end
