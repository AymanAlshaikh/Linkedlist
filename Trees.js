class FamilyTree {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  addChild = (node) => {
    for (let i = 0; i <= this.children.length; i++) {}
    if (this.children.length < 2) {
      this.children.push(node);
    } else {
      console.log("this parent got two kids already");
    }
  };

  removeChild = (node) => {
    this.children = this.children.filter((child) => child !== node);
  };

  traverse = () => {
    let nodes = [this];
    while (nodes.length > 0) {
      let current = nodes.pop();
      console.log(current.data);
      nodes = [...nodes, ...current.children];
    }
    /*for (let i = 0; i <= nodes.length; i++) {
      if (nodes[i] === this.children[i]) {
        this.children.push(node);
      } else {
        console.log("got two kids");
      }
    }*/
  };
}
const root = new FamilyTree("Darth Vader");
const child1 = new FamilyTree("Luke Darth");
const child2 = new FamilyTree("Leia Dart");
const child3 = new FamilyTree("Kylo Ren");
const child4 = new FamilyTree("Ren");
const child5 = new FamilyTree("Kylo");
root.addChild(child1);
root.addChild(child2);
root.addChild(child3);
//child1.addChild(child4);
//child1.addChild(child5);

root.traverse();
