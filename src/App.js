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
      totalcorrect: [0,0,0,0,0],
      isanswered: false,
      statusbtn: ['btn1', false, true, false],

    }
  }
  // nút start
  startQuiz(currentQuiz) {
    currentQuiz = 0;
    let newStatusbtn = this.state.statusbtn.slice();
    if (currentQuiz === 0) {
      newStatusbtn[1] = true;
    }
    this.setState({
      currentquiz: currentQuiz,
      statusbtn: newStatusbtn
    })
  }
  // trạng thái chọn
  chooseAnswer(answer,correct,currentQuiz,index) {
    // trạng thái đã chọn
    let newStatuslistquiz = JSON.parse(JSON.stringify(this.state.listquiz))
    newStatuslistquiz[currentQuiz].status = ['choice', 'choice', 'choice', 'choice'];
    newStatuslistquiz[currentQuiz].status[index] += ' selected';
    // trạng thái nút 
    let newStatusbtn = this.state.statusbtn.slice();
    newStatusbtn[2] = false;
    // check answer
    let newCorrect=this.state.totalcorrect;
    if(answer===correct){
      newCorrect[currentQuiz]=1;
    }else{
      newCorrect[currentQuiz]=0;
    }
    this.setState({
      statusbtn: newStatusbtn,
      listquiz: newStatuslistquiz,
      currentquiz: currentQuiz,
      totalcorrect:newCorrect
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
    currentQuiz = 'result';
    this.setState({
      currentquiz: currentQuiz
    })
  }
  // trang result
  resetQuiz() {
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
      currentquiz: 0,
      statusbtn: newStatusbtn,
      totalcorrect: [0,0,0,0,0]
    })
  }
  backHome(){
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
      currentquiz:'',
      statusbtn: newStatusbtn,
      totalcorrect:[0,0,0,0,0]
    })
  }
  render() {
    const { listquiz, currentquiz, totalcorrect, isanswered, statusbtn } = this.state
    return (
      <div className="App">
        <Home
          currentQuiz={currentquiz}
          startQuiz={() => this.startQuiz()}
          statusButton={statusbtn}
        />
        <Quiz
          listQuiz={listquiz}
          currentQuiz={currentquiz}
          isAnswer={isanswered}
          statusButton={statusbtn}
          checkAnswer={this.chooseAnswer.bind(this)}
          nextQuestion={this.nextQuestion.bind(this)}
          backQuestion={this.backQuestion.bind(this)}
          submitQuestion={this.submit.bind(this)}
          newCorrect={totalcorrect}
        />
        <Result
          listQuiz={listquiz}
          statusButton={statusbtn}
          currentQuiz={currentquiz}
          resetQuiz={this.resetQuiz.bind(this)}
          newCorrect={totalcorrect}
          backHome={this.backHome.bind(this)}


        />

      </div>
    );
  }
}

export default App;
