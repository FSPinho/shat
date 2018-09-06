import { Tags } from "./houses";

export const Questions = [
    {
        text: 'O que você faria se tivesse a chance de passar um final de semana em um hotel 5 estrelas com tudo pago, e ao mesmo tempo soubesse que seu melhor amigo (ou amiga) está sofrendo por amor?',
        options: [
            { text: 'Iria para o hotel', tags: [Tags.Ambitious, Tags.Water] },
            { text: 'Iria para o hotel mas mandaria mensagens de consolo', tags: [Tags.Ambitious, Tags.Companionship, Tags.Creativity, Tags.Air] },
            { text: 'Ficaria com meu amigo (ou amiga) dando-lhe apoio', tags: [Tags.Courage, Tags.Companionship, Tags.Loyalty] },
        ],
    },
    {
        text: 'Quantos amigos você levaria para uma ilha deserta?',
        options: [
            { text: 'Nenhum', tags: [Tags.Ambitious, Tags.Water] },
            { text: 'Apenas os mais próximos', tags: [Tags.Companionship, Tags.Honesty, Tags.Loyalty, Tags.Ground] },
            { text: 'Todos, quanto mais, melhor!', tags: [Tags.Companionship, Tags.Fire] },
        ]
    },
    {
        text: 'Qual desses finais de semana você gostaria mais?',
        options: [
            { text: 'Jogando videogame com meu melhor amigo', tags: [Tags.Companionship, Tags.Loyalty, Tags.Fire] },
            { text: 'Como minha namorada (ou namorado) vendo algum filme', tags: [Tags.Companionship, Tags.Loyalty, Tags.Fire] },
            { text: 'Na balada', tags: [Tags.Fire] },
        ]
    },
    {
        text: 'O que você faria ao descobrir que o namorado da sua melhor amiga tem uma amante?',
        options: [
            { text: 'Conteria imediatamente', tags: [Tags.Courage, Tags.Companionship, Tags.Loyalty, Tags.Honesty, Tags.Fire] },
            { text: 'Pensaria numa maneira de ela descobrir sozinha', tags: [Tags.Intelligence, Tags.Astute, Tags.Creativity, Tags.Honesty, Tags.Resourceful, Tags.Air] },
            { text: 'Isso não é da minha conta', tags: [Tags.Water] },
        ]
    },
    {
        text: 'Qual seu bicho de estimação preferido?',
        options: [
            { text: 'Cachorros', tags: [Tags.Companionship, Tags.Courage, Tags.Fire] },
            { text: 'Gatos', tags: [Tags.Patience, Tags.Loyalty, Tags.Air] },
            { text: 'Corujas', tags: [Tags.Loyalty, Tags.Companionship, Tags.Air, Tags.Intelligence] },
        ]
    },
    {
        text: 'O que você faria se visse um amigo no meio de uma briga?',
        options: [
            { text: 'Tentaria resolver a situação pacificamente', tags: [Tags.Insight, Tags.Intelligence, Tags.Creativity, Tags.Air] },
            { text: 'Defenderia-o com unhas e dentes, mas correria na hora da porrada', tags: [Tags.Ambitious, Tags.Water] },
            { text: 'Apanharia junto com ele', tags: [Tags.Companionship, Tags.Courage, Tags.Loyalty, Tags.Fire] },
        ]
    },
    {
        text: 'O que você escolheria como trabalho final de faculdade?',
        options: [
            { text: 'O menos complicado, porém trabalhoso', tags: [Tags.Work, Tags.Honesty, Tags.Patience, Tags.Ground] },
            { text: 'O mais complicado, porém rápido', tags: [Tags.Intelligence, Tags.Astute, Tags.Creativity, Tags.Courage, Tags.Resourceful, Tags.Air] },
            { text: 'O mais imprevisível, porém recompensador', tags: [Tags.Ambitious, Tags.Courage, Tags.Intelligence, Tags.Creativity, Tags.Resourceful, Tags.Water] },
        ]
    },
    {
        text: 'O que você faz quando te oferecem uma algo incrível, mas arriscado?',
        options: [
            { text: 'Aceito, pois prefiro me arrepender do que fiz', tags: [Tags.Courage, Tags.Insight, Tags.Fire] },
            { text: 'Recuso, pois não gosto de arriscar', tags: [Tags.Honesty, Tags.Patience, Tags.Ground] },
            { text: 'Procuro uma alternativa para diminuir o risco', tags: [Tags.Insight, Tags.Intelligence, Tags.Astute, Tags.Patience, Tags.Air] },
        ]
    },
]

export const getQuestions = (size) => {
    const qs = []
    const alreadyTaked = q =>
        !!qs.filter(q_ => q.text === q_.text)[0]
    
    for(let i = 0; i < size; i++) {
        let q = undefined
        while(!q || alreadyTaked(q)) {
            q = Questions[parseInt(Math.random() * Questions.length)]
        }
        qs.push(q)
    }

    return qs
}