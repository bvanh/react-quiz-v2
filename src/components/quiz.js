import React from 'react';
import { Button } from 'reactstrap';

function Quiz(props) {
    const { listQuiz, currentQuiz, isAnswer, statusButton} = props

    if (currentQuiz !== ''&& currentQuiz>= 0) {
        const pritQuiz = listQuiz[currentQuiz] || {};
        const correct = pritQuiz.correct;
        const statusAnswer=pritQuiz.status;
        const printQuiz = pritQuiz.question;
        const listAnswer = pritQuiz.answer || [];
        const printAnswer = listAnswer.map((answer, index) =>

            <button className={statusAnswer[index]} key={index} onClick={() => props.checkAnswer(currentQuiz,index)}>{answer}</button>

        )
        return (
            <div>
                <h1 className='a'>Quiz</h1>
                <div className='quiz'>
                    <h3>
                        {printQuiz}
                    </h3>
                    {printAnswer}
                    <div className='next'>
                        <button className={statusButton[0]} onClick={() => props.backQuestion(currentQuiz)} disabled={statusButton[1]}>Back</button>
                        <button className={statusButton[0]} onClick={() => props.submitQuestion(currentQuiz)} disabled={statusButton[2]}>Submit</button>
                        <button className={statusButton[0]} onClick={() => props.nextQuestion(currentQuiz)} disabled={statusButton[3]}>Next</button>
                    </div>
                    <footer>
                        <span id="progress">Question {currentQuiz + 1} of 5</span><span id='time'>00:00</span>
                    </footer>
                </div>
            </div>
        )
    } else {
        return null;
    }
}










export default Quiz;