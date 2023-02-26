import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Restart from "./Restart";

const Score = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="scoreContainer">
     <div className="congratulationsContainer">
        <h1 className="congratulations" style={{fontWeight:'lighter'}}>Congratulations!</h1>
     </div>
      <div className="score">
        <h3 className="text" style={{fontSize:'22px', paddingBottom:'5px'}}>You have completed the quiz.</h3>
        <h3 style={{fontSize:'25px'}}>
          You've got <span style={{color:'#6558d3'}}>{quizState.correctAnswerCount}</span> out of <span style={{color:'#6558d3'}}>{quizState.questions.length}</span> right.
        </h3>
      </div>
      <div className="buttonContainerRestart">
        <Restart />
      </div>
    </div>
  );
};

export default Score;
