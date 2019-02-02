import React from 'react';
import { storiesOf } from '@storybook/react';

import Layout from '../components/Layout';

storiesOf('Layout', module)
  .add('with on page load', () => {

    const props = { 
      title: "レイアウト",
    }

    return <Layout {...props} />
  },
    { jest: [], }
  );
