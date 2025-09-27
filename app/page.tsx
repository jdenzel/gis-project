"use client";

import UserProfile from "./components/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function Home() {

  const queryClient = new QueryClient();

  return (
   <>
    <div className="header-nav">
        <div className="app-title">Towson Student Randomize</div>
        <div className="dev-name">Denzel Mabilangan</div>
    </div>

        <QueryClientProvider client = {queryClient}>
          <UserProfile />
        </QueryClientProvider>

   </>
  );
}

export default Home;
