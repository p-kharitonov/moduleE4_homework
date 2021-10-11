// Задание 5

class Device {
    constructor(name, maxPower){
        this.name = name;
        this.maxPower = maxPower;
        this.currentPower = 0;
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

class Pc extends Device {
    constructor(name, maxPower, ram){
        super(name, maxPower);
        this.ram = ram;
    }
}

class SmartPowerPlug extends Device {
    constructor(name, maxPower) {
        super(name, maxPower);
        this.connect = true;
        this.currentPower = maxPower;
        this.connectedDevice = {};
    }
    addDevice() {
        for (let device of arguments) {
            this.connectedDevice[device.name] = device;
        }
    }
    removeDevice(device) {
        delete this.connectedDevice[device.name];
    }
    showPower(){
        if (this.connect) {
            let power = this.currentPower;
            for (let device in this.connectedDevice) {
                power += this.connectedDevice[device].currentPower;
            }
            console.log(`Потребление энергии составляет ${power} Вт.`);
        } else {
            console.log(`Ошибка! ${this.name} выключен.`);
        }
    }
}

const myLamp = new Lamp('Lamp', 5, 'white');
const myPc = new Pc('PC', 500, 8);
const xiaomiSmartPowerPlug = new SmartPowerPlug('xiaomiSmartPowerPlug', 0.1);
xiaomiSmartPowerPlug.addDevice(myLamp,myPc);
xiaomiSmartPowerPlug.showPower();
myLamp.toggle();
myPc.toggle();
xiaomiSmartPowerPlug.showPower();
myLamp.changePower(5);
xiaomiSmartPowerPlug.showPower();
myLamp.toggle();
xiaomiSmartPowerPlug.toggle();
xiaomiSmartPowerPlug.showPower();
myPc.toggle();
xiaomiSmartPowerPlug.showPower();
myLamp.toggle();
xiaomiSmartPowerPlug.toggle();
myPc.toggle();
xiaomiSmartPowerPlug.showPower();
