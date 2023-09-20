import Sidebar from "src/Components/Sidebar/Sidebar"
import styles from './Layout.module.scss'
import Head from "next/head";

const Layout = ({children}) => {
    return (
    <>
        <Head>
            <title>Studio Kalon | Dashboard</title>
        </Head>
        <main className={styles.main}> 
            <Sidebar />
            <section className={styles.content}>{children}</section>
        </main>
    </>
    )
}

export default Layout;