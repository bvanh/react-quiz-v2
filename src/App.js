import React from 'react';
import Home from './components/home';
import Quiz from './components/quiz';
import './App.css';
import Result from './components/result';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listquiz: [
        {
          question: 'Who is stronger than Thanos ?',
          answer: ['Surtur', 'Thor', 'Black Panther', 'Iron man'],
          status: ['choice', 'choice', 'choice', 'choice'],
          correct: 'Surtur'
        },
        {
          question: `What's the value of 1 + 1 ?`,
          answer: [2, 3, 4, 5],
          status: ['choice', 'choice', 'choice', 'choice'],
          correct: 2
        },
        {
          question: 'How many countries in the world ?',
          answer: [193, 194, 195, 196],
          status: ['choice', 'choice', 'choice', 'choice'],
          correct: 195
        },
        {
          question: 'Who is god in DC universe?',
          answer: ['The Presence', 'Batman', 'The One Above All', 'Green Lantern'],
          status: ['choice', 'choice', 'choice', 'choice'],
          correct: 'Batman'
        },
        {
          question: '1 + 2 + 3 + ..... + 99 = ?',
          answer: [4850, 4580, 4950, 4590],
          status: ['choice', 'choice', 'choice', 'choice'],
          correct: 4950
        }

      ],
      currentquiz: '',
      totalcorrect: [0, 0, 0, 0, 0],
      isanswered: false,
      statusbtn: ['btn1', false, true, false],
      showanswer: ['Surtur', 2, 195, 'Batman', 4950],
      minute: 0,
      seconds: 0,
      timeout: null,
      interval: null,
    }
  }
  // nút start
  startQuiz(currentQuiz, timeOut, newInterval, newMinute, newSeconds) {
    currentQuiz = 0;
    let newStatusbtn = this.state.statusbtn.slice();
    if (currentQuiz === 0) {
      newStatusbtn[1] = true;
    }
    newInterval = setInterval(() => {
      if (newSeconds === 59) {
        newMinute++;
        newSeconds = 0;
      } else if (newSeconds >= 0) {
          newSeconds++;
        }
      this.setState({
        minute: newMinute,
        seconds: newSeconds
      })
    }, 1000)
    timeOut = setTimeout(() => {
      this.setState({
        currentquiz: 'result',
      })
      clearInterval(newInterval)
    }, 30000)
    this.setState({
      currentquiz: currentQuiz,
      statusbtn: newStatusbtn,
      timeout: timeOut,
      interval: newInterval,
      minute: 0,
      seconds: 0
    })

  }
  // trạng thái chọn
  chooseAnswer(answer, correct, currentQuiz, index) {
    // trạng thái đã chọn
    let newStatuslistquiz = JSON.parse(JSON.stringify(this.state.listquiz))
    newStatuslistquiz[currentQuiz].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[currentQuiz].status[index] += ' selected';
    // trạng thái nút 
    let newStatusbtn = this.state.statusbtn.slice();
    newStatusbtn[2] = false;
    // check answer
    let newCorrect = this.state.totalcorrect;
    if (answer === correct) {
      newCorrect[currentQuiz] = 1;
    } else {
      newCorrect[currentQuiz] = 0;
    }
    this.setState({
      statusbtn: newStatusbtn,
      listquiz: newStatuslistquiz,
      currentquiz: currentQuiz,
      totalcorrect: newCorrect
    })
    console.log(this.state.totalcorrect)
  }
  // next quiz
  nextQuestion(currentQuiz) {
    currentQuiz++;
    let newStatusbtn = this.state.statusbtn.slice();
    if (currentQuiz === 4) {
      newStatusbtn[3] = true;

    } else if (currentQuiz > 0) {
      newStatusbtn[1] = false;
    }
    this.setState({
      currentquiz: currentQuiz,
      statusbtn: newStatusbtn
    })
  }
  // back quiz
  backQuestion(currentQuiz) {
    currentQuiz--;
    let newStatusbtn = this.state.statusbtn.slice();
    if (currentQuiz === 0) {
      newStatusbtn[1] = true;
    } else if (currentQuiz > 0) {
      newStatusbtn[3] = false;
    }
    this.setState({
      currentquiz: currentQuiz,
      statusbtn: newStatusbtn
    })
  }
  submit(currentQuiz) {
    clearTimeout(this.state.timeout);
    clearInterval(this.state.interval)
    currentQuiz = 'result';
    this.setState({
      currentquiz: currentQuiz
    })
  }
  // trang result
  resetQuiz(newMinute,newSeconds,timeOut,newInterval) {
    let newStatuslistquiz = JSON.parse(JSON.stringify(this.state.listquiz))
    newStatuslistquiz[0].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[1].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[2].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[3].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[4].status = ['choice', 'choice', 'choice', 'choice'];
    let newStatusbtn = this.state.statusbtn.slice();
    newStatusbtn = ['btn1', true, true, false];
    newMinute=0;
    newSeconds=0;
    newInterval = setInterval(() => {
      if (newSeconds === 59) {
        newMinute++;
        newSeconds = 0;
      } else if (newSeconds >= 0) {
          newSeconds++;
        }
      this.setState({
        minute: newMinute,
        seconds: newSeconds
      })
    }, 1000)
    timeOut = setTimeout(() => {
      this.setState({
        currentquiz: 'result',
      })
      clearInterval(newInterval)
    }, 30000)
    this.setState({
      listquiz: newStatuslistquiz,
      currentquiz: 0,
      statusbtn: newStatusbtn,
      totalcorrect: [0, 0, 0, 0, 0],
      timeout:timeOut,
      interval:newInterval,
      minute:0,
      seconds:0
    })
  }
  backHome() {
    clearTimeout(this.state.timeout);
    clearInterval(this.state.interval);
    let newStatuslistquiz = JSON.parse(JSON.stringify(this.state.listquiz))
    newStatuslistquiz[0].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[1].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[2].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[3].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[4].status = ['choice', 'choice', 'choice', 'choice'];
    let newStatusbtn = this.state.statusbtn.slice();
    newStatusbtn = ['btn1', true, true, false];
    this.setState({
      listquiz: newStatuslistquiz,
      currentquiz: '',
      statusbtn: newStatusbtn,
      totalcorrect: [0, 0, 0, 0, 0]
    })
  }
  showAnswer() {
    this.setState({
      isanswered: true
    })
  }
  render() {
    const { listquiz, currentquiz, totalcorrect, isanswered, statusbtn, showanswer, minute, seconds, timeout, interval } = this.state
    return (
      <div className="App">
        <Home
          currentQuiz={currentquiz}
          startQuiz={this.startQuiz.bind(this)}
          statusButton={statusbtn}
          timeOut={timeout}
          newInterval={interval}
          newMinute={minute}
          newSeconds={seconds}
        />
        <Quiz
          listQuiz={listquiz}
          currentQuiz={currentquiz}
          statusButton={statusbtn}
          checkAnswer={this.chooseAnswer.bind(this)}
          nextQuestion={this.nextQuestion.bind(this)}
          backQuestion={this.backQuestion.bind(this)}
          submitQuestion={this.submit.bind(this)}
          newCorrect={totalcorrect}
          newMinute={minute}
          newSeconds={seconds}
         
        />
        <Result
          listQuiz={listquiz}
          statusButton={statusbtn}
          currentQuiz={currentquiz}
          resetQuiz={this.resetQuiz.bind(this)}
          newCorrect={totalcorrect}
          backHome={this.backHome.bind(this)}
          showAnswer={showanswer}
          isAnswer={isanswered}
          printAnswer={this.showAnswer.bind(this)}
          newMinute={minute}
          newSeconds={seconds}
          timeOut={timeout}
          newInterval={interval}

        />

      </div>
    );
  }
}

export default App;
