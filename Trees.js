class FamilyTree {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  getchildwithname = (data) => {
    return this.children.find((child) => child.data === data);
  };
  findFather = (node) => {};
  addChild = (node) => {
    if (this.children.length < 2) {
      this.children.push(node);
    } else {
      console.log("this parent got two kids already");
    }
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
const root = new FamilyTree("");
while (fullname !== done) {
  let current = root;
  let names = fullname.split(" ").reverse();
  let firstname = names.pop();
  let lastname = names.pop(0);
  if (lastname === current.data) {
    if (names) {
      for (let i = 0; i < names.length; i++) {
        let child = curent.getchildwithname(data);
        if (child) {
          current = child;
        } else {
          let newnode = new FamilyTree(data);
          current.addChild(newnode);
          current = newnode;
        }
      }
    }
    let newnode = new FamilyTree(firstname);
    current.addChild(newnode);
  }
}

root.traverse();
