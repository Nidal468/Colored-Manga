import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Menu from '@/components/menu/page'
import Worker from '@/app/worker/service-worker'
const Gilory = localFont({
  src: [
    {
      path: '../public/fonts/gilory/Gilroy-ExtraBold.ttf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../public/fonts/gilory/Gilroy-Light.ttf',
      weight: '300',
      style: 'light'
    }
  ]
})
export const metadata: Metadata = {
  title: "Colored Manga",
  icons: "/images/favicon.ico"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className={Gilory.className}>
        <Menu />
          {children}
        <Worker/>
      </body>
    </html>

  )
}
