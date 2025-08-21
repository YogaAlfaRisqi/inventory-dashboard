import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/styles/global.css"
import {RouterProvider } from 'react-router'
import { HeadProvider } from 'react-head'
import { router } from '@app/routes'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HeadProvider>
    <RouterProvider router={router}/>
    </HeadProvider>
  </StrictMode>,
)
