import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System under test = classe ou sistema que esta sendo testada
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once time', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
