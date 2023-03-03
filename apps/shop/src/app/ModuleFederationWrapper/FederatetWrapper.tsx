import React from 'react';

interface Props {
  children: React.ReactNode;
  delayed: React.ReactNode;
  error?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class FederatedWrapper extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  override componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can also log the error to an error reporting service
    //   logErrorToMyService(error, errorInfo);
  }

  override render(): React.ReactNode {
    if (this.state.hasError) {
      return this.props.error || <div>Something went wrong.</div>;
    }
    return (
      <React.Suspense fallback={this.props.delayed || <div />}>
        {this.props.children}
      </React.Suspense>
    );
  }
}
