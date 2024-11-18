import { useState, useEffect } from "react";
import { ErrorBoundary } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header} from "../components/Header";
import { Hero } from "../components/Hero";
import { Tutorial} from "../components/Tutorial";
import { Testimonials } from "../components/Testimonials";
import { Combos } from "../components/Combos";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/tutorial.css";
import "../styles/contact.css";
import "../styles/testimonials.css";
import "../styles/combos.css";
import "../styles/footer.css";

const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
  return (
    <div role="alert" className="error-container">
      <h2>Deu ruim</h2>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (showMobileMenu) {
      body.style.overflow = "hidden";
      body.style.position = "fixed";
      body.style.width = "100%";
    } else {
      body.style.overflow = "auto";
      body.style.position = "static";
    }

    return () => {
      body.style.overflow = "auto";
      body.style.position = "static";
    };
  }, [showMobileMenu]);

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback}
      onReset={() => {
        queryClient.clear();
      }}
    >
      <QueryClientProvider client={queryClient}>
      <Header showMobileMenu={showMobileMenu} setShowMobileMenu={setShowMobileMenu} />
      <Hero/>
      <Tutorial/>
      <Testimonials/>
      <Combos/>
      <Contact/>
      <Footer/>
    </QueryClientProvider>
    </ErrorBoundary>
  );
}