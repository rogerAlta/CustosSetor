import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-theme-primary">
              Análise Estratégica de Custos de TI
            </h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#overview"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Visão Geral
              </a>
              <a
                href="#cloud-costs"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Custos de Nuvem
              </a>
              <a
                href="#license-costs"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Custos de Licenças
              </a>
              <a
                href="#alternatives"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Alternativas
              </a>
              <a
                href="#recommendation"
                className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                Recomendação
              </a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-700 focus:outline-none"
            >
              <span className="sr-only">Abrir menu</span>
              {/* Ícone de Menu/Fechar */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Menu Mobile Dropdown */}
      <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#overview"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Visão Geral
          </a>
          <a
            href="#cloud-costs"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Custos de Nuvem
          </a>
          <a
            href="#license-costs"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Custos de Licenças
          </a>
          <a
            href="#alternatives"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Alternativas
          </a>
          <a
            href="#recommendation"
            className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
          >
            Recomendação
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
