import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { UserAnswerContextProvider } from './store/userAnswer'
import { AttemptContextProvider } from './store/attempt'
import { ScoreContextProvider } from './store/score'
import { WordsContextProvider } from './store/words'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <WordsContextProvider>
    <UserAnswerContextProvider>
      <AttemptContextProvider>
        <ScoreContextProvider>
          <App />
        </ScoreContextProvider>
      </AttemptContextProvider>
    </UserAnswerContextProvider>
  </WordsContextProvider>
  // </React.StrictMode>
)
