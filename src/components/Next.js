import { useContext } from "react"
import { QuizContext } from "../context/quiz"

const Next = () => {
    const [quizState,dispatch] = useContext(QuizContext)

    const handleNextClick = () => {
        dispatch({type:'NEXT_QUESTION'})
    }
    
    return (
        <>
        <button className="btn-next" onClick={handleNextClick}>Next</button>
        </>
    )
}

export default Next