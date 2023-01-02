import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supakey = process.env.SUPABASE_KEY;

if(!supabaseUrl) throw console.error('Missing supabase url.');
export const supabase = createClient(supabaseUrl, supakey);