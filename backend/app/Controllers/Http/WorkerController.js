'use strict'

const Worker = use('App/Models/Worker')

class WorkerController {
  async index ({ response }) {
    const workers = await Worker.all()
    return response.json(workers)
  }

  async store ({ request, response }) {
    const data = request.only(['name', 'isMale', 'birthdate', 'cpf', 'rg', 'documentUrl', 'roleId', 'companyId', 'isActive'])
    const worker = await Worker.create(data)
    return response.status(201).json(worker)
  }

  async show ({ params, response }) {
    const worker = await Worker.find(params.id)
    if (!worker) {
      return response.status(404).json({ message: 'Worker not found' })
    }
    return response.json(worker)
  }

  async update ({ params, request, response }) {
    const worker = await Worker.find(params.id)
    if (!worker) {
      return response.status(404).json({ message: 'Worker not found' })
    }
    worker.merge(request.only(['name', 'isMale', 'birthdate', 'cpf', 'rg', 'documentUrl', 'roleId', 'companyId', 'isActive']))
    await worker.save()
    return response.json(worker)
  }

  async destroy ({ params, response }) {
    const worker = await Worker.find(params.id)
    if (!worker) {
      return response.status(404).json({ message: 'Worker not found' })
    }
    await worker.delete()
    return response.status(204).json()
  }
}

module.exports = WorkerController
