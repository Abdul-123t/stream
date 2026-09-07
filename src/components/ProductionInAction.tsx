import React, { useState } from 'react';
import { Camera, Sliders, Play, Maximize2, X } from 'lucide-react';

export const ProductionInAction: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; title: string; category: string } | null>(null);

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
      title: 'Vision Mixing & ATEM Switcher Console',
      category: 'CONTROL ROOM',
    },
    {
      url: 'https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=1200&auto=format&fit=crop',
      title: 'Cinema Camera Rigging on Live Stage',
      category: 'CAMERA OPERATIONS',
    },
    {
      url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
      title: 'LED Stage Environment & Conference Keynote',
      category: 'EVENT ENVIRONMENTS',
    },
    {
      url: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
      title: 'Concert & Festival Live Stage Production',
      category: 'CONCERTS',
    },
    {
      url: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop',
      title: 'Broadcast Audio Console & Dante Processing',
      category: 'AUDIO ENGINEERING',
    },
    {
      url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
      title: 'On-Site Technical Crew Direction',
      category: 'CREW & DIRECTION',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-[#0A0A0B] relative border-b border-zinc-800/80">
      <div className="site-container">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="text-xs font-mono tracking-[0.2em] text-[#0066FF] uppercase font-bold mb-3">
              PRODUCTION ATMOSPHERE
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display uppercase tracking-tight text-white leading-[0.95]">
              BUILT FOR THE MOMENTS<br />
              <span className="text-[#0066FF]">THAT CANNOT BE REPEATED.</span>
            </h2>
          </div>

          <p className="text-xs font-mono text-zinc-400 max-w-sm">
            Visual atmosphere demonstrating the caliber of live broadcasts, camera angles, and control room environments D1 Streams delivers.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div
              key={img.title}
              onClick={() => setSelectedImage(img)}
              className="group relative aspect-[4/3] bg-zinc-950 rounded border border-zinc-800 overflow-hidden cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="site-container relative z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="site-container absolute top-3 left-3 bg-black/80 backdrop-blur px-2.5 py-1 rounded text-[10px] font-mono text-[#0066FF] font-bold uppercase tracking-wider border border-zinc-800">
                {img.category}
              </div>

              <div className="site-container relative z-10 bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <p className="text-xs font-mono text-zinc-400 uppercase">
                    ENVIRONMENT 0{idx + 1}
                  </p>
                  <p className="text-sm font-display font-bold uppercase text-white mt-0.5">
                    {img.title}
                  </p>
                </div>

                <div className="p-2 bg-[#0066FF] text-white rounded opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Image Modal Preview */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 flex items-center justify-center cursor-pointer"
        >
          <div className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden shadow-2xl p-2">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-black/80 text-white rounded-full border border-zinc-700 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-auto max-h-[75vh] object-contain rounded" />
            <div className="p-4 flex items-center justify-between text-xs font-mono text-zinc-300">
              <span className="text-[#0066FF] font-bold">{selectedImage.category}</span>
              <span className="text-white font-bold">{selectedImage.title}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
