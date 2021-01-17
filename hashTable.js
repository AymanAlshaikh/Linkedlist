const students = [
  {
    name: "Jean-Luc Garza",
    score: 24,
  },
  {
    name: "Teddy Munoz",
    score: 79,
  },
  {
    name: "Georgia Ali",
    score: 17,
  },
  {
    name: "Vicky Calhoun",
    score: 8,
  },
  {
    name: "Awais Weaver",
    score: 65,
  },
  {
    name: "Athena Kline",
    score: 52,
  },
  {
    name: "Zacharia Whitaker",
    score: 38,
  },
  {
    name: "Clarice Davenport",
    score: 99,
  },
  {
    name: "Viktoria Flynn",
    score: 84,
  },
  {
    name: "Ianis Crossley",
    score: 20,
  },
  {
    name: "Johnnie Owens",
    score: 74,
  },
  {
    name: "Emily-Rose Erickson",
    score: 33,
  },
  {
    name: "Adeel Nieves",
    score: 100,
  },
  {
    name: "Dustin Villegas",
    score: 98,
  },
  {
    name: "Maxine Hughes",
    score: 65,
  },
  {
    name: "Bilaal Harding",
    score: 79,
  },
  {
    name: "Maddie Ventura",
    score: 71,
  },
  {
    name: "Leroy Rees",
    score: 44,
  },
  {
    name: "Wanda Frank",
    score: 73,
  },
  {
    name: "Margaux Herbert",
    score: 80,
  },
  {
    name: "Ali Rios",
    score: 70,
  },
  {
    name: "Nigel Santiago",
    score: 25,
  },
  {
    name: "Markus Greene",
    score: 78,
  },
  {
    name: "Harlan Parrish",
    score: 97,
  },
  {
    name: "Baran Davidson",
    score: 43,
  },
  {
    name: "Seth Rodriguezh",
    score: 67,
  },
  {
    name: "Diego Mayer",
    score: 100,
  },
];

class HashTable {
  constructor(classSize) {
    this.classSize = classSize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
  }

  looping = (students) => {
    let size = 0;
    for (let i = 0; i < students.length; i++) {
      //console.log(students[i]);
      if (students[i].score >= 90 && size === this.classSize) {
        this.classes.A.push(
          `Class A: ${students[i].name}-${students[i].score}`
        );
      } else if (students[i].score >= 80) {
        this.classes.B.push(
          `Class B: ${students[i].name}-${students[i].score}`
        );
      } else if (students[i].score >= 70) {
        this.classes.C.push(
          `Class C: ${students[i].name}-${students[i].score}`
        );
      } else if (students[i].score >= 60) {
        this.classes.D.push(
          `Class D: ${students[i].name}-${students[i].score}`
        );
      } else {
        this.classes.Other.push(
          `Class Other: ${students[i].name}-${students[i].score}`
        );
      }
    }
  };

  insert = (key, value) => {
    let collisionCount = 0;
    while (true) {
      const hashCode = this.hash(key, collisionCount);
      const index = this.compress(hashCode);

      let currentValue = this.array[index];
      if (!currentValue || currentValue[0] === key) {
        this.array[index] = [students.name, students.score];
        break;
      } else {
        collisionCount++;
      }
    }
  };

  lookup = (key) => {
    let collisionCount = 0;
    while (true) {
      const hashCode = this.hash(key, collisionCount);
      const index = this.compress(hashCode);
      let currentValue = this.array[index];

      if (!currentValue) return null;

      if (currentValue[0] === key) {
        return currentValue[1];
      }

      collisionCount++;
    }
  };
}
const grades = new HashTable();

grades.looping(students);
console.log(grades.classes.A);
console.log(grades.classes.B);
console.log(grades.classes.C);
console.log(grades.classes.D);
console.log(grades.classes.Other);
