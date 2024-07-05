'use strict'

const Worker = use('App/Models/Worker')

class WorkerSeeder {
  async run() {
    const workers = [
      {
        id: 2,
        name: "Flavia Eduarda",
        isMale: false,
        birthdate: "2023-05-19T15:30:00.000Z",
        cpf: "12345678900",
        rg: "1234567",
        documentUrl: "",
        roleId: 2,
        companyId: 2,
        isActive: true
      },
      {
        name: "Gabriela",
        isMale: true,
        cpf: "21323112313",
        rg: "3131231",
        birthdate: "2023-05-23T13:49:01.123Z",
        companyId: 1,
        isActive: false,
        roleId: 1,
        id: 4
      },
      {
        name: "Jean Paul",
        isMale: true,
        cpf: "13131313123",
        rg: "3112313",
        birthdate: "2023-05-17T15:24:45.937Z",
        companyId: 1,
        isActive: true,
        roleId: 1,
        id: 5
      }
    ]

    await Worker.createMany(workers)
  }
}

module.exports = WorkerSeeder
