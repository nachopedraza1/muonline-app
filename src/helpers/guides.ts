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
];