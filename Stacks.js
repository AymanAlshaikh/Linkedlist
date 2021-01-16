class Node {
    constructor(data, number, next = null) {
      this.data = data;
      this.next = next;
      this.number = number;
    }
  }
  
  class Stack {
    constructor(limit = 10) {
      this.top = null;
      this.length = 0;
      this.limit = limit;
    }
  
    isFull = () => this.length === this.limit;
  
    isEmpty = () => this.length === 0;
  
    peek = () => (this.isEmpty() ? "Sorry buddy, nothing here" :   `${this.top.data} - ${this.top.number}`);
  
    push = (data, number) => {
      if (this.isFull()) {
        console.log("Eww, the stack is full. Go away!");
      } else {
        const newNode = new Node(data, number, this.top);
        this.top = newNode;
        this.length++;
      }
    };
  
    pop = () => {
      if (this.isEmpty()) {
        console.log("What else do you wanna take from me? I have nothing left!");
      } else {
        const popped = this.top;
        this.top = popped.next;
        this.length--;
        return popped.data && popped.number;
      }
    };
  }

  const deck = new Stack(20);
  const colors = ['Red', 'Yellow', 'Blue', 'Green'];
  const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const random = (array) => {const index = Math.floor(Math.random()*array.length);
    return array[index]};
  

  console.log('Stack: ')
  for (let i=1; i<=20; i++){
    deck.push(random(colors), random(num))
    console.log(i, deck.peek())
  }
  console.log('\nPlayer1: ');
  let player1=[];
  for (let x=1; x<=5; x++){
    player1.push(deck.peek());
    //console.log(x, deck.peek());
    deck.pop();
  }
  console.log(player1);

  console.log('\nPlayer2: ');
  let player2 = [];
  for (let y=1; y<=5; y++){
    player2.push(deck.peek());
    //console.log(y, deck.peek());
    deck.pop()
  }
  console.log(player2)
  //deck.pop();
  //deck.push(random(colors), random(num))
  console.log('\nFirst card: ', deck.peek())
