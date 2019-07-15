class Category < ApplicationRecord
  has_many :items

  has_many :children, class_name: "Category", foreign_key: "parent_id"
  belongs_to :parent, class_name: "Category", foreign_key: "parent_id", optional: true

  has_many :grandchildren, class_name: "Category", foreign_key: "grandparent_id"
  belongs_to :grandparent, class_name: "Category", foreign_key: "grandparent_id", optional: true

  def search
    if self.parent_id != 0 && self.grandparent_id != 0
      @items = Item.where(category_id: self.id).order("items.id DESC").includes(:item_images)
    else
      if self.parent_id == 0 && self.grandparent_id == 0
        @items = Item.all.eager_load(:category).where(categories:{grandparent_id: self.id}).order("items.id DESC").includes(:item_images)
      else
        @items = Item.all.eager_load(:category).where(categories:{parent_id: self.id}).order("items.id DESC").includes(:item_images)
      end
    end
  end
end
