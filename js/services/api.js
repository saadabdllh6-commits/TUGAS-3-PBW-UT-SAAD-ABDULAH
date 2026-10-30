window.SITTAApi = {
 async load(){ const r=await fetch('data/dataBahanAjar.json'); if(!r.ok) throw new Error('Data JSON tidak dapat dibaca'); return r.json(); },
 rupiah(v){return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(v)||0)},
 tanggal(v){if(!v)return '—';return new Date(v+'T00:00:00').toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'})},
 waktu(){return new Date().toLocaleString('sv-SE').replace('T',' ')}
};