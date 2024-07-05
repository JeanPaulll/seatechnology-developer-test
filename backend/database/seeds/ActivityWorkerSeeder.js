'use strict'

const Database = use('Database')

class ActivityWorkerSeeder {
  async run() {
    const activitiesWorkers = [
      {id: 1, activityId: 2, workerId: 2, companyId: 2, equipmentsId: JSON.stringify([2])}
    ]

    try {
      console.log('Verifying if activity_workers table exists...')
      const tables = await Database.raw('SELECT name FROM sqlite_master WHERE type="table" AND name="activities_workers"')
      console.log('Tables:', tables)

      console.log('Seeding activity workers...')
      await Database.table('activities_workers').insert(activitiesWorkers)
      console.log('Activity workers seeded successfully.')
    } catch (error) {
      console.error('Error seeding activity workers:', error)
    }
  }
}

module.exports = ActivityWorkerSeeder
