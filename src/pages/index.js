import React from 'react';

import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Support from 'sections/support';
import About from 'sections/about';
import Brands from 'sections/brands';
// import AppFeature from 'sections/app-feature';
// import Dashboard from 'sections/dashboard';
import Testimonials from 'sections/testimonials';
import Subscribe from 'sections/subscribe';
import WhyChooseNeotronics from 'sections/why'
import WhatWeDo from 'sections/verticals';
// import Products from 'sections/products'

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO
          title="Neotronics"
          description="We design solutions that help you drive digital transformation"
        />
        <Banner />
        <Brands />
        <WhatWeDo />
        {/* <Support /> */}
        <About />
        <WhyChooseNeotronics />
        {/* <Products /> */}
        {/* <AppFeature />
        <Dashboard /> */}
        {/* <Pricing /> */}
        
        <Testimonials />
        <Subscribe />
      </Layout>
    </ThemeProvider>
  );
}
