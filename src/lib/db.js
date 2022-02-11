import { createClient } from "@supabase/supabase-js";

if (process.env.NODE_ENV === 'production') {
   // For production
   supabaseUrl = process.env.SUPABASE_URL;
   supabaseKey = process.env.SUPABASE_ANON_KEY;
} else {
   // For development
   supabaseUrl = import.meta.env.VITE_SUPABASE_URL,
   supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
}

const supabase = createClient(
   supabaseUrl,
   supabaseKey
)

export default supabase