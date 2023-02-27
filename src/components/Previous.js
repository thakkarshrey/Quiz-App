import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const Previous = () => {
    const [quizState,dispatch] = useContext(QuizContext)

    const handlePreviousClick = () => {
        dispatch({type:'PREVIOUS_QUESTION'})
    }
    
    return (
        <>
        <button className="btn-next" disabled={quizState.currentQuestionIndex === 0} onClick={handlePreviousClick}>Previous</button>
        </>
    )
}

export default Previous