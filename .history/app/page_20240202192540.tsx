import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { WebcamCapture } from "@/components/webcam-capture";

const home = () => <WebcamCapture />;
export default home;
