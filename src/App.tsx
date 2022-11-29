import { QueryClient } from "@tanstack/react-query";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home, { homeLoader } from "./routes/Home";
import MainLayout from "./layouts/MainLayout";
import { ResultsPage } from "./routes/ResultsPage";
import { Routes } from "./routes/Routes";

export const queryClient = new QueryClient();
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});
const routes = createBrowserRouter([
  {
    path: Routes.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader(queryClient),
      },
      {
        path: Routes.RESULTS,
        element: <ResultsPage />,
      },
    ],
  },
]);

function App() {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <div className="App">
        <RouterProvider router={routes} />
      </div>
      <ReactQueryDevtools />
    </PersistQueryClientProvider>
  );
}

export default App;
