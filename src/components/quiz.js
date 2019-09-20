import React from 'react';
import { Button } from 'reactstrap';

function Quiz(props) {
    const { listQuiz, currentQuiz } = props

    if (currentQuiz !== '') {

        const pritQuiz = listQuiz[currentQuiz] || {};
        const printQuiz = pritQuiz.question;
        const listAnswer = pritQuiz.answer || [];
        const printAnswer = listAnswer.map((answer, index) =>

            <button className='choice' key={index}>{answer}</button>

        )
        return (
            <div>
                <h1 className='a'>Quiz</h1>
                <div className='quiz'>
                    <h3>
                        {printQuiz}
                    </h3>
                    {printAnswer}
                    <div>
                    <span className='btn'>Back</span><span className='btn'>Next</span>
                    </div>
                    <footer>
                 <span id="progress">Question {currentQuiz+1} of 5</span><span id='time'>00:00</span><span id="score">Score: </span>
                    </footer>
                </div>
            </div>
        )
    } else {
        return null;
    }
}










export default Quiz;