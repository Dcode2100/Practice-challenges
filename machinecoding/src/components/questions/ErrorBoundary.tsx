import React, { Component, ErrorInfo, ReactNode } from "react"
import { ErrorBoundary as LibraryErrorBoundary, FallbackProps } from "react-error-boundary"

type State = {
  hasError: boolean
  error: Error | null
}

type Props = {
  fallback?: ReactNode
  children?: ReactNode
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) return this.props.fallback || <h2>Something went wrong.</h2>
    return this.props.children
  }
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert">
      <h2>Something went wrong:</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export function ErrorBoundaryExample({ children }: { children?: ReactNode }) {
  return (
    <LibraryErrorBoundary
      FallbackComponent={ErrorFallback}
      onError={(error, errorInfo) => {
        console.log("Error:", error, errorInfo)
      }}
      onReset={() => {}}
    >
      {children}
    </LibraryErrorBoundary>
  )
}


