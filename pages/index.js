import { Inter } from 'next/font/google'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <hr/>
        <ul>
            <li>
                <Link href='/articles'>All Articles</Link>
            </li>
            <li>
                <Link href='/courses'>All Courses</Link>
            </li>
            <li>
                <Link href='/aboutUs'>About US</Link>
            </li>
        </ul>
    </>
  )
}
