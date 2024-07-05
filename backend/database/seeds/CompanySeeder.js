'use strict'

const Company = use('App/Models/Company')

class CompanySeeder {
  async run () {
    const companies = [
      {
        id: 1,
        name: "Empresa 1",
        description: "Empresa 1 é líder no setor de tecnologia, oferecendo soluções inovadoras para clientes globais. Nossa missão é transformar a maneira como o mundo interage com a tecnologia.",
        isRegistrationDone: true
      },
      {
        id: 2,
        name: "Empresa 2",
        description: "Empresa 2 se destaca na indústria farmacêutica, com um compromisso contínuo com a pesquisa e o desenvolvimento de medicamentos de alta qualidade.",
        isRegistrationDone: false
      },
      {
        id: 3,
        name: "Empresa 3",
        description: "Empresa 3 fornece serviços financeiros abrangentes, ajudando indivíduos e empresas a alcançar seus objetivos financeiros com segurança e eficiência.",
        isRegistrationDone: false
      },
      {
        id: 4,
        name: "Empresa 4",
        description: "Empresa 4 é uma empresa de energia renovável, dedicada a promover o uso de fontes de energia sustentáveis e a reduzir a pegada de carbono global.",
        isRegistrationDone: false
      },
      {
        id: 5,
        name: "Empresa 5",
        description: "Empresa 5 é um gigante do e-commerce, conectando consumidores a uma vasta gama de produtos e serviços com um clique.",
        isRegistrationDone: false
      },
      {
        id: 6,
        name: "Empresa 6",
        description: "Empresa 6 lidera o setor de saúde, proporcionando cuidados de saúde de alta qualidade e acessíveis para comunidades em todo o mundo.",
        isRegistrationDone: false
      },
      {
        id: 7,
        name: "Empresa 7",
        description: "Empresa 7 é pioneira na indústria automotiva, desenvolvendo veículos inovadores e eficientes que definem o futuro do transporte.",
        isRegistrationDone: false
      },
      {
        id: 8,
        name: "Empresa 8",
        description: "Empresa 8 é uma empresa de consultoria de gestão, ajudando organizações a alcançar seus objetivos estratégicos através de insights baseados em dados.",
        isRegistrationDone: false
      },
      {
        id: 9,
        name: "Empresa 9",
        description: "Empresa 9 é uma startup de tecnologia, focada em desenvolver aplicativos e plataformas que facilitam a vida cotidiana das pessoas.",
        isRegistrationDone: false
      }
    ]
    await Company.createMany(companies)
  }
}

module.exports = CompanySeeder
