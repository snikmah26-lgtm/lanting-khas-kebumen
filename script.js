function orderWA(varian) {
    const nomorWA = "6281806943026"; // GANTI DENGAN NOMOR ANDA
    const pesan = `Halo Admin Lanting Fikri, saya mau pesan varian *${varian}*. Bagaimana prosedur pengirimannya?`;
    const link = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    
    window.open(link, '_blank');
}
