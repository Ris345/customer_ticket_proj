class CreateAttachements < ActiveRecord::Migration[8.0]
  def change
    create_table :attachements do |t|
      t.string :link

      t.timestamps
    end
  end
end
