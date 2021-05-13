import Head from 'next/head';
import Container from '../components/container';
import Layout from '../components/layout';
import Hero from '../components/home/hero';
import DendroCaseStudy from '../components/home/DendroCaseStudy';
import BridgeCaseStudy from '../components/home/BridgeCaseStudy';
import OtherProjects from '../components/home/OtherProjects';

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>
            Andrew Crotwell, Fullstack Web Developer
          </title>
        </Head>
        <Hero />
        <DendroCaseStudy />
        <BridgeCaseStudy />
        <OtherProjects />
      </Layout>
    </>
  );
}
