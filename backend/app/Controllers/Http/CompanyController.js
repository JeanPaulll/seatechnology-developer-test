'use strict'

const Company = use('App/Models/Company')

class CompanyController {
  async index({response}) {
    const companies = await Company.all()
    return response.json(companies)
  }

  async store({request, response}) {
    const data = request.only(['name', 'description', 'isRegistrationDone'])
    const company = await Company.create(data)
    return response.status(201).json(company)
  }

  async show({params, response}) {
    const company = await Company.find(params.id)
    if (!company) {
      return response.status(404).json({message: 'Company not found'})
    }
    return response.json(company)
  }

  async update({params, request, response}) {
    const company = await Company.find(params.id)
    if (!company) {
      return response.status(404).json({message: 'Company not found'})
    }
    company.merge(request.only(['name', 'description', 'isRegistrationDone']))
    await company.save()
    return response.json(company)
  }

  async destroy({params, response}) {
    const company = await Company.find(params.id)
    if (!company) {
      return response.status(404).json({message: 'Company not found'})
    }
    await company.delete()
    return response.status(204).json()
  }
}

module.exports = CompanyController
