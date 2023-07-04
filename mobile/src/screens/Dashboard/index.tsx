import { Header } from '@components/Header'
import { BackgroundContainer, Container } from './styles'

import BackgroundLeaves from '@assets/backgroundLeaves.png'
import { Footer } from '@components/Footer'

export function Dashboard() {
  return (
    <Container>
      <BackgroundContainer source={BackgroundLeaves} resizeMode="cover" />
      <Header title="Home" iconPosition="right" iconName="user-circle-o" />
      <Footer hasBackground />
    </Container>
  )
}
