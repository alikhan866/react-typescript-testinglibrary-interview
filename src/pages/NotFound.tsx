import React from 'react';
import { RouteComponentProps } from '@reach/router';

const NotFound: React.FC<RouteComponentProps> = (): JSX.Element => {
  return (
    <div>
      <p data-testid="notFound">Not Found Page</p>
    </div>
  );
};

export default NotFound;
