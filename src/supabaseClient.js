import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://umoxictzgfmnenrbqsma.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyNzI4NTU2NiwiZXhwIjoxOTQyODYxNTY2fQ.8CqoQgZIC8xZEhrz3gHV6Td5Ktk5EcOZ4BWBuW0xVRI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
