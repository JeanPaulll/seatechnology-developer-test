'use strict'

const Schema = use('Schema')

class CompaniesTableSchema extends Schema {
  up() {
    this.create('companies', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.text('description')
      table.boolean('isRegistrationDone').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('companies')
  }
}

module.exports = CompaniesTableSchema
