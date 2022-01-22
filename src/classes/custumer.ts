import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
  CustomerOrder,
} from './interfaces/customer-protocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  firstName: string;
  lastName: string;
  cpf: string;

  constructor(firstName: string, lastName: string, cpf: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.cpf = cpf;
  }

  getName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class EnterpriseCustomer
  implements EnterpriseCustomerProtocol, CustomerOrder
{
  enterpriseName: string;
  cnpj: string;

  constructor(enterpriseName: string, cnpj: string) {
    this.enterpriseName = enterpriseName;
    this.cnpj = cnpj;
  }

  getName(): string {
    return this.enterpriseName;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
