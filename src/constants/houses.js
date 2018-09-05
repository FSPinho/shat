
export const houses = {
    grifinoria: 'grifinoria',
    corvinal: 'corvinal',
    lufalufa: 'lufalufa',
    sonserina: 'sonserina'
}

export const tags = {
    courage: 'courage',
    companionship: 'companionship',
    actor: 'actor',
    singer: 'singer',
    athlete: 'athlete',
    fire: 'fire',

    insight: 'insight', // Perspicácia 
    intelligence: 'intelligence',
    creativity: 'creativity',
    wisdom: 'wisdom',
    air: 'air',

    work: 'work',
    patience: 'patience',
    loyalty: 'loyalty',
    honesty: 'honesty',
    ground: 'ground',

    astute: 'astute',
    resourceful: 'resourceful',
    ambitious: 'ambitious',
    water: 'water'
}

export const houseMetadata = {

    [houses.grifinoria]: {
        title: 'Grifinória',
        description:
            `Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts. 
            Seus membros tem como principais características a coragem e o companheirismo. 
            Fundada por Gódrico Grifinória, seu animal símbolo é o leão, e suas cores são 
            o vermelho e o dourado.`,
        tags: [
            tags.courage,
            tags.companionship,
            tags.actor,
            tags.singer,
            tags.athlete,
            tags.fire
        ],
    },

    [houses.corvinal]: {
        title: 'Corvinal',
        description:
            `Corvinal é uma das quatro Casas da Escola de Magia e Bruxaria Hogwarts, fundada 
            por Rowena Ravenclaw. Suas cores oficiais são o azul e o bronze, e seu símbolo é 
            a águia.`,
        tags: [
            tags.insight,
            tags.intelligence,
            tags.creativity,
            tags.wisdom,
            tags.air
        ]
    },

    [houses.lufalufa]: {
        title: 'Lufa-Lufa',
        description:
            `Lufa-Lufa é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts. 
            Sua fundadora é a bruxa Helga Lufa-Lufa. Seu animal símbolo é o texugo, e 
            suas cores são o amarelo e o preto.`,
        tags: [
            tags.work,
            tags.patience,
            tags.loyalty,
            tags.honesty,
            tags.ground,
        ]
    },

    [houses.sonserina]: {
        title: 'Sonserina',
        description:
            `Sonserina é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, 
            foi fundada por Salazar Sonserina. O seu animal símbolo é a cobra e 
            suas cores são o verde e o prata.`,
        tags: [
            tags.astute,
            tags.ambitious,
            tags.resourceful,
            tags.water
        ]
    }
}

export const tagsMetadata = {
    [tags.courage]: { title: 'Coragem' },
    [tags.companionship]: { title: 'Companheirismo' },
    [tags.actor]: { title: 'Desinibido' },
    [tags.singer]: { title: 'Desinibido' },
    [tags.athlete]: { title: 'Desinibido' },
    [tags.fire]: { title: 'Intenso' },

    [tags.insight]: { title: 'Perspicácia' },
    [tags.intelligence]: { title: 'Inteligência' },
    [tags.creativity]: { title: 'Criatividade' },
    [tags.wisdom]: { title: 'Sabedoria' },
    [tags.air]: { title: 'Levesa' },

    [tags.work]: { title: 'Esforço' },
    [tags.patience]: { title: 'Paciência' },
    [tags.loyalty]: { title: 'Lealdade' },
    [tags.honesty]: { title: 'Honestidade' },
    [tags.ground]: { title: 'Simplicidade' },

    [tags.astute]: { title: 'Astúcia' },
    [tags.resourceful]: { title: 'Engenhosidade' },
    [tags.ambitious]: { title: 'Ambição' },
    [tags.water]: { title: 'Flexibilidade' }
}