//PA0601
class Speaker {
  constructor(name, age, topic, gender, company) {
    ((this.name = name),
      (this.age = age),
      (this.topic = topic),
      (this.gender = gender),
      (this.company = company));
  }
  async getSpeakers() {
    try {
      const response = await fetch("https://randomuser.me/api/?results=6");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

const speaker1 = new Speaker(
    "Zandie",
     23,
     "Web Development", 
     "female",
      "mLab");
const speaker2 = new Speaker(
  "Leigh-Rae",
  20,
  "Software Development",
  "female",
  "mLab",
);


//PA0602

class Flower{
    constructor(name, season, colour, scent, type) {
    ((this.name = name),
      (this.season = season),
      (this.colour = colour),
      (this.scent = scent),
      (this.type = type));
  }
  
     getFlowers() {
        fetch("flowers.json")
            .then(function(response) {
            return response.json();
         })
            .then(function(data) {
            console.log(data);
         })
            .catch(function(error) {
            console.log(error);
         });
}

}

const flower3 = new Flower(
    "Rose",
    "Spring",
    "Pink",
    "Sweet",
    "Typical"
);

const flower4 = new Flower(
    "Lilacs",
    "Summer",
    "White",
    "Sweet",
    "Exotic"
);

//PA0603

class Trees extends Flower {
    constructor(name, season, colour, scent, type, seasonTime){
        super(name, season, scent, type);
        this.seasonTime = seasonTime
    }
    displayBio(){
        return this.name + ' usually produces fruit used for' + 'during' + this.seasonTime
    }

}

const tree3 = new Tree(
    "Apple Tree",
    "Spring",
    "Sweet",
    "Seasonal"
)

//PA0604 

class Trees extends Flower {
    constructor(name, season, colour, scent, type, seasonTime){
        super(name, season, scent, type);
        this.seasonTime = seasonTime
    }
    displayBio(){
        return this.name + ' usually produces fruit used for' + 'during' + this.seasonTime
    }

}

const tree4 = new Tree(
    "Apple Tree",
    "Spring",
    "Sweet",
    "Seasonal"
)

// PA0605 --- Refactor JavaScript Code to Use Objects

/// PA0602

class Flower {

    constructor(name, season, colour, scent, type) {
        this.name = name;
        this.season = season;
        this.colour = colour;
        this.scent = scent;
        this.type = type;
    }

    getFlowers() {
        fetch("flowers.json")
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

const flower1 = new Flower(
    "Rose",
    "Spring",
    "Pink",
    "Sweet",
    "Typical"
);

const flower2 = new Flower(
    "Lilacs",
    "Summer",
    "White",
    "Sweet",
    "Exotic"
);


// //PA0603

class Trees extends Flower {

    constructor(name, season, colour, scent, type, seasonTime) {
        super(name, season, colour, scent, type);
        this.seasonTime = seasonTime;
    }

    displayBio() {
        return this.name + " usually produces fruit during " + this.seasonTime;
    }
}

const tree1 = new Trees(
    "Apple Tree",
    "Spring",
    "Green",
    "Sweet",
    "Fruit Tree",
    "Spring"
);


// //PA0604

console.log(tree1.displayBio());
