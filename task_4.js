// Задание 4

function Device(name, maxPower){
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.connect = false;
}

Device.prototype.toggle = function(){
    this.connect = !this.connect;
    this.currentPower = this.connect * this.maxPower;
    console.log(`${this.name} ${this.connect ? "включен" : "выключен" }.`);
};

function Lamp(name, maxPower, color){
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.color = color;
}

Lamp.prototype = new Device();
Lamp.prototype.changePower = function(percent){
    if (percent >= 0 && percent <= 100) {
        this.currentPower = this.maxPower * percent / 100;
        console.log(`Мощность ${this.name} выставлена на ${this.currentPower} Вт.`);
    }
};

function PC(name, maxPower, ram) {
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.ram = ram;
}

PC.prototype = new Device();

const myLamp = new Lamp('Lamp', 5, 'white');
const myPc = new PC('PC', 500, 8);
myLamp.toggle();
myPc.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myLamp.changePower(5);
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myLamp.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myPc.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
myLamp.toggle();
myPc.toggle();
console.log(`В данный момент устройства потребляют ${myLamp.currentPower + myPc.currentPower} Вт`);
