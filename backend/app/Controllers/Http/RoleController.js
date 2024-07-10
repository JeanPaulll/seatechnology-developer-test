'use strict'

/**
 * @author Jean Paul <jeanpaulwebb@gmail.com>
 * @date 05/07/2024
 */
const Role = use('App/Models/Role')

class RoleController {
  async index({response}) {
    const roles = await Role.all()
    return response.json(roles)
  }

  async store({request, response}) {
    const data = request.only(['name', 'companyId'])
    const role = await Role.create(data)
    return response.status(201).json(role)
  }

  async show({params, response}) {
    const role = await Role.find(params.id)
    if (!role) {
      return response.status(404).json({message: 'Role not found'})
    }
    return response.json(role)
  }

  async update({params, request, response}) {
    const role = await Role.find(params.id)
    if (!role) {
      return response.status(404).json({message: 'Role not found'})
    }
    role.merge(request.only(['name', 'companyId']))
    await role.save()
    return response.json(role)
  }

  async destroy({params, response}) {
    const role = await Role.find(params.id)
    if (!role) {
      return response.status(404).json({message: 'Role not found'})
    }
    await role.delete()
    return response.status(204).json()
  }
}

module.exports = RoleController
