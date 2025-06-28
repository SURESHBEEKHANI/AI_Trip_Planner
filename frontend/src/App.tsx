import { useState } from 'react'
import axios from 'axios'
import './App.css'
import Button from './components/Button'
import Input from './components/Input'
import Card, { CardContent, CardHeader } from './components/Card'

interface TravelPlan {
  answer: string
  timestamp: string
}

interface ApiResponse {
  answer: string
}

interface ApiError {
  detail: string
}

const SendIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m22 2-7 20-4-9-9-4 20-7z"/>
    <path d="M22 2 11 13"/>
  </svg>
)

const LoaderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
)

function App() {
  const [userInput, setUserInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [travelPlan, setTravelPlan] = useState<TravelPlan | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Get API URL from environment or use default
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
    setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!userInput.trim()) return

    setIsLoading(true)
    setError(null)
    setTravelPlan(null)

    try {
      const response = await axios.post<ApiResponse>(`${API_BASE_URL}/travel/query`, {
        query: userInput
      })

      if (response.status === 200 && response.data.answer) {
        setTravelPlan({
          answer: response.data.answer,
          timestamp: new Date().toLocaleString()
        })
      } else {
        setError("Invalid response from server")
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data as ApiError
        setError(errorData?.detail || err.message || 'Network error occurred')
      } else {
        setError('An unexpected error occurred')
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="app">
      <main className="main">
        <div className="container">
          <section className="welcome-section">
            <h1 className="main-title">AI Travel Agent</h1>
            <h2>Welcome to AI Travel Planner</h2>
            <p>Your intelligent companion for creating personalized travel experiences</p>
          </section>

          <Card variant="elevated" className="input-card">
            <CardContent>
              <form className="input-form" onSubmit={handleSubmit}>
                <Input
                  type="text"
                  value={userInput}
                  onChange={handleInputChange}
                  placeholder="Tell me about your dream destination..."
                  icon={<CalendarIcon />}
                  error={error}
                  variant="filled"
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  isLoading={isLoading}
                  icon={<SendIcon />}
                >
                  Plan My Trip
                </Button>
              </form>
            </CardContent>
          </Card>

          {travelPlan && (
            <Card variant="default" className="travel-plan-card">
              <CardHeader>
                <div className="travel-plan-header">
                  <CalendarIcon />
                  <span className="timestamp">{travelPlan.timestamp}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="travel-plan-content">
                  {travelPlan.answer}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}

export default App