"use client";
import "./styles/UserProfile.css";

import UserProfile from "./components/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



function Home() {

  const queryClient = new QueryClient();

  return (
   <>
    <div className="header-nav">
        <div className="app-title">
           <h1>User Randomizer</h1>
        </div>
        <div className="dev-name">
            <h3>Denzel Mabilangan</h3>
        </div>
    </div>

        <QueryClientProvider client = {queryClient}>
            <UserProfile />
        </QueryClientProvider>

   </>
  );
}

export default Home;
