import React from "react";
import ProductListing from 'sections/ProductListing';
import Layout from 'components/layout';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import {products} from 'datas/products';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Layout >
            <ProductListing products={products} />
        </Layout>
    </ThemeProvider>
  );
}
