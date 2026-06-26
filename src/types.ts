export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  image?: string;
}

export interface Advantage {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  date: string;
  avatar: string;
}

export interface WorkStep {
  step: number;
  title: string;
  description: string;
  subText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SurveyForm {
  nama: string;
  whatsapp: string;
  alamatProyek: string;
  jenisPekerjaan: string;
  estimasiUkuran: string;
  budget: string;
  fotoLokasi: File | null;
  fotoLokasiBase64?: string; // Stored to Supabase or for simulation
  targetPengerjaan: string;
  catatan: string;
}
