import Link from 'next/link';
import Image from 'next/image';
import philippe from "/public/philippe.png"
import Head from 'next/head';
import Layout from "@components/Layout";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post!</title>
            </Head>
            <h1>First Post</h1>
            <Image
                src={philippe} // Route of the image file
                alt="Your Name"
            />
            <h2>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </h2>
        </Layout>
    );
}