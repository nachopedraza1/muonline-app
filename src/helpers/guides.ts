import { GuideType } from "../interfaces/interfaces";

export const guideList: GuideType[] = [
    {
        id: "1",
        name: "Golden Budge Dragon",
        type: "Golden Invasión",
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
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "15", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "19.740.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "25", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "1120", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "1155", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "20%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "2",
        name: "Gorgon",
        type: "Invasiones",
        info: {
            infoBoss: " El poblado de DUNGEON  es invadido por 3 poderosos magos oscuros, su estrategia es el ataque dividido  en sectores claves del pueblo , tu deber es  proteger el poblado y sus habitantes, dependemos de ti y tu sabiduría guerrero. ",
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
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "300", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "58.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "7750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "8810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "90%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "3",
        name: "Totem Golem",
        type: "Invasiones",
        info: {
            infoBoss: "El bosque de elbeland es conocido  por  sus grandes historias de tesoros  escondidos, muchos intentaron reclamar lo que el bosque esconde, pero ten cuidado guerrero...  se dice que   3 golem  poderosos resguardan las riqueza  del bosque. Dependemos de ti  para saber que esconde los secretos del bosque.",
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
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "300", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "58.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "7750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "8810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "90%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "4",
        name: "Ice Queen",
        type: "Invasiones",
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
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "300", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "58.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "7750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "8810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "90%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "5",
        name: "Hydra",
        type: "Invasiones",
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
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "300", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "58.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "7750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "8810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "90%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "6",
        name: "Rabbits",
        type: "Invasiones",
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
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "149", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "50.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "0%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "0", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "0", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "80%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "7",
        name: "Summer",
        type: "Invasiones",
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
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                itemUrl: "/assets/images/drop/coin.png",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "149", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "50.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "0%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "0", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "0", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "80%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "8",
        name: "New Year",
        type: "Invasiones",
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
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "149", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "50.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "100", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "0%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "0", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "0", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "80%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "1",
        name: "Golden Goblin",
        type: "Golden Invasión",
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
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "16", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "19.780.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "26", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "1120", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "1155", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "20%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "1",
        name: "Golden Rabbit",
        type: "Golden Invasión",
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
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "17", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "19.820.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "27", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "1120", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "1155", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "20%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "1",
        name: "Golden Solider",
        type: "Golden Invasión",
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
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "46", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "19.996.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "32", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "1320", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "1355", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "23%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "1",
        name: "Golden Dark Knight",
        type: "Golden Invasión",
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
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "60", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "21.800.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "50", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "1320", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "1355", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "25%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "1",
        name: "Golden Titan",
        type: "Golden Invasión",
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
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "53", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "25.996.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "75", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "1775", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "1881", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "29%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "9",
        name: "Red Dragon",
        type: "Semiboss",
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
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "95", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "90.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "200", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "13750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "14810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "100%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "10",
        name: "Skeleton",
        type: "Semiboss",
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
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "95", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "90.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "200", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "13750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "14810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "100%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "11",
        name: "Zaikan",
        type: "Semiboss",
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
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "200", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "90.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "200", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "13750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "14810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "100%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "12",
        name: "White Wizard",
        type: "Semiboss",
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
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                itemUrl: "/assets/images/drop/JewelOfSoul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                itemUrl: "/assets/images/drop/JewelOfBless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                itemUrl: "/assets/images/drop/JewelOfChaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                itemUrl: "/assets/images/drop/JewelOfLife.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                itemUrl: "/assets/images/drop/JewelOfCreation.webp",
                quantity: 1
            },
        ],
        stats: [
            { id: 1, name: "level", value: "200", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "90.000.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "200", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "13750", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "14810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "100%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
];