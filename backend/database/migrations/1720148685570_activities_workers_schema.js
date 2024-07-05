'use strict'

const Schema = use('Schema')

class ActivitiesWorkersTableSchema extends Schema {
  up () {
    this.create('activities_workers', (table) => {
      table.increments()
      table.integer('activityId').unsigned().references('id').inTable('activities').onDelete('CASCADE')
      table.integer('workerId').unsigned().references('id').inTable('workers').onDelete('CASCADE')
      table.integer('companyId').unsigned().references('id').inTable('companies').onDelete('CASCADE')
      table.json('equipmentsId')
      table.timestamps()
    })
  }

  down () {
    this.drop('activities_workers')
  }
}

module.exports = ActivitiesWorkersTableSchema
