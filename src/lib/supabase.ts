import { createClient } from '@supabase/supabase-js';

// @ts-ignore
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
// @ts-ignore
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Saves a survey submission.
 * Fallbacks to localStorage if Supabase is not configured yet.
 */
export async function saveSurveySubmission(data: {
  nama: string;
  whatsapp: string;
  alamat_proyek: string;
  jenis_pekerjaan: string;
  estimasi_ukuran: string;
  budget: string;
  foto_lokasi_url?: string;
  target_pengerjaan: string;
  catatan: string;
  created_at: string;
}) {
  if (isSupabaseConfigured && supabase) {
    try {
      const { data: result, error } = await supabase
        .from('survey_submissions')
        .insert([data])
        .select();
      
      if (error) {
        console.error('Error inserting into Supabase:', error);
        // Fallback to localStorage on error as safety
        saveToLocalStorage(data);
        return { success: false, error: error.message, isSupabase: true };
      }
      return { success: true, data: result, isSupabase: true };
    } catch (err: any) {
      console.error('Failed to submit to Supabase:', err);
      saveToLocalStorage(data);
      return { success: false, error: err.message || 'Unknown network error', isSupabase: true };
    }
  } else {
    // If Supabase keys are missing, store locally and return success
    saveToLocalStorage(data);
    return { success: true, isSupabase: false };
  }
}

function saveToLocalStorage(data: any) {
  try {
    const existing = localStorage.getItem('bengkel_las_submissions');
    const list = existing ? JSON.parse(existing) : [];
    list.unshift(data); // Add newest first
    localStorage.setItem('bengkel_las_submissions', JSON.stringify(list));
  } catch (err) {
    console.error('LocalStorage write error:', err);
  }
}

export function getLocalSubmissions(): any[] {
  try {
    const existing = localStorage.getItem('bengkel_las_submissions');
    return existing ? JSON.parse(existing) : [];
  } catch {
    return [];
  }
}
