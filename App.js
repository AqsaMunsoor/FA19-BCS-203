import { Text, View, StyleSheet, Button } from 'react-native';
import React, {useState} from 'react';


export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questions = [
    {
      question: "Example Question",
      answers: ["Option 1","Option 2","Option 3", "Option 4"],
      correctIndex: 2
    },
    {
      question: "Everything is react is a ",
      answers: ["Module","Component","Hooks", "Template"],
      correctIndex: 1
    },
    {
      question: "’1’ + 1 ",
      answers: ["11","1","0", "2"],
      correctIndex: 0
    },
    {
      question: "'5.0' = = = 5 ",
      answers: ["True","False"],
      correctIndex: 1
    },
    {
      question: "Is JavaScript case sensitive language ",
      answers: ["Yes","No"],
      correctIndex: 0
    },
    {
      question: "(['First','Second','Third'].join(' - ')",
      answers: ["First Second Third","First,Second,Third", "First-Second-Third"],
      correctIndex: 2
    } ,
    {
      question: "How many values are available for flexDirection?",
      answers: ["2","4", "5"],
      correctIndex: 1
    },
    {
      question: "How many built-in hooks are available in react-native?",
      answers: ["2","4", "5", "3"],
      correctIndex: 2
    },
    {
      question: "Which command is used to make a directory git enabled?",
      answers: ["git commit","git init", "git push", "git pull"],
      correctIndex: 1
    },
    {
      question: "What is useEffect used for?",
      answers: ["Perform Side Effects","Nothing", "Update UI", "Manage State"],
      correctIndex: 0
    }
  ];
  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
  

  const onAnswer= (selectedAnswer) => {
    if(questions[currentQuestion].correctIndex == selectedAnswer) {
      setCorrectAnswers(correctAnswers + 1)
    }
    setCurrentQuestion(currentQuestion+1)
  }

  return (
    <View style={styles.container}>
      
    {questions.length > 0 && currentQuestion < 10 && 
      <View>
        <Text style={{fontWeight:'bold', fontSize: 15}}>Question {currentQuestion + 1}/{questions.length}</Text>
        <Text style={styles.questtext}>
          {questions[currentQuestion].question}
        </Text>
          {questions[currentQuestion].answers.map((option, i) => (
            <View style= {styles.button}>
               <Button
              onPress={() => onAnswer(i)}
              title={option}
              underlayColor='#fff'
              // color= 'black'
              
            />
            </View>
          ))}
          </View>
    }
    { currentQuestion > 9 &&
    <View>
        <Text style={styles.questtext}>
          Top Users
        </Text>
        <Text style={styles.questtext}>
          Yo: {correctAnswers} out of {questions.length}
        </Text>
        </View>
    }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 400,
    marginTop: 40,
    marginBottom: 40,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'black',
    width: 500,
    height: 30,
    borderRadius: 10,
    
  },
  questtext: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button:{
    backgroundColor: '#f0fff0',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    width: 200,
    
  },
});