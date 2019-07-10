class ItemImage < ApplicationRecord
  belongs_to :item, optional: true
  mount_uploader :image, ImageUploader
  validates :image, presence: true, on: :sell_step,   if: :image_present?
    def image_present?
      image.present?
    end
end
