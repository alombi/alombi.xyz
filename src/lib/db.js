import { createClient } from "@supabase/supabase-js";
let supabaseUrl, supabaseKey;

if (process.env.NODE_ENV === 'development') {
   // For development
   supabaseUrl = import.meta.env.VITE_SUPABASE_URL,
   supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
} else {
   // For production
   supabaseUrl = process.env.SUPABASE_URL;
   supabaseKey = process.env.SUPABASE_ANON_KEY;
}

const supabase = createClient(
   supabaseUrl,
   supabaseKey
)

export default supabase