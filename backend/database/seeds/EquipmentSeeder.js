'use strict'

const Database = use('Database')

class EquipmentSeeder {
  async run() {
    const equipments = [
      {id: 1, name: "Bota", numberCA: "12341", companyId: 1},
      {id: 2, name: "Bota", numberCA: "12341", companyId: 2},
      {id: 3, name: "Bota", numberCA: "12341", companyId: 3},
      {id: 4, name: "Bota", numberCA: "12341", companyId: 4},
      {id: 5, name: "Bota", numberCA: "12341", companyId: 5},
      {id: 6, name: "Bota", numberCA: "12341", companyId: 6},
      {id: 7, name: "Bota", numberCA: "12341", companyId: 7},
      {id: 8, name: "Chapeu", numberCA: "1234144323", companyId: 1}
    ]

    try {
      console.log('Seeding equipments...')
      await Database.table('equipments').insert(equipments)
      console.log('Equipments seeded successfully.')
    } catch (error) {
      console.error('Error seeding equipments:', error)
    }
  }
}

module.exports = EquipmentSeeder
