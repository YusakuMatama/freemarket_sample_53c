class CategoriesController < ApplicationController

  def show
    @category = Category.find(params[:id])
    @items = @category.search
    @brand = Brand.find(params[:id])

  end

end
