import { RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen p-8 bg-light-grey">
          <div className="flex flex-col items-center w-full max-w-lg text-center">
            <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">
              Something went wrong
            </p>
            <h2 className="text-3xl text-charcoal  mb-4">
              An unexpected error occurred
            </h2>
            <p className="text-charcoal/60 mb-8">
              We are sorry about that. Please try reloading the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-white font-semibold rounded-lg hover:bg-forest-light transition-all duration-200 shadow-md text-sm cursor-pointer"
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
