import { Service, Advantage, PortfolioItem, Testimonial, WorkStep, FAQItem } from '../types';

export const SERVICES: Service[] = [
  {
    id: 'pagar-besi',
    title: 'Pagar Besi Minimalis',
    description: 'Pagar geser, pagar lipat, dan pagar tempa minimalis modern yang kokoh, anti karat, dan memperindah fasad bangunan Anda.',
    category: 'Pagar',
    image: '/images/pemasangan_pagar_1782482684484.jpg'
  },
  {
    id: 'kanopi-besi',
    title: 'Kanopi Besi',
    description: 'Kanopi dengan rangka besi hollow tebal dipadukan dengan atap polycarbonate, tempered glass, spandek, maupun alderon berkualitas tinggi.',
    category: 'Kanopi',
    image: '/images/kanopi_besi_1782482784348.jpg'
  },
  {
    id: 'tangga-besi',
    title: 'Tangga Besi',
    description: 'Tangga rebah, tangga putar, tangga layang, dan tangga darurat dengan material baja kokoh berlapis powder coating anti-slip.',
    category: 'Tangga',
    image: '/images/tangga_besi_1782482757784.jpg'
  },
  {
    id: 'railing-tangga',
    title: 'Railing Tangga',
    description: 'Railing pengaman tangga indoor dan outdoor dengan desain minimalis industrial yang memberikan keamanan ekstra dan estetika tinggi.',
    category: 'Railing',
    image: '/images/railing_balkon_1782482803962.jpg'
  },
  {
    id: 'balkon-besi',
    title: 'Balkon Besi',
    description: 'Pembuatan balkon luar untuk lantai atas rumah, kantor, atau cafe dengan struktur pengaman besi solid berlapis cat premium.',
    category: 'Railing'
  },
  {
    id: 'tralis',
    title: 'Tralis Jendela',
    description: 'Tralis pengaman jendela dan pintu dengan berbagai motif minimalis untuk meningkatkan sistem keamanan properti Anda.',
    category: 'Pagar'
  },
  {
    id: 'pintu-besi',
    title: 'Pintu Besi',
    description: 'Pintu ruko, pintu garasi, dan pintu utama berbahan plat besi tebal yang kuat dari upaya pembobolan paksa.',
    category: 'Pagar'
  },
  {
    id: 'folding-gate',
    title: 'Folding Gate',
    description: 'Folding gate dan rolling door kokoh untuk keamanan ekstra toko, ruko, garasi, dan gudang komersial.',
    category: 'Pagar'
  },
  {
    id: 'bracket-tv',
    title: 'Bracket TV Heavy-Duty',
    description: 'Instalasi bracket TV dinding dan bracket gantung custom untuk layar ukuran besar di perumahan, cafe, maupun ruang rapat.',
    category: 'Bracket TV',
    image: '/images/bracket_tv_1782482700916.jpg'
  },
  {
    id: 'rak-besi',
    title: 'Rak Besi Custom',
    description: 'Rak industrial premium, display produk cafe/toko, rak pajangan, dan meja kerja berbahan kombinasi besi hollow dan kayu solid.',
    category: 'Proyek Gedung'
  },
  {
    id: 'struktur-baja-ringan',
    title: 'Struktur Baja Ringan',
    description: 'Konstruksi rangka atap baja ringan berstandar SNI untuk rumah, gudang, ruko, dengan garansi kekuatan struktur.',
    category: 'Struktur Baja'
  },
  {
    id: 'rangka-gudang',
    title: 'Rangka Besi Gudang',
    description: 'Fabrikasi dan instalasi konstruksi kolom baja WF/H-beam untuk pembangunan gudang skala kecil, menengah, hingga industri.',
    category: 'Struktur Baja',
    image: '/images/hero_banner_1782482666454.jpg'
  },
  {
    id: 'pasang-videotron',
    title: 'Pemasangan Videotron',
    description: 'Pembuatan konstruksi bracket dan tiang penyangga layar LED Videotron indoor maupun outdoor berukuran besar.',
    category: 'Videotron',
    image: '/images/struktur_videotron_1782482719706.jpg'
  },
  {
    id: 'billboard-led',
    title: 'Billboard LED Structure',
    description: 'Konstruksi billboard reklame jalanan berskala besar dengan perhitungan beban angin, pondasi beton cakar ayam, dan tiang baja kokoh.',
    category: 'Billboard',
    image: '/images/billboard_digital_1782482738433.jpg'
  },
  {
    id: 'welding-repair',
    title: 'Welding Repair',
    description: 'Jasa perbaikan las panggilan untuk pagar patah, kanopi bocor/miring, tangga keropos, langsung dikerjakan di lokasi Anda.',
    category: 'Proyek Gedung'
  },
  {
    id: 'fabrikasi-custom',
    title: 'Fabrikasi Custom',
    description: 'Pengerjaan aneka kreasi besi sesuai gambar kerja (CAD/3D) untuk kebutuhan arsitektur khusus dan industrial modern.',
    category: 'Proyek Gedung',
    image: '/images/workshop_1782482821577.jpg'
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    id: 'ahli',
    title: 'Tenaga Ahli Berpengalaman',
    description: 'Tim kami terdiri dari tukang las bersertifikat dengan pengalaman bertahun-tahun di proyek komersial dan residensial.',
    iconName: 'UserCheck'
  },
  {
    id: 'material',
    title: 'Material Berkualitas',
    description: 'Hanya menggunakan besi hollow tebal, baja WF berkualitas SNI, cat anti-karat premium, dan elektroda las bersertifikat.',
    iconName: 'Shield'
  },
  {
    id: 'presisi',
    title: 'Hasil Presisi & Rapi',
    description: 'Proses pemotongan besi bersudut tajam, las-lasan penuh (bukan sekadar titik), di-gerinda sangat halus hingga rata sempurna.',
    iconName: 'Cpu'
  },
  {
    id: 'transparan',
    title: 'Harga Transparan',
    description: 'Rincian Rencana Anggaran Biaya (RAB) tertulis jelas tanpa ada biaya tersembunyi. Sesuai dengan spesifikasi material terpilih.',
    iconName: 'DollarSign'
  },
  {
    id: 'survey',
    title: 'Survey Gratis',
    description: 'Layanan survey lokasi, pengukuran detail lapangan, dan konsultasi desain 100% gratis untuk wilayah Surabaya & Sidoarjo.',
    iconName: 'Compass'
  },
  {
    id: 'garansi',
    title: 'Bergaransi',
    description: 'Kami memberikan jaminan garansi perawatan pasca-instalasi terhadap korosi, kekuatan las, maupun kebocoran atap kanopi.',
    iconName: 'Award'
  },
  {
    id: 'waktu',
    title: 'Tepat Waktu',
    description: 'Pengerjaan sesuai dengan jadwal time-schedule yang disepakati bersama demi kelancaran pembangunan proyek Anda.',
    iconName: 'Clock'
  },
  {
    id: 'skala',
    title: 'Semua Skala Proyek',
    description: 'Melayani pengerjaan skala kecil (bracket TV, railing tangga rumah) hingga konstruksi baja pabrik, gudang, dan billboard videotron.',
    iconName: 'Layers'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'Pagar Besi Minimalis Modern Perumahan Citraland',
    category: 'Pagar',
    description: 'Pengerjaan pagar besi lipat minimalis modern dengan finishing powder coating anti karat warna hitam doff.',
    image: '/images/pemasangan_pagar_1782482684484.jpg'
  },
  {
    id: 'p2',
    title: 'Kanopi Kaca Tempered Kombinasi Rangka Besi',
    category: 'Kanopi',
    description: 'Desain kanopi modern berukuran lebar menggunakan besi hollow 5x10 tebal dengan atap kaca tempered laminate di Surabaya Timur.',
    image: '/images/kanopi_besi_1782482784348.jpg'
  },
  {
    id: 'p3',
    title: 'Railing Tangga & Balkon Industrial Minimalis',
    category: 'Railing',
    description: 'Pemasangan railing pengaman tangga rumah tingkat minimalis di kawasan Graha Famili Surabaya Barat.',
    image: '/images/railing_balkon_1782482803962.jpg'
  },
  {
    id: 'p4',
    title: 'Tangga Besi Putar Kombinasi Pijakan Kayu Jati',
    category: 'Tangga',
    description: 'Instalasi tangga melingkar berbahan plat baja solid dipadukan dengan pijakan kayu jati solid yang di-coating natural.',
    image: '/images/tangga_besi_1782482757784.jpg'
  },
  {
    id: 'p5',
    title: 'Pemasangan Bracket TV Heavy-Duty Dinding Cafe',
    category: 'Bracket TV',
    description: 'Instalasi bracket TV gantung besi hollow custom berputar 360 derajat untuk 4 monitor TV 65-inci di Cafe Surabaya Pusat.',
    image: '/images/bracket_tv_1782482700916.jpg'
  },
  {
    id: 'p6',
    title: 'Rangka Baja Penyangga Layar LED Videotron Outdoor',
    category: 'Videotron',
    description: 'Konstruksi scaffolding besi and balok baja tebal penopang Videotron raksasa di perempatan jalan arteri Surabaya.',
    image: '/images/struktur_videotron_1782482719706.jpg'
  },
  {
    id: 'p7',
    title: 'Struktur Billboard Digital Raksasa Komersial',
    category: 'Billboard',
    description: 'Pekerjaan sipil dan fabrikasi baja pipa besar setinggi 12 meter untuk billboard digital komersial di pinggir jalan raya.',
    image: '/images/billboard_digital_1782482738433.jpg'
  },
  {
    id: 'p8',
    title: 'Konstruksi Baja WF Rangka Gudang Distribusi',
    category: 'Struktur Baja',
    description: 'Fabrikasi dan erection balok baja WF 250 untuk struktur gudang ekspedisi logistik dengan bentang lebar tanpa tiang tengah.',
    image: '/images/hero_banner_1782482666454.jpg'
  },
  {
    id: 'p9',
    title: 'Fabrikasi Rak dan Meja Kerja Industrial Modern',
    category: 'Proyek Gedung',
    description: 'Desain dan produksi perabotan bertema industrial menggunakan kombinasi besi siku tebal dan panel kayu solid di workshop Mleto.',
    image: '/images/workshop_1782482821577.jpg'
  }
];

export const WORK_STEPS: WorkStep[] = [
  {
    step: 1,
    title: 'Konsultasi Gratis',
    description: 'Diskusikan kebutuhan proyek Anda dengan tim arsitek dan tukang las kami. Kami bantu pilihkan model, material, dan estimasi biaya terbaik.',
    subText: 'Via WhatsApp / Telepon'
  },
  {
    step: 2,
    title: 'Survey Lokasi & Ukur',
    description: 'Tim kami datang langsung ke lokasi Anda untuk melakukan pengukuran presisi, mengecek kondisi tanah/tembok, serta membawa sampel material.',
    subText: '100% Gratis Tanpa Biaya'
  },
  {
    step: 3,
    title: 'Penawaran Harga (RAB)',
    description: 'Kami mengirimkan lembaran Rencana Anggaran Biaya (RAB) yang sangat transparan dengan detail ketebalan besi, merek atap, dan durasi pengerjaan.',
    subText: 'Negosiasi Sampai Deal'
  },
  {
    step: 4,
    title: 'Produksi di Workshop',
    description: 'Bahan besi dipotong, dirangkai, dilas secara presisi, dan dilapisi cat anti karat di workshop kami yang luas dan modern di Surabaya.',
    subText: 'Dikerjakan Tenaga Ahli'
  },
  {
    step: 5,
    title: 'Instalasi & Pemasangan',
    description: 'Hasil rakitan dikirim ke lokasi Anda untuk dipasang oleh tim lapangan profesional yang mengutamakan keselamatan kerja (K3).',
    subText: 'Pemasangan Cepat & Aman'
  },
  {
    step: 6,
    title: 'Serah Terima & Garansi',
    description: 'Proyek diserahterimakan setelah Anda memeriksa hasilnya. Garansi perawatan resmi kami aktif sejak hari serah terima properti.',
    subText: 'Garansi Kepuasan 100%'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Apakah bisa survey lokasi terlebih dahulu?',
    answer: 'Sangat bisa! Kami memberikan layanan survey lokasi, pengukuran lapangan, dan konsultasi model secara 100% GRATIS untuk seluruh wilayah Surabaya, Sidoarjo, dan Gresik tanpa ada biaya tersembunyi.'
  },
  {
    id: 'faq2',
    question: 'Apakah hasil pekerjaan las memiliki garansi?',
    answer: 'Ya, semua hasil pekerjaan kami dijamin garansi tertulis. Kami memberikan garansi hingga 1 tahun terhadap kekuatan las, cat anti karat, kebocoran atap kanopi, hingga kestabilan mekanik pintu lipat/pagar.'
  },
  {
    id: 'faq3',
    question: 'Berapa lama proses pengerjaan pesanan?',
    answer: 'Lama pengerjaan bervariasi bergantung pada skala proyek dan antrian workshop. Untuk pengerjaan pagar rumah minimalis atau kanopi standard berkisar antara 4-7 hari kerja. Sedangkan untuk proyek baja gudang besar berkisar antara 2-4 minggu.'
  },
  {
    id: 'faq4',
    question: 'Apakah melayani pengerjaan di luar kota Surabaya?',
    answer: 'Secara reguler kami melayani Surabaya, Sidoarjo, dan Gresik. Namun, untuk pengerjaan proyek berskala menengah hingga besar seperti struktur rangka baja, jembatan, videotron, atau billboard, kami siap melayani pengerjaan di seluruh wilayah Jawa Timur.'
  },
  {
    id: 'faq5',
    question: 'Apakah menerima proyek berskala besar (b2b / tender)?',
    answer: 'Tentu saja! Kami adalah bengkel las berbadan hukum (CV) profesional yang sering bekerjasama dengan Developer Perumahan, Kontraktor Sipil, hingga Instansi Pemerintahan untuk pengerjaan konstruksi baja, videotron, ruko, dan proyek gedung komersial.'
  }
];
