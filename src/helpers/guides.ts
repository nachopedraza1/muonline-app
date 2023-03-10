import { GuideType } from "../interfaces/interfaces";

export const guideList: GuideType[] = [
    {
        id: "1",
        name: "Golden Budge Dragon",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "Lorencia",
            mapUrlTex: "/assets/images/maps/lorencia-text.webp",
            mapUrl: "/assets/images/maps/lorencia-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/goldendragon.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun",
                itemUrl: "/assets/images/drop/kundun1.png",
                size: "50px",
                quantity: 1
            },
        ],
        stats: {
            level: "15",
            defense: "25",
            minDmg: "1120",
            maxDmg: "1155",
            hp: "19.740.000",
            atkrate: "100%",
            iceResist: "20%",
            poisonResist: "100%",
        },
    },
    {
        id: "2",
        name: "Gorgon",
        type: "invasions",
        info: {
            infoBoss: "Tres (3) poderosos magos atacan el poblado de Dungeon, tu deber es derrotarlos. Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Tres (3) Jewel random por mob y 5 GP.",
        },
        maps: {
            mapName: "Dungeon",
            mapUrlTex: "/assets/images/maps/dungeon-text.webp",
            mapUrl: "/assets/images/maps/dungeon-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/gorgon.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "300",
            defense: "100",
            minDmg: "7750",
            maxDmg: "8810",
            hp: "58.000.000",
            atkrate: "100%",
            iceResist: "90%",
            poisonResist: "100%",
        },
    },
    {
        id: "3",
        name: "Totem Golem",
        type: "invasions",
        info: {
            infoBoss: "Cuenta la leyenda que en el bosque de elbeland viven tres (3) guardianes con mas fuerza de lo que podrías imaginar, tu deber es derrotarlos. Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Tres (3) Jewel random por mob y 5 GP.",
        },
        maps: {
            mapName: "Elbeland",
            mapUrlTex: "/assets/images/maps/elbeland-text.webp",
            mapUrl: "/assets/images/maps/elbeland-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/golem-totem.webp",
            photoWidth: "220px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "300",
            defense: "100",
            minDmg: "7750",
            maxDmg: "8810",
            hp: "58.000.000",
            atkrate: "100%",
            iceResist: "90%",
            poisonResist: "100%",
        },
    },
    {
        id: "4",
        name: "Ice Queen",
        type: "invasions",
        info: {
            infoBoss: "La reina Rosalia, tras enterarse que su trono iba a ser destruido dicidio congelarse en alguna parte del continente Mu. Tras muchos años despues el hijo del guerrero que destruyo el trono dicidio despertarla para poder asesinarla. Pero lo que no sabia el hijo del guerrero era quela reina habia hecho un trato con un brujo, por si algun dia deciden asesinarla iba a reencarnar como una Ice Queen para poder vengarse.",
            infoDrop: "Tres (3) Jewel random por mob y 5 GP.",
        },
        maps: {
            mapName: "Devias",
            mapUrlTex: "/assets/images/maps/devias-text.webp",
            mapUrl: "/assets/images/maps/devias-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/ice-queen.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
        ],
        stats: {
            level: "300",
            defense: "100",
            minDmg: "7750",
            maxDmg: "8810",
            hp: "58.000.000",
            atkrate: "100%",
            iceResist: "90%",
            poisonResist: "100%",
        },
    },
    {
        id: "5",
        name: "Hydra",
        type: "invasions",
        info: {
            infoBoss: "Tras los experimentos realizas en la maquina chaos, una radiacion ocasiono que algunos bichos en atlans se transformaran y se volvieran malignos. Tu objectivo es matar a esos bichos malignos para que atlans vuelva a ser como antes.",
            infoDrop: "Tres (3) Jewel random por mob y 5 GP.",
        },
        maps: {
            mapName: "atlans",
            mapUrlTex: "/assets/images/maps/atlans-text.webp",
            mapUrl: "/assets/images/maps/atlans-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/hydra.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
        ],
        stats: {
            level: "300",
            defense: "100",
            minDmg: "7750",
            maxDmg: "8810",
            hp: "58.000.000",
            atkrate: "100%",
            iceResist: "90%",
            poisonResist: "100%",
        },
    },
    {
        id: "6",
        name: "Rabbits",
        type: "invasions",
        info: {
            infoBoss: "Los rabbis Invaden Devias! Buscalos y derrota los diez (10) por todo el mapa!",
            infoDrop: "Un (1) Jewel random por mob y 1 GP.",
        },
        maps: {
            mapName: "devias",
            mapUrlTex: "/assets/images/maps/devias-text.webp",
            mapUrl: "/assets/images/maps/devias-map.webp"
        },
        media: {
            photoWidth: "140px",
            photoUrl: "/assets/images/invasions/rabit.webp",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "149",
            defense: "100",
            minDmg: "0",
            maxDmg: "0",
            hp: "50.000",
            atkrate: "0%",
            iceResist: "80%",
            poisonResist: "100%",
        },
    },
    {
        id: "7",
        name: "Summer",
        type: "invasions",
        info: {
            infoBoss: "Los paraguas Invaden Lost Tower! Buscalos y derrota los diez (10) por todo el mapa!",
            infoDrop: "Un (1) Jewel random por mob y 1 GP.",
        },
        maps: {
            mapName: "lost tower",
            mapUrlTex: "/assets/images/maps/losttower-text.webp",
            mapUrl: "/assets/images/maps/losttower-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/fireflame.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "149",
            defense: "100",
            minDmg: "0",
            maxDmg: "0",
            hp: "50.000",
            atkrate: "0%",
            iceResist: "80%",
            poisonResist: "100%",
        },
    },
    {
        id: "8",
        name: "New Year",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Un (1) Jewel random por mob y 1 GP.",
        },
        maps: {
            mapName: "lorencia",
            mapUrlTex: "/assets/images/maps/lorencia-text.webp",
            mapUrl: "/assets/images/maps/lorencia-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/puch.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "149",
            defense: "100",
            minDmg: "0",
            maxDmg: "0",
            hp: "50.000",
            atkrate: "0%",
            iceResist: "80%",
            poisonResist: "100%",
        },
    },
    {
        id: "1",
        name: "Golden Goblin",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "noria",
            mapUrlTex: "/assets/images/maps/noria-text.webp",
            mapUrl: "/assets/images/maps/noria-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/goldengoblin.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun",
                itemUrl: "/assets/images/drop/kundun1.png",
                size: "50px",
                quantity: 1
            },
        ],
        stats: {
            level: "16",
            defense: "26",
            minDmg: "1120",
            maxDmg: "1155",
            hp: "19.780.000",
            atkrate: "100%",
            iceResist: "20%",
            poisonResist: "100%",
        },
    },
    {
        id: "1",
        name: "Golden Rabbit",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "elbeland",
            mapUrlTex: "/assets/images/maps/elbeland-text.webp",
            mapUrl: "/assets/images/maps/elbeland-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/goldenrabbit.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun",
                itemUrl: "/assets/images/drop/kundun1.png",
                size: "50px",
                quantity: 1
            },
        ],
        stats: {
            level: "17",
            defense: "27",
            minDmg: "1120",
            maxDmg: "1155",
            hp: "19.820.000",
            atkrate: "100%",
            iceResist: "20%",
            poisonResist: "100%",
        },
    },
    {
        id: "1",
        name: "Golden Solider",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "devias",
            mapUrlTex: "/assets/images/maps/devias-text.webp",
            mapUrl: "/assets/images/maps/devias-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/goldensolider.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun",
                itemUrl: "/assets/images/drop/kundun1.png",
                size: "50px",
                quantity: 1
            },
        ],
        stats: {
            level: "46",
            defense: "32",
            minDmg: "1320",
            maxDmg: "1355",
            hp: "19.996.000",
            atkrate: "100%",
            iceResist: "23%",
            poisonResist: "100%",
        },
    },
    {
        id: "1",
        name: "Golden Dark Knight",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "dungeon",
            mapUrlTex: "/assets/images/maps/dungeon-text.webp",
            mapUrl: "/assets/images/maps/dungeon-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/goldendarkking.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun",
                itemUrl: "/assets/images/drop/kundun1.png",
                size: "50px",
                quantity: 1
            },
        ],
        stats: {
            level: "60",
            defense: "50",
            minDmg: "1320",
            maxDmg: "1355",
            hp: "21.800.000",
            atkrate: "100%",
            iceResist: "25%",
            poisonResist: "100%",
        },
    },
    {
        id: "1",
        name: "Golden Titan",
        type: "invasions",
        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "devias",
            mapUrlTex: "/assets/images/maps/devias-text.webp",
            mapUrl: "/assets/images/maps/devias-map.webp"
        },
        media: {
            photoUrl: "/assets/images/invasions/gioldentitan.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun",
                itemUrl: "/assets/images/drop/kundun1.png",
                size: "50px",
                quantity: 1
            },
        ],
        stats: {
            level: "53",
            defense: "75",
            minDmg: "1775",
            maxDmg: "1881",
            hp: "25.996.000",
            atkrate: "100%",
            iceResist: "29%",
            poisonResist: "100%",
        },
    },
    {
        id: "9",
        name: "Red Dragon",
        type: "semiboss",
        info: {
            infoBoss: "El pueblo de Noria una vez mas se ve invadida por extrañas criaturas. En esta ocasión serán los dragones rojos los que aparecerán por toda Noria irrumpiendo con la tranquilidad y la paz. Durante esta invasión dos tipos de dragones rojos podrán ser vistos, y cada uno otorgará diferentes recompensas a quien logre derrotarlos.",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "noria",
            mapUrlTex: "/assets/images/maps/noria-text.webp",
            mapUrl: "/assets/images/maps/noria-map.webp"
        },
        media: {
            photoUrl: "/assets/images/semiboss/red-dragon.png",
            photoWidth: "230px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "95",
            defense: "200",
            minDmg: "13750",
            maxDmg: "14810",
            hp: "90.000.000",
            atkrate: "100%",
            iceResist: "100%",
            poisonResist: "100%",
        },
    },
    {
        id: "10",
        name: "Skeleton",
        type: "semiboss",
        info: {
            infoBoss: "El Rey Leoric, enloquecido por el Devil Kundum y muerto a manos de su más fiel caballero en una trágica batalla, vuelve al continente Mu. Su espíritu, maldito por los poderes malignos, vaga sin descanso en algún lugar de las catacumbas, hasta que deseoso de sed de venganza, invade la superficie del continente buscando a aquellos que lo traicionaron. Tu misión será proporcionarle el descanso eterno y traer paz a dicha alma perdida. El rey muerto o Skeleton King volverá en forma de esqueleto gigante e invadirá Lorencia a la vez acompañado de sus súbditos para asesinar a cualquier guerrero descuidado que ronde los alrededores.",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "lorencia",
            mapUrlTex: "/assets/images/maps/lorencia-text.webp",
            mapUrl: "/assets/images/maps/lorencia-map.webp"
        },
        media: {
            photoUrl: "/assets/images/semiboss/skeleton.png",
            photoWidth: "170px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "95",
            defense: "200",
            minDmg: "13750",
            maxDmg: "14810",
            hp: "90.000.000",
            atkrate: "100%",
            iceResist: "100%",
            poisonResist: "100%",
        },
    },
    {
        id: "11",
        name: "Zaikan",
        type: "semiboss",
        info: {
            infoBoss: "Cuenta la leyenda que en lo mas profundo del desierto de tarkan  habita una bestia llamada Zaikan de mas de 500 años cuyo poderes son capaces de acabar con todo un ejercito de guerreros. Muchos intentaron  derrotarlo y muchos fallaron  ¿será por fin derrotada la bestia de 500 años ?",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "tarkan",
            mapUrlTex: "/assets/images/maps/tarkan-text.webp",
            mapUrl: "/assets/images/maps/tarkan-map.webp"
        },
        media: {
            photoUrl: "/assets/images/semiboss/skeleton.png",
            photoWidth: "170px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "200",
            defense: "200",
            minDmg: "13750",
            maxDmg: "14810",
            hp: "90.000.000",
            atkrate: "100%",
            iceResist: "100%",
            poisonResist: "100%",
        },
    },
    {
        id: "12",
        name: "White Wizard",
        type: "semiboss",
        info: {
            infoBoss: "Tres veces por día, el White Wizard con su ejercito invade el continente de Mu Protocol! Ellos atacan constantemente en Devias, tratando de matar a nuestros viajeros de pocos reset y nivel bajo. Asesina al White Wizard y su ejercito para ayudar a mantener la zona mas segura para nuestros nuevos guerreros! Además de ser una manera fácil de conseguir Jewels y el anillo Wizard's Ring, que te dará un Buff extraordinario!",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "devias",
            mapUrlTex: "/assets/images/maps/devias-text.webp",
            mapUrl: "/assets/images/maps/devias-map.webp"
        },
        media: {
            photoUrl: "/assets/images/semiboss/white-wizard.png",
            photoWidth: "190px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                size: "33px",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/soul.png",
                size: "33px",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/bless.png",
                size: "30px",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/chaos.png",
                size: "24px",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/life.png",
                size: "26px",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/creation.png",
                size: "36px",
                quantity: 1
            },
        ],
        stats: {
            level: "200",
            defense: "200",
            minDmg: "13750",
            maxDmg: "14810",
            hp: "90.000.000",
            atkrate: "100%",
            iceResist: "100%",
            poisonResist: "100%",
        },
    },
];