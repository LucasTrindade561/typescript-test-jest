export interface CustomerOrder {
  getName(): string;
  getIDN(): string;
}

export interface IndividualCustomerProtocol {
  firstName: string;
  lastName: string;
  cpf: string;
}

export interface EnterpriseCustomerProtocol {
  enterpriseName: string;
  cnpj: string;
}
