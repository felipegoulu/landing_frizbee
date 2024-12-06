// Change any apostrophes (') to proper HTML entities
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center bg-gray-50 px-4">
      <div className="max-w-3xl w-full pt-32">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">About Frizbee</h1>
        
        <div className="space-y-6 text-gray-600">
          <p>
            Frizbee is revolutionizing the way people shop for groceries with AI-powered 
            assistance that makes your shopping experience smarter and more efficient.
          </p>

          <p>
            Our mission is to eliminate the hassle from grocery shopping by remembering 
            your preferences, customizing your cart, and proactively suggesting items 
            you might need.
          </p>

          <p>
            We&apos;re currently in development and excited to launch soon. Join our waitlist 
            to be among the first to experience the future of grocery shopping.
          </p>
        </div>
      </div>
    </main>
  )
}