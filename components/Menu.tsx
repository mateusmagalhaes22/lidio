
import Link from 'next/link';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from '../styles/components/Menu.module.css';

const Menu: React.FC = () => (
  <nav className={styles.root}>
    <Stack direction="row" spacing={8} sx={{ p: 2 }}>
      <Link href="/" passHref>
        <Button className={styles.navButton} variant="contained" color="primary">Início</Button>
      </Link>
      <Link href="/produtos" passHref>
        <Button className={styles.navButton} variant="contained" color="primary">Produtos</Button>
      </Link>
      <Link href="/contato" passHref>
        <Button className={styles.navButton} variant="contained" color="primary">Contato</Button>
      </Link>
    </Stack>
  </nav>
);

export default Menu;
