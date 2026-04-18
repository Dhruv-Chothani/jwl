import { createFileRoute } from "@tanstack/react-router";

// All routing handled by react-router-dom in src/App.tsx (mounted at root).
// This file exists only to satisfy the TanStack file-router during the Lovable
// preview build. The catch-all below ensures any path renders the SPA.
export const Route = createFileRoute("/")({
  component: () => null,
});
