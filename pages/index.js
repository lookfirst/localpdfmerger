import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero'
import LandingLayout from '../components/LandingLayout'

export default function Home () {
  return (
    <>
      <Head>
        <title>Merge PDF Files - PDF Tools, Local PDF Tools - Right in your Browser</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content="Merge multiple PDFs into one. Your files won't leave your System, Local PDF uses your Browser edit PDfs! Your files will not be sent to another server!"
        />
        <meta
          name='keywords'
          content='Merge, PDF, Combine PDF, Local PDF, PDF Tools, Webassembly, pdfcpu'
        />
       <meta name='author' content='Julian Beck' />
       <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Kickbeak" />
        <meta name="twitter:title" content="Merge PDF Files - PDF Tools, Local PDF Tools - Right in your Browser" />
        <meta name="twitter:description" content="Merge multiple PDFs into one. Your files won't leave your System, Local PDF uses your Browser edit PDfs!" />
        <meta name="twitter:image" content="https://github.com/jufabeck2202/go-wasm-pdfmerge/blob/master/logo.jpeg?raw=true" />
      </Head>
      <LandingLayout>
        <Hero
          title='Local PDF Tools'
          subtitle="Local PDF uses Webassembly to edit your PDFs inside your Browser. Your files won't leave your System, they will not be send to another server"
          subtitle2='Currently, we support merging PDFs. You can combine multiple PDF files into one large File.'
          image='/files.svg'
          ctaText='Start Merging PDFs'
          ctaLink='/merge'
        />
      </LandingLayout>
    </>
  )
}
