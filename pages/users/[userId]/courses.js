import { useRouter } from 'next/router'
import React from 'react'

export default function courses() {
    const router = useRouter()
  return (
    <h1>User (ID: {router.query.userId}) Courses</h1>
  )
}
