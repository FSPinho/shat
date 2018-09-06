import { NameUtils } from "../services";

export const StepTypes = {
    Message: 'message',
    Question: 'question'
}

const ScriptMessages = {
    start: [
        u => [`Hummm... ${NameUtils.getFirstName(u)}`, 'Deixe-me ver onde colocarei você!'],
        u => [`Haha... mais um ${NameUtils.getLastName(u)}!`, 'Deixe-me ver onde colocarei você!'],
        u => [`Você tem um grande poder, ${NameUtils.getFirstName(u)}!`, 'Deixe-me ver onde colocarei você!'],
    ],
    middle: [
        u => [`Interessante...`, `Você está sendo difícil ${NameUtils.getFirstName(u)}!`],
        u => [`Acho que já sei pra onde você vai, ${NameUtils.getFirstName(u)}!`, 'Mas antes, me responda mais algumas perguntinhas!'],
        u => [`Não se vê muitos bruxos como você, ${NameUtils.getFirstName(u)}!`, 'Deixe-me pensar mais um pouco!'],
    ],
    end: [
        u => [`Não tenho mais perguntas, ${NameUtils.getFirstName(u)}.`, `Tenho a casa perfeita para você!`],
        u => [`É o suficiente, ${NameUtils.getFirstName(u)}!`, 'Já sei onde colocarei você!'],
        u => [`Você será grande, ${NameUtils.getFirstName(u)}!`, 'Você irá para uma ótima casa!'],
    ],
    restart: [
        u => [`Mas que insolência!`, `Muito bem, ${NameUtils.getFirstName(u)}, deixe-me ver...`],
        u => [`Tem certeza, ${NameUtils.getFirstName(u)}?`, 'Tudo bem, deixe-me ver...'],
        u => [`Humm... Tudo bem!, ${NameUtils.getFirstName(u)}!`, 'Deixe-me pensar mais um pouco!'],
    ]
}

const getScriptMessages = (u, part) =>
    ScriptMessages[part][parseInt(Math.random() * ScriptMessages[part].length)](u)

const script_01 = u => ({
    steps: [
        {
            type: StepTypes.Message,
            messages: getScriptMessages(u, 'start')
        },
        // ...(getQuestions(1).map(q => ({
        //     type: StepTypes.Question,
        //     question: q
        // }))),
        // {
        //     type: StepTypes.Message,
        //     messages: getScriptMessages(u, 'middle')
        // },
        // ...(getQuestions(1).map(q => ({
        //     type: StepTypes.Question,
        //     question: q
        // }))),
        {
            type: StepTypes.Message,
            messages: getScriptMessages(u, 'end'),
            last: true
        },
    ]
})

export const getRandomScript = u =>
    script_01(u)