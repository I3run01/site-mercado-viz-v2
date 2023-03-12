import {Menubar} from './components/menubar'
import {GlobalStyle} from './Global'
import {Cape} from './components/Cape'
import {Sectors} from './components/Sectors'
import {Medias_btn} from './components/Medias_btn'
import {Footer} from './components/footer'

function App() {

  return (
    <GlobalStyle>
      <Menubar/>
      <Cape/>
      <Sectors
        title='Açougue'
        bgImage='Açougue/AçougueBK.png'
        text='Carne fresca e selecionada diariamente, variedade de cortes e preços competitivos. Visite o açougue do Mercado Vizinhança e surpreenda-se com a qualidade e sabor da nossa carne.'
        gallary={
          [
            'Açougue/Gallery/image1.png',
            'Açougue/Gallery/image2.png',
            'Açougue/Gallery/image3.png',
            'Açougue/Gallery/image4.png',
            'Açougue/Gallery/image5.png',
            'Açougue/Gallery/image6.png',
          ]
        }
      />
      <Medias_btn/>
      <Footer/>
    </GlobalStyle>
  )
}

export default App
