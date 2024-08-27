import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "react-error-boundary";
import Fallback, { errorHandler } from "./Utils/Fallback.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<div>Loading.....</div>}>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={Fallback} onError={errorHandler}>
          <App />
        </ErrorBoundary>
      </BrowserRouter>
    </Suspense>
  </StrictMode>
);
