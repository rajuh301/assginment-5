import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.tsx'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
    </StrictMode>,
  </Provider>
)
