require 'csv'

CSV.foreach('db/categories.csv', headers: true) do |row|
  Category.create(id: row['id'], created_at: row['created_at'], updated_at: row['updated_at'], name: row['name'], parent_id: row['parent_id'])
end

CSV.foreach('db/brands.csv', headers: true) do |row|
  Brand.create(id: row['id'], created_at: row['created_at'], updated_at: row['updated_at'], name: row['name'])
end
