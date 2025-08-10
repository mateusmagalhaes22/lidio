
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import ProductCard from '../components/ProductCard';
import styles from '../styles/pages/produtos.module.css';
import API_BASE_URL from '../config/api';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}products`)
      .then(res => res.json())
      .then(data => setProdutos(data))
      .catch(() => setProdutos([]));
  }, []);

  const onSelectProduct = (produto) => {
    alert(`Produto selecionado: ${produto.titulo}`);
  };
  
  return (
    <div className={styles.root}>
      <h1>Nossos produtos</h1>
      <Grid container spacing={'5%'}>
        {produtos.map((produto) => (
          <ProductCard
            key={produto.id}
            produto={produto}
            onClick={() => onSelectProduct(produto)}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Produtos;
