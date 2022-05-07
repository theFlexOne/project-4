# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_05_04_192358) do
  create_table "appointments", force: :cascade do |t|
    t.datetime "date", null: false
    t.integer "client_id"
    t.integer "barber_id"
    t.boolean "open", default: true, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "barbers", force: :cascade do |t|
    t.string "name", null: false
    t.date "start_date"
    t.float "wage", null: false
    t.integer "station"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img_path", default: "../../assets/default_profile_image.png"
  end

  create_table "barbers_services", force: :cascade do |t|
    t.integer "barber_id"
    t.integer "service_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "clients", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "contact_infos", force: :cascade do |t|
    t.integer "client_id", null: false
    t.string "email", limit: 50
    t.string "street_address", limit: 100
    t.string "secondary_address", limit: 100
    t.string "city", limit: 25
    t.string "state", limit: 2
    t.string "zip_code", limit: 5
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orders", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "client_id"
  end

  create_table "orders_products", force: :cascade do |t|
    t.integer "order_id", null: false
    t.integer "product_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["order_id"], name: "index_orders_products_on_order_id"
    t.index ["product_id"], name: "index_orders_products_on_product_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "name", limit: 25
    t.text "description", limit: 255
    t.float "price", null: false
    t.boolean "active", default: true, null: false
    t.integer "current_stock", default: 0, null: false
    t.integer "quantity_sold", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "name", null: false
    t.float "price", null: false
    t.boolean "active", default: true, null: false
    t.text "description", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "orders_products", "orders"
  add_foreign_key "orders_products", "products"
end
