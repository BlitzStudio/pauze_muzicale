import os
import shutil
import librosa
import pandas as pd
from caracteristici import features
import pickle
import json

# Load the trained machine learning model
model = pickle.load(open('csharp.pkl', 'rb'))

# Define the input and output directories
input_dir = 'data/test_wav'
output_dir1 = 'manele1'
output_dir0 = 'manele0'

# Load the existing CSV file
df = pd.read_csv('features.csv')

# Loop through all the files in the input directory
for file in os.listdir(input_dir):
    # Check if the file is a supported audio format
    if file.endswith('.wav'):
        # Load the audio file and extract its features
        filename = os.path.join(input_dir, file)
        signal, sr = librosa.load(filename)
        features = pd.DataFrame(features).mean(axis=1).values
        # Make a prediction using the trained machine learning model
        prediction = model.predict([features])[0]
        # If the predicted label is 'manele', move the file to the output directory
        if prediction == 1:
            shutil.move(os.path.join(input_dir, file), os.path.join(output_dir1, file))
            print(f"Moved {file} to {output_dir1}")
            print(df.shape[0])
            # Read the value from var.json and update the 'manele' label in the existing CSV file
            with open('var.json', 'r') as f:
                var_data = json.load(f)
                var = var_data['start_row']
                if var-2 == df.shape[0]:
                    df.at[var-3, 'manele'] = 1
                    print(var-3)
                else:
                    print(f"Index out of range: {var-3}")
        else:
            print(df.shape[0])
            shutil.move(os.path.join(input_dir, file), os.path.join(output_dir0, file))
            print(f"{file} is not a manele.")
            with open('var.json', 'r') as f:
                var_data = json.load(f)
                var = var_data['start_row']
                if var-2 == df.shape[0]:
                    df.at[var-3, 'manele'] = 0
                    print(var-3)
                else:
                    print(f"Index out of range: {var-3}")
    else:
        print(f"{file} is not a supported audio format.")

# Save the updated CSV file
df.to_csv('features.csv', index=False)
