import React from 'react';
import { storiesOf } from '@storybook/react';

import NumberSearchForm from '../components/NumberSearchForm';

storiesOf('NumberSearchForm', module)
  .add('with on page load', () => {
    return <NumberSearchForm />
  },
    { jest: [], }
  );
