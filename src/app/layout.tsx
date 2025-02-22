import { Header, HeaderSkeleton } from "@/components/layout/header"
import { Sidebar, SidebarSkeleton } from "@/components/layout/sidebar"
import React, { Suspense } from "react"

import { Inter } from "next/font/google"
import { ViewTransitions } from "next-view-transitions"
import HolyLoader from "holy-loader"
import { Provider } from "@radix-ui/react-tooltip"
import { Toaster } from "sonner"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import "@/styles/globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Nextjs admin ",
  description: "Nextjs admin with shadcn-ui",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}
type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning className='dark'>
        <body vaul-drawer-wrapper='' className={`font-sans ${inter.variable}`}>
          <HolyLoader />
          <Provider>
            <div className='min-h-screen w-full flex'>
              <div className='sticky bg-background top-0 h-screen z-[49]'>
                <Suspense fallback={<SidebarSkeleton />}>
                  <Sidebar />
                </Suspense>
              </div>
              <div className='flex flex-col flex-1'>
                <div className='sticky bg-background top-0 z-[49]'>
                  <Suspense fallback={<HeaderSkeleton />}>
                    <Header />
                  </Suspense>
                </div>
                <div className='relative h-full p-10'>{children}</div>
              </div>
            </div>
            <TailwindIndicator />
            <Toaster richColors />
          </Provider>
        </body>
      </html>
    </ViewTransitions>
  )
}
