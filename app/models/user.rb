class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :profile, dependent: :destroy
  # has_many :items  deviseの実装後にコメントアウトを消す
  has_many :comments
  has_many :favorite_items, dependent: :destroy
  has_many :user_evaluations
end
