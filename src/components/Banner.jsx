
import React from 'react';

const Banner = () => {
  return (
    <section style={{ background: '#f8fafc', padding: '60px 0 40px 0', minHeight: '420px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '320px' }}>
          <h1 style={{ fontSize: '2.8rem', fontWeight: 700, color: '#222', marginBottom: '18px', lineHeight: 1.2 }}>
            Expand Your Horizons<br />through <span style={{ color: '#2563eb' }}>Education</span>
          </h1>
          <p style={{ color: '#6b7280', fontSize: '1.1rem', marginBottom: '28px' }}>Education for a Better Tomorrow.</p>
          <button style={{ background: '#fff', color: '#2563eb', border: '1px solid #2563eb', borderRadius: '6px', padding: '10px 28px', fontWeight: 500, cursor: 'pointer', transition: 'background 0.2s' }}>Contact Us</button>
        </div>
        <div style={{ flex: 1.2, minWidth: '340px', display: 'flex', alignItems: 'center', gap: '24px', justifyContent: 'center' }}>
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px #e5e7eb', padding: '22px 18px', minWidth: '120px', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>Adipiscing</div>
            <img src="https://dummyimage.com/100x40/eee/aaa&text=Graph" alt="Graph" style={{ width: '100%', marginBottom: '10px' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 600, fontSize: '15px' }}>
              <span>1205</span>
              <span>840</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#fbbf24' }}>
              <span>Adipiscing</span>
              <span>Consectetur</span>
            </div>
          </div>
          <div style={{ background: '#e5e7eb', borderRadius: '18px', width: '180px', height: '140px', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ position: 'absolute', top: '16px', right: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 8px #e5e7eb', padding: '8px' }}>🎓</span>
            {/* Placeholder for main banner image */}
            <div style={{ width: '90px', height: '90px', background: '#cbd5e1', borderRadius: '12px' }}></div>
          </div>
          <div style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px #e5e7eb', padding: '22px 18px', minWidth: '120px', textAlign: 'center' }}>
            <div style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>Lorem ipsum</div>
            <div style={{ width: '70px', height: '70px', margin: '0 auto 10px auto', position: 'relative' }}>
              <svg width="70" height="70">
                <circle cx="35" cy="35" r="32" stroke="#e5e7eb" strokeWidth="6" fill="none" />
                <circle cx="35" cy="35" r="32" stroke="#2563eb" strokeWidth="6" fill="none" strokeDasharray="201" strokeDashoffset="50" style={{ transition: 'stroke-dashoffset 0.5s' }} />
              </svg>
              <span style={{ position: 'absolute', top: '22px', left: '0', width: '70px', textAlign: 'center', fontWeight: 700, fontSize: '1.2rem', color: '#ef4444' }}>75%</span>
            </div>
            <div style={{ fontSize: '12px', color: '#6b7280', marginBottom: '8px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
            <button style={{ background: '#fbbf24', color: '#fff', border: 'none', borderRadius: '6px', padding: '6px 18px', fontWeight: 500, cursor: 'pointer' }}>Suscipit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;