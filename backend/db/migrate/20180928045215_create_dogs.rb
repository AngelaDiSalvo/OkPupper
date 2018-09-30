class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.integer :pet_finder_id
      t.timestamps
    end
  end
end
