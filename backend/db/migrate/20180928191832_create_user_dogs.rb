class CreateUserDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :user_dogs do |t|
      t.belongs_to :user
      t.integer :pet_finder_id
      t.boolean :is_saved

      t.timestamps
    end
  end
end
