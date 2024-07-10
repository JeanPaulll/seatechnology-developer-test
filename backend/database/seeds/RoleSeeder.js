'use strict'

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 */
const Role = use('App/Models/Role')

class RoleSeeder {
  async run() {
    const roles = [
      {id: 1, name: "Supervisor", companyId: 1},
      {id: 2, name: "Supervisor", companyId: 2},
    ]

    await Role.createMany(roles)
  }
}

module.exports = RoleSeeder
