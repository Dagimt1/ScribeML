import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col p-4">
      <section className="min-h-screen flex flex-col">
        <header>
          <h1>
            Scribe
            <span className="text-blue-400">ML</span>
          </h1>
        </header>
        <main className="flex-1">
        </main>
      </section>
      <h1 className="text-green-400">hello</h1>
      <footer></footer>
    </div>
  )
}

export default App;
