'use strict'

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 */
const Activity = use('App/Models/Activity')

class ActivityController {
  async index({response}) {
    const activities = await Activity.all()
    return response.json(activities)
  }

  async store({request, response}) {
    const data = request.only(['name', 'companyId'])
    const activity = await Activity.create(data)
    return response.status(201).json(activity)
  }

  async show({params, response}) {
    const activity = await Activity.find(params.id)
    if (!activity) {
      return response.status(404).json({message: 'Activity not found'})
    }
    return response.json(activity)
  }

  async update({params, request, response}) {
    const activity = await Activity.find(params.id)
    if (!activity) {
      return response.status(404).json({message: 'Activity not found'})
    }
    activity.merge(request.only(['name', 'companyId']))
    await activity.save()
    return response.json(activity)
  }

  async destroy({params, response}) {
    const activity = await Activity.find(params.id)
    if (!activity) {
      return response.status(404).json({message: 'Activity not found'})
    }
    await activity.delete()
    return response.status(204).json()
  }
}

module.exports = ActivityController
