'use strict'

const ActivityWorker = use('App/Models/ActivityWorker')

class ActivityWorkerController {
  async index ({ response }) {
    const activitiesWorkers = await ActivityWorker.all()
    return response.json(activitiesWorkers)
  }

  async store ({ request, response }) {
    const data = request.only(['activityId', 'workerId', 'companyId', 'equipmentsId'])
    const activityWorker = await ActivityWorker.create(data)
    return response.status(201).json(activityWorker)
  }

  async show ({ params, response }) {
    const activityWorker = await ActivityWorker.find(params.id)
    if (!activityWorker) {
      return response.status(404).json({ message: 'ActivityWorker not found' })
    }
    return response.json(activityWorker)
  }

  async update ({ params, request, response }) {
    const activityWorker = await ActivityWorker.find(params.id)
    if (!activityWorker) {
      return response.status(404).json({ message: 'ActivityWorker not found' })
    }
    activityWorker.merge(request.only(['activityId', 'workerId', 'companyId', 'equipmentsId']))
    await activityWorker.save()
    return response.json(activityWorker)
  }

  async destroy ({ params, response }) {
    const activityWorker = await ActivityWorker.find(params.id)
    if (!activityWorker) {
      return response.status(404).json({ message: 'ActivityWorker not found' })
    }
    await activityWorker.delete()
    return response.status(204).json()
  }
}

module.exports = ActivityWorkerController
