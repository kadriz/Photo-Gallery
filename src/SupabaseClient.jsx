import { createClient } from "@supabase/supabase-js";
const supabaseURL=process.env.REACT_APP_SUPABASE_URL
const supabaseAnonKey=process.env.REACT_APP_SUPABASE_ANONKEY

export const supabase=createClient(supabaseURL,supabaseAnonKey)