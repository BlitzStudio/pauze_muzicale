import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
import pickle

df = pd.read_csv('features.csv')
X = df.drop(['manele'], axis=1)
y = df.manele

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

rf = RandomForestRegressor(max_depth=20, random_state=42)
rf.fit(X_train, y_train)

with open('csharp.pkl', 'wb') as file:
    pickle.dump(rf, file)
