console.log('> Creando Objetos en JS');
console.log('Opción 1 - Funcion simple que crea objetos planos');

let makeCar = function () {
    let newCar = {};
    newCar.honk = function () {
        console.log('Honk honk');
    }

    return newCar;
}

let myCar1 = makeCar();
let myCar2 = makeCar();
let myCar3 = makeCar();

myCar1.honk();

console.log('Opción 2 - Usando una funcion constructor para crear objetos');

let Car = function () {
    this.honk = function () {
        console.log('Honk Honk');
    };
};

let myCar4 = new Car();
let myCar5 = new Car();

console.log(myCar4.constructor);
console.log(myCar5.constructor);
console.log(Car.prototype);

myCar4.honk();
myCar5.honk();

console.log('Opción 3 - Usando prototipos para compartir comportamientos entre objetos');


let CarPrototype = function () { };

CarPrototype.prototype.honk = function () {
    console.log('Honk honk');
}

myCar6 = new CarPrototype();
myCar6.honk();

CarPrototype.prototype.honk = function () {
    console.log('Beep beep');
}

myCar6.honk();

CarPrototype.prototype.drive = function () {
    console.log('ruum rumm');
}

myCar6.drive();

console.log('Ejemplo de consumo de memoria con la opción 2 y la opcion 3:');
console.log('Opción 2:');

let C = function () {
    this.f = function (foo) {
        console.log(foo)
    }
}

let a = [];

for(let i=0; i < 1000000; i++){
    a.push(new C());
}

console.log('Cada objeto generado, genera a su vez una función f, lo cual ocupa en memoria.');

console.log('Opción 3:');

let A = function(){};

A.prototype.test = function(){
    console.log('prototype test');
}

let aTest= new A();

let testArray = [];

for(let e = 0 ; e < 1000000; e++){
    testArray.push(new A());
}

console.log('Cada objeto generado, NO GENERA la función test. Esta solo se genera una vez y se aloja en el prototipo,  lo cual es más optimo que la opción 2.');

console.log('> Herencia: Cadena de Prototipos')


let Vehicle = function(){};

Vehicle.prototype.drive =  function(){
    console.log('brum brum');
}

let Bus = function(){};

Bus.prototype = new Vehicle();

let myBus = new Bus();

myBus.drive();

Bus.prototype.honk = () => {
    console.log('Bim Bim');
}

myBus.honk();

console.log('Otra Alternativa para la poo en JS: Object.create()');

let vehicle2 = {};
vehicle2.drive= ()=>{
    console.log('brum brum 2');
}

let car2 = Object.create(vehicle2);
car2.honk = () => {
    console.log('honk honk 3');
}


myVehicle = Object.create(vehicle2);
myCar2_1 = Object.create(car2);
myCar2_2 = Object.create(car2);

myCar2_1.honk();
myCar2_2.honk();

myVehicle.drive();
myCar2_1.drive();
myCar2_2.drive();