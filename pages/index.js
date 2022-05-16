import Head from 'next/head'
import Link from "next/link";
import utilStyles from '../styles/utils.module.css';
import Layout from "@components/Layout";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Check out these articles:</p>
                <Link href="/posts/first-post"><a>First post</a></Link>
            </section>
        </Layout>
    )
}
