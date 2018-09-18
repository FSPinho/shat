import { NameUtils } from "../services";
import { getQuestions } from './questions';

export const StepTypes = {
    Message: 'message',
    Question: 'question',
    Video: 'video',
}

const ScriptMessages = {
    start: [
        u => [`Hummm... Sr. ${NameUtils.getLastName(u)}`, 'Deixe-me ver onde colocarei você!'],
        u => [`Haha... mais um ${NameUtils.getLastName(u)}!`, 'Deixe-me ver onde colocarei você!'],
        u => [`Você tem um grande poder, Sr. ${NameUtils.getLastName(u)}!`, 'Deixe-me ver onde colocarei você!'],
    ],
    middle: [
        u => [`Interessante...`, `Você está sendo difícil, Sr. ${NameUtils.getLastName(u)}!`],
        u => [`Acho que já sei pra onde você vai, Sr. ${NameUtils.getLastName(u)}!`, 'Mas antes, me responda mais algumas perguntinhas!'],
        u => [`Não se vê muitos bruxos como você, Sr. ${NameUtils.getLastName(u)}!`, 'Deixe-me pensar mais um pouco!'],
    ],
    end: [
        u => [`Não tenho mais perguntas, Sr. ${NameUtils.getLastName(u)}.`, `Tenho a casa perfeita para você!`],
        u => [`É o suficiente, Sr. ${NameUtils.getLastName(u)}!`, 'Já sei onde colocarei você!'],
        u => [`Você será grande, Sr. ${NameUtils.getLastName(u)}!`, 'Você irá para uma ótima casa!'],
    ],
    restart: [
        u => [`Hummm... Sr. ${NameUtils.getLastName(u)}`, 'Deixe-me ver onde colocarei você!'],
        u => [`Haha... mais um Sr. ${NameUtils.getLastName(u)}!`, 'Deixe-me ver onde colocarei você!'],
        u => [`Você tem um grande poder, Sr. ${NameUtils.getLastName(u)}!`, 'Deixe-me ver onde colocarei você!'],
        u => [`Mas que insolência!`, `Muito bem, Sr. ${NameUtils.getLastName(u)}, deixe-me ver...`],
        u => [`Tem certeza, Sr. ${NameUtils.getLastName(u)}?`, 'Tudo bem, deixe-me ver...'],
        u => [`Humm... tudo bem, Sr. ${NameUtils.getLastName(u)}!`, 'Deixe-me pensar mais um pouco!'],
    ],
    video: [
        u => [`Antes de continuar, Sr. ${NameUtils.getLastName(u)}, assista a um pequeno vídeo =D`],
    ],
}

const getScriptMessages = (u, part) =>
    ScriptMessages[part][parseInt(Math.random() * ScriptMessages[part].length)](u)

const script_01 = (u, again) => {

    const questions = (getQuestions(8).map(q => ({
        type: StepTypes.Question,
        question: q
    })))

    const script = ({
        steps: [
            again ? {
                type: StepTypes.Video,
                messages: getScriptMessages(u, 'video'),
            } : undefined,
            {
                type: StepTypes.Message,
                messages: getScriptMessages(u, again ? 'restart' : 'start')
            },
            ...questions.slice(0, 5),
            {
                type: StepTypes.Message,
                messages: getScriptMessages(u, 'middle')
            },
            ...questions.slice(5),
            {
                type: StepTypes.Message,
                messages: getScriptMessages(u, 'end'),
                last: true
            },
        ].filter(s => !!s)
    })

    return script
}

export const getRandomScript = (u, again) =>
    script_01(u, again)