import time
import os
import json
from pygame import mixer
from mutagen.mp3 import MP3
from pydub import AudioSegment
from pydub.playback import play
import random
import math

scriptpath = os.path.dirname(__file__)
json_path = os.path.join(scriptpath, "variabile.json")

with open(json_path, "r") as file:
    json = json.load(file)

mixer.init()
musicPath = "C:\\Users\\ionut\\projects\\Muzica_in_pauze\\ml\\manele0"
tracks = os.listdir(musicPath)


def sync():
    for j in range(0, len(json["ora_pauze"]) - 1):
        now = time.localtime()
        if now[3] == json["ora_pauze"][j] and now[4] < json["minut_pauze"][j]:
            i = j
            j = len(json["ora_pauze"])
        else:
            i = j + 1
    return i


def startMusic():
    print("StartMusic")
    while True:
        i = sync()

        now = time.localtime()
        if now[3] == json["ora_pauze"][i] and now[4] == json["minut_pauze"][i]:
            durata = json["durata_pauze"] * 60 * 1000
            while durata > 0:
                track = random.choice(tracks)
                trackPath = musicPath + "/" + track
                audio = MP3(trackPath)
                trackLenght = math.floor(audio.info.length) * 1000
                if trackLenght >= durata:
                    print("Too long")
                    trackLenght = durata
                song = AudioSegment.from_wav(trackPath)
                finalTrack = song[:trackLenght]
                play(finalTrack)
                durata -= trackLenght
            if i != len(json["ora_pauze"]):
                print("Marire")
            else:
                print("Resetare")
                i = 0

startMusic()
 