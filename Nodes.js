const prompt = require('prompt-sync')({sigint: true});

class Age{
    constructor(data, highLights, link=null){
        this.data = data;
        this.highLights = highLights;
        this.link = link;
    }
}
const year1 = new Age(1, 'crying');
const year3 = new Age(3, 'walking');
const year7 = new Age(7, 'school');

class LinkedList{
    constructor(data, highLights){
        this.tail = new Age(data, highLights);
    }
    insert = (data, highLights) => {
        const year = new Age(data, highLights, this.tail);
        this.tail = year;
    };
    traverse = () => {
        
        let current = this.tail;
        while (current) {
          console.log(`Age: ${current.data}, Highlights: ${current.highLights}`)
          current = current.link;
        }
      };
      /*insertHighlights = (data) => {
    let current = this.tail;
    while (current.data < data) {
      let currentAge = current.data + 1;
      if (current.link && current.link.data === currentAge) {
        current = current.link;
      } else {
        let highLights = prompt(`What was the highlight for age ${currentAge}?`);
        let year = new Age(currentAge, highLights, current.link);
        current.link = year;
        current = year;
      }
    }
  };*/
  insertHighlights = (data) => {
    let current = this.tail;
    for (let currentAge = current.data+1; currentAge <= data; currentAge++) {
      if (current.link && current.link.data === currentAge) {
        current = current.link;
      } else {
        let highLights = prompt(`What was the highlight for age ${currentAge}?`);
        let year = new Age(currentAge, highLights, current.link);
        current.link = year;
        current = year;
      }
    }
  };
}

const yearsOld = new LinkedList(7, 'school');
yearsOld.insert(3, 'walking');
yearsOld.insert(1, 'crying');
const data = prompt("how old R U? ");
yearsOld.insertHighlights(data);
yearsOld.traverse();