# pauze_muzicale
Colegiul National Alexandru Ioan Cuza Focșani










Pauze Muzicale





							 Dragomir Mihai-Andrei
							 Tudor-Pricop Ionut Alexandru



						2023
Cuprins:
Prezentare generala	2
Detalii tehnice si mod de fuctionare:
•	Server-ul Web	4
•	Inteligența artificială	5
•	Schema logică a inteligentei artificiale	6
•	Programul de redare al melodiilor	7
•	Cerinte de sistem	7

 
Prezentare generala

Școala nu s-a schimbat prea mult în ultimii 150 de ani: aceleași bănci,aceiași profesori și aceleași pauze. Pe de alta parte, muzica a evoluat de la cele mai clasice melodii pana la modernele ritmuri pe care le putem asculta astăzi. Zeci de studii au arătat că muzica are un impact pozitiv asupra performanței cognitive și poate crea o atmosferă propice pentru concentrare și focalizare.  Astfel,dorim sa aducem cu proiectul „Pauze Muzicale” o notă de înviorare pentru elevii din toate școlile.
„Pauzele Muzicale” reprezintă o aplicatie web formată din 3 componente:
1.	Server-ul Web(pauzemuzicale.com)
2.	Inteligența Artificială
3.	Algoritm de redare al muzicii

Prin intermediul celor trei componente aplicația este capabilă să umple pauzele de
energie și să revigoreze atmosfera după un test sau o ora mai grea, prin intermediul melodiilor sugerate. Elevii au la dispoziție o interfața web prin care aceștia pot lasa sugestiile, iar pentru a ne  asigura că melodiile sunt adecvate pentru redare acestea vor fi supuse unei selecție realizate de către inteligența artificială care v-a pregăti melodiile adecvate pentru redarea în timpul pauzelor. 
	
 
Server-ul Web
Putem spune despre acesta că este creierul proiectului, deorece leagă celelate 2 componente împreună. La dezvoltarea acestuia s-au folosit ExpressJs, ReactJs,TailwindCss ca principale framework-uri. Rolul server-ui este acela de a oferi o interfață facilă atât pentru elevii, care doresc să lase recomandări de melodii în timpul pauzelor, cât și pentru administratorul care se ocupă de stabilirea intervalelor de redare al melodiilor. De asemenea,au fost implementate un set de măsuri de siguranță bine dezvoltate pentru a putea preveni ulterioare probleme de securitate,cum ar fi:
1.	Spam-ul este prevenint prima data la nivelul utilizatorului, acestuia fiindu-i imposibil să trimită de mai multe ori exact aceeași recomandare prin intermediul site-ului și prin implementarea unui mecanism care îi împiedică pe utilizatori să trimită mai mult decât un număr prestabilit de sugestii pe săptamână.
2.	Pentru a preveni conturile false și a asigura procesul de autentificare pe web site v-a avea loc doar prin intermediul unui cont de Google, al cărui domeniu este autorizat de administrator în procesul de configurare al server-ului. 
Pentru a păstra identitatea și securitatea fiecărui instituții care alege să folosească “Pauze muzicale”, aplicația a fost construită pentru a fi rulată de fiecare școală în parte.

 
Inteligența artificială

Scopul inteligenței artificiale:
Scopul acestui proiect este de a utiliza inteligența artificială pentru a separa melodiile adecvate de cele neadecvate, cu accent pe identificarea melodiilor de tip "manele".

Etapa 1: Extracția Caracteristicilor Audio

•	Utilizăm scriptul “caracteristici.py” pentru a extrage caracteristicile audio din fișierele audio.
•	Biblioteca Librosa ne ajută să calculăm caracteristici precum tempo, tonalitate, și altele.

Etapa 2: Antrenarea Modelelor de Învățare Automată

•	Folosim scriptul „main.py” pentru a încărca datele din fișierul CSV  'features.csv'.
•	Separăm datele în caracteristici de intrare (X) și coloana de validare (y).
•	Antrenăm două modele de învățare automată: Random Forest Regressor (model_rf) și Linear Regression (model_lr).

Etapa 3: Separarea Melodiilor

•	Scriptul „prediction.py” utilizează modelele antrenate pentru a face predicții asupra melodiilor din directorul 'data/test_wav'.
•	Melodiile sunt clasificate ca "neadecvate" sau "adecvate" în funcție de rezultatele obținute de modele.
•	Melodiile clasificate ca "neadecvate" sunt mutate în directorul 'Melodii Neadecvate', iar cele clasificate ca "adecvate" sunt mutate în directorul 'Melodii Adecvate'.


Salvarea Rezultatelor
	
•	Informațiile despre caracteristicile audio extrase și coloanele de validare sunt păstrate în fișierul CSV 'features.csv'.
•	Aceasta servește ca bază de date pentru a gestiona și actualiza rezultatele obținute în timpul procesului.
•	Această abordare combină analiza caracteristicilor audio cu tehnici de învățare automată pentru a crea un sistem capabil să separe melodiile adecvate de cele neadecvate. Acest proiect poate ajuta în promovarea unei selecții muzicale potrivite și de calitate.
Schema logică a inteligentei artificiale


Programul de redare al melodiilor

Acesta se ocupa de redarea melodiilor conform programului prestabilit de administrator. Accesta a fost contruit in python folosind PyDub pentru a a realiza redarea fișierelor audio. Programul este capabil ca odată pornit să selecteze în mod automat intervalul orar în care trebuie să redea melodiile, dar și să își actualizeze pauzele în cazul în care acestea sunt actualizate.Libraria PyDub ofera un canal de comunicare facil pentru  FFMPEG, care se ocupa de redarea pieselor audio.
Cerinte de sistem
1.	Python@3.10
2.	NodeJs@18.17.0
3.	MongoDb
4.	FFMPEG
5.	Google Cloud Oauth 2.0 client id


