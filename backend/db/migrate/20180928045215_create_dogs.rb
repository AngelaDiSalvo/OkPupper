class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.integer :pet_finder_id
      t.string :name
      t.string :age
      t.string :size
      t.string :breed
      t.string :sex
      t.string :description
      t.datetime :last_update
      t.string :photos

      t.timestamps
    end
  end
end
