import React from 'react';




function Result(props) {
    const { statusButton, currentQuiz, newCorrect } = props
    if (currentQuiz === 'result') {
        const printCorrect = newCorrect.reduce((a, b) => a + b, 0)
        return (
            <div>
                <h1 className='a'>Quiz</h1>
                <div className='quiz'>
                    <h2>
                        Finished !!!
                    </h2>
                    <div>
                        <h6>
                            <b>Yours Score: {printCorrect}</b><br />
                            <b>Yours Time: </b>
                        </h6>
                    </div>
                    <div className='next'>
                        <button className={statusButton[0]} onClick={() => props.resetQuiz()}>TryAgain</button>
                        <button className={statusButton[0]} >CheckAnswer</button>
                        <button className={statusButton[0]} onClick={()=>props.backHome()}>Homepage</button>
                    </div>
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