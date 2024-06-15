// 02test.ts

import {
  HouseType,
  GovernmentBuildingType,
  CityType,
  changeBudget,
  repairHouse,
  toFireStaff,
  toHireStaff,
} from './03'

let city: CityType;

beforeEach(() => {
  city = {
    title: 'New York',
    houses: [
      {
        buildedAt: 2012,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "White street",
          },
        },
      },
      {
        buildedAt: 2008,
        repaired: false,
        address: {
          number: 100,
          street: {
            title: "Happy street",
          },
        },
      },
      {
        buildedAt: 2020,
        repaired: false,
        address: {
          number: 200,
          street: {
            title: "Hogwarts street",
          },
        },
      },
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {
          street: {
            title: "Central Str",
          },
        },
      },
      {
        type: "FIRE-STATION",
        budget: 500000,
        staffCount: 1000,
        address: {
          street: {
            title: "Souths park str",
          },
        },
      },
    ],
    citizensNumber: 1000000,
  };
});

// Ваши тесты
test('city should contain 3 houses', () => {
  expect(city.houses.length).toBe(3);

  expect(city.houses[0].buildedAt).toBe(2012);
  expect(city.houses[0].repaired).toBe(false);
  expect(city.houses[0].address.number).toBe(100);
  expect(city.houses[0].address.street.title).toBe("White street");

  expect(city.houses[1].buildedAt).toBe(2008);
  expect(city.houses[1].repaired).toBe(false);
  expect(city.houses[1].address.number).toBe(100);
  expect(city.houses[1].address.street.title).toBe("Happy street");

  expect(city.houses[2].buildedAt).toBe(2020);
  expect(city.houses[2].repaired).toBe(false);
  expect(city.houses[2].address.number).toBe(200);
  expect(city.houses[2].address.street.title).toBe("Hogwarts street");
});

test('city should contain hospital and fire station', () => {
  expect(city.governmentBuildings.length).toBe(2);

  expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
  expect(city.governmentBuildings[0].budget).toBe(200000);
  expect(city.governmentBuildings[0].staffCount).toBe(200);
  expect(city.governmentBuildings[0].address.street.title).toBe("Central Str");

  expect(city.governmentBuildings[1].type).toBe("FIRE-STATION");
  expect(city.governmentBuildings[1].budget).toBe(500000);
  expect(city.governmentBuildings[1].staffCount).toBe(1000);
  expect(city.governmentBuildings[1].address.street.title).toBe("Souths park str");
});

test('Budget should be changed for HOSPITAL', () => {
  expect(city.governmentBuildings[0].budget).toBe(200000);
  changeBudget(city, 100000);
  expect(city.governmentBuildings[0].budget).toBe(300000);
});

test('Budget should be changed for FIRE-STATION', () => {
  expect(city.governmentBuildings[1].budget).toBe(500000);
  changeBudget(city, -100000);
  expect(city.governmentBuildings[1].budget).toBe(400000);
});

test.skip('House should be repaired', () => {
  repairHouse(city);
  expect(city.houses[1].repaired).toBeTruthy();
});

test('staff should be increased', () => {
  toFireStaff(city, 20);
  expect(city.governmentBuildings[0].staffCount).toBe(180);
});

test('staff should be hire', () => {
  toHireStaff(city, 20);
  expect(city.governmentBuildings[0].staffCount).toBe(220);
});
