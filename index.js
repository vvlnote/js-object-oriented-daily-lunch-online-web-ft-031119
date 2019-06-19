// global datastore

let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let nId = 0;
class Neighborhood {
  constructor(name) {
    this.id = nId ++;
    this.name = name;
    store.neighborhoods.push(this);
  }

  deliveries() {

  }
  customers() {

  }

  meals() {

  }
}

let cId = 0;
class Customer {
  contructor(name, neighborhoodId) {
    this.id = cId ++;
    this.name = name;
    this.neighborhoodId = neighborhoodId;
    store.customers.push(this);
  }

  deliveries() {

  }

  meals() {

  }
  totalSpent() {
    
  }
}

let mId = 0;
class Meal {
  constructor(title, price) {
    this.id = mId ++;
    this.title = title;
    this.price = price;
    store.meals.push(this);
  }

  deliveries() {

  }

  customers() {

  }

  static byPrice() {

  }
}

let dId = 0;
class Delivery{
  contructor(mealId neighborhoodId, customerId) {
    this.id = dId ++;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this);
  }

  meal() {

  }

  customer() {

  }

  neighborhood() {

  }

}
