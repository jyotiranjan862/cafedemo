import React from 'react';
import { X, ShieldCheck, ExternalLink, Download } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageTitle: string;
  imageCaption: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
  imageCaption,
}) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
      />

      <div className="flex min-h-full items-center justify-center p-3 sm:p-5">
        <div className="relative w-full max-w-4xl rounded-2xl bg-[#0F2932] text-white shadow-2xl overflow-hidden border border-[#D89B2B]/40 space-y-4">
          
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-stone-800 flex items-center justify-between">
            <div className="flex items-center gap-2 text-[#E5A836]">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-base sm:text-lg text-white">
                  {imageTitle}
                </h3>
                <span className="text-[11px] text-stone-400 font-mono">
                  Official Record · DESTIN Café & Restaurant, Kendrapara
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* High-Resolution Media Viewer */}
          <div className="px-3 sm:px-6">
            <div className="rounded-xl overflow-hidden bg-black/60 border border-stone-800 shadow-inner flex items-center justify-center p-1 sm:p-2 max-h-[70vh]">
              <img
                src={imageSrc}
                alt={imageTitle}
                className="w-full h-auto max-h-[68vh] object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Caption & Metadata Footer */}
          <div className="p-4 sm:p-6 bg-[#0B1E24] border-t border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <p className="text-stone-300 leading-relaxed max-w-2xl font-sans">
              {imageCaption}
            </p>

            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#E5A836] font-medium flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Raw Image</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
