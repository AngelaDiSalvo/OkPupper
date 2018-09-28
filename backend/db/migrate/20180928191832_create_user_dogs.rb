class CreateUserDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :user_dogs do |t|
      t.belongs_to :user
      t.belongs_to :dog

      t.timestamps
    end
  end
end
