export const characterStats = [
    {
        id: 0,
        name: "Dark Knight",
        heroUrl: "/assets/images/hero_1.png",
        heroClass: "/assets/images/hero-logo.png",
        info: "Los Caballeros Oscuros son la encarnación de la fuerza y el poder.Carecen de habilidades de rango, pero en combate cuerpo a cuerpo, pueden entregarataques mortales y realizar combos devastadores.Los caballeros utilizanvarios party buffs como el aumento de stamina o cuandoequipados con un escudo, pueden transformarse en tanques yy usar la postura de protección sólida, que aumenta el poder y la defensade todos los miembros del grupo.",
        stats: [
            {
                tittle: "Single target",
                color: "stat-green",
                value: 80,
            },
            {
                tittle: "Survivability",
                color: "stat-green",
                value: 100,
            },
            {
                tittle: "AOE Damage",
                color: "stat-red",
                value: 35,
            },
            {
                tittle: "Difficulity",
                color: "stat-red",
                value: 75,
            },
        ]
    },
    {
        id: 1,
        name: "Dark Wizard",
        heroUrl: "/assets/images/hero_2.png",
        heroClass: "/assets/images/hero-logo2.png",
        info: "El Mago Oscuro está especializado en magia ofensiva, teletransporte y puede matar a distancia. Llevan bastones mágicos que aumentan el poder ofensivo de sus hechizos y, gracias a su kit de hechizos y teletransporte, pueden acechar a sus oponentes. Los Magos Oscuros tienen la habilidad de congelar, envenenar y derribar a sus oponentes, y apoyan a los miembros de su grupo con una barra de reducción de daño.",
        stats: [
            {
                tittle: "Single target",
                color: "stat-yellow",
                value: 60,
            },
            {
                tittle: "Survivability",
                color: "stat-green",
                value: 70,
            },
            {
                tittle: "AOE Damage",
                color: "stat-green",
                value: 100,
            },
            {
                tittle: "Difficulity",
                color: "stat-green",
                value: 30,
            },
        ],
        builds: [
            {
                type: "SUPPORT SM",
                info: "Build de SM TANQUE (SUPPORT) esta combinación poco usual en un mago es utilizada en peleas masivas cuando el mago tiene que cumplir su función de utilizar la técnica de teleport en party así poder salvar al objetivo y salvarse a si mismo con la técnica de teleport individual , ideal para lo jugadores que les guste jugar de apoyo. DATO : También puedes utilizar tus habilidades para Ralentizar y cortar la opción  (Recovery) en sus objetivos. NO CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Alta--Daño : Bajo--Skills princípiales : Teleport",
                imgStats: "/assets/images/supportsm1.jpg",
                imgTree: "/assets/images/supportsm2.jpg"
            },
            {
                type: "KILLER SM",
                info: "Build de SM FULL DAÑO  esta combinación de puntos es letal para los enemigos ya que tiene un daño muy elevado. DATO: Esta build esta pensada para aquellos jugadores que utilizan constantemente la técnica de Teleport . Pero ten cuidado mucho daño puede ser perjudicial si te distraes, ya que esta combinación no cuenta con mucha vida.--Defensa : Baja--Daño : Alto--Skills principalales : Decay / Ice Storm",
                imgStats: "/assets/images/killersm1.jpg",
                imgTree: "/assets/images/killersm2.jpg"
            },
        ]
    },
    {
        id: 2,
        name: "Fairy Elf",
        heroUrl: "/assets/images/hero_3.png",
        heroClass: "/assets/images/hero-logo3.png",
        info: 'Los elfos están especializados en el combate a distancia y en la magia defensiva, por lo que pueden jugar tanto de repartidores de daño como de apoyo. Los elfos tienen hechizos "potenciadores" que pueden aumentar la defensa, el ataque, las estadísticas o curar a los miembros del grupo y, gracias al equipo de maestría especial, pueden mejorar aún más sus potenciadores, lo que los convierte en el mejor apoyo del juego. También pueden usar la habilidad dash, que los convierte en la clase más móvil en combate.',
        stats: [
            {
                tittle: "Single target",
                color: "stat-green",
                value: 90,
            },
            {
                tittle: "Survivability",
                color: "stat-green",
                value: 70,
            },
            {
                tittle: "AOE Damage",
                color: "stat-red",
                value: 75,
            },
            {
                tittle: "Difficulity",
                color: "stat-green",
                value: 40,
            },
        ],
        builds: [
            {
                type: "SUPPORT ELF",
                info: "Build de ELF Support esta combinación de puntos es de gran ayuda a la hora de peleas masivas, ayudando a tu equipo recuperando HP Y SD. Ideal para jugadores que les gusta jugar de apoyo.- Esta clase de elfa se recomienda utilizar  mazo y escudo para una mejor resistencia  en peleas.Se recomienda utilizar esta combinación de arbol junto a la distribución de puntos.CON ESTA BUILD NO PUEDES UTILIZAR TUS HABILIDADES DE ARCO. NO CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : ALTA--Daño : Bajo-- BUFOS : 100 %  ",
                imgStats: "/assets/images/elfsupport1.jpg",
                imgTree: "/assets/images/elfsupport2.jpg"
            },
            {
                type: "KILLER AGI + STR ELF",
                info: "BUILD DE ELF DAÑO AGI + STR  con esta combinación tus bufos quedan obsoletos a la hora de beneficiar a tu equipo te conviertes en un player dependiente a una elfa de bufos (Support). Su Daño es Letal, Perfecta para 1 vs 1  Convirtiéndose así en una elfa Killer. ESTA BUILD SE RECOMIENDA UTILIZAR : ARROW  ( ARCO ) así incrementando levemente su ataque Speed CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Alto-- BUFOS : 0 % ",
                imgStats: "/assets/images/killerelf1.jpg",
                imgTree: "/assets/images/killerelf2.jpg"
            },
            {
                type: "STANDART ELF",
                info: "BUILD DE ELF DAÑO  AGI + ENE  ( ESTA BUILD SIRVE PARA PELEAS INDIVIDUALES Y PELEAS MASIVAS ) con esta combinación de puntos tu party tendrá una elfa con dps(daño por segundo) y bufer al mismo tiempo. siendo así esta build clásica para la mayoría de las elfas -Tiene bufos útiles para si misma y para su equipoESTA BUILD SE RECOMIENDA UTILIZAR : CROSSBOW  ( BALLESTA ).CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Alto-- BUFOS : 62 %",
                imgStats: "/assets/images/killerelf1agi.jpg",
                imgTree: "/assets/images/killerelf2agi.jpg"
            },
        ]
    },
    {
        id: 3,
        name: "Magic Gladiator",
        heroUrl: "/assets/images/hero_4.png",
        heroClass: "/assets/images/hero-logo4.png",
        info: "El Gladiador Mágico es un híbrido entre el Caballero Oscuro y el Mago Oscuro. Puede blandir armas como los Caballeros y también lanzar hechizos ofensivos como los Magos. Se puede jugar en 3 posturas: Arma doble, Arma a dos manos o Magia. Las tres posturas potencian diferentes habilidades que hacen a esta clase muy única. Otra característica única de los MG es que no llevan casco.",
        stats: [
            {
                tittle: "Single target",
                color: "stat-green",
                value: 90,
            },
            {
                tittle: "Survivability",
                color: "stat-red",
                value: 40,
            },
            {
                tittle: "AOE Damage",
                color: "stat-green",
                value: 90,
            },
            {
                tittle: "Difficulity",
                color: "stat-yellow",
                value: 55,
            },
        ],
        builds: [
            {
                type: "KILLER MG",
                info: "Build de MG FULL DAÑO  (la mayoría de sus puntos se distribuyen entre STR/AGI) obteniendo Daño + Speed Attq ideal para ser un personaje Killer. Por lo general esta build se caracteriza por tener en su mayoría de puntos en FUERZA  asi consiguiendo un daño alto y el resto de puntos  entre AGILIDAD Y VITALIDAD a gusto del jugador. Se recomienda no dejar de lado los puntos en vitalidad ya que estaras full daño y no tendras mucha resistencia .- ESTA BUILD SE RECOMIENDA USAR 2 ARMAS. CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Alto--Skill principal Fire Slash. ",
                imgStats: "/assets/images/killermg1.jpg",
                imgTree: "/assets/images/killermg2.jpg"
            },
            {
                type: "TANK MG",
                info: "Build de MG  TANQUE  (la mayoria de sus puntos se distribuyen entre VIT/AGI) Obteniendo aguante en peleas masivas y cumpliendo un rol específico.-EN ESTA  BUILD SE RECOMIENDA USAR 1 ARMA + ESCUDONO CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Alta--Daño : Bajo --Skill principal : Defense ",
                imgStats: "/assets/images/tankmg1.jpg",
                imgTree: "/assets/images/tankmg2.jpg"
            },
            {
                type: "ENERGY MG",
                info: "Build de MG de ENERGIA (la mayoria de sus puntos se distribuyen entre ENE/VIT/AGI) obteniendo un gran daño mágico pero vulnerable en 1 vs 1 esta build va acompañada de una combinación especial en el arbol ya que ahora sus armas principales son Staff .Muy buena a la hora de levear en grupo por sus skills masivos.NO CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Medio --Skill principal Gigantic Storm.",
                imgStats: "/assets/images/energymg1.jpg",
                imgTree: "/assets/images/energymg2.jpg"
            },
        ]
    },
    {
        id: 4,
        name: "Dark Lord",
        heroUrl: "/assets/images/hero_5.png",
        heroClass: "/assets/images/hero-logo5.png",
        info: "El Dark Lord es un poderoso guerrero que se especializa en el lanzamiento de hechizos y utiliza el cetro como arma principal. Es el único personaje del juego que utiliza la habilidad Mando, que le permite controlar al caballo oscuro y al cuervo oscuro que le ayudan en la batalla. El Señor Oscuro usa un potenciador que aumenta el daño crítico de sus aliados y puede invocarlos cuando sea necesario.",
        stats: [
            {
                tittle: "Single target",
                color: "stat-green",
                value: 80,
            },
            {
                tittle: "Survivability",
                color: "stat-green",
                value: 80,
            },
            {
                tittle: "AOE Damage",
                color: "stat-yellow",
                value: 50,
            },
            {
                tittle: "Difficulity",
                color: "stat-yellow",
                value: 40,
            },
        ],
        builds: [
            {
                type: "KILLER DL",
                info: "Build de DL Killer con Scepter y escudo sus skill principal es chaotic (la mayoria de sus puntos se distribuyen entre STR / AGI / VIT obteniendo daño y aguante).CHAOTIC ESCALA CON 6000 DE ENE LLEGANDO A 500% AL MAX SU SKILL  , LUEGO COMIENZA A ESCALAR CON FUERZA. COMANDO SE COLOCA LO MINIMO QUE SON 400 P PARA PODER ACTIVAR TODOS LOS SKILLS ESTA BUILD AL NO TENER PUNTOS EN COMANDO MAS QUE EL MINIMO, EL BUF DE CRITICO NO TENDRA UN DAÑO RELEVANTE ARBOL RECOMENDADO. CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Media--Daño : Alto--Skill principal Chaoric Diseier ",
                imgStats: "/assets/images/killerdl1.jpg",
                imgTree: "/assets/images/killerdl2.jpg"
            },
            {
                type: "SUPPORT DL",
                info: "Build de DL Support  esta build es poco usual. Sirve para tener un bufo medianamente fuerte  de critico para la hora de peleas masivas para tu partyPuedes  Lograr  daño mínimo a los enemigos con tu pet de cuervo. Tu skill principal será la cadena  una vez agregado los puntos correspondiente en el árbol este skill tiene un % de congelar al enemigo (stun). Mientras mas puntos tengas agregado en tu árbol (habilidad de caballo)  mayor es tu % de empuje con skill.(la mayoría de sus puntos están distribuidos en CMD/ENE/VIT/AGI) Con esta build logras tener daño constante con tu cuervo mientras congelas al enemigo.ideal para lo jugadores que les guste jugar de apoyo. CUENTA CON DAÑO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Bajo--Skill principal Fire Burst + Skill Cuervo.",
                imgStats: "/assets/images/supportdl1.jpg",
                imgTree: "/assets/images/supportdl2.jpg"
            },
            {
                type: "TANK DL",
                info: "Build de DL Tanque esta distribución de puntos ayuda a que tu personaje resista mas en peleas masivas cumpliendo su rol principal que es Aguantar en momentos claves como por ej : sello  de la corona / Dominio de silla Rey del Mu / Iniciador de peleas (La mayoría de sus puntos esta enfocada en Su AGI/VIT) asi logrando la mayor defensa posible y aguantar el mayor daño posible de los enemigos. Esta build en particular al tener su mayoría de puntos en 2 atributos permite flexibilizar los puntos restantes ya sea todo en STR para un daño mínimo o en COMANDO para aumentar su bufo de critico.- NO CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Alta--Daño : Bajo--Skill principal Fire Burst ( para poder congelar ) ",
                imgStats: "/assets/images/tankdl1.jpg",
                imgTree: "/assets/images/tankdl2.jpg"
            },
        ]
    },
    {
        id: 5,
        name: "Summoner",
        heroUrl: "/assets/images/hero_6.png",
        heroClass: "/assets/images/hero-logo6.png",
        info: "Los invocadores dominan la magia elemental y pueden invocar a varias criaturas mágicas para que les ayuden. Se especializan en varias maldiciones que reducen el daño y la defensa de sus enemigos y potencian a sus aliados con hechizos de reflexión. También pueden dormir a los enemigos. Los invocadores utilizan dos posturas diferentes: Berserker, que aumenta el daño mágico general, y Oscuridad, que aumenta el daño de las maldiciones.",
        stats: [
            {
                tittle: "Single target",
                color: "stat-green",
                value: 70,
            },
            {
                tittle: "Survivability",
                color: "stat-yellow",
                value: 60,
            },
            {
                tittle: "AOE Damage",
                color: "stat-green",
                value: 80,
            },
            {
                tittle: "Difficulity",
                color: "stat-yellow",
                value: 65,
            },
        ],
        builds: [
            {
                type: "KILLER SUM",
                info: "Build de SUM  DAÑO esta combinación de puntos es letal para los enemigos ya que tiene un daño muy elevado.   (la mayoría de sus puntos se distribuyen entre ENE/VIT/AGI)  ideal para ser un personaje Killer. Esta build va acompañada de un Stick como arma principal y otra secundaria con  Axe o Kris . CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Alta--Skill principal Chain Lightning",
                imgStats: "/assets/images/summonerkiller1.jpg",
                imgTree: "/assets/images/summonerkiller2.jpg"
            },
            {
                type: "KILLER SUM BOOK",
                info: "Build de SUM FULL DAÑO CON BOOK (HAY 3 TIPOS DE BOOK) Samut / Neil / Lagle (cada uno tiene un skill único combinado con los puntos del árbol obtienes un plus en el skill) -Modificar árbol según el book utilizado. Esta build va acompañada de un Stick como arma principal y otra secundaria con book.-MARCADO EN ROJO SON LOS DAÑOS DEL BOOK / MARCADO EN VERDE % QUE TIENE CADA SKILL EN ACTIVAR   STICK + BOOKCUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Baja--Daño : Alta--Skill principal Chain Lightning+book",
                imgStats: "/assets/images/killersumbook1.jpg",
                imgTree: "/assets/images/killersumbook2.jpg"
            },
            {
                type: "SUPPORT SUM ",
                info: "Build de SUM TANQUE (SUPPORT)  esta build es poco común pero útil a la hora de hacer focus a 1 objetivo fijo. (La mayoría de los puntos estan distribuidos en VIT / AGI) obteniendo Full def + vida esta build  se combina con un book en especifico (Neil) al combinarlo con los puntos del árbol obtiene un % de stun al objetivo seleccionado. NO CUENTA CON UN DAÑO NECESARIO PARA PELEAS INDIVIDUALES.--Defensa : Alta--Daño : Baja--Skill principal Book",
                imgStats: "/assets/images/supportsum1.jpg",
                imgTree: "/assets/images/supportsum2.jpg"
            },
        ]
    },
    {
        id: 6,
        name: "Rage Fighter",
        heroUrl: "/assets/images/hero_7.png",
        heroClass: "/assets/images/hero-logo7.png",
        info: "Este luchador real es un personaje que no puede usar guantes normales, sino que tiene armas que se llaman guantes o garras. En batalla pueden usar habilidades especiales de rugido que aumentan la salud, el bloqueo y la probabilidad de daño verdadero. Carecen de movilidad pero infligen mucho daño a corta distancia y gracias a su alta vitalidad son capaces de aguantar mucho daño de sus oponentes.",
        stats: [
            {
                tittle: "Single target",
                color: "stat-green",
                value: 90,
            },
            {
                tittle: "Survivability",
                color: "stat-green",
                value: 75,
            },
            {
                tittle: "AOE Damage",
                color: "stat-yellow",
                value: 65,
            },
            {
                tittle: "Difficulity",
                color: "stat-red",
                value: 70,
            },
        ]
    },
];