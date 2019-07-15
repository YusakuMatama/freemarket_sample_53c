class CategoriesController < ApplicationController

  def show

    @category = Category.find(params[:id])
    @items = @category.search

    @category_bread = Category.all

  end

end
