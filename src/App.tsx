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
      <Sectors
        title='Mercado'
        bgImage='Mercado/bgMercado.png'
        text='Certamente! O Mercado Vizinhança também oferece uma seleção cuidadosamente selecionada de produtos industrializados, como alimentos enlatados, massas, cereais, óleos e molhos, entre outros. Embora valorizemos nossos produtos frescos e artesanais, sabemos que esses itens industrializados são convenientes e essenciais para muitos de nossos clientes.'
        gallary={
          [
            'Mercado/gallery/img1.jpg',
            'Mercado/gallery/img2.jpg',
            'Mercado/gallery/img3.jpg',
            'Mercado/gallery/img4.jpg',
            'Mercado/gallery/img5.jpg',
            'Mercado/gallery/img6.jpg',
          ]
        }
      />
      <Medias_btn/>
      <Footer/>
    </GlobalStyle>
  )
}

export default App
