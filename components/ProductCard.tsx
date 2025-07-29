
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import styles from '../styles/components/ProductCard.module.css';

const ProductCard = ({ produto, onClick }) => {
  return (
    <Card className={styles.root}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="300"
          image={produto.imagem}
          alt={produto.titulo}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {produto.titulo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {produto.descricao}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            {produto.preco}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;