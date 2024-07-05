'use strict'

const Schema = use('Schema')

class ActivitiesTableSchema extends Schema {
  up () {
    this.create('activities', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.integer('companyId').unsigned().references('id').inTable('companies').onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('activities')
  }
}

module.exports = ActivitiesTableSchema
