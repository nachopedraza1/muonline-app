import { Events } from "../interfaces/interfaces";

export const events: Events[] = [
    {
        id: "1",
        name: "Chaos Castle",
        type: "Events",
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
        entryTittle: "Como ingresar al Chaos Castle",
        entryItems: [
            '- El "Armor of Guardsman" es vendido en las tiendas de cada pueblo.',
            '- Jugadores que esten en estado PK no podran entrar al Chaos Castle.',
            '- Usted automaticamente serán transportado al castillo correspondiente de acuerdo asu nivel y el monto de zen será reducido.',
            '- El jugador no debera estar en party para poder ingresar.',
            '- No se puede tener equipado ningun anillo de transformacion.',
            '- Los montruos tendran un 70% de probabilidad de explotar al morir.',
            '- Para Entrar al Chaos Castle debe hacer click derecho en el "Armor of Guardsman" cuando veo el anuncio de la apertura.',
        ],
        urlEntryImg: "/assets/images/eventos/chaoscastle.png",
        imgEntryName: "Armor of Guardsman",
        rulesTitle: "Reglas del Chaos Castle",
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
    }
]