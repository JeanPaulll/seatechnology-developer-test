'use strict'

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 */
const Equipment = use('App/Models/Equipment')

class EquipmentController {
  async index({response}) {
    const equipments = await Equipment.all()
    return response.json(equipments)
  }

  async store({request, response}) {
    const data = request.only(['name', 'numberCA', 'companyId'])
    const equipment = await Equipment.create(data)
    return response.status(201).json(equipment)
  }

  async show({params, response}) {
    const equipment = await Equipment.find(params.id)
    if (!equipment) {
      return response.status(404).json({message: 'Equipment not found'})
    }
    return response.json(equipment)
  }

  async update({params, request, response}) {
    const equipment = await Equipment.find(params.id)
    if (!equipment) {
      return response.status(404).json({message: 'Equipment not found'})
    }
    equipment.merge(request.only(['name', 'numberCA', 'companyId']))
    await equipment.save()
    return response.json(equipment)
  }

  async destroy({params, response}) {
    const equipment = await Equipment.find(params.id)
    if (!equipment) {
      return response.status(404).json({message: 'Equipment not found'})
    }
    await equipment.delete()
    return response.status(204).json()
  }
}

module.exports = EquipmentController
