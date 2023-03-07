import { GuideType } from "../interfaces/interfaces";

export const guideList: GuideType[] = [
    {
        id: "1",
        name: "Golden",
        type: "invasions",
        info: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500",
        maps: [
            {
                mapName: "Dungeon",
                mapUrlTex: "/assets/images/maps/dungeon-text.png",
                mapUrl: "/assets/images/maps/dungeon.png"
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
                mapUrl: "/assets/images/maps/dungeon.png"
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