'use strict';

const SmartThingsDevice = require('../../lib/SmartThingsDevice');

module.exports = class SmartThingsDeviceAirco extends SmartThingsDevice {

  static CAPABILITIES = [
    {
      homeyCapabilityId: 'onoff',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'switch',
      smartThingsAttributeId: 'switch',
      async onSet({ value }) {
        await this.executeCommand({
          component: 'main',
          capability: 'switch',
          command: value
            ? 'on'
            : 'off',
        });
      },
      async onReport({ value }) {
        return value === 'on';
      },
     },
     {
      homeyCapabilityId: 'samsung_airco_beep',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'audioVolume',
      smartThingsAttributeId: 'volume',
      async onSet({ value }) {
        let setValue = value ? 100 : 0;
        await this.executeCommand({
          component: 'main',
          capability: 'audioVolume',
          command: 'setVolume',
          args: [ setValue ],
        });
      },
      async onReport({ value }) {
        return value === 100;
      },
     },
     {
      homeyCapabilityId: 'measure_temperature',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'temperatureMeasurement',
      smartThingsAttributeId: 'temperature',
    },
    {
      homeyCapabilityId: 'measure_humidity',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'relativeHumidityMeasurement',
      smartThingsAttributeId: 'humidity',
    },
    {
      homeyCapabilityId: 'target_temperature',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'thermostatCoolingSetpoint',
      smartThingsAttributeId: 'coolingSetpoint',
      async onSet({ value }) {
        await this.executeCommand({
          component: 'main',
          capability: 'thermostatCoolingSetpoint',
          command: 'setCoolingSetpoint',
          args: [ value ],
        });
      },
      async onReport({ value }) {
        return value;
      },
     },
     {
      homeyCapabilityId: 'fan_mode',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'airConditionerFanMode',
      smartThingsAttributeId: 'fanMode',
      async onSet({ value }) {
        await this.executeCommand({
          component: 'main',
          capability: 'airConditionerFanMode',
          command: 'setFanMode',
          args: [ value ],
        });
      },
      async onReport({ value }) {
        return value;
      },
     },
     {
      homeyCapabilityId: 'swing_mode',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'fanOscillationMode',
      smartThingsAttributeId: 'fanOscillationMode',
      async onSet({ value }) {
        await this.executeCommand({
          component: 'main',
          capability: 'fanOscillationMode',
          command: 'setFanOscillationMode',
          args: [ value ],
        });
      },
      async onReport({ value }) {
        return value;
      },
     },
     {
      homeyCapabilityId: 'thermostat_mode',
      smartThingsComponentId: 'main',
      smartThingsCapabilityId: 'airConditionerMode',
      smartThingsAttributeId: 'airConditionerMode',
      async onSet({ value }) {
        await this.executeCommand({
          component: 'main',
          capability: 'airConditionerMode',
          command: 'setAirConditionerMode',
          args: [ value ],
        });
      },
      async onReport({ value }) {
        return value;
      },
     }
  ];
};
