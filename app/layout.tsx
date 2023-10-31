import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Siderbar from '@/components/sidebar/page'
import Footer from '@/components/footer/page'
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
export const metadata = {
  title: "Colored Manga"
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en">
      <body className={Gilory.className}>
        <Menu />
        <Siderbar/>
          {children}
        <Worker/>
      </body>
    </html>

  )
}
