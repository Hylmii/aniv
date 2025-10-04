'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AnniversaryPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const [confetti, setConfetti] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Generate consistent values for hearts
  const heartPositions = Array.from({ length: 25 }, (_, i) => ({
    left: (i * 7.34 + 15) % 100,
    delay: (i * 0.83 + 1) % 5,
    duration: 5 + (i * 0.3) % 3,
    emoji: ['❤️', '💕', '💖', '💗', '💝'][i % 5]
  }));

  // Generate consistent values for confetti
  const confettiPositions = Array.from({ length: 50 }, (_, i) => ({
    left: (i * 2.13 + 10) % 100,
    top: (i * 1.97 + 5) % 100,
    delay: (i * 0.04) % 2,
    color: ['#ff69b4', '#ff1493', '#ffc0cb', '#ff6b6b'][i % 4]
  }));

  const quotes = [
    "Setiap hari bersamamu adalah anugerah yang tak ternilai ✨",
    "14 bulan bersama, rasanya seperti selamanya tapi masih ingin lebih 💕",
    "Kamu adalah alasan tersenyumku setiap hari 😊",
    "Bersamamu, setiap moment biasa menjadi istimewa 🌟",
    "14 bulan yang penuh cinta, tawa, dan kebahagiaan 💖"
  ];

  const memories = [
    { emoji: "�", title: "First Meeting", date: "Juli 2024" },
    { emoji: "🌸", title: "PDKT Era", date: "Juli 2024" },
    { emoji: "💖", title: "Jadian!", date: "4 Agustus 2024" },
    { emoji: "�", title: "Anniversary BXSEA", date: "4 Oktober 2024" },
    { emoji: "🎂", title: "Ultah Kamu", date: "12 Desember" },
    { emoji: "💕", title: "1 Tahun 2 Bulan", date: "Oktober 2024" }
  ];

  const photoGallery = [
    { 
      src: "/gambar1.png", 
      title: "Jalan-jalan Special Anniversary", 
      description: "Merayakan 1 Tahun 2 Bulan di BXSEA 🎉💕" 
    },
    { 
      src: "/gambar2.png", 
      title: "Moment Bahagia Anniversary", 
      description: "Kenangan indah di tempat special 🥰✨" 
    },
    { 
      src: "/gambar3.png", 
      title: "Cinta yang Abadi", 
      description: "Bukti cinta yang semakin kuat setiap hari ❤️" 
    }
  ];

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  const triggerSurprise = () => {
    setConfetti(true);
    setTimeout(() => setConfetti(false), 3000);
    
    const messages = [
      "I Love You Too! 💕💕💕",
      "You mean the world to me! 🌍",
      "Thank you for 14 amazing months! 🥰",
      "Here's to many more adventures together! 🎉",
      "You're my everything! 💖"
    ];
    
    // Use current time to select message for better randomness after mount
    const randomIndex = mounted ? Math.floor(Date.now() / 1000) % messages.length : 0;
    const randomMessage = messages[randomIndex];
    alert(randomMessage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-red-500 overflow-hidden relative">
      {/* Floating Hearts Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {mounted && heartPositions.map((heart, i) => (
          <div
            key={i}
            className="absolute text-red-300 opacity-60 animate-float text-2xl"
            style={{
              left: `${heart.left}%`,
              animationDelay: `${heart.delay}s`,
              animationDuration: `${heart.duration}s`
            }}
          >
            {heart.emoji}
          </div>
        ))}
      </div>

      {/* Confetti Effect */}
      {confetti && mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-50">
          {confettiPositions.map((confettiItem, i) => (
            <div
              key={i}
              className="absolute animate-bounce"
              style={{
                left: `${confettiItem.left}%`,
                top: `${confettiItem.top}%`,
                animationDelay: `${confettiItem.delay}s`,
                color: confettiItem.color
              }}
            >
              🎉
            </div>
          ))}
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8 text-center">
        {/* Title */}
        <div className={`transform transition-all duration-2000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center gap-8 mb-6">
            {/* Dudu Image */}
            <div className="relative">
              <img 
                src="/dudu diam.webp" 
                alt="Dudu" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">💕</div>
            </div>
            
            {/* Number 14 */}
            <div className="pulse-heart">
              <h1 className="text-6xl md:text-8xl font-bold text-white drop-shadow-lg">
                14
              </h1>
            </div>
            
            {/* Another Dudu Image for symmetry */}
            <div className="relative">
              <img 
                src="/dudu diam.webp" 
                alt="Dudu" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-300 transform scale-x-[-1]"
              />
              <div className="absolute -top-2 -left-2 text-2xl animate-bounce" style={{animationDelay: '0.5s'}}>💖</div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4 drop-shadow-lg">
            Bulan Bersama
          </h2>
          <div className="bg-white/20 backdrop-blur-lg rounded-full px-8 py-4 border border-white/30 mb-8">
            <p className="text-xl md:text-2xl text-white font-medium">
              Happy Anniversary Sayang! 💕
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className={`transform transition-all duration-2000 delay-300 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/30">
            <p className="text-white/90 text-lg mb-2">Sudah bersama selama:</p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-white">14</div>
                <div className="text-white/80 text-sm">Bulan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">426</div>
                <div className="text-white/80 text-sm">Hari</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">∞</div>
                <div className="text-white/80 text-sm">Kenangan</div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery Section */}
        <div className={`transform transition-all duration-2000 delay-500 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 mb-12 border border-white/30">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
               Jalan-jalan Special Anniversary di BXSEA  
            </h3>
            
            {/* Main Photo Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {mounted && photoGallery.map((photo, i) => (
                <div
                  key={i}
                  className="photo-card group relative overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-2xl border-2 border-white/20 hover:border-white/40"
                  onClick={() => setSelectedPhoto(i)}
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Heart overlay with romantic touch */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="text-6xl animate-pulse filter drop-shadow-lg">💕</div>
                    </div>
                    
                    {/* Corner decoration */}
                    <div className="absolute top-3 right-3 text-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                      ✨
                    </div>
                  </div>
                  
                  {/* Photo Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                    <h4 className="font-semibold text-lg mb-1 drop-shadow-lg">{photo.title}</h4>
                    <p className="text-sm opacity-90 drop-shadow">{photo.description}</p>
                  </div>
                  
                  {/* Photo number badge */}
                  <div className="absolute top-3 left-3 bg-white/20 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm border border-white/30">
                    {i + 1}
                  </div>
                </div>
              ))}
            </div>

            {/* Clean Memory Timeline Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {memories.map((memory, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/25 via-white/15 to-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer"
                  style={{
                    animationDelay: `${i * 0.1}s`
                  }}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute w-20 h-20 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full -top-10 -right-10 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute w-16 h-16 bg-gradient-to-r from-purple-400/20 to-red-400/20 rounded-full -bottom-8 -left-8 group-hover:scale-150 transition-transform duration-700"></div>
                  </div>
                  
                  {/* Card Content */}
                  <div className="relative z-10 p-6 h-32 flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <span className="text-2xl filter drop-shadow-lg">
                          {memory.emoji}
                        </span>
                      </div>
                      <div className="text-xs text-white/60 bg-white/10 px-2 py-1 rounded-full">
                        #{i + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-end">
                      <h3 className="text-white font-bold text-lg mb-1 group-hover:text-yellow-200 transition-colors duration-300">
                        {memory.title}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {memory.date}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-400 via-purple-500 to-red-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-400/20 via-purple-500/20 to-red-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10"></div>
                </div>
              ))}
            </div>
            
            <p className="text-white/80 text-sm text-center">
              *Klik foto untuk melihat lebih detail*
            </p>
          </div>
        </div>

        {/* Photo Modal */}
        {selectedPhoto !== null && mounted && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh] w-full animate-in zoom-in duration-500">
              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-12 right-0 text-white text-xl hover:text-red-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center border border-white/20 hover:bg-white/20"
              >
                ✕
              </button>
              
              {/* Navigation buttons */}
              {photoGallery.length > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(selectedPhoto > 0 ? selectedPhoto - 1 : photoGallery.length - 1);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-pink-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white/20"
                  >
                    ←
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPhoto(selectedPhoto < photoGallery.length - 1 ? selectedPhoto + 1 : 0);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-2xl hover:text-pink-300 transition-colors z-10 bg-white/10 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center border border-white/20 hover:bg-white/20"
                  >
                    →
                  </button>
                </>
              )}
              
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl border-2 border-white/30">
                <img
                  src={photoGallery[selectedPhoto].src}
                  alt={photoGallery[selectedPhoto].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Floating hearts on modal */}
                <div className="absolute top-4 right-4 text-3xl animate-pulse opacity-70">
                  💕
                </div>
              </div>
              
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mt-4 border border-white/30 glow-effect">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-white">
                    {photoGallery[selectedPhoto].title}
                  </h3>
                  <span className="text-white/70 text-sm bg-white/10 px-3 py-1 rounded-full">
                    {selectedPhoto + 1} of {photoGallery.length}
                  </span>
                </div>
                <p className="text-white/90 text-lg mb-4">
                  {photoGallery[selectedPhoto].description}
                </p>
                <div className="flex justify-center">
                  <div className="text-sm text-white/60">
                    💝 Kenangan indah yang akan selalu ku jaga 💝
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Quote */}
        <div className={`transform transition-all duration-2000 delay-1000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 mb-12 border border-white/30 max-w-2xl glow-effect">
            <p className="text-lg md:text-xl text-white font-medium italic">
              "{quotes[currentQuote]}"
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className={`transform transition-all duration-2000 delay-1500 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-8 border border-white/30 max-w-4xl mb-12">
            <h3 className="text-2xl font-semibold text-white mb-8">Perjalanan Cinta Kita 💕</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">1</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">Juli 2024</p>
                  <p className="text-white/80">Awal perkenalan dan PDKT yang manis 😊</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">💕</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">4 Agustus 2024</p>
                  <p className="text-white/80">Hari spesial - Resmi jadian! 🥰</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🎂</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">12 Desember</p>
                  <p className="text-white/80">Ultah tersayang yang ke-30! 🎉</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 hover:scale-105 transition-transform">
                <div className="w-6 h-6 bg-yellow-400 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <div className="text-left">
                  <p className="text-white font-semibold">4 Oktober 2024</p>
                  <p className="text-white/80">Jalan-jalan special anniversary di BXSEA ❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Love Button */}
        <div className={`transform transition-all duration-2000 delay-2000 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <button 
            onClick={triggerSurprise}
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl transform hover:scale-110 transition-all duration-300 shadow-2xl pulse-heart"
          >
            💕 Klik Untuk Surprise 💕
          </button>
        </div>

        {/* Footer */}
        <div className={`transform transition-all duration-2000 delay-2500 ${showMessage ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mt-12 bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <p className="text-white/80 text-lg mb-2">
              Dengan Cinta yang Tak Terbatas ❤️
            </p>
            <p className="text-white font-semibold text-xl">
              Untuk Pasangan Tersayang
            </p>
            <p className="text-white/60 text-sm mt-2">
              "Thank you for being my everything. Here's to forever with you 💖"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}