import React from 'react';
import { Button } from 'reactstrap';


function Home(props){
const {currentQuiz}=props
if(currentQuiz===''){
    return(
           <div className="start">
              <h1>Welcome to Quiz-Game !?</h1>
              <h4>In 15 seconds</h4>
              <Button color="primary" size="lg"onClick={()=>props.startQuiz(currentQuiz)}>Let's Go</Button>
          </div>
    )
}else {
    return null
}

}

export default Home;