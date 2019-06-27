# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation
# DB設計

## users table

|Column|Type|Options|
|------|----|-------|
|mail|string|null: false, unique: true|
|password|string|null: false|

### Association
_ has_one :profile, dependent: :destroy
_ has_many :items
_ has_many :comments
_ has_many :favorite_items, dependent: :destroy
_ has_many :user-evaluations

## profiles table

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|birthday|date|null: false|
|tel|string||
|card_id|string|null: false|
|money|integer|null: false, default :0|
|point|integer|null: false, default :0|
|comment|text||
|user_id|integer|null: false, add_index/add_foreign_key|

### Association
_ belongs_to :user

## addresses

|Column|Type|Options|
|------|----|-------|
|zip|string|null: false|
|prefectures|integer|null: false|
|city|string|null: false|
|block|string|null: false|
|building|string||
|user_id|ref|null: false,foregin_key: true|

### Association
_ belongs_to :user

## user_evaluations table

|Column|Type|Options|
|------|----|-------|
|high_count|enum||
|medium_count|enum||
|low_count|enum||
|user_id(FK)|integer|null: false, add_index/add_foreign_key|
|comment|text||

### Association
_ belongs_to :user

## favorite_items table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
_ belongs_to :item
_ belongs_to :user

## order_status table

|Column|Type|Options|
|------|----|-------|
|status|integer|null: false|
|item_id|integer|null: false, foreign_key: true|

### Association
_ belongs_to :item

## comments table

|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
_ belongs_to :item
_ belongs_to :user

## items table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|detail|text|null: false|
|category_id|integer|null: false, foregin_key: true|
|brand_id|integer|null: false, foregin_key: true|
|condition|integer|null: false|
|delivery_cost|integer|null: false|
|delivery_prefecture|integer|null: false|
|days_to_ship|integer|null: false|
|price|integer|null: false|
|sales_condition|bln|null: false, default: false|
|user_id|integer|null: false, foregin_key: true|

### Association
_ belongs_to :user
_ belongs_to :category
_ belongs_to :brand
_ has_one :order_status, dependent: :destroy
_ has_many :item_images, dependent: :destroy
_ has_many :comments

## item_images table

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|item_id|integer|null: false, foreign_key: true|

### Association
_ belongs_to :item

## categorys table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
_ has_many :items

## brands table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
_ has_many :items
