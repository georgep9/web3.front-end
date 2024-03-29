import NetworkCard from '../components/connectorCards/NetworkCard'
import CoinbaseWalletCard from '../components/connectorCards/CoinbaseWalletCard'
import MetaMaskCard from '../components/connectorCards/MetaMaskCard'
import WalletConnectCard from '../components/connectorCards/WalletConnectCard'
import Layout from '../components/layout/Layout'

export default function Home() {
  return (
    <>
      <Layout>
        <div style={{ display: 'flex', flexFlow: 'wrap', fontFamily: 'sans-serif' }}>
          <NetworkCard />
          <CoinbaseWalletCard />
          <MetaMaskCard />
          <WalletConnectCard />
        </div>
      </Layout>
    </>
  )
}
