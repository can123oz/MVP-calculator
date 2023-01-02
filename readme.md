Can Özdemir Tucan Tournament Code Task

Termimal Commands: 
-Production start: npm start
-For start without build: npm run start:dev


Notlar:

+ Her maçın bir kazananı olmak zorunda. Beraberlik yok.
+ MVP bulurken tüm datalar baz alınacak.
+ Kazanan takımın her oyuncusu +10 puan kazanır.
+ Her dosya bir maçı temsil eder.
+ Her dosyanın ilk satırı hangi spor olduğunu belirtir.
+ Dosya formatında hata varsa hesaplama işlemini yapma, uyarı ver.
+ Maçı kazanan takım attığı gole/skor a göre hesaplanıyor.



BasketBall-Format: player name; nickname; number; team name; position;   scored points; rebounds; assists
HandBall-Format: player name; nickname; number; team name; position;     goals made; goals received

BasketBall Çarpanaları :
1) Guard (G) :
  Attığı puanı: 2,
  Rebound başına: 3,
  Asist başına: 1

2) Forward (F) :
  Attığı puanı: 2,
  Rebound başına: 2,
  Asist başına: 2

3) Center (C) :
  Attığı puanı: 2,
  Rebound başına: 1,
  Asist başına: 3

HandBall Çarpanaları :
1) Goalkeeper (G) :
  Başlangıç puanı: 50,
  Attığı gol başına: 5,
  Yeniği gol başına: -2

2) Field player(F) :
  Başlangıç puanı: 20,
  Attığı gol başına: 1,
  Yeniği gol başına: -1