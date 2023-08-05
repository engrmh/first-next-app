import React from 'react'
import {useRouter} from "next/router";

function SingleCourse () {
    const routes = useRouter()
    return(
    <h1>Single Course: {routes.query.shortName}</h1>
)
}
export default SingleCourse
