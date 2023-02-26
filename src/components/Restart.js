import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const Restart = () => {
    const [quizState,dispatch] = useContext(QuizContext)

    const handleRestartClick = () => {
        dispatch({type:'RESTART'})    
    }
    return (
        <>
        <button className="btn-restart" onClick={handleRestartClick}>Restart</button>
        </>
    )
}

export default Restart