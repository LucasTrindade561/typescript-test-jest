import { Product } from './product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return the properties name and price', () => {
    const sut = createSut('Camiseta', 80);
    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut.price).toBeCloseTo(80);
  });
});
