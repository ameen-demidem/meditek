class FixColumnNameInPatient < ActiveRecord::Migration
  def change
    rename_column :patients, :weigth, :weight
  end
end
