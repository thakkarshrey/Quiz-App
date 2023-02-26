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
    startQuiz:false
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
            
            const correctAnswerCount = state.currentAnswer === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswerCount + 1 : state.correctAnswerCount
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                options,
                currentAnswer:"",
                correctAnswerCount
            }
        }
        case 'RESTART':{
            return initialState
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