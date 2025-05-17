function describeCountry(country,population,capitalCity){
    this.country=country;
    this.population=population;
    this.capitalCity=capitalCity;
  
    this.stringsentence=function(){
        return `${this.country} has ${this.population} people and it is capital city is ${this.capitalCity}`;
    }

}

let s1 = new describeCountry("Tanzania","3 Million","Dododma");
console.log(s1.stringsentence());

let s2 = new describeCountry("Finland","6 million","Helsinki");
console.log(s2.stringsentence());

let s3 = new describeCountry("Finland","6 million","Helsinki");
console.log(s3.stringsentence());