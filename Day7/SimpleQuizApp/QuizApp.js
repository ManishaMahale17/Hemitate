import React, { useState } from 'react';

export default function QuizApp() {
	const questions = [
		{
			questionText: 'What is the capital of India?',
			answerOptions: [
				{ answerText: 'Delhi', isCorrect: true },
				{ answerText: 'Panjab', isCorrect: false },
				{ answerText: 'Hariyana', isCorrect: false },
				{ answerText: 'Mumbai', isCorrect: false },
			],
		},
		{
			questionText: 'Who is the Prime minister of India?',
			answerOptions: [
				{ answerText: 'Rahul Gandhi', isCorrect: false },
				{ answerText: 'Narendra Modi', isCorrect: true },
				{ answerText: 'Arvind Kejariwal', isCorrect: false },
				{ answerText: 'Amit Shah', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'Which is the most expensive city in india?',
			answerOptions: [
				{ answerText: 'Pune', isCorrect: false },
				{ answerText: 'Delhi', isCorrect: false },
				{ answerText: 'Bangolre', isCorrect: false },
				{ answerText: 'Mumbai', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

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
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
