import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Requirements from './components/Requirements'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  // Replace with your actual API endpoint
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || '/api/register'

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className="w-full max-w-7xl mx-auto px-4">
        <Hero />
        <Benefits />
        <Requirements />
        <RegistrationForm apiEndpoint={API_ENDPOINT} />
      </main>
      <Footer />
    </div>
  )
}

export default App
