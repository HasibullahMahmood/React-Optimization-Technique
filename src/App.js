import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import Demo from './components/Demo/Demo';
import './App.css';

function App() {
	const [isParagraphShown, setIsParagraphShown] = useState(false);
	const toggleParagraph = useCallback(() => {
		setIsParagraphShown((prevState) => !prevState);
	}, []);
	console.log('APP RUNNING');
	return (
		<div className="app">
			<h1>Hi there!</h1>
			<Demo show={false} />
			<Button onClick={toggleParagraph}>Toggle Paragraph</Button>
		</div>
	);
}

export default App;
