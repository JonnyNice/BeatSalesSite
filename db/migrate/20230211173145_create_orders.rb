class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.belongs_to :cart, null: false, foreign_key: true
      t.belongs_to :lease, null: false, foreign_key: true
      t.belongs_to :purchase, null: true, foreign_key: true

      t.timestamps
    end
  end
end
