import { tags } from "./houses";

export const questions = [
    {
        text: 'O que você faria se tivesse a chance de passar um final de semana em um hotel 5 estrelas com tudo pago, e ao mesmo tempo soubesse que seu melhor amigo (ou amiga) está sofrendo por amor?',
        options: [
            { text: 'Iria para o hotel', tags: [tags.ambitious, tags.water] },
            { text: 'Iria para o hotel mas mandaria mensagens de consolo', tags: [tags.ambitious, tags.companionship, tags.creativity, tags.air] },
            { text: 'Ficaria com meu amigo (ou amiga) dando-lhe apoio', tags: [tags.courage, tags.companionship, tags.loyalty] },
        ],
    },
    {
        text: 'Quantos amigos você levaria para uma ilha deserta?',
        options: [
            { text: 'Nenhum', tags: [tags.ambitious, tags.water] },
            { text: 'Apenas os mais próximos', tags: [tags.companionship, tags.honesty, tags.loyalty, tags.ground] },
            { text: 'Todos, quanto mais, melhor!', tags[tags.companionship, tags.fire] },
        ]
    },
    {
        text: 'Qual desses finais de semana você gostaria mais?',
        options: [
            { text: 'Jogando videogame com meu melhor amigo', tags: [tags.companionship, tags.loyalty, tags.fire] },
            { text: 'Como minha namorada (ou namorado) vendo algum filme', tags: [tags.companionship, tags.loyalty, tags.fire] },
            { text: 'Na balada', tags: [tags.fire] },
        ]
    },
    {
        text: 'O que você faria ao descobrir que o namorado da sua melhor amiga tem uma amante?',
        options: [
            { text: 'Conteria imediatamente', tags: [tags.courage, tags.companionship, tags.loyalty, tags.honesty, tags.fire] },
            { text: 'Pensaria numa maneira de ela descobrir sozinha', tags: [tags.intelligence, tags.astute, tags.creativity, tags.honesty, tags.resourceful, tags.air] },
            { text: 'Isso não é da minha conta', tags: [tags.water] },
        ]
    },
    {
        text: 'Qual seu bicho de estimação preferido?',
        options: [
            { text: 'Cachorros', tags: [tags.companionship, tags.courage, tags.fire] },
            { text: 'Gatos', tags: [tags.patience, tags.loyalty, tags.air] },
            { text: 'Corujas', tags: [tags.loyalty, tags.companionship, tags.air, tags.intelligence] },
        ]
    },
    {
        text: 'O que você faria se visse um amigo no meio de uma briga?',
        options: [
            { text: 'Tentaria resolver a situação pacificamente', tags: [tags.insight, tags.intelligence, tags.creativity, tags.air] },
            { text: 'Defenderia-o com unhas e dentes, mas correria na hora da porrada', tags: [tags.ambitious, tags.water] },
            { text: 'Apanharia junto com ele', tags: [tags.companionship, tags.courage, tags.loyalty, tags.fire] },
        ]
    },
    {
        text: 'O que você escolheria como trabalho final de faculdade?',
        options: [
            { text: 'O menos complicado, porém trabalhoso' },
            { text: 'O mais complicado, porém rápido' },
            { text: 'O mais imprevisível, porém recompensador' },
        ]
    },
    {
        text: 'O que você faz quando te oferecem uma algo incrível, mas arriscado?',
        options: [
            { text: 'Aceito, pois prefiro me arrepender do que fiz' },
            { text: 'Recuso, pois não gosto de arriscar' },
            { text: 'Procuro uma alternativa para diminuir o risco' },
        ]
    },
]