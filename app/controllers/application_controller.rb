class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :configure_permitted_parameters, if: :devise_controller?

  private

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys:[ profile_attributes: [:nickname, :first_name, :last_name, :first_name_kana, :last_name_kana, :birthday, :tel, :card_id, :money, :point, :comment, :user_id, :card_yy, :card_mm, :card_sec_id], address_attributes: [:zip, :prefectures, :city, :block, :building, :user_id, :first_name, :last_name,:first_name_kana, :last_name_kana, :tel]])
  end
end
