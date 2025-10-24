import React, { useState } from "react";
import { Cloud, Server, PackageCheck, Timer } from "lucide-react";
import Modal from "./Modal";

// Detalhes limpos para o modal
const metricDetails = {
  gcp: {
    title: "Metodologia: Alerta de Custo Total (GCP)",
    content: (
      <>
        <p>
          Este é o custo total projetado de{" "}
          <span className="font-bold">todos os serviços do Google Cloud</span>{" "}
          até 23 de outubro de 2026, com base nos relatórios de faturamento da
          própria plataforma.
        </p>
        <p className="font-semibold mt-2">Este valor é composto por:</p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>
            <strong>Custo Apenas da VM (JupyterHub):</strong> R$ 37.643,93
          </li>
          <li>
            <strong>Outros Serviços (Rede, Storage, etc.):</strong> R$ 33.723,93
            (Diferença)
          </li>
        </ul>
        <p className="mt-4">
          <strong>Análise:</strong> O custo total está projetado para mais que
          dobrar em menos de um ano (de R$ 28.289,95 no final de 2025 para R$
          71.367,86 em out/2026), o que é financeiramente insustentável.
        </p>
      </>
    ),
  },
  tco: {
    title: "Metodologia: Solução TCO 5 Anos (Local)",
    content: (
      <>
        <p>
          Este é o Custo Total de Propriedade (TCO) de 5 anos para a opção
          "Servidor Customizado", que é a solução de CapEx recomendada.
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>
            <strong>CapEx (Custo Inicial):</strong> R$ 4.150,00
          </li>
          <li>
            <strong>OpEx (Custo Anual de Energia):</strong> R$ 1.265,60
          </li>
          <li>
            <strong>Cálculo Total (5 Anos):</strong> R$ 4.150,00 + (R$ 1.265,60
            * 5) = R$ 10.478,00
          </li>
        </ul>
        <div className="flex items-start mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <Timer className="h-6 w-6 text-theme-primary mr-3 flex-shrink-0 mt-1" />
          <p>
            <strong>Ponto de Equilíbrio (ROI):</strong> Este investimento se
            paga em <span className="font-bold">menos de 5 meses</span> em
            comparação com os custos da nuvem.
          </p>
        </div>
      </>
    ),
  },
  license: {
    title: "Metodologia: Solução de Licenças (Anual)",
    content: (
      <>
        <p>
          Este valor representa a economia anual mínima ao consolidar 33
          usuários do Google Workspace e M365 em um único plano M365 Business
          Standard.
        </p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>
            <strong>Custo Anual Atual (Fragmentado):</strong> > R$ 37.659,60
          </li>
          <li>
            <strong>Custo Anual Proposto (Unificado):</strong> R$ 27.086,40
          </li>
          <li>
            <strong>Economia Anual Mínima:</strong> R$ 10.573,20
          </li>
        </ul>
      </>
    ),
  },
};

function KeyMetrics() {
  const [modalData, setModalData] = useState(null);
  const cardClasses =
    "bg-white p-6 rounded-lg shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer";

  return (
    <>
      {/* Grid focado em 1 Problema, 2 Soluções */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: ALERTA GCP */}
        <div
          className={`${cardClasses} border-red-600`}
          onClick={() => setModalData(metricDetails.gcp)}
          role="button"
          tabIndex={0}
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700">
              Alerta: Custo Total GCP (Out/26)
            </h3>
            <Cloud className="h-6 w-6 text-red-600" />
          </div>
          <p className="text-sm text-gray-500 mb-3">
            Projeção de todos os serviços da nuvem até Out/2026.
          </p>
          <p className="text-4xl font-bold text-red-700">R$ 71.367,86</p>
        </div>

        {/* Card 2: Solução TCO */}
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
          <p className="text-sm text-gray-500 mb-3">
            Custo total (CapEx + Energia) do servidor customizado.
          </p>
          <p className="text-4xl font-bold text-green-700">R$ 10.478,00</p>
        </div>

        {/* Card 3: Solução Licenças */}
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
          <p className="text-sm text-gray-500 mb-3">
            Economia mínima recorrente por ano ao consolidar no M365.
          </p>
          <p className="text-4xl font-bold text-green-700">R$ 10.573,20</p>
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
