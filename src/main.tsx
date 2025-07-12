import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClientProvider } from '@tanstack/react-query';

import App from './App.tsx';

import { queryClient } from '@/api/queryClient.ts';
import { store } from '@/store/store.ts';
import GlobalStyle from '@/styles/global.ts';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
);
