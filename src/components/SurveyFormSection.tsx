import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  Upload, 
  Image, 
  Trash2, 
  Send, 
  AlertTriangle, 
  CheckCircle2, 
  Database,
  Building,
  DollarSign,
  Maximize2,
  Calendar,
  ClipboardList
} from 'lucide-react';
import { saveSurveySubmission, isSupabaseConfigured, getLocalSubmissions } from '../lib/supabase';
import { SERVICES } from '../data/mockData';

interface SurveyFormSectionProps {
  preselectedService?: string;
  onClearPreselected?: () => void;
}

export default function SurveyFormSection({ preselectedService, onClearPreselected }: SurveyFormSectionProps) {
  // Form States
  const [nama, setNama] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [alamatProyek, setAlamatProyek] = useState('');
  const [jenisPekerjaan, setJenisPekerjaan] = useState('');
  const [estimasiUkuran, setEstimasiUkuran] = useState('');
  const [budget, setBudget] = useState('');
  const [targetPengerjaan, setTargetPengerjaan] = useState('');
  const [catatan, setCatatan] = useState('');
  
  // File Upload States
  const [file, setFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  // Submission Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSavedToSupabase, setIsSavedToSupabase] = useState(false);
  const [submissionsCount, setSubmissionsCount] = useState(0);

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Set preselected service if selected from Layanan
  useEffect(() => {
    if (preselectedService) {
      setJenisPekerjaan(preselectedService);
    }
  }, [preselectedService]);

  // Load count of local submissions for admin/demo validation
  useEffect(() => {
    setSubmissionsCount(getLocalSubmissions().length);
  }, [submitSuccess]);

  // Handle Drag & Drop Events
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (selectedFile: File) => {
    if (!selectedFile.type.startsWith('image/')) {
      alert('Mohon upload file gambar (PNG, JPG, JPEG, WEBP)');
      return;
    }
    setFile(selectedFile);
    
    // Create live thumbnail preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setFilePreview(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFile(null);
    setFilePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  // Form Submission Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!nama || !whatsapp || !alamatProyek || !jenisPekerjaan) {
      setSubmitError('Nama, No. WhatsApp, Alamat Proyek, dan Jenis Pekerjaan wajib diisi.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    // Prepare data
    const submissionData = {
      nama,
      whatsapp,
      alamat_proyek: alamatProyek,
      jenis_pekerjaan: jenisPekerjaan,
      estimasi_ukuran: estimasiUkuran || 'Tidak disebutkan',
      budget: budget || 'Tidak disebutkan',
      foto_lokasi_url: filePreview || undefined, // Save base64 string as file preview representation
      target_pengerjaan: targetPengerjaan || 'Secepatnya',
      catatan: catatan || 'Tidak ada catatan tambahan',
      created_at: new Date().toISOString()
    };

    try {
      // 1. Save submission data to Supabase (fallbacks to localStorage automatically)
      const res = await saveSurveySubmission(submissionData);
      setIsSavedToSupabase(res.isSupabase && res.success);
      
      // 2. Format a highly-professional WhatsApp message for conversion redirect
      const whatsappBaseUrl = 'https://wa.me/6282245263844'; // Bengkel Las Mleto Satu Surabaya Phone
      const messageText = `Halo Bengkel Las Mleto Satu Surabaya, saya mengajukan survey lokasi dan konsultasi pengerjaan.

📋 *FORM SURVEY & KONSULTASI LAS*
──────────────────────────
👤 *Nama Pelanggan:* ${nama}
📱 *No. WhatsApp:* ${whatsapp}
📍 *Alamat Proyek:* ${alamatProyek}
🛠️ *Jenis Pekerjaan:* ${jenisPekerjaan}
📏 *Estimasi Ukuran:* ${estimasiUkuran || 'Belum diukur'}
💰 *Estimasi Budget:* ${budget || 'Menyesuaikan survey'}
🗓️ *Target Selesai:* ${targetPengerjaan || 'Secepatnya'}
📂 *Foto Lokasi:* ${file ? 'Sertakan foto: ' + file.name : 'Tidak ada foto'}
📝 *Catatan/Kebutuhan:* ${catatan || 'Tidak ada catatan tambahan'}
──────────────────────────
Mohon segera dijadwalkan survey lokasi gratis. Terima kasih!`;

      // 3. Complete Submission Sequence
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Trigger automatic WhatsApp redirect after a small delay
      setTimeout(() => {
        const waUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(messageText)}`;
        window.open(waUrl, '_blank', 'noopener,noreferrer');
        
        // Reset form states
        setNama('');
        setWhatsapp('');
        setAlamatProyek('');
        setJenisPekerjaan('');
        setEstimasiUkuran('');
        setBudget('');
        setTargetPengerjaan('');
        setCatatan('');
        setFile(null);
        setFilePreview(null);
        if (onClearPreselected) onClearPreselected();
        setSubmitSuccess(false);
      }, 2000);

    } catch (err: any) {
      console.error('Submission failed:', err);
      setSubmitError(err.message || 'Terjadi kesalahan teknis saat mengirim data.');
      setIsSubmitting(false);
    }
  };

  return (
    <section id="survey-form" className="py-20 md:py-28 bg-industrial-dark relative overflow-hidden">
      {/* Background industrial grid & glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-safety-orange/40 to-transparent" />
      <div className="absolute -right-1/10 top-1/4 w-96 h-96 bg-safety-orange/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-safety-orange/10 border border-safety-orange/30 px-3 py-1 rounded-full text-xs font-mono text-safety-orange font-semibold uppercase">
            <ClipboardList className="h-3.5 w-3.5" />
            <span>Formulir Survey Lokasi</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight" id="form-title">
            Minta Survey & <span className="text-safety-orange font-bold">Konsultasi Gratis</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
            Wajib mengisi form di bawah ini untuk mengaktifkan tombol konsultasi WhatsApp. Data Anda tersimpan aman dan admin akan segera menjadwalkan kunjungan gratis ke lokasi Anda.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          {/* Subtle top decoration */}
          <div className="absolute top-0 inset-x-12 h-1 bg-gradient-to-r from-transparent via-safety-orange to-transparent" />

          {/* Connection Status Indicator */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-industrial-border/60">
            <div className="flex items-center space-x-2">
              <Database className="h-4 w-4 text-safety-orange" />
              <span className="text-xs font-mono text-gray-400">
                Database Synced: {isSupabaseConfigured ? (
                  <span className="text-green-500 font-semibold">Supabase Cloud</span>
                ) : (
                  <span className="text-yellow-500 font-semibold">Local Storage Safe Backup</span>
                )}
              </span>
            </div>
            {submissionsCount > 0 && (
              <span className="bg-industrial-gray border border-industrial-border px-2 py-1 rounded text-[10px] font-mono text-gray-400">
                Log Submit Anda: {submissionsCount} kali
              </span>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8" id="survey-form-el">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field: Nama */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                  Nama Lengkap <span className="text-safety-orange">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                  className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans"
                  id="form-nama"
                />
              </div>

              {/* Field: WhatsApp */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                  Nomor WhatsApp Aktif <span className="text-safety-orange">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="Contoh: 081234567890"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans"
                  id="form-whatsapp"
                />
              </div>

              {/* Field: Jenis Pekerjaan Select Dropdown */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display flex items-center justify-between">
                  <span>Jenis Pekerjaan Las <span className="text-safety-orange">*</span></span>
                  {preselectedService && (
                    <button 
                      type="button" 
                      onClick={onClearPreselected}
                      className="text-[10px] text-safety-orange hover:underline normal-case font-mono"
                    >
                      Reset Pilihan
                    </button>
                  )}
                </label>
                <div className="relative">
                  <select
                    required
                    value={jenisPekerjaan}
                    onChange={(e) => setJenisPekerjaan(e.target.value)}
                    className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none transition-all font-sans appearance-none"
                    id="form-jenis-pekerjaan"
                  >
                    <option value="" disabled className="text-gray-600">-- Pilih Layanan Pekerjaan --</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title} className="bg-industrial-card text-white">
                        {s.title} ({s.category})
                      </option>
                    ))}
                    <option value="Proyek Fabrikasi Custom Lainnya" className="bg-industrial-card text-white">Fabrikasi Custom Lainnya</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                    <Building className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Field: Estimasi Ukuran */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                  Estimasi Ukuran / Volume Pengerjaan
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Contoh: Pagar 3m x 1.8m, atau Luas Atap 40m²"
                    value={estimasiUkuran}
                    onChange={(e) => setEstimasiUkuran(e.target.value)}
                    className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl pl-4 pr-10 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans"
                    id="form-ukuran"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                    <Maximize2 className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Field: Budget */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                  Estimasi Alokasi Anggaran (Budget)
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Contoh: Rp 5 Juta - Rp 10 Juta, atau Menyesuaikan"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl pl-4 pr-10 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans"
                    id="form-budget"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                    <DollarSign className="h-4 w-4" />
                  </div>
                </div>
              </div>

              {/* Field: Target Pengerjaan */}
              <div className="space-y-2">
                <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                  Target Selesai / Pengerjaan
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Contoh: Secepatnya, Bulan ini, atau Tanggal tertentu"
                    value={targetPengerjaan}
                    onChange={(e) => setTargetPengerjaan(e.target.value)}
                    className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl pl-4 pr-10 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans"
                    id="form-target"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                    <Calendar className="h-4 w-4" />
                  </div>
                </div>
              </div>

            </div>

            {/* Field: Alamat Proyek */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                Alamat Lengkap Lokasi Proyek / Pemasangan <span className="text-safety-orange">*</span>
              </label>
              <textarea
                required
                rows={2}
                placeholder="Tuliskan nama jalan, nomor rumah/ruko, cluster perumahan, kelurahan, kecamatan, dan kota (Surabaya/Sidoarjo/Gresik)"
                value={alamatProyek}
                onChange={(e) => setAlamatProyek(e.target.value)}
                className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans resize-none"
                id="form-alamat"
              />
            </div>

            {/* Field: Upload Foto Lokasi (Click & Drag Zone with previews) */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                Upload Foto Kondisi Lokasi Saat Ini (Sangat Direkomendasikan)
              </label>
              
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={triggerFileSelect}
                className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 relative ${
                  isDragging 
                    ? 'border-safety-orange bg-safety-orange/5' 
                    : 'border-industrial-border bg-industrial-dark/55 hover:border-safety-orange/40 hover:bg-industrial-gray/20'
                }`}
                id="form-upload-zone"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  accept="image/*"
                  className="hidden"
                />

                <AnimatePresence mode="wait">
                  {!filePreview ? (
                    <motion.div
                      key="upload-prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      <div className="mx-auto h-12 w-12 rounded-xl bg-industrial-gray border border-industrial-border flex items-center justify-center text-gray-400 group-hover:text-safety-orange">
                        <Upload className="h-6 w-6 text-safety-orange" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">Drag & drop foto lokasi di sini, atau <span className="text-safety-orange">klik untuk memilih</span></p>
                        <p className="text-xs text-gray-500 mt-1">Mendukung format gambar PNG, JPG, JPEG, atau WEBP (Maksimal 10MB)</p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="file-preview"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col sm:flex-row items-center gap-6 text-left"
                      onClick={(e) => e.stopPropagation()} // Stop click on zone
                    >
                      {/* Image Thumbnail Preview */}
                      <div className="h-28 w-32 rounded-xl overflow-hidden border border-industrial-border bg-black shrink-0 relative group/thumb">
                        <img 
                          src={filePreview} 
                          alt="Lokasi proyek" 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity flex items-center justify-center">
                          <Image className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      {/* File Details */}
                      <div className="flex-1 space-y-1.5 w-full min-w-0">
                        <div className="flex items-center space-x-2 text-safety-orange">
                          <CheckCircle2 className="h-4 w-4" />
                          <span className="text-xs font-mono font-bold uppercase tracking-wider">Foto Berhasil Dimuat</span>
                        </div>
                        <h4 className="text-sm font-bold text-white truncate">{file?.name}</h4>
                        <p className="text-xs text-gray-500 font-mono">
                          Ukuran: {file ? (file.size / (1024 * 1024)).toFixed(2) : 0} MB
                        </p>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="text-xs text-red-400 hover:text-red-300 font-bold flex items-center space-x-1 py-1 px-2.5 rounded-lg bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 transition-all cursor-pointer mt-2"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Hapus Gambar</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Field: Catatan Tambahan */}
            <div className="space-y-2">
              <label className="block text-xs sm:text-sm font-semibold text-gray-200 uppercase tracking-wider font-display">
                Catatan Tambahan / Spesifikasi Khusus Yang Diinginkan
              </label>
              <textarea
                rows={3}
                placeholder="Tuliskan spesifikasi detail jika ada (Contoh: Pagar harus memakai hollow galvanis tebal 1.4mm, atap kanopi harus merek Alderon original warna putih doff, dll.)"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                className="w-full bg-industrial-dark border border-industrial-border focus:border-safety-orange focus:ring-1 focus:ring-safety-orange rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none transition-all font-sans resize-none"
                id="form-catatan"
              />
            </div>

            {/* Error / Success Notifications */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-red-500/10 border border-red-500/30 text-red-200 p-4 rounded-xl flex items-start space-x-3 text-sm"
                  id="form-error-alert"
                >
                  <AlertTriangle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Pendaftaran Gagal:</span> {submitError}
                  </div>
                </motion.div>
              )}

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-green-500/10 border border-green-500/30 text-green-200 p-4 rounded-xl flex items-start space-x-3 text-sm"
                  id="form-success-alert"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold">Berhasil Tersimpan!</span> Data formulir pendaftaran survey Anda berhasil tersimpan secara aman {isSavedToSupabase ? 'di Supabase Database' : 'secara lokal'}. <br />
                    <span className="text-xs text-green-300 font-mono mt-1 block">Membuka WhatsApp untuk pengiriman detail ke Admin Mleto Satu...</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Core Action Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full font-display font-bold py-4 px-8 rounded-xl flex items-center justify-center space-x-3 tracking-wider text-sm sm:text-base uppercase transition-all duration-300 cursor-pointer ${
                  isSubmitting || submitSuccess
                    ? 'bg-industrial-gray text-gray-500 border border-industrial-border cursor-not-allowed'
                    : 'bg-safety-orange hover:bg-safety-dark text-white orange-glow-strong hover:scale-[1.02]'
                }`}
                id="form-submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />
                    <span>MEMPROSES PENDAFTARAN & SYNC DATA...</span>
                  </>
                ) : submitSuccess ? (
                  <>
                    <CheckCircle2 className="h-5 w-5 animate-bounce" />
                    <span>DIALIKHAN KE WHATSAPP SECARA OTOMATIS...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    <span>SIMPAN DATA & CHAT WHATSAPP SEKARANG</span>
                  </>
                )}
              </button>
              <p className="text-[10px] text-center text-gray-500 font-mono mt-3">
                * Dengan menekan tombol, data Anda akan di-backup ke database Supabase dan dialihkan otomatis ke API WhatsApp Mleto Satu Surabaya.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
