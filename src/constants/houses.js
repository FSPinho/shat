
export const Houses = {
    Grifinoria: 'grifinoria',
    Corvinal: 'corvinal',
    Lufalufa: 'lufalufa',
    Sonserina: 'sonserina'
}

export const Tags = {
    Courage: 'courage',
    Companionship: 'companionship',
    Actor: 'actor',
    Singer: 'singer',
    Athlete: 'athlete',
    Fire: 'fire',

    Insight: 'insight', // Perspicácia 
    Intelligence: 'intelligence',
    Creativity: 'creativity',
    Wisdom: 'wisdom',
    Air: 'air',

    Work: 'work',
    Patience: 'patience',
    Loyalty: 'loyalty',
    Honesty: 'honesty',
    Ground: 'ground',

    Astute: 'astute',
    Resourceful: 'resourceful',
    Ambitious: 'ambitious',
    Water: 'water'
}

export const HouseMetadata = {

    [Houses.Grifinoria]: {
        title: 'Grifinória',
        description:
            `Grifinória é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts. 
            Seus membros tem como principais características a coragem e o companheirismo. 
            Fundada por Gódrico Grifinória, seu animal símbolo é o leão, e suas cores são 
            o vermelho e o dourado.`,
        tags: [
            Tags.Courage,
            Tags.Companionship,
            Tags.Actor,
            Tags.Singer,
            Tags.Athlete,
            Tags.Fire
        ],
    },

    [Houses.Corvinal]: {
        title: 'Corvinal',
        description:
            `Corvinal é uma das quatro Casas da Escola de Magia e Bruxaria Hogwarts, fundada 
            por Rowena Ravenclaw. Suas cores oficiais são o azul e o bronze, e seu símbolo é 
            a águia.`,
        tags: [
            Tags.Insight,
            Tags.Intelligence,
            Tags.Creativity,
            Tags.Wisdom,
            Tags.Air
        ]
    },

    [Houses.Lufalufa]: {
        title: 'Lufa-Lufa',
        description:
            `Lufa-Lufa é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts. 
            Sua fundadora é a bruxa Helga Lufa-Lufa. Seu animal símbolo é o texugo, e 
            suas cores são o amarelo e o preto.`,
        tags: [
            Tags.Work,
            Tags.Patience,
            Tags.Loyalty,
            Tags.Honesty,
            Tags.Ground,
        ]
    },

    [Houses.Sonserina]: {
        title: 'Sonserina',
        description:
            `Sonserina é uma das quatro Casas da Escola de Magia e Bruxaria de Hogwarts, 
            foi fundada por Salazar Sonserina. O seu animal símbolo é a cobra e 
            suas cores são o verde e o prata.`,
        tags: [
            Tags.Astute,
            Tags.Ambitious,
            Tags.Resourceful,
            Tags.Water
        ]
    }
}

export const TagsMetadata = {
    [Tags.Courage]: { title: 'Coragem' },
    [Tags.Companionship]: { title: 'Companheirismo' },
    [Tags.Actor]: { title: 'Desinibido' },
    [Tags.Singer]: { title: 'Desinibido' },
    [Tags.Athlete]: { title: 'Desinibido' },
    [Tags.Fire]: { title: 'Intenso' },

    [Tags.Insight]: { title: 'Perspicácia' },
    [Tags.Intelligence]: { title: 'Inteligência' },
    [Tags.Creativity]: { title: 'Criatividade' },
    [Tags.Wisdom]: { title: 'Sabedoria' },
    [Tags.Air]: { title: 'Levesa' },

    [Tags.Work]: { title: 'Esforço' },
    [Tags.Patience]: { title: 'Paciência' },
    [Tags.Loyalty]: { title: 'Lealdade' },
    [Tags.Honesty]: { title: 'Honestidade' },
    [Tags.Ground]: { title: 'Simplicidade' },

    [Tags.Astute]: { title: 'Astúcia' },
    [Tags.Resourceful]: { title: 'Engenhosidade' },
    [Tags.Ambitious]: { title: 'Ambição' },
    [Tags.Water]: { title: 'Flexibilidade' }
}