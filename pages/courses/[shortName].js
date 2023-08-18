import React from 'react'
import {useRouter} from "next/router";
import CourseBox from '@/Components/CourseBox/CourseBox';

function SingleCourse () {
      // console.log(router.query.shortName); for get shortName

    const routes = useRouter()

    const goBackHandler = () => {
        routes.back()
    }

    return(
        <>
            <h1>Single Course: {routes.query.shortName}</h1>
            <br/>
            <button onClick={() => goBackHandler()}>Back</button>
        </>
    )
}
export default SingleCourse
