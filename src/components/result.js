import React from 'react';




function Result(props) {
    const { statusButton,currentQuiz,listQuiz } = props
    if(currentQuiz==='result'){
    return (
        <div>
            <h1 className='a'>Quiz</h1>
            <div className='quiz'>
                <h2>
                    Finished !!!
                    </h2>
                <div>
                    <h6><b>Yours Score: </b><b>Yours Time: </b></h6>
                </div>
                <div className='next'>
                    <button className={statusButton[0]} onClick={()=>props.resetQuiz(currentQuiz)}>TryAgain</button>
                    <button className={statusButton[0]} >CheckAnswer</button>
                    <button className={statusButton[0]} >Homepage</button>
                </div>
                <footer>
                    <span id="progress">Result</span><span id='time'>00:00</span>
                </footer>
            </div>
        </div>
    )
    }else {
        return null
    }



}
export default Result;