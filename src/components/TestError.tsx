import React from 'react';

const TestError = (): JSX.Element => {
  // Uncomment the line below to test the error boundary
  // throw new Error();

  return (
    <div>
      <p data-testid="errorTest">Looks good</p>
    </div>
  );
};

export default TestError;
