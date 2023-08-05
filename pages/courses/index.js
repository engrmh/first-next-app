import React from 'react'
import Link from "next/link";

function Courses() {
    const courses = [
        {id: 1 , title: 'React' , shortname: 'react'},
        {id: 2 , title: 'Node' , shortname: 'node'},
        {id: 3 , title: 'Next' , shortname: 'next'},
        {id: 4 , title: 'PWA' , shortname: 'pwa'},
        {id: 5 , title: 'JS' , shortname: 'js'},
        {id: 6 , title: 'Canvas' , shortname: 'canvas'},
        {id: 7 , title: 'Express' , shortname: 'express'},
    ]
  return (
      <>
        <h1>All Courses</h1>
        <ul>
            {
                courses.map(course => (
                    <li key={course.id}>
                        {/*<Link href={`/courses/${course.shortname}`}>{course.title}</Link>*/}

                        {/* when link for href is long send object for href  | this bottom code */}
                        <Link href={{
                            pathname: '/courses/[shortName]',
                            query:{
                                shortName: course.shortname
                            }
                        }}>{course.title}</Link>
                    </li>
                ))
            }
        </ul>
      </>
  )
}

export default Courses