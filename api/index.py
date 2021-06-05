from flask import Flask, request, jsonify
from os.path import join
import os
import pandas as pd
import joblib
from transformer import CombineFuelConsumption
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = joblib.load(join('models', 'model.m5'))

rainfall = joblib.load(join('models', 'rainfall.m5'))
rainfallTr = joblib.load(join('models', 'rainfall_transformer.m5'))

@app.route('/', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    df = pd.DataFrame(data)
    result = model.predict(df)
    return jsonify(result.tolist())



@app.route('/rainfall', methods=['POST'])
def predictRainfall():
    data = request.get_json(force=True)
    df = pd.DataFrame(data)
    result = rainfall.predict(rainfallTr.transform(df[['Location', 'MinTemp', 'MaxTemp', 'Rainfall', 'WindGustDir',
       'WindGustSpeed', 'Humidity9am', 'Humidity3pm', 'Pressure9am',
       'Pressure3pm', 'RainToday', 'Month']]))
    return jsonify(result.tolist())


if __name__ == '__main__':
    app.run(port=int(os.environ.get('PORT', '8080')), debug=False, host='0.0.0.0')