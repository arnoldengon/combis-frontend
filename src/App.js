import React from 'react';

  function App() {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-bold text-gray-900">
              🤝 LES COMBIS - Assistance Solidaire
            </h1>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Système de Gestion d'Assistance Solidaire
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Plateforme de gestion des cotisations et sinistres pour notre groupe solidaire
              </p>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">👥 Gestion des Membres</h3>
                <p className="text-blue-700">Suivi des 15 membres et leurs informations</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-900 mb-2">💰 Cotisations</h3>
                <p className="text-green-700">Suivi des cotisations mensuelles</p>
              </div>
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="font-semibent text-red-900 mb-2">🚨 Sinistres</h3>
                <p className="text-red-700">Gestion des demandes d'assistance</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-purple-900 mb-2">📊 Statistiques</h3>
                <p className="text-purple-700">Rapports et analyses financières</p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-yellow-800">
                  🔧 Application en cours de finalisation - Fonctionnalités complètes bientôt disponibles
                </p>
              </div>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700
  transition-colors">
                Accès Membre (Bientôt)
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  export default App;
