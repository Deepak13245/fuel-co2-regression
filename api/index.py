from flask import Flask, request, jsonify
from os.path import join
import os
import pandas as pd
import joblib
from transformer import DenseTransformer

app = Flask(__name__)
model = joblib.load(join('models', 'model.m5'))

@app.route('/', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    df = pd.DataFrame(data)
    result = model.predict(df)
    return jsonify(result.tolist())


if __name__ == '__main__':
    app.run(port=int(os.environ.get('PORT', '8080')), debug=False, host='0.0.0.0')