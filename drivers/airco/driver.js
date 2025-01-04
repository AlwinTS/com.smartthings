'use strict';

const SmartThingsDriver = require('../../lib/SmartThingsDriver');

module.exports = class SmartThingsDriverAirco extends SmartThingsDriver {

  async onOAuth2Init() {
    await super.onOAuth2Init();
  }

  onPairFilterDevice(device) {
    this.log('onPairFilterDevice', device.deviceTypeName);

    if (device.deviceTypeName === 'Samsung OCF Air Conditioner') return true;
    return false;
  }

};
