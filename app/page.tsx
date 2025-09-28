"use client";
import "./styles/UserProfile.css";

import UserProfile from "./components/UserProfile";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TULogo from './lib/images/tu-logo.png'
import Image from "next/image";



function Home() {

  const queryClient = new QueryClient();

  return (
   <>
    <div className="header-nav">
        <div className="app-title">
           <h1>TURandom</h1>
        </div>
        <div className="logo">
            <Image src={TULogo} alt='' width={300} height={100}/>
        </div>
        <div className="dev-name">
            <h2>Denzel Mabilangan</h2>
        </div>
    </div>

        <QueryClientProvider client = {queryClient}>
            <UserProfile />
        </QueryClientProvider>

   </>
  );
}

export default Home;
