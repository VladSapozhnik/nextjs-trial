import Heading from "@/components/Heading";
import {useEffect} from "react";
import {useRouter} from "next/router";
import Head from 'next/head';
const Error404 = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])

    return (
        <>
            <Head>
                <title>
                    Error
                </title>
            </Head>
            <Heading text={'404 Page Bro'} />
        </>
    )
}

export default Error404;