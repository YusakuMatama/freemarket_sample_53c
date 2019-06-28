class Item < ApplicationRecord
  belongs_to :user
  belongs_to :category
  belongs_to :brand
  has_one :order_status, dependent: :destroy
  has_many :item_images, dependent: :destroy
  has_many :comments
end
