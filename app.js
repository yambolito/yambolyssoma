



class Car{
    cars(name,year){
        this.name =name;
        this.year = year;

    }
}


const car1 = new Car("toyota",2015);

document.getElementById("demo").innerHTML = car1.name+ "" +car1.year
