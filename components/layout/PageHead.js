import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "DreamHome - Real Estate  Nextjs Template"}
                </title>
            </Head>
        </>
    )
}

export default PageHead