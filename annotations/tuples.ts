const drink = {
  color: 'brown',
  varbonated: true,
  sugar: 40,
};

// Type allias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', false, 0];

//  Tuple not really clear for developers
const carSpecs: [number, number] = [400, 3354];

//  Object really clear for developers
const carStats = {
  horsepower: 400,
  weight: 3345,
};

// => Stick with objects opposed to tuples in general...