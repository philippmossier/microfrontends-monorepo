import React from 'react';
import FederatedWrapper from './FederatetWrapper';

interface FederatedWrapperProps {
  delayed: React.ReactNode;
  error?: React.ReactNode;
}

const wrapComponent =
  (Component: React.LazyExoticComponent<React.ComponentType<any>>) =>
  ({ error, delayed, ...props }: FederatedWrapperProps) =>
    (
      <FederatedWrapper error={error} delayed={delayed}>
        <Component {...props} />
      </FederatedWrapper>
    );

export default wrapComponent;
