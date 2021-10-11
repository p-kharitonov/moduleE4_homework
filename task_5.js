// Задание 5

class Device {
    constructor(name, maxPower){
        this.name = name;
        this.maxPower = maxPower;
        this.currentPower = maxPower;
        this.connect = false;
    }
    toggle() {
        this.connect = !this.connect;
        this.currentPower = this.connect * this.maxPower;
        console.log(`${this.name} ${this.connect ? "включен" : "выключен" }.`);
    }
}

class Lamp extends Device {
    constructor(name, maxPower, color){
        super(name, maxPower);
        this.color = color;
    }
    changePower(percent){
        if (percent >= 0 && percent <= 100) {
            this.currentPower = this.maxPower * percent / 100;
            console.log(`Мощность ${this.name} выставлена на ${this.currentPower} Вт.`);
        }
    }
}

class PC extends Device {
    constructor(name, maxPower, ram){
        super(name, maxPower);
        this.ram = ram;
    }
}

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
