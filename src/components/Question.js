import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import Option from "./Option"

const Question = () => {
    const [quizState,dispatch] = useContext(QuizContext)
    const currentQueston = quizState.questions[quizState.currentQuestionIndex]
    return (
        <>
        <div className="question">
            {currentQueston.question}
        </div>
        <div className="optionsContainer">
        {
            quizState?.options?.map(((optionText,index)=>{
                return <Option key={index} optionText={optionText} index={index} onSelectOption={(option)=>dispatch({type:'SELECT_OPTION',payload:option})} currentAnswer={quizState.currentAnswer}/>
            }))
        }
        </div>
        </>
    )
}

export default Question