class CreatePatients < ActiveRecord::Migration
  def change
    create_table :patients do |t|
      t.string :first_name
      t.string :middle_name
      t.string :last_name
      t.float :weigth
      t.integer :height
      t.string :mrn

      t.timestamps null: false
    end
  end
end
