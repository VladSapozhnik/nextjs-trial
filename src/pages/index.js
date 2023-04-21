import Heading from "@/components/Heading";
import Image from "next/image";
import Head from "next/head";
const Home = () => {
  return (
      <>
          <Head>
              <title>
                  Home
              </title>
          </Head>
        <Heading text={'Hello Word'}/>
          <Image src={'/Space-Perspective.jpeg'} width={700} height={400} alt={'космос'}/>
      </>
  )
}

export default Home;