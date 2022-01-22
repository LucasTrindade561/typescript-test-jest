describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); // Quando se trata de objetos, usa equal

    // expect(number).toBeNull();
    expect(number).not.toBeNull();

    // expect(number).toBeFalsy(); Quando vc quer ver se o resultado é falso
    expect(number).toBeTruthy(); // Quando vc quer ver se o resultado é verdadeiro
  });
});

describe('Other tests with primitive values', () => {
  it('should split tests', () => {
    const number = 10;

    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThan(11);
    expect(number).toBeLessThanOrEqual(10);

    expect(number).toBeCloseTo(10.001);
    expect(number).toBeCloseTo(9.996);

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Lucas', age: 17 };
    const anotherPerson = { ...person };

    // expect(person).toBe(anotherPerson);
    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 17);
    expect(person).not.toHaveProperty('lastName');

    expect(person.name).toBe('Lucas'); // checando dentro do objeto
  });
});
