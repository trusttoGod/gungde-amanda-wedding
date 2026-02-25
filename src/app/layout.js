import "./globals.css"
import { Playfair_Display } from "next/font/google"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export const metadata = {
  title: "Aryasatya & Amanda Wedding",
  description: "Undangan Pernikahan Digital",
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={playfair.className}>
        {children}
      </body>
    </html>
  )
}