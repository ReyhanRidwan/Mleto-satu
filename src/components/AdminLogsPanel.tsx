import React, { useState, useEffect } from 'react';
import { getLocalSubmissions, isSupabaseConfigured } from '../lib/supabase';
import { Database, Eye, Trash2, Calendar, ClipboardCheck, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AdminLogsPanel() {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSub, setSelectedSub] = useState<any | null>(null);

  const loadSubmissions = () => {
    setSubmissions(getLocalSubmissions());
  };

  useEffect(() => {
    loadSubmissions();
    // Set up small interval to check for new records
    const interval = setInterval(loadSubmissions, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleClearLogs = () => {
    if (window.confirm('Apakah Anda yakin ingin menghapus semua log survey di browser ini?')) {
      localStorage.removeItem('bengkel_las_submissions');
      loadSubmissions();
      setSelectedSub(null);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 relative z-10" id="admin-logs-section">
      <div className="border border-industrial-border bg-industrial-card/40 rounded-2xl p-4 sm:p-6">
        
        {/* Accordion Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between text-left gap-4 cursor-pointer focus:outline-none"
          id="admin-logs-trigger"
        >
          <div className="space-y-1">
            <h3 className="font-display font-bold text-sm text-white flex items-center gap-2">
              <Database className="h-4 w-4 text-safety-orange" />
              <span>Database Submissions Viewer (Admin Console)</span>
            </h3>
            <p className="text-xs text-gray-500 font-mono">
              Gunakan panel ini untuk memverifikasi penyimpanan data formulir sebelum dikirim ke WhatsApp.
            </p>
          </div>
          <div className="flex items-center space-x-3 self-start sm:self-center">
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
              isSupabaseConfigured 
                ? 'bg-green-500/10 border-green-500/30 text-green-400' 
                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
            }`}>
              {isSupabaseConfigured ? 'LIVE SYNC ENABLED' : 'LOCAL BACKUP VIEW'}
            </span>
            <span className="text-xs text-safety-orange hover:underline font-semibold uppercase font-mono">
              {isOpen ? 'Sembunyikan Panel [-]' : `Buka Panel (${submissions.length} logs) [+]`}
            </span>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-6 pt-6 border-t border-industrial-border/60 space-y-6"
            >
              {submissions.length === 0 ? (
                <div className="text-center py-8 bg-industrial-dark border border-industrial-border/40 rounded-xl">
                  <ClipboardCheck className="h-8 w-8 text-gray-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-400 font-mono">Belum ada data pendaftaran survey yang masuk.</p>
                  <p className="text-xs text-gray-500 font-mono mt-1">Silakan coba isi Formulir Survey di atas untuk mencobanya!</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Submissions Table List */}
                  <div className="lg:col-span-7 space-y-3 max-h-[350px] overflow-y-auto pr-2">
                    <div className="flex items-center justify-between text-xs font-mono text-gray-500 pb-1">
                      <span>DAFTAR SUBMISSION ({submissions.length})</span>
                      <button
                        onClick={handleClearLogs}
                        className="text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                      >
                        <Trash2 className="h-3 w-3" />
                        <span>Hapus Semua</span>
                      </button>
                    </div>

                    {submissions.map((sub, idx) => (
                      <div
                        key={idx}
                        onClick={() => setSelectedSub(sub)}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          selectedSub === sub
                            ? 'bg-safety-orange/10 border-safety-orange/50 text-white'
                            : 'bg-industrial-dark border-industrial-border/60 hover:border-safety-orange/30 text-gray-300'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="font-bold text-sm truncate">{sub.nama}</h4>
                          <span className="text-[10px] font-mono text-gray-500">
                            {new Date(sub.created_at).toLocaleTimeString('id-ID')}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-xs text-gray-400 font-mono truncate max-w-[180px]">
                            {sub.jenis_pekerjaan}
                          </p>
                          <span className="text-[10px] font-semibold text-safety-orange bg-safety-orange/10 px-2 py-0.5 rounded font-mono">
                            {sub.budget}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Submission Details Sheet */}
                  <div className="lg:col-span-5 bg-industrial-dark border border-industrial-border rounded-xl p-5 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-safety-orange uppercase tracking-wider">
                      Detail Record Survey
                    </h4>

                    {selectedSub ? (
                      <div className="space-y-4 text-xs">
                        <div className="grid grid-cols-2 gap-3 pb-3 border-b border-industrial-border/60 font-sans">
                          <div>
                            <span className="text-gray-500 block font-mono text-[10px]">NAMA</span>
                            <span className="font-bold text-white text-sm block">{selectedSub.nama}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block font-mono text-[10px]">WHATSAPP</span>
                            <span className="font-bold text-white text-sm block">{selectedSub.whatsapp}</span>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pb-3 border-b border-industrial-border/60">
                          <div>
                            <span className="text-gray-500 block font-mono text-[10px]">LAYANAN</span>
                            <span className="font-semibold text-white block">{selectedSub.jenis_pekerjaan}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block font-mono text-[10px]">BUDGET</span>
                            <span className="font-semibold text-safety-orange block">{selectedSub.budget}</span>
                          </div>
                        </div>

                        <div className="pb-3 border-b border-industrial-border/60">
                          <span className="text-gray-500 block font-mono text-[10px]">ALAMAT PROYEK</span>
                          <span className="text-gray-200 block leading-relaxed">{selectedSub.alamat_proyek}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 pb-3 border-b border-industrial-border/60">
                          <div>
                            <span className="text-gray-500 block font-mono text-[10px]">TARGET SELESAI</span>
                            <span className="text-gray-300 font-medium block">{selectedSub.target_pengerjaan}</span>
                          </div>
                          <div>
                            <span className="text-gray-500 block font-mono text-[10px]">TANGGAL SUBMIT</span>
                            <span className="text-gray-400 font-mono block">
                              {new Date(selectedSub.created_at).toLocaleDateString('id-ID')}
                            </span>
                          </div>
                        </div>

                        <div>
                          <span className="text-gray-500 block font-mono text-[10px]">CATATAN KHUSUS</span>
                          <p className="text-gray-300 leading-relaxed italic">{selectedSub.catatan}</p>
                        </div>

                        {selectedSub.foto_lokasi_url && (
                          <div className="space-y-1.5 pt-2">
                            <span className="text-gray-500 block font-mono text-[10px]">ATTACHED FOTO PRALINJAU</span>
                            <div className="h-32 w-full rounded-lg overflow-hidden border border-industrial-border">
                              <img
                                src={selectedSub.foto_lokasi_url}
                                alt="Pratinjau Foto Lokasi"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="text-center py-12 text-gray-500">
                        <Eye className="h-6 w-6 mx-auto mb-2 opacity-40 text-safety-orange" />
                        <p className="font-mono text-xs">Pilih salah satu record survey untuk melihat detail data tersimpan.</p>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
