import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function App({ Component, pageProps }) {
  return (
      <>
        <h1>Header Section</h1>
        <hr/>
        <Component {...pageProps} />
        <hr/>
        <h1>Footer Section</h1>
      </>
  )
}
