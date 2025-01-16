import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Provider from '@/components/Provider'
export const metadata = {
  title: 'NextPrompt',
  description: 'Discover and share prompts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
        <div className='gradient' />
        </div>
        <main className='app'>
          <Navbar/>
        {children}
        </main>
        </body>
    </html>
  )
}