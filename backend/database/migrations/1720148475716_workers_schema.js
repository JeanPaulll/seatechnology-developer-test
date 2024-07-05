'use strict'

const Schema = use('Schema')

class WorkersTableSchema extends Schema {
  up () {
    this.create('workers', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.boolean('isMale').notNullable()
      table.datetime('birthdate').notNullable()
      table.string('cpf', 14).notNullable().unique()
      table.string('rg', 20).notNullable()
      table.string('documentUrl')
      table.integer('roleId').unsigned().references('id').inTable('roles').onDelete('CASCADE')
      table.integer('companyId').unsigned().references('id').inTable('companies').onDelete('CASCADE')
      table.boolean('isActive').defaultTo(true)
      table.timestamps()
    })
  }

  down () {
    this.drop('workers')
  }
}

module.exports = WorkersTableSchema
