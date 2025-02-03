import MailingScheduler from '../components/MailingScheduler'

export default function Home() {
  return (
    <main className="min-h-screen p-8 spotlight-container">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mailing Scheduler
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Create and schedule your email campaigns with ease. Reach your audience at the perfect moment.
          </p>
        </div>
        <MailingScheduler />
      </div>
    </main>
  )
}

