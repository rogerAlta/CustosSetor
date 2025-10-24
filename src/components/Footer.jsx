import React from "react";
import { Copyright } from "lucide-react"; // Ícone de Copyright

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 py-6">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm text-gray-400 flex items-center justify-center">
          <Copyright className="w-4 h-4 mr-2" />
          {/* O ano pode ser dinâmico se você preferir */}
          {new Date().getFullYear()} Análise de Custos de TI. Esta é uma
          simulação baseada nos dados fornecidos.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
