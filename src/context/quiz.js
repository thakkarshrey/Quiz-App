import { createContext, useReducer } from "react";
import questions from '../data'
import { shuffledOptions } from "../utils/appCommonUtils";
export const QuizContext = createContext()

const initialState = {
    questions,
    currentQuestionIndex:0,
    showResults:false,
    correctAnswerCount:0, 
    options:shuffledOptions(questions[0]),
    currentAnswer:'',
    startQuiz:false,
    currentAnswerArr:[]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SELECT_OPTION':{
            return {
                ...state,
                currentAnswer:action.payload,
            }
        }
        case 'NEXT_QUESTION':{
            const showResults = state.currentQuestionIndex === state.questions.length - 1
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            const options = shuffledOptions(questions[currentQuestionIndex])
            
            let correctAnswerCount = 0
            if(state.currentAnswer === state.questions[state.currentQuestionIndex].correctAnswer){
                correctAnswerCount = state.correctAnswerCount + 1 
            }else{
                correctAnswerCount = state.correctAnswerCount
            }

            state.currentAnswerArr[state.currentQuestionIndex] = state.currentAnswer
            
            const currentAnswer = (state.currentAnswerArr[currentQuestionIndex] !== "" && state.currentAnswerArr[currentQuestionIndex] !== undefined && state.currentAnswerArr[currentQuestionIndex] !== null) ? state.currentAnswerArr[currentQuestionIndex] : "" 
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                options,
                currentAnswer,
                correctAnswerCount
            }
        }

        case 'PREVIOUS_QUESTION':{
            const showResults = state.currentQuestionIndex === state.questions.length
            console.log(state.currentQuestionIndex,'state.currentQuestionIndex')
            console.log(state.questions.length - 1,'state.questions.length - 1')
            const currentQuestionIndex = showResults ? state.currentQuestionIndex : state.currentQuestionIndex - 1
            const options = shuffledOptions(questions[currentQuestionIndex])
            
            const currentAnswer = state.currentAnswerArr[currentQuestionIndex]

            const correctAnswerCount = (currentAnswer && currentAnswer!=="" && currentAnswer!==undefined && currentAnswer!==null) && currentAnswer !== state.currentAnswerArr[currentQuestionIndex] ? state.correctAnswerCount - 1 : state.correctAnswerCount


            return {
                ...state,
                currentQuestionIndex,
                showResults,
                options,
                currentAnswer,
                correctAnswerCount,
                currentAnswerArr:[...state.currentAnswerArr]
            }
        }
        case 'RESTART':{
            return {...initialState,currentAnswerArr:[]}
        }
        case 'START':{
            return {
                ...state,
                startQuiz:true
            }
        }
        default:
            return state
    }
}

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer,initialState)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}