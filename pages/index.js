import { Inter } from 'next/font/google'
import Link from "next/link";
import {useRouter} from "next/router";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const route = useRouter()
    const redirectHandler = () => {
        // route.push('/courses/node')
        // route.replace('/courses/react')
        route.push({
            pathname: '/courses/[shortName]',
            query:{
                shortName: 'react'
            }
        })
        // route.replace({
        //     pathname: '/courses/[shortName]',
        //     query:{
        //         shortName: 'react'
        //     }
        // })
    }
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
            <li>
                <button onClick={() => redirectHandler()}>Go To Custom Page (Redirect)</button>
            </li>
        </ul>
    </>
  )
}
