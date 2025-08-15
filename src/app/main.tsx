import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "shared/styles/global.css"
import {RouterProvider } from 'react-router'
import { router } from './routes'
import { HeadProvider } from 'react-head'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadProvider>
    <RouterProvider router={router}/>
    </HeadProvider>
  </StrictMode>,
)
