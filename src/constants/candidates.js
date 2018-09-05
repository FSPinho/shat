export const types = {
    DeputadoFederal: 'DeputadoFederal',
    DeputadoEstadual: 'DeputadoEstadual',
    Senador: 'Senador',
    Governador: 'Governador',
    Presidente: 'Presidente'
}

export const metadata = {
    [types.DeputadoFederal]: {
        title: 'Deputado Federal',
        shortTitle: 'D. Federal',
        shortDescription: 'Sua atribuição principal é fazer leis de abrangência nacional e fiscalizar os atos do presidente da República',
        description: 'Os deputados federais são os representantes do povo na esfera federal. Sua atribuição principal é fazer leis de abrangência nacional e fiscalizar os atos do presidente da República. Eles também podem apresentar projetos de leis ordinárias e complementares, de decreto legislativo, de resolução e emendas à Constituição, além de criar Comissões Parlamentares de Inquérito (CPIs), discutir e votar medidas provisórias editadas pelo Executivo.',
        perState: true,
        order: 1,
        image: require('../resources/images/deputado-federal.png')
    },
    [types.DeputadoEstadual]: {
        title: 'Deputado Estadual',
        shortTitle: 'D. Estadual',
        shortDescription: 'Sua função principal é a de legislador, ou seja, legislar, propor, emendar, alterar e revogar leis estaduais',
        description: 'Os deputados estaduais ou distritais têm a incumbência de representar o povo na esfera estadual (Assembleia Legislativa) ou distrital (Câmara Legislativa do Distrito Federal). Sua função principal é a de legislador, ou seja, legislar, propor, emendar, alterar e revogar leis estaduais. Eles também fiscalizam as contas do Poder Executivo e desempenham outras atribuições referentes ao cargo. Vale lembrar que cada constituição estadual ou distrital também pode delegar outras atividades, exclusivas ou não, aos deputados estaduais ou distritais.',
        perState: true,
        order: 2,
        image: require('../resources/images/deputado-estadual.png')
    },
    [types.Senador]: {
        title: 'Senador',
        shortTitle: 'Senador',
        shortDescription: 'Têm a prerrogativa constitucional de fazer leis e de fiscalizar os atos do Poder Executivo',
        description: 'Os senadores representam os estados e o Distrito Federal, e têm a prerrogativa constitucional de fazer leis e de fiscalizar os atos do Poder Executivo. Além disso, a Constituição Federal traz como competência privativa dos senadores: processar e julgar, nos crimes de responsabilidade, o presidente e o vice-presidente, os ministros e os comandantes da Marinha, do Exército e da Aeronáutica, os ministros do Supremo Tribunal Federal, os membros do Conselho Nacional de Justiça e do Conselho Nacional do Ministério Público, o procurador-geral da República e o advogado-geral da União.',
        perState: true,
        order: 3,
        image: require('../resources/images/senador.png')
    },
    [types.Governador]: {
        title: 'Governador',
        shortTitle: 'Governador',
        shortDescription: 'Cabe a ele representar, no âmbito interno, a respectiva Unidade da Federação em suas relações jurídicas, políticas e administrativas',
        description: 'É o governador que exerce o Poder Executivo na esfera dos estados e do Distrito Federal. Cabe a ele representar, no âmbito interno, a respectiva Unidade da Federação em suas relações jurídicas, políticas e administrativas. \nNo exercício da sua função de administrador estadual, ele é auxiliado pelos secretários de estado. O governador participa do processo legislativo e responde pela segurança pública. Para isso, o governador conta com as Polícias Civil e Militar e com o Corpo de Bombeiros. \nEm razão da autonomia dos estados e do Distrito Federal, cada constituição estadual e a lei orgânica do DF dispõem sobre competências, atribuições e responsabilidades do cargo de governador.',
        perState: true,
        order: 4,
        image: require('../resources/images/governador.png')
    },
    [types.Presidente]: {
        title: 'Presidente',
        shortTitle: 'Presidente',
        shortDescription: 'Exerce atribuições administrativas, legislativas e militares de acordo com a Constituição Federal',
        description: 'O presidente da República é quem governa e administra os interesses públicos da nação. Ele tem o dever de sustentar a integridade e a independência do Brasil, bem como apresentar um plano de governo com programas prioritários, projetos de lei de diretrizes orçamentárias e propostas de orçamento. Exerce atribuições administrativas, legislativas e militares de acordo com a Constituição Federal. \nFaz parte de suas atribuições administrativas nomear os chefes dos ministérios, os ministros do Supremo Tribunal Federal (STF), dos tribunais superiores e o advogado-geral da União, bem como conceder indulto e comutar penas. \nJá as atribuições legislativas permitem que ele possa iniciar um processo legislativo, sancionar, promulgar e publicar leis, além de expedir decretos. \nQuanto ao poder militar, o presidente é o comandante supremo das Forças Armadas, cabendo a ele, exclusivamente, declarar a guerra e celebrar a paz, com autorização do Congresso Nacional. \nNo que se refere à política externa, é o presidente da República que decide sobre as relações com outros países, sobre o credenciamento de representantes diplomáticos e sobre a celebração de tratados, convenções e atos internacionais, sujeitos a referendo do Congresso Nacional.',
        perState: false,
        order: 5,
        image: require('../resources/images/president.png')
    }
}