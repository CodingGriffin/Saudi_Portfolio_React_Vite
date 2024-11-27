import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { lazy } from 'react';
import { Suspense } from 'react';
const App = lazy(() => import("./App"));
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Suspense fallback={<>...</>}>
      <App />
    </Suspense>
  </StrictMode >
)

