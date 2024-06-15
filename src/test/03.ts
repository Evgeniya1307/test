
// 03test.ts

// Определения типов
export type HouseType = {
  buildedAt: number;
  repaired: boolean;
  address: {
    number: number;
    street: {
      title: string;
    };
  };
};

export type GovernmentBuildingType = {
  type: "HOSPITAL" | "FIRE-STATION";
  budget: number;
  staffCount: number;
  address: {
    street: {
      title: string;
    };
  };
};

export type CityType = {
  title: string;
  houses: HouseType[];
  governmentBuildings: GovernmentBuildingType[];
  citizensNumber: number;
};

export type TechnologyType = {
  id: number;
  title: string;
};

export type AddressType = {
  streetTitle: string;
  city: {
    title: string;
    countryTitle: string;
  };
};

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AddressType;
  technologies: TechnologyType[];
};

// Объект student
export const student: StudentType = {
  id: 1,
  name: "Dimych",
  age: 32,
  isActive: false,
  address: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus"
    }
  },
  technologies: [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "React" }
  ]
};

// Функции, используемые в тестах
export function addSkill(student: StudentType, skill: string) {
  student.technologies.push({ id: new Date().getTime(), title: skill });
}

export function makeStudentActive(student: StudentType) {
  student.isActive = true;
}

export function changeStudentLive(student: StudentType, city: string): boolean {
  return student.address.city.title === city;
}

export function changeBudget(city: CityType, amount: number) {
  city.governmentBuildings.forEach((building) => {
    building.budget += amount;
  });
}

export function repairHouse(city: CityType) {
  city.houses[1].repaired = true;
}

export function toFireStaff(city: CityType, number: number) {
  city.governmentBuildings[0].staffCount -= number;
}

export function toHireStaff(city: CityType, number: number) {
  city.governmentBuildings[0].staffCount += number;
}

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
