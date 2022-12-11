import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://anerznxazdnmkryaywbn.supabase.co';
const supakey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supakey);