import { CapeStyled } from './style'

export const Cape = () => {

    return (
        <CapeStyled>
            <img src='Cape images/products.png' alt="" id='productsIMG'/>
            <img src="Cape images/Store symbol.png" alt="" id='storeSymbol'/>
            <h1 id='title'>Mercado <br/> Vizinhança</h1>
            <p id='paragraph'>
                Bem-vindo ao Mercado de Bairro! Oferecemos uma variedade de produtos de alta qualidade, incluindo carne fresca, pão e frutas e verduras locais. Além disso, temos itens de higiene pessoal, produtos de limpeza e refeições prontas. Oferecemos entrega em domicílio e serviços adicionais. Visite-nos ou navegue pelo nosso site para saber mais!
            </p>
        </CapeStyled>
    )
}