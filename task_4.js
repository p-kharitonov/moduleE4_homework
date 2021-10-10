// Задание 4

function Device(name, maxPower){
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.connect = false;
}

Device.prototype.toggle = function(){
    this.connect = !this.connect;
    if (this.connect) {
        this.currentPower = this.maxPower;
        console.log(`${this.name} включен.`);
    } else {
        this.currentPower = 0;
        console.log(`${this.name} выключен.`);
    }
};

function Lamp(name, maxPower, stepPower, color){
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.stepPower = stepPower;
    this.color = color;
}

Lamp.prototype = new Device();
Lamp.prototype.turnDown = function(count=1){
    if (this.currentPower - count * this.stepPower > 0) {
        this.currentPower = this.currentPower - count * this.stepPower;
    } else {
        this.currentPower = 0;
    }
    console.log(`Мощность ${this.name} снижена до ${this.currentPower} Вт.`);
};
Lamp.prototype.turnUp = function(count=1){
    if (this.currentPower + count * this.stepPower < this.maxPower) {
        this.currentPower = this.currentPower + count * this.stepPower;
    } else {
        this.currentPower = this.maxPower;
    }
    console.log(`Мощность ${this.name} увеличена до ${this.currentPower} Вт.`);
};

function PC(name, maxPower, ram){
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.ram = ram;
}

PC.prototype = new Device();

myLamp = new Lamp('Lamp', 5, 0.5, 'white');
myPc = new PC('PC', 500, 8);
myLamp.toggle();
myPc.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myLamp.turnDown(5);
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myLamp.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myPc.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myLamp.toggle();
myPc.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);