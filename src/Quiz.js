import { useContext } from "react";
import { QuizContext } from "./context/quiz";
import Question from "./components/Question";
import Next from "./components/Next";
import Score from "./components/Score";
import "./Quiz.css";
import StartQuiz from "./components/StartQuiz";
import Previous from "./components/Previous";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log('quizState',quizState)
  return (
    <>
    {
        (!quizState.startQuiz && !quizState.showResults)  && (
            <main className="main">
                <StartQuiz/>
            </main>
        ) 
    }
      {(quizState.showResults && quizState.startQuiz) &&
        <main className="main">
       <Score />
        </main>
      }
      {(!quizState.showResults && quizState.startQuiz) && (
        <main className="main">
          <div className="quizApp">
            <div className="questionHeader">
              Question {quizState.currentQuestionIndex + 1} /{" "}
              {quizState.questions.length}
            </div>
            <Question />
            <div className="buttonContainer">
              <Previous />
              <Next />
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export default Quiz;
