import React from 'react'
import './globals.css'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/toast'
import { TooltipProvider } from '@/components/ui/tooltip'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AutoFlowPro - Automatización para tu Negocio',
  description: 'Automatiza tus operaciones diarias sin necesidad de conocimientos técnicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <TooltipProvider>
          <div className="min-h-screen bg-background">
            {children}
          </div>
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  )
}
