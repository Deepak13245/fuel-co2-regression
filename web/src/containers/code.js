export const sampleCode = `import joblib
import pandas as pd

# Load model
model = joblib.load("model.m5")

# Create dataframe
X = pd.DataFrame([
    {
        "Vehicle Class": "SUV - STANDARD",
        "Engine Size(L)": 3.0,
        "Cylinders": 6,
        "Fuel Type": "E",
        "Fuel Consumption City (L/100 km)": 15.2,
        "Fuel Consumption Hwy (L/100 km)": 12.6,
        "TransmissionMode": "AS",
        "Gears": 7
    }
])

# Predict
y = model.predict(X)
`;
