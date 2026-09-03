

class Fruits{
    constructor(name, season, flavour){
        this.name = name ,
        this.season = season,
        this.flavour = flavour
    }

    grow (){
        console.log("Growing")
    }
}


class Citrus extends Fruits{
    constructor(name, season, flavour){
        super(name);
        
        this.name = name
    }
  
}

const fruit1 = new Fruits("Lemon", "Winter", "Sour")
const citrus1 = new Citrus("Orange")
