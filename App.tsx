import React from 'react';
import Navigation from './navigations';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import config from './src/aws-exports';

Amplify.configure(config)

const App = () => {
  return (
    <>
      <Navigation />
    </>
  );
};

export default withAuthenticator(App);
