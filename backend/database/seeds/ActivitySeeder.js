'use strict'

const Database = use('Database')

class ActivitySeeder {
  async run() {
    const activities = [
      {id: 1, name: "Supervisão", companyId: 1},
      {id: 2, name: "Supervisão", companyId: 2},
      {id: 3, name: "Supervisão", companyId: 3},
      {id: 4, name: "Supervisão", companyId: 4},
      {id: 5, name: "Supervisão", companyId: 5},
      {id: 6, name: "Supervisão", companyId: 6},
      {id: 7, name: "Supervisão", companyId: 7},
      {id: 8, name: "Supervisão 2", companyId: 1}
    ]

    try {
      console.log('Seeding activities...')
      await Database.table('activities').insert(activities)
      console.log('Activities seeded successfully.')
    } catch (error) {
      console.error('Error seeding activities:', error)
    }
  }
}

module.exports = ActivitySeeder
