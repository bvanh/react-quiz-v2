import React from 'react';
import Home from './components/home';
import Quiz from './components/quiz';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listquiz: [
        {
          question: 'Who is stronger than Thanos ?',
          answer: ['Surtur', 'Thor', 'Black Panther', 'Iron man'],
          correct: 'Surtur'
        },
        {
          question: `What's the value of 1 + 1 ?`,
          answer: [2, 3, 4, 5],
          correct: 2
        },
        {
          question: 'How many countries in the world ?',
          answer: [193, 194, 195, 196],
          correct: 195
        },
        {
          question: 'Who is god in DC universe?',
          answer: ['The Presence', 'Batman', 'The One Above All', 'Green Lantern'],
          correct: 'Batman'
        },
        {
          question: '1 + 2 + 3 + ..... + 99 = ?',
          answer: [4850, 4580, 4950, 4590],
          correct: 4950
        }

      ],
      currentquiz: '',
      totalcorrect: 0,
      isanswered: false,

    }
  }
  startQuiz(currentQuiz) {
    currentQuiz=0;
    this.setState({
      currentquiz:currentQuiz
    })
  }
  render() {
    const { listquiz, currentquiz, totalcorrect, isanswered } = this.state
    return (
      <div className="App">
        <Home
          currentQuiz={currentquiz}
          startQuiz={() => this.startQuiz()}
        />
        <Quiz
          listQuiz={listquiz}
          currentQuiz={currentquiz}
          isAnswer={isanswered}
        />

      </div>
    );
  }
}

export default App;
