/**
 * @author: lencx
 * @create_at: Feb 02, 2020
 */

import React from 'react';
import Layout from '~layout/post';
import ConverterColor from '~comps/converter_color';
import SEO from '~common/seo';

export default function ConverterTools() {
  return (
    <Layout>
      <SEO title="Converter Tools" />
      <h2>Converter Tools</h2>
      <ConverterColor />
    </Layout>
  );
}
