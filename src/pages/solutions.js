import React from "react";
import SolutionListing from 'sections/SolutionListing';
import Layout from 'components/layout';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import {solutions} from 'datas/solutions';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
        <Layout >
            <SolutionListing solutions={solutions} />
        </Layout>
    </ThemeProvider>
  );
}
