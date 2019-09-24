import React from 'react';

function Result(props) {
    const { statusButton, currentQuiz, newCorrect, showAnswer, isAnswer,newMinute,newSeconds,timeOut,newInterval } = props
    if (currentQuiz === 'result') {
        const printCorrect = newCorrect.reduce((a, b) => a + b, 0)
        const printShowanswer = showAnswer.map((show, index) =>
            <span key={index}>
                Question {index + 1}: {show} .
            </span>

        )
        return (
            <div>
                <h1 className='a'>Quiz</h1>
                <h2>
                        Finish!!!
                    </h2>
                <div className='quiz'>
                    
                    <div>
                        <h6>
                            <b>Yours Score: {printCorrect}/5 Quiz</b></h6>
                          <h6>  <b>Yours Time: {newMinute<10?'0'+newMinute:newMinute}p{newSeconds<10?'0'+newSeconds:newSeconds}s</b>
                        </h6>
                    </div>
                    <div className='next'>
                        <button className={statusButton[0]} onClick={() => props.resetQuiz(newMinute,newSeconds,timeOut,newInterval)}>TryAgain</button>
                        <button className={statusButton[0]} onClick={() => props.printAnswer()}>CheckAnswer</button>
                        <button className={statusButton[0]} onClick={() => props.backHome()}>Homepage</button>
                    </div>
                    {isAnswer &&
                        <div className='showanswer'>
                            {printShowanswer}
                        </div>
                    }
                    <footer>
                        <span id="progress">Result</span><span id='time'>00:00</span>
                    </footer>
                </div>
            </div>
        )
    } else {
        return null
    }
}
export default Result;