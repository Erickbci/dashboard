import Layout from 'src/Layout/Layout'
import '../styles/globals.scss'
import store from 'src/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}

export default MyApp
