import { IndividualCustomer, EnterpriseCustomer } from './custumer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  enterpriseName: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(enterpriseName, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName and cpf', () => {
    const sut = createIndividualCustomer('Lucas', 'Trindade', '111.111.111-11');
    expect(sut).toHaveProperty('firstName', 'Lucas');
    expect(sut).toHaveProperty('lastName', 'Trindade');
    expect(sut).toHaveProperty('cpf', '111.111.111-11');
  });

  it('should have methods to get name and IDN for individual customer', () => {
    const sut = createIndividualCustomer('Lucas', 'Trindade', '111.111.111-11');
    expect(sut.getName()).toBe('Lucas Trindade');
    expect(sut.getIDN()).toBe('111.111.111-11');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have enterpriseName and cnpj', () => {
    const sut = createEnterpriseCustomer('NH enterprise', '29132321320931203');
    expect(sut).toHaveProperty('enterpriseName', 'NH enterprise');
    expect(sut).toHaveProperty('cnpj', '29132321320931203');
  });

  it('should have methods to get name and IDN for enterprise customer', () => {
    const sut = createEnterpriseCustomer('NH enterprise', '29132321320931203');
    expect(sut.getName()).toBe('NH enterprise');
    expect(sut.getIDN()).toBe('29132321320931203');
  });
});
