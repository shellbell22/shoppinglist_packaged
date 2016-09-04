export class Shoppinglist {
  constructor(items) {
    this.items = items || [];
    this.completed = [];
  }
  additem (item) {
    //...
    this.items.push(item);
  }
  removeitem (item) {
    this.items.slice(item, 0);
  }

  checkitem (item) {
    this.removeitem(item);
    this.completed.push(item);
  }
}
