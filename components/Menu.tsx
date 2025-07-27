import Link from 'next/link';
import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Menu: React.FC = () => (
  <nav>
    <Stack direction="row" spacing={8} sx={{ p: 2, borderBottom: '1px solid #eee' }}>
      <Link href="/" passHref>
        <Button variant="contained" color="primary">Início</Button>
      </Link>
      <Link href="/produtos" passHref>
        <Button variant="contained" color="primary">Produtos</Button>
      </Link>
      <Link href="/contato" passHref>
        <Button variant="contained" color="primary">Contato</Button>
      </Link>
    </Stack>
  </nav>
);

export default Menu;
