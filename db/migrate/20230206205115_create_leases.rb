class CreateLeases < ActiveRecord::Migration[7.0]
  def change
    create_table :leases do |t|
      t.string :contract_info
      t.integer :price

      t.timestamps
    end
  end
end
