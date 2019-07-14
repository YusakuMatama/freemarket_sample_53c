class CategoriesController < ApplicationController

  def show
    @category = Category.find(params[:id])
    if @category.parent_id != 0 && @category.grandparent_id != 0
      @items = Item.where(category_id: params[:id]).order("items.id DESC").includes(:item_images)
    else
      if @category.parent_id == 0 && @category.grandparent_id == 0
        @items = Item.all.eager_load(:category).where(categories:{grandparent_id: params[:id]}).order("items.id DESC").includes(:item_images)
      else
        @items = Item.all.eager_load(:category).where(categories:{parent_id: params[:id]}).order("items.id DESC").includes(:item_images)
      end
    end
  end

end
