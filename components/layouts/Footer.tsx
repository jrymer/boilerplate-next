import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Footer: React.FC = () => (
  <Box
    component="footer"
    id="footer"
    sx={{
      py: 3,
      px: 2,
      marginTop: 'auto',
      backgroundColor: (theme) => theme.palette.grey[200],
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        Footer
      </Typography>
    </Container>
  </Box>
);

export default Footer;
