import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "کالکو - هیجان تخفیفی"}
                </title>
            </Head>
        </>
    )
}

export default PageHead