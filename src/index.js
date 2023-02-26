import React from 'react'
import ReactDOM from 'react-dom/client'
import { QuizProvider } from './context/quiz'
import Quiz from './Quiz'
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <QuizProvider>
        <Quiz/>
        </QuizProvider>
    </React.StrictMode>
)