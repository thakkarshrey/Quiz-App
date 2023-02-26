import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const StartQuiz = () => {
    const [quizState,dispatch] = useContext(QuizContext)

    const handleStartClick = () => {
        dispatch({type:'START'})    
    }
    return (
        <div className="startQuizContainer">
        <button className="btn-start" onClick={handleStartClick}>Start Quiz</button>
        </div>
    )
}

export default StartQuiz