import { GuideType } from "../interfaces/interfaces";

export const guideList: GuideType[] = [
    {
        id: "1",
        name: "Golden",
        type: "invasions",
        info: "Un evento donde Monstruos Dorados invaden el continente Mu, tu misión será eliminarlos y como premio recibiras una Box of Kundun !Revisa los horarios del la invasión Ingame o desde nuestra pagina web!",
        maps: [
            {
                mapName: "Lorencia",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
            {
                mapName: "Noria",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
            {
                mapName: "Devias",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
            {
                mapName: "Elbeland",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
            {
                mapName: "Dungeon",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
            {
                mapName: "Atlans",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
            {
                mapName: "Lost Tower",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
        ],
        photoUrl: "/assets/images/invasions/golden.png",
        photoWidth: "220px",
        drop: "",
        stats: {
            level: "20",
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
        id: "2",
        name: "Gorgon",
        type: "invasions",
        info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        maps: [
            {
                mapName: "Dungeon",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.jpg"
            },
        ],
        photoUrl: "/assets/images/boss/boss6.png",
        photoWidth: "180px",
        drop: "",
        stats: {
            level: "10",
            defense: "100",
            minDmg: "7750",
            maxDmg: "8810",
            hp: "58.000.000",
            atkrate: "100%",
            iceResist: "90%",
            poisonResist: "100%",
        },
    }
];