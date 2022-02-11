import { Box, Container } from '@mui/material';
import Head from 'next/head';
import React from 'react';
import { AppBar, Footer } from '.';

const AppLayout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        {/* Material UI imports */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

        <title>Next.js Boilerplate</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box
        id="app_container"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <AppBar />
        <Container sx={{ flexGrow: 1 }}>{children}</Container>
        <Footer />
      </Box>
    </>
  );
};

export default AppLayout;
