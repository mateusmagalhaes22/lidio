
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
          image={produto.image}
          alt={produto.title}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {produto.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {produto.description}
          </Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 2 }}>
            {produto.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProductCard;