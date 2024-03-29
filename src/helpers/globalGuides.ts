import { Guide } from "../interfaces/interfaces";

export const globalGuides: Guide[] = [
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
            logoUrl: "/assets/images/maps/lorencia-text.webp",
            photoUrl: "/assets/images/maps/lorencia-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/goldendragon.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun +1",
                photoUrl: "/assets/images/drop/kundun1.png",
                quantity: 1,
                itemsBox: [
                    "Leather Set",
                    "Pad Set",
                    "Vine Set",
                    "Small Shield",
                    "Horn Shield",
                    "Buckler",
                    "Short Sword",
                    "Kris",
                    "Rapier",
                    "Small Axe",
                    "Hand Axe",
                    "Short Bow",
                    "Bow",
                    "Crossbow",
                    "Golden Crossbow",
                    "Skull Staff",
                    "Ring of Ice",
                    "Ring of Fire",
                    "Ring of Poison",
                    "Ring of Earth",
                    "Ring of Wind ",
                    "Ring of Magic",
                    "Pendant of Lighting",
                    "Pendant of Fire",
                    "Pendant of Ice",
                    "Pendant of Wind",
                    "Pendant of Water",
                    "Pendant of Ability",
                ],
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
            logoUrl: "/assets/images/maps/dungeon-text.webp",
            photoUrl: "/assets/images/maps/dungeon-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/gorgon.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
            logoUrl: "/assets/images/maps/elbeland-text.webp",
            photoUrl: "/assets/images/maps/elbeland-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/golem-totem.webp",
            photoWidth: "220px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
            logoUrl: "/assets/images/maps/devias-text.webp",
            photoUrl: "/assets/images/maps/devias-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/ice-queen.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
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
            logoUrl: "/assets/images/maps/atlans-text.webp",
            photoUrl: "/assets/images/maps/atlans-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/hydra.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 5
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
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
            logoUrl: "/assets/images/maps/devias-text.webp",
            photoUrl: "/assets/images/maps/devias-map.webp"
        },
        monster: {
            quantity: 10,
            photoWidth: "140px",
            photoUrl: "/assets/images/invasions/rabit.webp",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
            logoUrl: "/assets/images/maps/losttower-text.webp",
            photoUrl: "/assets/images/maps/losttower-map.webp"
        },
        monster: {
            quantity: 10,
            photoUrl: "/assets/images/invasions/fireflame.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
            logoUrl: "/assets/images/maps/lorencia-text.webp",
            photoUrl: "/assets/images/maps/lorencia-map.webp"
        },
        monster: {
            quantity: 10,
            photoUrl: "/assets/images/invasions/puch.webp",
            photoWidth: "210px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
        id: "9",
        name: "Golden Goblin",
        type: "Golden Invasión",

        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "noria",
            logoUrl: "/assets/images/maps/noria-text.webp",
            photoUrl: "/assets/images/maps/noria-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/goldengoblin.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun +1",
                photoUrl: "/assets/images/drop/kundun1.png",
                quantity: 1,
                itemsBox: [
                    "Leather Set",
                    "Pad Set",
                    "Vine Set",
                    "Small Shield",
                    "Horn Shield",
                    "Buckler",
                    "Short Sword",
                    "Kris",
                    "Rapier",
                    "Small Axe",
                    "Hand Axe",
                    "Short Bow",
                    "Bow",
                    "Crossbow",
                    "Golden Crossbow",
                    "Skull Staff",
                    "Ring of Ice",
                    "Ring of Fire",
                    "Ring of Poison",
                    "Ring of Earth",
                    "Ring of Wind ",
                    "Ring of Magic",
                    "Pendant of Lighting",
                    "Pendant of Fire",
                    "Pendant of Ice",
                    "Pendant of Wind",
                    "Pendant of Water",
                    "Pendant of Ability",
                ],
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
        id: "10",
        name: "Golden Rabbit",
        type: "Golden Invasión",

        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "elbeland",
            logoUrl: "/assets/images/maps/elbeland-text.webp",
            photoUrl: "/assets/images/maps/elbeland-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/goldenrabbit.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun +1",
                photoUrl: "/assets/images/drop/kundun1.png",
                quantity: 1,
                itemsBox: [
                    "Leather Set",
                    "Pad Set",
                    "Vine Set",
                    "Small Shield",
                    "Horn Shield",
                    "Buckler",
                    "Short Sword",
                    "Kris",
                    "Rapier",
                    "Small Axe",
                    "Hand Axe",
                    "Short Bow",
                    "Bow",
                    "Crossbow",
                    "Golden Crossbow",
                    "Skull Staff",
                    "Ring of Ice",
                    "Ring of Fire",
                    "Ring of Poison",
                    "Ring of Earth",
                    "Ring of Wind ",
                    "Ring of Magic",
                    "Pendant of Lighting",
                    "Pendant of Fire",
                    "Pendant of Ice",
                    "Pendant of Wind",
                    "Pendant of Water",
                    "Pendant of Ability",
                ],
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
        id: "11",
        name: "Golden Solider",
        type: "Golden Invasión",

        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "devias",
            logoUrl: "/assets/images/maps/devias-text.webp",
            photoUrl: "/assets/images/maps/devias-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/goldensolider.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun +1",
                photoUrl: "/assets/images/drop/kundun1.png",
                quantity: 1,
                itemsBox: [
                    "Leather Set",
                    "Pad Set",
                    "Vine Set",
                    "Small Shield",
                    "Horn Shield",
                    "Buckler",
                    "Short Sword",
                    "Kris",
                    "Rapier",
                    "Small Axe",
                    "Hand Axe",
                    "Short Bow",
                    "Bow",
                    "Crossbow",
                    "Golden Crossbow",
                    "Skull Staff",
                    "Ring of Ice",
                    "Ring of Fire",
                    "Ring of Poison",
                    "Ring of Earth",
                    "Ring of Wind ",
                    "Ring of Magic",
                    "Pendant of Lighting",
                    "Pendant of Fire",
                    "Pendant of Ice",
                    "Pendant of Wind",
                    "Pendant of Water",
                    "Pendant of Ability",
                ],
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
        id: "12",
        name: "Golden Dark Knight",
        type: "Golden Invasión",

        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "dungeon",
            logoUrl: "/assets/images/maps/dungeon-text.webp",
            photoUrl: "/assets/images/maps/dungeon-map.webp",
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/goldendarkking.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun +1",
                photoUrl: "/assets/images/drop/kundun1.png",
                quantity: 1,
                itemsBox: [
                    "Leather Set",
                    "Pad Set",
                    "Vine Set",
                    "Small Shield",
                    "Horn Shield",
                    "Buckler",
                    "Short Sword",
                    "Kris",
                    "Rapier",
                    "Small Axe",
                    "Hand Axe",
                    "Short Bow",
                    "Bow",
                    "Crossbow",
                    "Golden Crossbow",
                    "Skull Staff",
                    "Ring of Ice",
                    "Ring of Fire",
                    "Ring of Poison",
                    "Ring of Earth",
                    "Ring of Wind ",
                    "Ring of Magic",
                    "Pendant of Lighting",
                    "Pendant of Fire",
                    "Pendant of Ice",
                    "Pendant of Wind",
                    "Pendant of Water",
                    "Pendant of Ability",
                ],
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
        id: "13",
        name: "Golden Titan",
        type: "Golden Invasión",

        info: {
            infoBoss: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
            infoDrop: "Una (1) Box of Kundun por mob.",
        },
        maps: {
            mapName: "devias",
            logoUrl: "/assets/images/maps/devias-text.webp",
            photoUrl: "/assets/images/maps/devias-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/invasions/gioldentitan.webp",
            photoWidth: "160px",
        },
        drop: [
            {
                itemName: "Box of Kundun +1",
                photoUrl: "/assets/images/drop/kundun1.png",
                quantity: 1,
                itemsBox: [
                    "Leather Set",
                    "Pad Set",
                    "Vine Set",
                    "Small Shield",
                    "Horn Shield",
                    "Buckler",
                    "Short Sword",
                    "Kris",
                    "Rapier",
                    "Small Axe",
                    "Hand Axe",
                    "Short Bow",
                    "Bow",
                    "Crossbow",
                    "Golden Crossbow",
                    "Skull Staff",
                    "Ring of Ice",
                    "Ring of Fire",
                    "Ring of Poison",
                    "Ring of Earth",
                    "Ring of Wind ",
                    "Ring of Magic",
                    "Pendant of Lighting",
                    "Pendant of Fire",
                    "Pendant of Ice",
                    "Pendant of Wind",
                    "Pendant of Water",
                    "Pendant of Ability",
                ],
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
        id: "14",
        name: "Red Dragon",
        type: "Semiboss",
        info: {
            infoBoss: "El pueblo de Noria una vez mas se ve invadida por extrañas criaturas. En esta ocasión serán los dragones rojos los que aparecerán por toda Noria irrumpiendo con la tranquilidad y la paz. Durante esta invasión dos tipos de dragones rojos podrán ser vistos, y cada uno otorgará diferentes recompensas a quien logre derrotarlos.",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "noria",
            logoUrl: "/assets/images/maps/noria-text.webp",
            photoUrl: "/assets/images/maps/noria-map.webp"
        },
        monster: {
            photoUrl: "/assets/images/semiboss/red-dragon.webp",
            photoWidth: "230px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
        id: "15",
        name: "Skeleton",
        type: "Semiboss",
        info: {
            infoBoss: "El Rey Leoric, enloquecido por el Devil Kundum y muerto a manos de su más fiel caballero en una trágica batalla, vuelve al continente Mu. Su espíritu, maldito por los poderes malignos, vaga sin descanso en algún lugar de las catacumbas, hasta que deseoso de sed de venganza, invade la superficie del continente buscando a aquellos que lo traicionaron. Tu misión será proporcionarle el descanso eterno y traer paz a dicha alma perdida. El rey muerto o Skeleton King volverá en forma de esqueleto gigante e invadirá Lorencia a la vez acompañado de sus súbditos para asesinar a cualquier guerrero descuidado que ronde los alrededores.",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "lorencia",
            logoUrl: "/assets/images/maps/lorencia-text.webp",
            photoUrl: "/assets/images/maps/lorencia-map.webp"
        },
        monster: {
            photoUrl: "/assets/images/semiboss/skeleton.webp",
            photoWidth: "170px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
        id: "16",
        name: "Zaikan",
        type: "Semiboss",

        info: {
            infoBoss: "Cuenta la leyenda que en lo mas profundo del desierto de tarkan  habita una bestia llamada Zaikan de mas de 500 años cuyo poderes son capaces de acabar con todo un ejercito de guerreros. Muchos intentaron  derrotarlo y fallaron en el intento.  ¿Podras tu ser capaz de aniquilar a la bestia?",
            infoDrop: "Items Tier 5 no excellent +2 a +13",
        },
        maps: {
            mapName: "tarkan",
            logoUrl: "/assets/images/maps/tarkan-text.webp",
            photoUrl: "/assets/images/maps/tarkan-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/semiboss/zaikan.webp",
            photoWidth: "210px",
        },
        drop: [

        ],
        stats: [
            { id: 1, name: "level", value: "10", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "14.600.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "50", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "2650", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "2810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "100%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "17",
        name: "White Wizard",
        type: "Semiboss",
        info: {
            infoBoss: "Tres veces por día, el White Wizard con su ejercito invade el continente de Mu Protocol! Ellos atacan constantemente en Devias, tratando de matar a nuestros viajeros de pocos reset y nivel bajo. Asesina al White Wizard y su ejercito para ayudar a mantener la zona mas segura para nuestros nuevos guerreros! Además de ser una manera fácil de conseguir Jewels y el anillo Wizard's Ring, que te dará un Buff extraordinario!",
            infoDrop: "Cinco (5) Jewel random por mob y 10 GP.",
        },
        maps: {
            mapName: "devias",
            logoUrl: "/assets/images/maps/devias-text.webp",
            photoUrl: "/assets/images/maps/devias-map.webp"
        },
        monster: {
            photoUrl: "/assets/images/semiboss/white-wizard.webp",
            photoWidth: "190px",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 10
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
        id: "21",
        name: "Metal Balrog",
        type: "Semiboss",

        info: {
            infoBoss: "Cuenta la leyenda que hace muchos años el jefe de Lost tower Balrog fue a las torres perdidas donde se encontraba su hoz legendaria.Tras buscarla ciegamente callo de la torre hacia un rio lleno de metal liquido donde logro escapar pero segun transcurrian los años,el metal se iba esparciendo por todo su caparazon hasta que lo cubrio por completo. Muchos intentaron matarlo pero tras su coraza metalica,muchos fallaron. ¿Seras tu el legendario guerrero que podra matarlo?",
            infoDrop: "Items Tier 5 no excellent +2 a +13",
        },
        maps: {
            mapName: "devias",
            logoUrl: "/assets/images/maps/losttower-text.webp",
            photoUrl: "/assets/images/maps/losttower-map.webp"
        },
        monster: {
            quantity: 3,
            photoUrl: "/assets/images/semiboss/metal.webp",
            photoWidth: "190px",
        },
        drop: [

        ],
        stats: [
            { id: 1, name: "level", value: "10", iconUrl: "/assets/images/icons/level.png" },
            { id: 2, name: "hp", value: "14.600.000", iconUrl: "/assets/images/icons/hp.png" },
            { id: 3, name: "defense", value: "50", iconUrl: "/assets/images/icons/defense.png" },
            { id: 4, name: "atk rate", value: "100%", iconUrl: "/assets/images/icons/atkrate.png" },
            { id: 5, name: "min dmg", value: "2650", iconUrl: "/assets/images/icons/mindmg.png" },
            { id: 6, name: "max dmg", value: "2810", iconUrl: "/assets/images/icons/maxdmg.png" },
            { id: 7, name: "ice resist", value: "100%", iconUrl: "/assets/images/icons/iceresist.png" },
            { id: 8, name: "poison resist", value: "100%", iconUrl: "/assets/images/icons/poisonresist.png" },
        ]
    },
    {
        id: "22",
        name: "Cursed Goblin",
        type: "Invasiones",
        info: {
            infoBoss: "Los Cursed Goblin Invaden Devias! Buscalos y derrota los diez (10) por todo el mapa!",
            infoDrop: "Un (1) Jewel random por mob y 1 GP.",
        },
        maps: {
            mapName: "devias",
            logoUrl: "/assets/images/maps/devias-text.webp",
            photoUrl: "/assets/images/maps/devias-map.webp"
        },
        monster: {
            quantity: 10,
            photoWidth: "140px",
            photoUrl: "/assets/images/invasions/cursedgoblin.webp",
        },
        drop: [
            {
                itemName: "Goblin Point",
                photoUrl: "/assets/images/drop/coin.png",
                quantity: 1
            },
            {
                itemName: "Jewel of Soul",
                photoUrl: "/assets/images/drop/soul.webp",
                quantity: 1
            }, {
                itemName: "Jewel of Bless",
                photoUrl: "/assets/images/drop/bless.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Chaos",
                photoUrl: "/assets/images/drop/chaos.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Life",
                photoUrl: "/assets/images/drop/life.webp",
                quantity: 1
            },
            {
                itemName: "Jewel of Creation",
                photoUrl: "/assets/images/drop/creation.webp",
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
        id: "18",
        name: "Blood Castle",
        type: "Events",
        maps: {
            photoUrl: "/assets/images/maps/bloodcastle.jpg",
            logoUrl: "/assets/images/eventos/bloodcastle.png"
        },
        infoItems: [
            '- El evento consiste en atravesar el puente colmado de mobs que invaden el evento, cuando lleguen al final del puente te encontraras con una puerta que deberas de romper y matar los mobs que te pida , asi podras romper la estatua que tirara el arma archangel.',
            '- No hay pérdida de experiencia cuando un jugador no consigue matar en el Blood Castle.',
            '- No hay pérdida de Zen cuando un jugador muere en el Blood Castle.',
            '- El lider que obtenga el arma archangel debera entregarlo al NPC que se encuentra en la zona segura, todos los miembros del party ganaran premio.',
            '- Apertura del Blood Castle 6 veces al dia.',
            '- Para mayor informacion, apretar la letra H ingame.',
            '- Duracion del Blood Castle  8 minutos.',
        ],
        entryItems: [
            '- El Spirit of Archangel está ubicado dentro y fuera de la iglesia en Devias.',
            '- Para los primeros 15 jugadores que muestren el [Cloak Invisibility] al NPC Spirit of Archangel podran ingresar al blood castle.',
            '- El party puede ser establecido dentro y fuera del Blood Castle.',
            '- El nivel correspondiente del "Cloak Invisibility" para el blood castle en todas las razas será eliminado cuando entres al castillo.',
        ],
        rulesItems: [
            '- El Comando Warp puede ser usado despues de entrar al  Blood Castle.',
            '- Una vez alcanzado el limite de participantes(15), usted no podra ingresar.',
            '- El jugador que use "Town portal scroll" en el Blood Castle sera transportado a Devias.',
            '- Cuando un personaje muere en el Blood Castle sera trasportado a Devias.',
            '- El personaje que se encuentre en estado PK no podra entrar al  Blood Castle.',
            '- El jugador no puede irse más allá de la zona de segura después de entrar al Blood Castle antes de que el evento empiece.',
            '- Los Personajes que se quedan en el Blood Castle después del evento serán retornados a Devias.',
            '- Si el evento terminada antes de los (15 minutos) entonces  todos los monstruos desaparecerán y Blood Castle estará cerrado,',
            '- después de 1 minuto todos los personajes seran retornados a Devias.',
            '- Limite de entradas Blood Castle al dia son 2 veces por personaje.',
            '- Podras usar buff skills en la zona segura antes que inicie el evento.',
            '- El Trade no es admitido en Blood Castle.'
        ],
        rooms: [
            { level: 1, entryLevel: "15 ~ 80", entryLevel2: "10 ~ 60", reward: "Zen 5M / 5 GP / 1 Jewel Bless o Soul" },
            { level: 2, entryLevel: "81 ~ 130", entryLevel2: "61 ~ 110", reward: "Zen 6M / 5 GP / 1 Jewel Bless o Soul" },
            { level: 3, entryLevel: "131 ~ 180", entryLevel2: "111 ~ 160", reward: "Zen 8M / 10 GP / 1 Jewel Bless o Soul" },
            { level: 4, entryLevel: "181 ~ 230", entryLevel2: "161 ~ 210", reward: "Zen 10M / 10 GP / 1 Jewel Bless o Soul" },
            { level: 5, entryLevel: "231 ~ 280", entryLevel2: "211 ~ 260", reward: "Zen 12M / 15 GP / 2 Jewel Bless o Soul" },
            { level: 6, entryLevel: "281 ~ 330", entryLevel2: "261 ~ 310", reward: "Zen 15M / 15 GP / 2 Jewel Bless o Soul" },
            { level: 7, entryLevel: "331 ~ 400", entryLevel2: "331 ~ 400", reward: "Zen 20M / 20 GP / 2 Jewel Bless o Soul" },
            { level: 8, entryLevel: "1 ~ 400 ML", entryLevel2: "1 ~ 400 ML", reward: "Zen 50M / 30 GP / 3 Jewel Bless o Soul" },
        ]
    },
    {
        id: "19",
        name: "Chaos Castle",
        type: "Events",
        maps: {
            photoUrl: "/assets/images/maps/chaoscastle.jpg",
            logoUrl: "/assets/images/eventos/chaoscastle.png"
        },
        infoItems: [
            '- La cantidad total de participantes admitida en el Chaos Castle  es 100 descompuesto en lo siguiente:',
            '- Numero Maximo de Jugadores = 70',
            '- Numero Minimo de monstruos = 30',
            '- Si los grupos de jugadores son menos de 70 entonces los participantes seran remplazados automáticamente con monstruos.',
            '- El evento comenzará solamente cuando hay al menos 2 jugadores en el castillo(en el mismo alcance de nivel).',
            '- Si hay solamente 1 jugador la cuota de ingreso será devuelta y será forzado a que se retire del Chaos Castle.',
            '- Cuando el jugador entre al Chaos Castle su aparición será cambiada a un guardsmans.',
            '- Solamente la aparición será cambiada.Sus atributos como fuerza, vitalidad, energia, agilidad y comando seguiran siendo lo mismo.',
            '- Cada Raza tendrá una Sword, Staff o Crossbow dependiendo de su Raza.',
            '- Mascotas como Dinorant, Uniria, Fenrir, Caballo no serán permitidas en el Chaos Castle.',
            '- Apertura del Chaos Castle 12 veces al dia. (Horarios en H ingame)',
            '- Duracion del Evento: 10 Minutos.'
        ],
        entryItems: [
            '- El "Armor of Guardsman" es vendido en las tiendas de cada pueblo.',
            '- Jugadores que esten en estado PK no podran entrar al Chaos Castle.',
            '- Usted automaticamente serán transportado al castillo correspondiente de acuerdo asu nivel y el monto de zen será reducido.',
            '- El jugador no debera estar en party para poder ingresar.',
            '- No se puede tener equipado ningun anillo de transformacion.',
            '- Los montruos tendran un 70% de probabilidad de explotar al morir.',
            '- Para Entrar al Chaos Castle debe hacer click derecho en el "Armor of Guardsman" cuando veo el anuncio de la apertura.',
        ],
        rulesItems: [
            '- Todas las razas en el Chaos Castle son consideradas como enemigos así que no es necesario cambiar ninguna funcion por PVP.',
            '- Los jugadores no pueden atacarse durante el tiempo de espera pero podran moverse.',
            '- El comando Party queda totalmente desabilitado hasta que acabe el Chaos Castle.',
            '- El personaje propio de jugador será puesto con un sombra para que asi puedan distinguirse de los otros personajes. (Tu personaje tendra una sombra más brillante)',
            '- El mapa se estrechará menos del exterior dependiendo del número de jugadores (incluyendo monstruos) en el castillo.',
            '- El personaje resucitará en Lorencia cuando gane o pierda el evento.',
        ],
        rooms: [
            { level: 1, entryLevel: "15 ~ 29", reward: "1 Chaos, 5 GP" },
            { level: 2, entryLevel: "30 ~ 99", reward: "1 Chaos, 5 GP" },
            { level: 3, entryLevel: "100 ~ 159", reward: "2 Chaos, 10 GP" },
            { level: 4, entryLevel: "160 ~ 219", reward: "2 Chaos, 10 GP" },
            { level: 5, entryLevel: "220 ~ 279", reward: "3 Chaos, 15 GP" },
            { level: 6, entryLevel: "280 ~ 400", reward: "3 Chaos, 20 GP" },
            { level: 7, entryLevel: "1 ~ 400 ML", reward: "5 Chaos, 30 GP" },
        ]
    },
    {
        id: "20",
        name: "Devil's Square",
        type: "Events",
        maps: {
            photoUrl: "/assets/images/maps/devilsquare.jpg",
            logoUrl: "/assets/images/eventos/devil.png"
        },
        infoItems: [
            "- Deberás de eliminar la mayor cantidad de mobs posibles para lograr el mayor puntaje y asi poder ganar el 1°er puesto .",
            "- Para los primeros 15 jugadores que traiga una invitación al NPC Charon le será consendido la entrada al Devil's Square.",
            "- El party puede ser establecido dentro y fuera del Devil's Square.",
            "- No hay pérdida de experiencia cuando un jugador no consigue matar en el Devil Square.",
            "- No hay pérdida de Zen cuando un jugador muere en el Devil Square.",
            "- Apertura del Devil's Square 6 veces al dia.",
            "- Para mayor informacion, apretar la letra H ingame.",
            "- Duracion del Devil's Square 5 minutos.",
        ],
        entryItems: [
            "Necesitas la entrada  que puedes crearla dropeando los siguientes objetos : ",
            "Devil's Key + Devil's Eye + Jewel of Chaos, cuando tengas estos 3 requisitos ve a la maquina del chaos en Noria y combínalos  así obtendrás la entrada. También puedes conseguir  la entrada comprando a través de la x Shop in game (X)",
            "- El NPC de ingreso Charon esta ubicado en el poblado de Noria ",
            "- Utilizando el comando /ds puedes llegar al lado del npc ",
        ],
        rulesItems: [
            "- El Comando Warp puede ser usado despues de entrar al  Devil's Square.",
            "- PK no es Admitido en el Devil's Square.",
            "- Personajes que se queda en el Devil's Square después de la búsqueda serán retornado a Noria automaticamente.",
            "- Limite de entradas al Devil's Square al dia son 2 veces por personaje.",
            "- Solo los 5 primeros personajes que hallan matado mas mobs ganaran una recompenza de zen.",
        ],
        rooms: [
            { level: "1 | Excellent drop: 5% ", entryLevel: "15 ~ 130", entryLevel2: "10 ~ 110", rewardList: ["3,500,000 Zen", "2,000,000 Zen", "2,000,000 Zen", "1,000,000 Zen", "500,000 Zen",] },
            { level: "2 | Excellent drop: 5%", entryLevel: "131 ~ 180", entryLevel2: "111 ~ 160", rewardList: ["5,500,000 Zen", "3,000,000 Zen", "3,000,000 Zen", "2,000,000 Zen", "1,000,000 Zen",] },
            { level: "3 | Excellent drop: 5%", entryLevel: "181 ~ 230", entryLevel2: "161 ~ 210", rewardList: ["7,500,000 Zen", "5,000,000 Zen", "5,000,000 Zen", "3,000,000 Zen", "1,500,000 Zen",] },
            { level: "4 | Excellent drop: 5%", entryLevel: "231 ~ 280", entryLevel2: "211 ~ 260", rewardList: ["9,500,000 Zen", "7,000,000 Zen", "7,000,000 Zen", "4,000,000 Zen", "2,000,000 Zen",] },
            { level: "5 | Excellent drop: 8%", entryLevel: "281 ~ 330", entryLevel2: "261 ~ 310", rewardList: ["11,500,000 Zen", "9,000,000 Zen", "9,000,000 Zen", "5,000,000 Zen", "2,500,000 Zen",] },
            { level: "6 | Excellent drop: 8%", entryLevel: "331 ~ 400", entryLevel2: "311 ~ 400", rewardList: ["13,500,000 Zen", "11,000,000 Zen", "11,000,000 Zen", "6,000,000 Zen", "3,000,000 Zen",] },
            { level: "7 | Excellent drop: 8%", entryLevel: "1 ~ 400 ML", entryLevel2: "1 ~ 400 ML", rewardList: ["15,500,000 Zen", "13,000,000 Zen", "13,000,000 Zen", "7,000,000 Zen", "3,500,000 Zen",] },
        ]
    },
    {
        id: "23",
        name: "Mapas",
        type: "Guias",
        mapsList: [
            {
                mapName: "lorencia",
                photoUrl: "/assets/images/maps/lorencia-map.webp",
                logoUrl: "/assets/images/maps/lorencia-text.webp",
                path: "/guides/24"
            },
            {
                mapName: "noria",
                photoUrl: "/assets/images/maps/noria-map.webp",
                logoUrl: "/assets/images/maps/noria-text.webp",
                path: "/guides/25"
            },
            {
                mapName: "devias",
                photoUrl: "/assets/images/maps/devias-map.webp",
                logoUrl: "/assets/images/maps/devias-text.webp",
                path: "/guides/26"
            },
            {
                mapName: "dungeon",
                photoUrl: "/assets/images/maps/dungeon-map.webp",
                logoUrl: "/assets/images/maps/dungeon-text.webp",
                path: "/guides/27"
            },
            {
                mapName: "elbeland",
                photoUrl: "/assets/images/maps/elbeland-map.webp",
                logoUrl: "/assets/images/maps/elbeland-text.webp",
                path: "/guides/28"
            },
            {
                mapName: "atlans",
                photoUrl: "/assets/images/maps/atlans-map.webp",
                logoUrl: "/assets/images/maps/atlans-text.webp",
                path: "/guides/29"
            },
            {
                mapName: "tarkan",
                photoUrl: "/assets/images/maps/tarkan-map.webp",
                logoUrl: "/assets/images/maps/tarkan-text.webp",
                path: "/guides/30"
            },
            {
                mapName: "aida",
                photoUrl: "/assets/images/maps/aida-map.webp",
                logoUrl: "/assets/images/maps/aida-text.webp",
                path: "/guides/31"
            }
        ],
    },
    {
        id: "24",
        name: "Lorencia",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/lorencia-map.webp",
            logoUrl: "/assets/images/maps/lorencia-text.webp",
        },
        info: {
            infoMap: "Lorencia es una amplia planicie ubicada en el centro de MU. Los Caballeros Oscuros y los Hechiceros Oscuros comienzan sus carreras aquí. Debido a las fuertes lluvias, abundan los árboles altos y la hierba. Es un lugar de caza adecuado para aventureros de bajo nivel (1-20).",
        },
        npcs: [
            { photoUrl: "/assets/images/npcs/vanert.png", coord: "30,30", info: "lorem ipsun" },
            { photoUrl: "/assets/images/npcs/dupiran.png", coord: "30,30", info: "lorem ipsun" }
        ]
    },
    {
        id: "25",
        name: "Noria",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/noria-map.webp",
            logoUrl: "/assets/images/maps/noria-text.webp",
        },
        info: {
            infoMap: "Noria, el mundo natal del reino de las Hadas, es un enorme bosque situado en el extremo oriental del continente de MU. Originalmente, Noria estuvo poblada sólo por hadas, pero tras la invasión de Kundun a MU, el intercambio entre humanos se hizo más frecuente y el asentamiento humano en la región se hizo más pronunciado. Todos los personajes de hadas comienzan su carrera en Noria. ",
        },
    },
    {
        id: "26",
        name: "Devias",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/devias-map.webp",
            logoUrl: "/assets/images/maps/devias-text.webp",
        },
        info: {
            infoMap: "Devias es un ventisquero situado al norte de Lorencia y está cubierto de nieves perpetuas. Los monstruos aquí son más poderosos que los de Lorencia o Noria, por lo que solo los aventureros de más de nivel 15 pueden ingresar a Devias. El maestro del gremio que crea y administra los gremios también se encuentra en Devias.",
        },
    }, {
        id: "27",
        name: "Dungeon",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/dungeon-map.webp",
            logoUrl: "/assets/images/maps/dungeon-text.webp",
        },
        info: {
            infoMap: "Dungeon es una formidable cueva situada en el norte de Lorencia Antaño una prisión subterránea, ¡ahora es una guarida del ejército Kundun! La feroz Gorgona espera a cualquiera que se atreva a desafiarle, al final de esta traicionera cámara. Antaño regentada por la Iglesia de Devias, esta cueva se utilizaba como prisión del imperio. Aquí se encontraban numerosos guardias que hacían justicia a los criminales.",
        },
    },
    {
        id: "28",
        name: "Elbeland",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/elbeland-map.webp",
            logoUrl: "/assets/images/maps/elbeland-text.webp",
        },
        info: {
            infoMap: "Elbeland es la patria del reino de los Invocadores. El linaje de los Invocadores se ha conservado desde la antigüedad y ha tenido poco contacto con los humanos durante mucho tiempo. Sin embargo, debido a la resurrección de Kundun, se produjo una gran agitación y los Invocadores decidieron hacer las paces con los humanos en un intento de salvar el continente",
        },
    }
    ,
    {
        id: "29",
        name: "Atlans",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/atlans-map.webp",
            logoUrl: "/assets/images/maps/atlans-text.webp",
        },
        info: {
            infoMap: "Atlans era una antigua ciudad construida por el Pueblo Kanturu, que había desarrollado sistemas muy avanzados en el interior de las Reliquias Kanturu. El Pueblo Kanturu prosperaba gracias a los recursos naturales, por lo que creó esta ciudad por sus abundantes recursos naturales.",
        },
    },
    {
        id: "30",
        name: "Tarkan",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/tarkan-map.webp",
            logoUrl: "/assets/images/maps/tarkan-text.webp",
        },
        info: {
            infoMap: "Tarkan es un desierto traicionero, ahora abrumado por temibles monstruos. En el noreste del desierto, el feroz Zaikan espera a cualquiera que se atreva a desafiarlo. El desierto de MU alberga algunos monstruos muy fuertes. Sólo unos pocos se adentran en Tarkan en busca de los tesoros que esconde el gran monstruo Zaikan. Este gran desierto siempre ha sido un lugar traicionero para explorar. Los restos de muchos guerreros que se atrevieron a viajar hasta aquí aún pueden verse yaciendo en este páramo.",
        },
    },
    {
        id: "31",
        name: "Aida",
        type: "Mapas",
        maps: {
            photoUrl: "/assets/images/maps/aida-map.webp",
            logoUrl: "/assets/images/maps/aida-text.webp",
        },
        info: {
            infoMap: 'Las criaturas de este bosque están gobernadas por el gran Maine Infernal. Muchos guerreros intentarán matar al Maine Infernal por sus valiosos cuernos. Aunque peligrosos, hay dos goblins que prestan sus servicios en la zona segura del mapa. Estos goblins pueden añadir o eliminar "Opciones de la Joya de la Armonía" en los objetos de equipo.',
        },
    },
];