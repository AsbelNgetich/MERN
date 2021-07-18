const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const genRandNum = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
    };

class User {
  constructor() {
    this.id = genRandNum(0,50);
    this.firstName = faker.name.firstName();
    this.lastName = faker.name.lastName();
    this.phoneNumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();

  }
}


class Company {
  constructor() {
    this.id = genRandNum(0,50);
    this.name = faker.company.companyName();
    this.address = {
      street: faker.address.streetAddress(),
      city: faker.address.cityName(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCodeByState(),
      country: faker.address.country()
    }
  }
}

//returns a new user
app.get("/api/user/new", (req, res) => {
  res.json(new User);
});

//returns a new company
app.get("/api/company/new", (req, res) => {
  res.json(new Company);
});

//returns a new user and a new company
app.get("/api/user/company", (req, res) => {
  const userAndCompany = [
    { user: new User }, 
    { company: new Company }
  ]
  res.json(userAndCompany)
});

// this needs to below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));