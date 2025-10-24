import React from "react";

// Importações dos Componentes de Layout
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Sugestão

// Importações dos Componentes de Análise (Refatorados)
import KeyMetrics from "./components/KeyMetrics";
import KeyTerms from "./components/KeyTerms"; // NOVO COMPONENTE
import CloudCostChart from "./components/CloudCostChart";
import TcoChart from "./components/TcoChart";
import LicenseCharts from "./components/LicenseCharts";
import QualitativeBenefits from "./components/QualitativeBenefits";
import Recommendations from "./components/Recommendations";
import ImplementationRoadmap from "./components/ImplementationRoadmap";

// Importações e Registro do Chart.js (CRÍTICO)
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function App() {
  return (
    <div className="bg-slate-100 text-gray-800">
      <Header />

      <main className="container mx-auto p-4 sm:p-6 lg:p-8 space-y-12">
        <section id="overview" className="space-y-12">
          {/* 1. Métricas clicáveis */}
          <KeyMetrics />
          {/* 2. Definição de Termos (NOVO) */}
          <KeyTerms />
        </section>

        <section id="infrastructure" className="space-y-12">
          <h2 className="text-3xl font-bold text-theme-primary border-b-2 pb-2 border-theme-secondary">
            Análise de Infraestrutura: Nuvem vs. Local
          </h2>
          <CloudCostChart />
          <TcoChart /> {/* Sugiro adicionar o botão "Mostrar Tabela" aqui */}
        </section>

        <section
          id="analysis"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <QualitativeBenefits />
          <ImplementationRoadmap />
        </section>

        <section id="licenses" className="space-y-12">
          <h2 className="text-3xl font-bold text-theme-primary border-b-2 pb-2 border-theme-secondary">
            Análise de Licenciamento: Consolidação de SaaS
          </h2>
          <LicenseCharts />
        </section>

        <section id="recommendation">
          <Recommendations />
        </section>
      </main>

      <Footer />
      {/* Botão de Voltar ao Topo (Sugestão) */}
      <ScrollToTopButton />
    </div>
  );
}

export default App;
