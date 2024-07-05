'use strict'

const Schema = use('Schema')

class RolesTableSchema extends Schema {
  up() {
    this.create('roles', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.integer('companyId').unsigned().references('id').inTable('companies').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('roles')
  }
}

module.exports = RolesTableSchema
