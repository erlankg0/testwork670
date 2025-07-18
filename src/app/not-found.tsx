import Link from 'next/link'
import styles from './not-found.module.scss'

export default async function NotFound() {
  return (
    <div className={"notFound"}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <p>
        View <Link href="/">Home</Link>
      </p>
    </div>
  )
}
