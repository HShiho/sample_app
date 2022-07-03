class CreateLists < ActiveRecord::Migration[6.1]
  def change
    create_table :lists do |t|
      t.string :title
      t.string :bodyra

      t.timestamps
    end
  end
end
