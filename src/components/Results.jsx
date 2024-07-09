import { ActionTypes } from "../constants/action_types";
import { useQuiz } from "../hooks/useContext";

function Results() {
  const { points, maxPossiblePoints, highscore, dispatch } = useQuiz();

  console.log("Total points: " + maxPossiblePoints);
  const percent = ((100 * points) / maxPossiblePoints).toFixed(1);

  let emoji;

  if (percent === 100) emoji = "🥇";
  if (percent >= 80 && percent < 100) emoji = "🥈";
  if (percent >= 60 && percent < 80) emoji = "🥉";
  if (percent >= 40 && percent < 60) emoji = "🤨";
  if (percent >= 0 && percent < 40) emoji = "🤦‍♂️";

  return (
    <>
      <p className="result">
        <span>
          {emoji} You scored <strong>{points}</strong> out of{" "}
          {maxPossiblePoints} points ({percent}%)
        </span>
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn"
        onClick={() => dispatch({ type: ActionTypes.START_QUIZ })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default Results;
