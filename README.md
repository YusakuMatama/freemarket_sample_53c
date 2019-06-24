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
- has_one :user_profile, dependent: :destroy
- has_many :order_status
- has_many :items
- has_many :comments
- has_many :favorite_items, dependent: :destroy
- has_many :user-evaluations

## user_profiles table

|Column|Type|Options|
|------|----|-------|
|nickname|string|null: false, unique: true|
|first_name|string|null: false|
|last_name|string|null: false|
|first_name_kana|string|null: false|
|last_name_kana|string|null: false|
|birthday|date|null: false|
|tel|string||
|zip|string|null: false|
|prefectures|integer|null: false|
|city|string|null: false|
|block|string|null: false|
|building|string||
|card_id|string|null: false|
|money|integer|null: false, default :0|
|point|integer|null: false, default :0|
|comment|text||
|user_id|integer|null: false, add_index/add_foreign_key|

### Association
- belongs_to :user

## user_evaluations table

|Column|Type|Options|
|------|----|-------|
|high_count|integer||
|medium_count|integer||
|low_count|integer||
|user_id(FK)|integer|null: false, add_index/add_foreign_key|
|comment|text||

### Association
- belongs_to :user

## favorite_items table

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :item
- belongs_to :user

## order_status table

|Column|Type|Options|
|------|----|-------|
|status|integer|null: false|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :item

## comments table

|Column|Type|Options|
|------|----|-------|
|content|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :item
- belongs_to :user

## items table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|detail|text|null: false|
|category_id|integer|null: false, foregin_key: true|
|condition|integer|null: false|
|delivery_cost|integer|null: false|
|delivery_prefecture|integer|null: false|
|days_to_ship|integer|null: false|
|price|integer|null: false|
|sales_condition|bln|null: false, default: false|
|user_id|integer|null: false, foregin_key: true|

### Association
- belongs_to :user
- belongs_to :category
- has_one :order_status, dependent: :destroy
- has_many :item_images, dependent: :destroy
- has_many :comments

## item_images table

|Column|Type|Options|
|------|----|-------|
|image|string|null: false|
|item_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :item

## categorys table

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### Association
- has_many :items

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
