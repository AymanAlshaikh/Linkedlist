const prompt = require("prompt-sync")({ sigint: true });
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
    let size1 = 0;
    let size2 = 0;
    let size3 = 0;
    let size4 = 0;
    let size5 = 0;
    //if (size < this.classSize) {
    for (let i = 0; i < students.length; i++) {
      //console.log(students[i]);
      if (students[i].score >= 90 && size1 < this.classSize) {
        this.classes.A.push(
          `Class A: ${students[i].name}-${students[i].score}`
        );
        size1++;
      } else if (
        students[i].score >= 80 &&
        students[i].score < 90 &&
        size2 < this.classSize
      ) {
        this.classes.B.push(
          `Class B: ${students[i].name}-${students[i].score}`
        );
        size2++;
      } else if (
        students[i].score >= 70 &&
        students[i].score < 80 &&
        size3 < this.classSize
      ) {
        this.classes.C.push(
          `Class C: ${students[i].name}-${students[i].score}`
        );
        size3++;
      } else if (
        students[i].score >= 60 &&
        students[i].score < 70 &&
        size4 < this.classSize
      ) {
        this.classes.D.push(
          `Class D: ${students[i].name}-${students[i].score}`
        );
        size4++;
      } else {
        this.classes.Other.push(
          `Class Other: ${students[i].name}-${students[i].score}`
        );
      }
    }
    //}
  };
}
const size = prompt("How many students?");
const grades = new HashTable(size);

grades.looping(students);
console.log(grades.classes);
//console.log(grades.classes.B);
//console.log(grades.classes.C);
//console.log(grades.classes.D);
//console.log(grades.classes.Other);
