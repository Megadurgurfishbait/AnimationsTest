import Dettifoss from './1.jpg';
import Ofaerufoss from './4902408Master.jpg';
import Klifbrekkufossar from './57339822-the-klifbrekkufossar-waterfall-in-the-mjoifjordur-fjord-in-iceland.jpg';
import Glymur from './1156141999.jpg'; 
import Aldeyjarfoss from './aldeyjarfoss-waterfall-iceland_l.jpeg';
import Bruarfoss from './bruarfoss-iceland.jpg';
import Godafoss from './godafoss.jpg';
import Haifoss from './haifoss.jpg';
import Hjalparfoss from './hjalparfoss-waterfall.jpg';
import Hraunfossar from './hraunfossar-iceland.jpg';
import Gullfoss from './imagegullfoss_sumar.jpg';
import Selfoss from './jokulsargljufur_selfoss_iceland.jpg';
import Seljalandsfoss from './seljalandsfoss_waterfall_summer.jpg';
import Skogafoss from './Skógafoss_in_Iceland.jpg';
import Svartifoss from './svartifoss-summer.jpg';
import Dynjandi from './Cascada_Dynjandi,_Vestfirðir,_Islandia,_2014-08-14,_DD_136-138_HDR.JPG';
import Osxarfoss from './oxarasfoss.jpg';
import Glanni from './glanni.jpg';
import Gufufoss from './gufufoss-iceland-landscape-158021.jpg';
import Litlanesfoss from './litlanesfoss-waterfalls-in-east-iceland-5.jpg';
import Hengifoss from './hengifoss-waterfall-2800x1923-iceland-waterfalls-hd-1365.jpg';
import Kirkjufellsfoss from './Kirkjufoss.jpg';
import Mulafoss from './6017257329_1bd5afd577_b.jpg';

// {name: "", image: ``, cord: ``, desc:``},
const data = [
      {name: "Dettifoss", image: `${Dettifoss}`, cord: `65°49’7.97″N   16°22’45.17″W`, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In orci dolor, accumsan tristique fringilla ac, pellentesque a dolor. Nulla eleifend."},
      {name: "Ófærufossar", image: `${Ofaerufoss}`, cord: `63°57'33.47" N -18°37'4.49"W`, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dui id neque facilisis sodales id eget dui. Suspendisse sed." },
      {name: "Klifbrekkufossar", image: `${Klifbrekkufossar}`, cord: `65° 11' 8.581" N 14° 2' 45.417"W `, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique, nulla quis consectetur malesuada, libero eros suscipit velit, vitae placerat."},
      {name: "Glymur", image: `${Glymur}`, cord: `64° 23' 24.331"N 21° 15' 8.965"W`, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit velit, placerat id sem pretium, semper rutrum nisl. Maecenas dictum." },
      {name: "Aldeyjarfoss", image: `${Aldeyjarfoss}`, cord: `65° 22' 0.699"N 17° 20' 9.202"W`, desc: "Aldeyjarfoss waterfall is considered the most beautiful one in the river Skjalfandafljot. The waterfall is framed with long, natural basaltic columns. It is located in the uppermost regions of the Bardardalur valley, on the Sprengisandur highland route. It is possible to drive almost all the way up to it."},
      {name: "Brúarfoss", image: `${Bruarfoss}`, cord: `64°15’53.74″N   20°31’0.24″W`, desc: "It’s not one of the biggest ones but its charm is incredible. The color of the water is just surreal, really beautiful and the place is far from the big tourists crowds."},
      {name: "Goðafoss", image: `${Godafoss}`, cord: `65°49’7.97″N   16°22’45.17″W`, desc: "When it comes to sheer water volume then Dettifoss is Europe’s biggest waterfall. A massive amount of water plunges into the gorge below with an deafening noise. Truly impressive to witness it up and close."},
      {name: "Háifoss", image: `${Haifoss}`, cord: `64°12’25.39″N   19°40’48.88″W`, desc: "This is one of the higher waterfalls in Iceland. Reaching an impressive 122m/400ft."},
      {name: "Hjálparfoss", image: `${Hjalparfoss}`, cord: `64° 6’51.95″N   19°51’12.94″W`, desc: "Háifoss lies in Þórsár valley, by the roots of Hekla so you will see the signs of Hekla everywhere. Very wild and beautiful landscapes."},
      {name: "Hraunfossar", image: `${Hraunfossar}`, cord: `64°42’5.70″N   20°58’43.59″W`, desc: "This magnificent waterfall differing from so many other around the world. This is just not one waterfall but a whole bunch of them, cold, ice clear water seeping through every crack in the lava field creating an absolutely stunning sight. "},
      {name: "Gullfoss", image: `${Gullfoss}`, cord: `64°19’30.14″N   20° 7’30.49″W`, desc: `his is a very mighty waterfall with huge amount of water cascading down the gorge below. It’s quite impressive to walk close to the waterfall.`},
      {name: "Selfoss", image: `${Selfoss}`, cord: `65° 47' 32.39" N -16° 22' 34.19" W`, desc: `lthough Selfoss has always stood in the shadow of Dettifoss it is a great construction of nature and equally as enjoying to visit.`},
      {name: "Seljalandsfoss", image:`${Seljalandsfoss}`, cord: `63°36’57.07″N   19°59’32.53″W`, desc:`Seljalandsfoss is 65m/213ft and might be one of the most visited waterfalls in Iceland. No wonder for its like 10 seconds away from the ringroad, a parking lot just below it and it is very beautiful. `},
      {name: "Skógafoss", image: `${Skogafoss}`, cord: `63°31’37.31″N   19°30’38.65″W`, desc:`Skógafoss is also just by the ringroad, just a short drive further from Seljalandsfoss. Perhaps one of the more beautiful waterfalls here.`},
      {name: "Svartifoss", image: `${Svartifoss}`, cord: `64° 01' 22.80" N -16° 58' 30.00" W`, desc: `Svartifoss is such an elegant waterfall, 20 metres tall, and black columnar basalt formations beautifully frame the waterfall and give it its name, Black Fall. `},
      {name: "Dynjandi", image: `${Dynjandi}`, cord: `65° 44' 11.214"N 23° 12' 31.185""`, desc: `Simply enthralling; The Westfjords' favourite front-page model for decades, and is never short of breathtaking.`},
      {name: "Öxarárfoss", image: `${Osxarfoss}`, cord: `64° 15' 35.40" N -21° 07' 10.80" W`, desc:`The waterfall Öxaráfoss (The waterfall in the Ax River)  in the ravine Almannagjá at Þingvellir is one of the best-known waterfalls in Iceland, at least among Icelanders.`},
      {name: "Glanni", image: `${Glanni}`, cord: `64° 45' 13.350"N 21° 32' 46.761" W`, desc:`The Glanni Waterfall on the Norðurá River is said to be the dwelling place of elves and trolls. `},
      {name: "Gufufoss", image: `${Gufufoss}`, cord: `65° 14' 30.441"N 14° 3' 37.272" W`, desc:`Gufufoss looked to us like the largest and most striking waterfall in the Seyðisfjörður area. The falls plunged with a rectangular shape and power that made it difficult to even get close to its misty base.`},
      {name: "Litlanesfoss", image: `${Litlanesfoss}`, cord: `65° 4’25.08″N   14°52’53.91″W`, desc:`The waterfall is framed by the most beautiful basalt columns, some of which are standing straight and some of which are curved, creating a 30 meter's long flap in the narrow gorge. This waterfall is 30 meters high in two steps and cascades into a small pond.`},
      {name: "Hengifoss", image: `${Hengifoss}`, cord: `65° 4’25.08″N   14°52’53.91″W`, desc:`The spectacular waterfall drops into the gorge Hengifossárgljúfur in Fljótsdalur valley. Hengifoss is 145 meters above sea level and the hike to the waterfall is a climb uphill for an hour or so.`},
      {name: "Kirkjufellsfoss", image: `${Kirkjufellsfoss}`, cord: `64° 56' 26.604"N 23° 18' 22.653"W`, desc:`Grundarfjörður's beautiful landmark is the most photographed mountain in Iceland. Its isolated position jutting out into the sea makes it a focal point for tourists and seamen alike.`},
      {name: "Múlafoss", image: `${Mulafoss}`, cord: `65° 13' 52.45"N 14° 4' 48.379" W`, desc:`Mulafoss is a waterfall situated at, or at least near, the head of the impressive Múlagljúfur (canyon) on the east side of Öræfajökull near Jökulsárlón.`},


];
 
export default data;