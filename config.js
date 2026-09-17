/* ============================================
   SILVERHOLD - CONFIG FILE
   Edit file ini untuk mengubah semua pengaturan
   ============================================ */

const SILVERHOLD_CONFIG = {
    
    // ===== MODE MAINTENANCE =====
    maintenance: {
        enabled: false,
        message: 'Website sedang dalam perbaikan. Mohon kembali lagi nanti.',
        estimatedTime: '2 jam',
        contactWhatsApp: '6285167089251',
        alternativeLink: '',
        autoRedirectDelay: 0
    },

    // ===== LINK UTAMA =====
    links: {
        login: 'https://north-charming-impaired-missed.trycloudflare.com/Hosting-SilverHold/login_page.php',
        register: 'https://north-charming-impaired-missed.trycloudflare.com/Hosting-SilverHold/daftar.html',
        adminPanel: 'https://north-charming-impaired-missed.trycloudflare.com/Hosting-SilverHold/login_admin.php'
    },

    // ===== KONTAK =====
    contact: {
        whatsapp: '6285167089251',
        email: 'admin@silverhold.com',
        instagram: '',
        telegram: ''
    },

    // ===== BRANDING =====
    branding: {
        name: 'SilverHold',
        tagline: 'Jasa Website',
        icon: '⚡',
        primaryColor: '#fbbf24',
        secondaryColor: '#60a5fa'
    },

    // ===== HARGA =====
    pricing: {
        servicePrice: 50000,
        serverPrice: 20000,
        serverPeriod: 'per bulan'
    },

    // ===== STATISTIK =====
    stats: {
        uptime: '99.9%',
        support: '24/7',
        customers: '500+',
        rating: '5★'
    },

    // ===== FITUR =====
    features: {
        showStats: true,
        showPricing: true,
        showFeatures: true,
        showFAQ: true,
        showCTA: true,
        showFloatingWA: true,
        showPromoBanner: false,
        promoBannerText: '🎉 Promo! Gratis 1 bulan biaya server untuk 10 pelanggan pertama!',
        promoBannerLink: '#pricing'
    },

    // ===== MAINTENANCE PER SECTION =====
    sectionMaintenance: {
        disableLogin: false,
        disableRegister: false,
        disableOrder: false
    },

    // ===== PESAN SISTEM =====
    messages: {
        loginDisabled: 'Login sedang dalam perbaikan. Coba lagi nanti.',
        registerDisabled: 'Pendaftaran sedang ditutup sementara.',
        orderDisabled: 'Order sedang ditutup sementara. Hubungi WhatsApp untuk info.'
    },

    // ===== VERSION =====
    version: '1.0.0',
    lastUpdate: '2026-01-15'
};

// ===== EXPORT =====
if (typeof window !== 'undefined') {
    window.SILVERHOLD_CONFIG = SILVERHOLD_CONFIG;
}

// Cek maintenance mode saat halaman load
if (typeof window !== 'undefined' && SILVERHOLD_CONFIG.maintenance.enabled) {
    if (SILVERHOLD_CONFIG.maintenance.autoRedirectDelay > 0) {
        setTimeout(() => {
            window.location.href = 'maintenance.html';
        }, SILVERHOLD_CONFIG.maintenance.autoRedirectDelay * 1000);
    }
}
