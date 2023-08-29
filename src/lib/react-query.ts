import { QueryClient, QueryClientConfig } from '@tanstack/react-query';

const queryConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
};

const queryClient = new QueryClient(queryConfig);

export default queryClient;
