import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import Loader from '~/components/global/loader';

const cpError = () => {
  const router = useRouter();

  useEffect(() => {
    router
      .push(`/`)
      .then(() => window.scrollTo(0, 0))
      .catch(() => console.error('Error on redirect to home'));
  }, []);

  return <Loader />;
};

export default cpError;
