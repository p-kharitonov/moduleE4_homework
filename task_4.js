// Задание 4

function Device(name, maxPower){
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = 0;
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
    this.currentPower = 0;
    this.color = color;
}

Lamp.prototype = new Device();
Lamp.prototype.changePower = function(percent){
    if (percent >= 0 && percent <= 100) {
        this.currentPower = this.maxPower * percent / 100;
        console.log(`Мощность ${this.name} выставлена на ${this.currentPower} Вт.`);
    }
};

function Pc(name, maxPower, ram) {
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = 0;
    this.ram = ram;
}

Pc.prototype = new Device();

function SmartPowerPlug(name, maxPower) {
    this.name = name;
    this.maxPower = maxPower;
    this.currentPower = maxPower;
    this.connect = true
    this.connectedDevice = {};
}

SmartPowerPlug.prototype = new Device();

SmartPowerPlug.prototype.addDevice = function(){
    for (let device of arguments) {
        this.connectedDevice[device.name] = device;
    }
}

SmartPowerPlug.prototype.removeDevice = function(device){
    delete this.connectedDevice[device.name]
}

SmartPowerPlug.prototype.showPower = function(){
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

const myLamp = new Lamp('Lamp', 5, 'white');
const myPc = new Pc('PC', 500, 8);
const xiaomiSmartPowerPlug = new SmartPowerPlug('xiaomiSmartPowerPlug', 0.1);
xiaomiSmartPowerPlug.addDevice(myLamp,myPc);
xiaomiSmartPowerPlug.showPower()
myLamp.toggle();
myPc.toggle();
xiaomiSmartPowerPlug.showPower()
myLamp.changePower(5);
xiaomiSmartPowerPlug.showPower()
myLamp.toggle();
xiaomiSmartPowerPlug.toggle();
xiaomiSmartPowerPlug.showPower()
myPc.toggle();
xiaomiSmartPowerPlug.showPower()
myLamp.toggle();
xiaomiSmartPowerPlug.toggle();
myPc.toggle();
xiaomiSmartPowerPlug.showPower()
