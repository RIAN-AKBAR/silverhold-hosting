const SILVERHOLD_CONFIG = {
    maintenance: {
        enabled: true,
        message: 'Website sedang dalam perbaikan. Mohon kembali lagi nanti.',
        estimatedTime: '2 jam',
        contactWhatsApp: '6285167089251',
        alternativeLink: '',
        autoRedirectDelay: 0
    },

    links: {
        login: 'https://useful-nights-sensitivity-email.trycloudflare.com/Hosting-SilverHold/login_page.php',
        register: 'https://useful-nights-sensitivity-email.trycloudflare.com/Hosting-SilverHold/daftar.html',
        adminPanel: 'https://useful-nights-sensitivity-email.trycloudflare.com/Hosting-SilverHold/login_admin.php'
    },

    contact: {
        whatsapp: '6285167089251',
        email: 'admin@silverhold.com',
        instagram: '',
        telegram: ''
    },

    branding: {
        name: 'SilverHold',
        tagline: 'Jasa Website',
        icon: '⚡',
        primaryColor: '#fbbf24',
        secondaryColor: '#60a5fa',
        logoUrl: 'logo.jpg'
    },

    // ===== HARGA =====
    // jasaPrice   = 50.000 (biaya pembuatan)
    // serverPrice = 20.000 (biaya server per bulan)
    // totalAwal   = jasaPrice + serverPrice = 70.000 (include server bln 1)
    pricing: {
        jasaPrice: 50000,
        serverPrice: 20000,
        serverPeriod: 'per bulan'
    },

    stats: {
        uptime: '99.9%',
        support: '24/7',
        customers: '500+',
        rating: '5★'
    },

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

    sectionMaintenance: {
        disableLogin: false,
        disableRegister: false,
        disableOrder: false
    },

    messages: {
        loginDisabled: 'Login sedang dalam perbaikan. Coba lagi nanti.',
        registerDisabled: 'Pendaftaran sedang ditutup sementara.',
        orderDisabled: 'Order sedang ditutup sementara. Hubungi WhatsApp untuk info.'
    },

    version: '1.0.0',
    lastUpdate: '2026-01-15'
};

if (typeof window !== 'undefined') {
    window.SILVERHOLD_CONFIG = SILVERHOLD_CONFIG;
}

if (typeof window !== 'undefined' && SILVERHOLD_CONFIG.maintenance.enabled) {
    if (SILVERHOLD_CONFIG.maintenance.autoRedirectDelay > 0) {
        setTimeout(() => {
            window.location.href = 'maintenance.html';
        }, SILVERHOLD_CONFIG.maintenance.autoRedirectDelay * 1000);
    }
}
