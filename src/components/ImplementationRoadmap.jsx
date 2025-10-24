import React from "react";
import { HardHat, DatabaseBackup, CloudOff, PackageCheck } from "lucide-react";

const phases = [
  {
    title: "Fase 1: Infraestrutura (Semanas 1-2)",
    icon: HardHat,
    tasks: [
      "Aquisição do hardware selecionado (servidor)",
      "Instalação física e do sistema operacional",
      "Configuração de rede e segurança inicial",
    ],
  },
  {
    title: "Fase 2: Migração de Dados (Semana 3)",
    icon: DatabaseBackup,
    tasks: [
      "Transferência de notebooks e dados do GCP para o servidor local",
      "Testes de validação e aceitação do usuário (UAT)",
    ],
  },
  {
    title: "Fase 3: Desativação da Nuvem (Semana 4)",
    icon: CloudOff,
    tasks: [
      "Excluir permanentemente a VM, discos e snapshots do GCP",
      "Confirmar o encerramento da fatura do GCP",
    ],
  },
  {
    title: "Fase 4: Consolidação de Licenças (Semanas 1-8)",
    icon: PackageCheck,
    tasks: [
      "Planejar e executar a migração de caixas de correio (Google p/ Exchange)",
      "Comunicar e treinar usuários no Outlook e OneDrive",
      "Desativar licenças do Google Workspace",
    ],
  },
];

function ImplementationRoadmap() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-theme-primary mb-6">
        Roteiro de Implementação de Alto Nível
      </h2>
      <div className="space-y-8">
        {phases.map((phase) => (
          <div key={phase.title} className="flex items-start">
            <phase.icon className="w-10 h-10 mr-4 text-theme-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {phase.title}
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {phase.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImplementationRoadmap;
