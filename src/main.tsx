import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { StrictMode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
    },
  },
});

const root = createRoot(document.getElementById("root")!);

// DevTools'u sadece development modunda yükle
if (process.env.NODE_ENV === "development") {
  const { ReactQueryDevtools } = await import("@tanstack/react-query-devtools");

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>
  );
} else {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
}
