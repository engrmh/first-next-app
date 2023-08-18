import Link from "next/link";
import {useRouter} from "next/router";

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
        <ul className="d-flex justify-content-between gap-4 mb-4">
            <li>
                <Link href='/articles' className="alert alert-warning">All Articles</Link>
            </li>
            <li>
                <Link href='/courses' className="alert alert-warning">All Courses</Link>
            </li>
            <li>
                <Link href='/aboutUs' className="alert alert-warning">About US</Link>
            </li>
        </ul>
        <button onClick={() => redirectHandler()}>Go To Custom Page (Redirect)</button>

        <style jsx>{`
        h1{
            color: red;
        }
      `}</style>
    </>
  )
}
