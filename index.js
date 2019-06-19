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
    return store.deliveries.filter(deliver => deliver.neighorhoodId. == this.id);
  }
  customers() {
    return store.customers.filter(customer => customer.neighorhoodId == this.id);
  }

  meals() {

    
  }
}

let cId = 0;
class Customer {
  constructor(name, neighborhoodId) {
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
class Delivery {
  constructor(mealId neighborhoodId, customerId) {
    this.id = dId ++;
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId;
    this.customerId = customerId;
    store.deliveries.push(this);
  }

  meal() {
    return store.meals.find(meal => meal.id == this.mealId);
  }

  customer() {
    return store.customers.find(customer => customer.id == this.customerId);
  }

  neighborhood() {
    return store.neighborhoods.find(n => n.id == this.neighborhoodId);
  }

}
