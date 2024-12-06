import WaitlistForm from '@/components/WaitlistForm'
import Features from '@/components/Features'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 px-4">
      {/* Hero Section */}
      <div className="max-w-2xl w-full text-center pt-32 pb-20">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Frizbee
        </h1>
        <p className="text-xl text-gray-600">
          Your AI-powered supermarket shopping assistant
        </p>
      </div>

      {/* Waitlist Section */}
      <div className="w-full max-w-2xl text-center mb-24">
        <WaitlistForm />
      </div>

      {/* Features Section */}
      <Features />
    </main>
  )
}