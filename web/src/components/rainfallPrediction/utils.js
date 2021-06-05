import * as Yup from 'yup';

export function getInitialValues() {
  return {
    Location: 'Albury',
    MinTemp: 13.4,
    MaxTemp: 22.9,
    Rainfall: 0.6,
    WindGustDir: 'W',
    WindGustSpeed: 44.0,
    Humidity9am: 71.0,
    Humidity3pm: 22.0,
    Pressure9am: 1007.7,
    Pressure3pm: 1007.1,
    RainToday: 'No',
    Month: 12,
  };
}

export const schema = Yup.object().shape({
  Location: Yup.string().required(),
  MinTemp: Yup.number().required(),
  MaxTemp: Yup.number().required(),
  Rainfall: Yup.number().required(),
  WindGustDir: Yup.string().required(),
  WindGustSpeed: Yup.number().required(),
  Humidity9am: Yup.number().required(),
  Humidity3pm: Yup.number().required(),
  Pressure9am: Yup.number().required(),
  Pressure3pm: Yup.number().required(),
  RainToday: Yup.string().required(),
  Month: Yup.number().required(),
});
