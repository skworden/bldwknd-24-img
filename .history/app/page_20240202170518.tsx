import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import {WebcamCapture} from "@/components/webcam-capture";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <main className="flex-1 flex flex-col gap-6">
          Camera app
          <WebcamCapture  />
        </main>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by 757 BLDWKND
        </p>
      </footer>
    </div>
  );
}
