'use strict'

const Schema = use('Schema')

class EquipmentsTableSchema extends Schema {
  up () {
    this.create('equipments', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.string('numberCA', 50).notNullable()
      table.integer('companyId').unsigned().references('id').inTable('companies').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('equipments')
  }
}

module.exports = EquipmentsTableSchema
