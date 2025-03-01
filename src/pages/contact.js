import React, { useState } from "react";
import ContactUs from 'components/contact/ContactUs';
import Layout from 'components/layout';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';


const ContactPage = () => {
  return (
  <>
    <ThemeProvider theme={theme}>
        <Layout >
            <ContactUs />
        </Layout>
    </ThemeProvider>
  </>);
};

export default ContactPage;
