"use client";

import UserProfile from "./components/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Home() {

  const queryClient = new QueryClient();

  return (
   <>
    <div className="header-nav">
        <div className="app-title"></div>
        <div className="dev-name"></div>

        <QueryClientProvider client = {queryClient}>
          <UserProfile />
        </QueryClientProvider>
      </div>
   </>

   
  );
}

export default Home;
