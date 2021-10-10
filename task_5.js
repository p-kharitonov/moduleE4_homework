// Задание 5

class Device {
    constructor(name, maxPower){
        this.name = name;
        this.maxPower = maxPower;
        this.currentPower = maxPower;
        this.connect = false;
    }

    toggle(){
        this.connect = !this.connect;
        if (this.connect) {
            this.currentPower = this.maxPower;
            console.log(`${this.name} включен.`);
        } else {
            this.currentPower = 0;
            console.log(`${this.name} выключен.`);
        }
    }
}


class Lamp extends Device {
    constuctor(name, maxPower, stepPower, color) {
        super(name, maxPower);
        this.stepPower = stepPower;
        this.color = color;
    }

    turnDown(count=1) {
        if (this.currentPower - count * this.stepPower > 0) {
            this.currentPower = this.currentPower - count * this.stepPower;
        } else {
            this.currentPower = 0;
        }
        console.log(`Мощность ${this.name} снижена до ${this.currentPower} Вт.`);
    }

    turnUp(count=1) {
        if (this.currentPower + count * this.stepPower < this.maxPower) {
            this.currentPower = this.currentPower + count * this.stepPower;
        } else {
            this.currentPower = this.maxPower;
        }
        console.log(`Мощность ${this.name} увеличена до ${this.currentPower} Вт.`);
    }
}
class Pc extends Device {
    constructor(name, maxPower, ram){
        super(name, maxPower)
        this.ram = ram;
    }
}


myLamp = new Lamp('Lamp', 5, 0.5, 'white');
myPc = new Pc('PC', 500, 8);
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
