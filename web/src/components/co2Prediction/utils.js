import * as Yup from 'yup';

export function getInitialValues() {
  return {
    'Vehicle Class': 'SUV - STANDARD',
    'Engine Size(L)': 3.0,
    Cylinders: 6,
    'Fuel Type': 'Z',
    'Fuel Consumption City (L/100 km)': 15.2,
    'Fuel Consumption Hwy (L/100 km)': 12.6,
    TransmissionMode: 'AS',
    Gears: 7
  };
}

export const vehicleClass = [
  { label: 'SUV - SMALL', value: 'SUV - SMALL' },
  { label: 'MID-SIZE', value: 'MID-SIZE' },
  { label: 'COMPACT', value: 'COMPACT' },
  { label: 'SUV - STANDARD', value: 'SUV - STANDARD' },
  { label: 'SUBCOMPACT', value: 'SUBCOMPACT' },
  { label: 'FULL-SIZE', value: 'FULL-SIZE' },
  { label: 'PICKUP TRUCK - STANDARD', value: 'PICKUP TRUCK - STANDARD' },
  { label: 'TWO-SEATER', value: 'TWO-SEATER' },
  { label: 'MINICOMPACT', value: 'MINICOMPACT' },
  { label: 'STATION WAGON - SMALL', value: 'STATION WAGON - SMALL' },
  { label: 'PICKUP TRUCK - SMALL', value: 'PICKUP TRUCK - SMALL' },
  { label: 'VAN - PASSENGER', value: 'VAN - PASSENGER' },
  { label: 'SPECIAL PURPOSE VEHICLE', value: 'SPECIAL PURPOSE VEHICLE' },
  { label: 'MINIVAN', value: 'MINIVAN' },
  { label: 'STATION WAGON - MID-SIZE', value: 'STATION WAGON - MID-SIZE' },
  { label: 'VAN - CARGO', value: 'VAN - CARGO' },
];

export const fuelType = [
  { label: 'Regular gasoline', value: 'X' },
  { label: 'Premium gasoline', value: 'Z' },
  { label: 'Diesel', value: 'D' },
  { label: 'Ethanol (E85)', value: 'E' },
];

export const transmissionMode = [
  { label: 'Automatic', value: 'A' },
  { label: 'Automated manual', value: 'AM' },
  { label: 'Automatic with select shift', value: 'AS' },
  { label: 'Continuously variable', value: 'AV' },
  { label: 'Manual', value: 'M' },
];

function extractValues(array) {
  return array.map(a => a.value);
}

export const schema = Yup.object().shape({
  'Vehicle Class': Yup.string().required().oneOf(extractValues(vehicleClass)),
  'Engine Size(L)': Yup.number().positive().required(),
  Cylinders: Yup.number().positive().required(),
  'Fuel Type': Yup.string().required().oneOf(extractValues(fuelType)),
  'Fuel Consumption City (L/100 km)': Yup.number().positive().required(),
  'Fuel Consumption Hwy (L/100 km)': Yup.number().positive().required(),
  TransmissionMode: Yup.string().required().oneOf(extractValues(transmissionMode)),
  Gears: Yup.number().positive().required(),
});
