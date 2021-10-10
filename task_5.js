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

myLamp = new Lamp('Lamp', 5, 'white');
myPc = new PC('PC', 500, 8);
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
