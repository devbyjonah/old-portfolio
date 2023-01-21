import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/Link'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Jonah Wagner | Software Engineer</title>
        <meta name="description" content="Simple showcasing of my software development work, links to my socials, and contact information." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          <Link
            href="/"
            className={styles.card}
          >
            <Image src='/laptop.jpg' className={styles.projectImg} alt="project image" width={144} height={144} />
            <h2 className={inter.className}>
              Project 1 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </Link>
          <Link
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <Image src='/laptop.jpg' className={styles.projectImg} alt="project image" width={144} height={144} />
            <h2 className={inter.className}>
              Project 2 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </Link>

          <Link
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <Image src='/laptop.jpg' className={styles.projectImg} alt="project image" width={144} height={144} />
            <h2 className={inter.className}>
              Project 3 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </Link>

          <Link
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <Image src='/laptop.jpg' className={styles.projectImg} alt="project image" width={144} height={144} />
            <h2 className={inter.className}>
              Project 4 <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </Link>
        </div>
      </main>
    </>
  )
}
