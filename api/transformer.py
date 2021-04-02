from sklearn.base import TransformerMixin, BaseEstimator
import numpy as np

class CombineFuelConsumption(BaseEstimator, TransformerMixin):
  def __init__(self, ratio=0.5):
    self.ratio = ratio

  def fit(self, X, y = None):
    return self
  
  def transform(self, X, y = None):
    ratio = self.ratio
    computed = X['Fuel Consumption City (L/100 km)'] * ratio + X['Fuel Consumption Hwy (L/100 km)'] * (1-ratio)
    return np.array([computed]).reshape(-1,1)
 
  def get_feature_names(self):
    return ['Fuel Consumption']