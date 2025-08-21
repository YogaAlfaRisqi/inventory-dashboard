import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "@/styles/global.css"
import {RouterProvider } from 'react-router'
import { HeadProvider } from 'react-head'
import { router } from '@app/routes'
import { ThemeProvider } from 'shared/context/ThemeContext'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
 <HeadProvider>
    <RouterProvider router={router}/>
    </HeadProvider>
    </ThemeProvider>
   
  </StrictMode>,
)
