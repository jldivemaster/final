class CreateNotes < ActiveRecord::Migration[5.2]
  def change
    create_table :notes do |t|
      t.string :lab_title
      t.string :quick_ref
      t.string :body
      t.integer :mod_num
      t.integer :user_id

      t.timestamps
    end
  end
end
