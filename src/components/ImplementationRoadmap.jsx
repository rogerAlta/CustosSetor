import React from "react";
import { HardHat, DatabaseBackup, CloudOff, PackageCheck } from "lucide-react";

// Dados da Seção 7.3: Roteiro de Implementação [cite: 177]
const phases = [
  {
    title: "Fase 1: Infraestrutura (Semanas 1-2)",
    icon: HardHat,
    tasks: [
      "Aquisição do hardware selecionado (servidor)", // [cite: 181]
      "Instalação física e do sistema operacional", // [cite: 183, 184]
      "Configuração de rede e segurança inicial", // [cite: 185]
    ],
  },
  {
    title: "Fase 2: Migração de Dados (Semana 3)",
    icon: DatabaseBackup,
    tasks: [
      "Transferência de notebooks e dados do GCP para o servidor local", // [cite: 187]
      "Testes de validação e aceitação do usuário (UAT)", // [cite: 188]
    ],
  },
  {
    title: "Fase 3: Desativação da Nuvem (Semana 4)",
    icon: CloudOff,
    tasks: [
      "Excluir permanentemente a VM, discos e snapshots do GCP", // [cite: 191]
      "Confirmar o encerramento da fatura do GCP", // [cite: 192]
    ],
  },
  {
    title: "Fase 4: Consolidação de Licenças (Semanas 1-8)",
    icon: PackageCheck,
    tasks: [
      "Planejar e executar a migração de caixas de correio (Google p/ Exchange)", // [cite: 194]
      "Comunicar e treinar usuários no Outlook e OneDrive", // [cite: 195]
      "Desativar licenças do Google Workspace", // [cite: 196]
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
