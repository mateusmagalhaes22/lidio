import React from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import styles from '../styles/pages/produtos.module.css';

const produtos = [
  {
    id: 1,
    titulo: 'Tampa Reforçada',
    descricao: 'Tampa de fibra de vidro reforçada com aço, ideal para caixas de gordura.',
    imagem: 'https://images.tcdn.com.br/img/img_prod/627209/tampa_de_caixa_inspecao_30x30cm_polipropileno_bloqueia_inseto_655_1_5cb1607acffd81c2e8426aea3eb7b821.jpg',
    preco: 'R$ 120,00',
  },{
    id: 1,
    titulo: 'Tampa Reforçada',
    descricao: 'Tampa de fibra de vidro reforçada com aço, ideal para caixas de gordura.',
    imagem: 'https://carrefourbr.vtexassets.com/arquivos/ids/108193519/98453786bec049caae1c65cd435dd9f1.jpg?v=638158290666700000',
    preco: 'R$ 200,00',
  },{
    id: 1,
    titulo: 'Tampa Reforçada',
    descricao: 'Tampa de fibra de vidro reforçada com aço, ideal para caixas de gordura.',
    imagem: 'https://product-hub-prd.madeiramadeira.com.br/675174597/images/a1563065-11d1-458d-999a-306bed1267d18tampa40x40simplesaluminio.png',
    preco: 'R$ 240,00',
  },
];

const onSelectProduct = (produto) => {
  alert(`Produto selecionado: ${produto.titulo}`);
}

function Produtos() {
  return (
    <div className={styles.root}>
      <h1>Nossos produtos</h1>
      <Grid container spacing={'5%'}>
        {produtos.map((produto) => (
          <ProductCard
            produto={produto}
            onClick={() => onSelectProduct(produto)}
          />
        ))}
      </Grid>
    </div>
  );
}

export default Produtos;
