import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from '../components/Header';

storiesOf('Header', module)
  .add('with on page load', () => {

    const props = { 
      title: "レイアウト",
    }

    return <Header {...props} />
  },
    { jest: [], }
  );
