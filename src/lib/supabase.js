import { createClient } from "@supabase/supabase-js";
//import dotenv from 'dotenv'

//dotenv.config()

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL
export const SUPABASE_PUBLIC_KEY = import.meta.env.VITE_SUPABASE_KEY

//let {VITE_SUPABASE_URL,VITE_SUPABASE_KEY} = process.env

const supabase = createClient(SUPABASE_URL,SUPABASE_PUBLIC_KEY)

export default supabase