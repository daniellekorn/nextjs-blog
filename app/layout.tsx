import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Danielle Korn',
  description: 'Tech insight for modern moms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center min-h-screen bg-gray-100">
          <Navbar/>
          <div className="flex flex-col h-full">
            <div className="max-w-4xl py-8 mx-auto">
              {children}
            </div>
        </div>
      </body>
    </html>
  )
}
