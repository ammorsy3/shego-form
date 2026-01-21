import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Requirements from './components/Requirements'
import RegistrationForm from './components/RegistrationForm'
import Footer from './components/Footer'

function App() {
  const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT || '/api/register'

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <main className="w-full flex flex-col items-center gap-16 md:gap-24 py-12 md:py-20 px-4">
        <div className="w-full max-w-6xl flex justify-center">
          <Hero />
        </div>
        <div className="w-full max-w-6xl flex justify-center">
          <Benefits />
        </div>
        <div className="w-full max-w-6xl flex justify-center">
          <Requirements />
        </div>
        <div className="w-full max-w-4xl flex justify-center">
          <RegistrationForm apiEndpoint={API_ENDPOINT} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
