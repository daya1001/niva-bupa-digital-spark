// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jsyskfxpjaipqoknzfwu.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzeXNrZnhwamFpcHFva256Znd1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1MDg1NTUsImV4cCI6MjA2MjA4NDU1NX0.yvfCBj5_z_AcTc7h87Is2bX3WHWJVo2kGI2WPSsmPrI";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);