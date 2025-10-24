import React, { useEffect } from "react";
import { X } from "lucide-react";

function Modal({ isOpen, onClose, title, children }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    // CORREÇÃO: Fundo escuro suavizado (era 'bg-black')
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/75 backdrop-blur-sm p-4"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {/* CORREÇÃO: Responsividade móvel.
        - 'w-full' garante que não saia da tela.
        - 'max-h-[90vh]' e 'overflow-y-auto' permitem rolagem em telas pequenas.
      */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <h3
            id="modal-title"
            className="text-xl font-semibold text-theme-primary"
          >
            {title}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 transition-colors"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Conteúdo (agora rolável) */}
        <div className="p-6 space-y-4 text-gray-700 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-4 border-t bg-gray-50 rounded-b-lg flex-shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-theme-primary text-white rounded-lg shadow-md hover:bg-theme-secondary transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
