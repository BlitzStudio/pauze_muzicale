import os
import csv
import json
import numpy as np
import librosa

# variabila din json
with open('var.json', 'r') as f:
    var_data = json.load(f)
    start_row = var_data['start_row']

# header din csv
header = ['tempo', 'chroma_stft', 'rmse', 'spectral_centroid', 'spectral_bandwidth', 'rolloff', 'zero_crossing_rate']
for i in range(1, 21):
    header += [f'mfcc{i}']
for i in range(1, 21):
    header += [f'mfcc_delta{i}']
for i in range(1, 11):
    header += [f'tonnetz{i}']
for i in range(1, 14):
    header += [f'spectral_contrast{i}']

# creez csv
with open('features.csv', 'a', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)

    # trec prin fiecare fisier in parte
    for filename in os.listdir('data/test_wav'):
        if filename.endswith('.wav'):
            filepath = os.path.join('data/test_wav', filename)

            #incarc fisierele audio in libraria librosa
            y, sr = librosa.load(filepath)

            # extrag caracteristicile
            tempo, _ = librosa.beat.beat_track(y=y, sr=sr)
            chroma_stft = librosa.feature.chroma_stft(y=y, sr=sr)
            rmse = librosa.feature.rms(y=y)
            spectral_centroid = librosa.feature.spectral_centroid(y=y, sr=sr)
            spectral_bandwidth = librosa.feature.spectral_bandwidth(y=y, sr=sr)
            rolloff = librosa.feature.spectral_rolloff(y=y, sr=sr)
            zero_crossing_rate = librosa.feature.zero_crossing_rate(y)

            mfcc = librosa.feature.mfcc(y=y, sr=sr, n_mfcc=20)
            mfcc_delta = librosa.feature.delta(mfcc)

            tonnetz = librosa.feature.tonnetz(y=y, sr=sr)
            spectral_contrast = librosa.feature.spectral_contrast(y=y, sr=sr)

            # extrag practic numele
            label = filename.split('_')[0]

            # Append all features to a list and write to CSV
            features = [tempo] + list(np.mean(chroma_stft, axis=1)) + list(np.mean(rmse, axis=1)) + list(np.mean(spectral_centroid, axis=1)) + list(np.mean(spectral_bandwidth, axis=1)) + list(np.mean(rolloff, axis=1)) + list(np.mean(zero_crossing_rate, axis=1)) + list(np.mean(mfcc, axis=1)) + list(np.mean(mfcc_delta, axis=1)) + list(np.mean(tonnetz, axis=1)) + list(np.mean(spectral_contrast, axis=1))
            writer.writerow(features)

            # maresc variabila din var.json
            start_row += 1

# updatez variabila din json
with open('var.json', 'w') as f:
    var_data['start_row'] = start_row
    json.dump(var_data, f)

