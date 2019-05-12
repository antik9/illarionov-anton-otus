var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Basket {
    products: [Product]
    delivery: Delivery
    discount: Discount
  }

  type Product {
    id: Int!
    brand: String
    description: String
    color: String
    label: String!
    price: Float!
    volume: Float
  }

  type Delivery {
    date: String!
    cost: Float!
    type: String!
  }

  type Discount {
    interest: Float!
    description: String
  }

  type Query {
    getBasket: Basket
  }

  type Mutation {
    addProductWithId(id: Int!): Basket
    applyDiscount: Basket
    moveDeliveryByDayForward(days: Int!): Basket
  }
`);



class Basket {
    constructor() {
        this.delivery = new Delivery()
        this.discount = new Discount()
        this.products = [new Product(1), new Product(2)]
    }
}

class Delivery {
    constructor() {
        this.date = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toString()
        this.cost = 300.0
        this.type = 'Courier'
    }
}

class Discount {
    constructor() {
        this.interest = 0.05
        this.description = '5% discount'
    }
}

class Product {
    constructor(id) {
        this.id = id
        this.description = 'SmartPhone'
        this.color = Math.random() > .5 ? 'Red' : 'Blue';
        this.label = Math.random() > .5 ? 'Samsung' : 'Honor';
        this.price = this.label === 'Samsung' ? 15999 : 16499;
        this.volume = 10.0
    }
}

var root = {
    getBasket: () => new Basket(),
    addProductWithId: ( data ) => {
        let basket = new Basket();
        if ( data.id > 2 ) {
            basket.products.push(new Product(data.id));
        }
        return basket;
    },
    applyDiscount: () => {
        let basket = new Basket();
        basket.products.forEach(
            product => product.price = product.price * (1 - basket.discount.interest)
        );
        return basket;
    },
    moveDeliveryByDayForward: (data) => {
        let basket = new Basket();
        basket.delivery.date = new Date(
            new Date().getTime() + data.days * 24 * 60 * 60 * 1000).toString();
        return basket;
    },
}

var app = express();
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');
