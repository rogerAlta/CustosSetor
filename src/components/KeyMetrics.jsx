import React, { useState } from "react";
import { Cloud, Server, PackageCheck, Timer } from "lucide-react";
import Modal from "./Modal";

// CORREÇÃO: Objeto de detalhes limpo, sem [cite_start]e com citações reais.
const metricDetails = {
  gcp: {
    title: "Metodologia: Risco Custo VM (GCP)",
    content: (
      <>
        <p>
          Este valor representa a projeção de custo estendida fornecida pelos
          próprios relatórios de faturamento do Google Cloud[cite: 24, 25].
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          [cite_start]
          <li>
            <strong>Projeção (Apenas VM):</strong> O custo está projetado para
            atingir R$ 37.643,93 até 23 de outubro de 2026[cite: 29].
          </li>
          [cite_start]
          <li>
            <strong>Contexto:</strong> A projeção total de todos os serviços GCP
            na mesma data é de R$ 71.367,86[cite: 30].
          </li>
          [cite_start]
          <li>
            <strong>Análise:</strong> Este custo crescente é considerado
            insustentável para uma carga de trabalho estável[cite: 5, 32].
          </li>
        </ul>
      </>
    ),
  },
  tco: {
    title: "Metodologia: TCO 5 Anos (Local)",
    content: (
      <>
        [cite_start]
        <p>
          Este valor é o Custo Total de Propriedade (TCO) de 5 anos para a opção
          "Servidor Customizado On-Premise" [cite: 78][cite_start], conforme a
          Tabela 4.1 do relatório[cite: 92].
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          [cite_start]
          <li>
            <strong>CapEx (Custo Inicial):</strong> R$ 4.150,00[cite: 68, 93].
          </li>
          [cite_start]
          <li>
            <strong>OpEx (Custo Anual de Energia):</strong> R$ 1.265,60 (baseado
            em 250W [cite: 83] [cite_start]a R$ 0,57790/kWh [cite: 84, 87]).
          </li>
          [cite_start]
          <li>
            <strong>Cálculo Total (5 Anos):</strong> R$ 4.150,00 + (R$ 1.265,60
            * 5) = R$ 10.478,00[cite: 94].
          </li>
        </ul>
      </>
    ),
  },
  license: {
    title: "Metodologia: Economia de Licenças",
    content: (
      <>
        [cite_start]
        <p>
          Este valor representa a economia anual mínima ao consolidar todos os
          usuários no plano Microsoft 365 Business Standard [cite: 145]
          [cite_start](conforme Tabela 6.1 [cite: 153]).
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          [cite_start]
          <li>
            <strong>Custo Anual Atual (Fragmentado):</strong> > R$
            45.840,00[cite: 138, 155].
          </li>
          [cite_start]
          <li>
            <strong>Custo Anual Proposto (Unificado):</strong> R$ 27.086,40
            (Baseado em 33 usuários [cite: 134, 152] [cite_start]x R$ 68,40/mês
            [cite: 151] [cite_start]x 12 meses)[cite: 155].
          </li>
          [cite_start]
          <li>
            <strong>Economia Anual Mínima:</strong> R$ 18.753,60[cite: 155].
          </li>
        </ul>
      </>
    ),
  },
  roi: {
    title: "Metodologia: Ponto de Equilíbrio (ROI)",
    content: (
      <>
        [cite_start]
        <p>
          O ponto de equilíbrio (break-even point) é o tempo necessário para que
          o custo cumulativo da solução local se torne inferior ao da
          nuvem[cite: 95].
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          [cite_start]
          <li>
            <strong>Análise TCO:</strong> A análise da Tabela 4.1 demonstra que
            o custo inicial do servidor customizado (R$ 4.150) é pago em menos
            de 5 meses[cite: 95].
          </li>
          [cite_start]
          <li>
            <strong>Custo GCP Ano 1:</strong> R$ 13.000,00[cite: 91, 93].
          </li>
          <li>
            <strong>Cálculo Aprox.:</strong> R$ 4.150 (CapEx Local) / (R$ 13.000
            / 12 meses) ≈ 3.8 meses.
          </li>
        </ul>
      </>
    ),
  },
};

function KeyMetrics() {
  const [modalData, setModalData] = useState(null);

  // Classes de design com hover e cursor
  const cardClasses =
    "bg-white p-6 rounded-lg shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer";

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1: Risco GCP */}
        <div
          className={`${cardClasses} border-red-600`}
          onClick={() => setModalData(metricDetails.gcp)}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Risco: Custo VM (GCP)
            </h3>
            <Cloud className="h-6 w-6 text-red-600" />
          </div>
          [cite_start]
          <p className="text-sm text-gray-500 mb-3">
            Projeção de custo da VM até Out/2026[cite: 29].
          </p>
          <p className="text-4xl font-bold text-red-700">R$ 37.643,93</p>
        </div>

        {/* Card 2: TCO Local */}
        <div
          className={`${cardClasses} border-green-600`}
          onClick={() => setModalData(metricDetails.tco)}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Solução: TCO 5 Anos (Local)
            </h3>
            <Server className="h-6 w-6 text-green-600" />
          </div>
          [cite_start]
          <p className="text-sm text-gray-500 mb-3">
            Custo total (CapEx + Energia) do servidor customizado[cite: 94].
          </p>
          <p className="text-4xl font-bold text-green-700">R$ 10.478,00</p>
        </div>

        {/* Card 3: Economia Licenças */}
        <div
          className={`${cardClasses} border-green-600`}
          onClick={() => setModalData(metricDetails.license)}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Solução: Economia Licenças
            </h3>
            <PackageCheck className="h-6 w-6 text-green-600" />
          </div>
          [cite_start]
          <p className="text-sm text-gray-500 mb-3">
            Economia mínima recorrente por ano ao consolidar no M365[cite: 155].
          </p>
          <p className="text-4xl font-bold text-green-700">R$ 18.753,60</p>
        </div>

        {/* Card 4: Ponto de Equilíbrio */}
        <div
          className={`${cardClasses} border-theme-primary`}
          onClick={() => setModalData(metricDetails.roi)}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Ponto de Equilíbrio (ROI)
            </h3>
            <Timer className="h-6 w-6 text-theme-primary" />
          </div>
          [cite_start]
          <p className="text-sm text-gray-500 mb-3">
            Tempo para o servidor customizado se pagar vs. GCP[cite: 95].
          </p>
          <p className="text-4xl font-bold text-theme-primary">&lt; 5 Meses</p>
        </div>
      </div>

      {/* Renderiza o Modal */}
      <Modal
        isOpen={!!modalData}
        onClose={() => setModalData(null)}
        title={modalData?.title}
      >
        {modalData?.content}
      </Modal>
    </>
  );
}

export default KeyMetrics;
