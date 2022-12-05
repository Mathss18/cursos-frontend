import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import Router from './Routes/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Toaster
        position="top-right"
        gutter={8}
        containerClassName="toast-container-all"
        containerStyle={{
          zIndex: 99999,
        }}
        toastOptions={{
          style: {
            zIndex: 99999,
          },
          // Define default options
          className: "toast-container",
          duration: 5000,
          // Default options for specific types
          error: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      />
      <Router />
    </>
  )
}

export default App
