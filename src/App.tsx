import React from "react";
import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/mainRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./global/store";
import { Provider } from "react-redux";
let persistor = persistStore(store);
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

const App = () => {
  return (
    <div>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={mainRoute} />
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </div>
  );
};

export default App;
