import React, { useState, useEffect } from 'react';

  // Données initiales des membres LES COMBIS
  const INITIAL_MEMBERS = [
    { id: 1, nom: 'ABENA FILS', telephone: '677123456', email: 'abena@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'admin' },
    { id: 2, nom: 'BELLA MARIE', telephone: '655789123', email: 'bella@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'membre' },
    { id: 3, nom: 'CARLOS JUNIOR', telephone: '699456789', email: 'carlos@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'tresorier' },
    { id: 4, nom: 'DIANE EPSE MBAH', telephone: '677234567', email: 'diane@combis.cm', cotisation_mensuelle: 25000,
   statut: 'actif', role: 'membre' },
    { id: 5, nom: 'ERIC FILS', telephone: '655890234', email: 'eric@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'membre' },
    { id: 6, nom: 'FLORENCE EPE NDI', telephone: '699112233', email: 'florence@combis.cm', cotisation_mensuelle:
  25000, statut: 'actif', role: 'membre' },
    { id: 7, nom: 'GASTON FILS', telephone: '677345678', email: 'gaston@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'membre' },
    { id: 8, nom: 'HELENE EPSE MOMO', telephone: '699567890', email: 'helene@combis.cm', cotisation_mensuelle:
  25000, statut: 'actif', role: 'membre' },
    { id: 9, nom: 'IVAN FILS', telephone: '655123890', email: 'ivan@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'membre' },
    { id: 10, nom: 'JULIE EPSE TAMO', telephone: '677456123', email: 'julie@combis.cm', cotisation_mensuelle:
  25000, statut: 'actif', role: 'membre' },
    { id: 11, nom: 'KEVIN FILS', telephone: '699234567', email: 'kevin@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'membre' },
    { id: 12, nom: 'LAURA EPSE NDONG', telephone: '655345678', email: 'laura@combis.cm', cotisation_mensuelle:
  25000, statut: 'actif', role: 'membre' },
    { id: 13, nom: 'MARCEL FILS', telephone: '677567890', email: 'marcel@combis.cm', cotisation_mensuelle: 25000,
  statut: 'actif', role: 'membre' },
    { id: 14, nom: 'NICOLE EPSE BIYA', telephone: '699678901', email: 'nicole@combis.cm', cotisation_mensuelle:
  25000, statut: 'actif', role: 'membre' },
    { id: 15, nom: 'OLIVIER FILS', telephone: '655456789', email: 'olivier@combis.cm', cotisation_mensuelle: 25000,
   statut: 'actif', role: 'membre' }
  ];

  // Données des cotisations simulées
  const INITIAL_COTISATIONS = INITIAL_MEMBERS.map(membre => ({
    id: Date.now() + membre.id,
    membre_id: membre.id,
    nom_membre: membre.nom,
    mois: new Date().getMonth() + 1,
    annee: new Date().getFullYear(),
    montant: 25000,
    statut: Math.random() > 0.2 ? 'payee' : 'impayee',
    date_paiement: Math.random() > 0.2 ? new Date().toISOString().split('T')[0] : null
  }));

  // Données des sinistres simulés
  const INITIAL_SINISTRES = [
    {
      id: 1,
      membre_id: 3,
      nom_membre: 'CARLOS JUNIOR',
      type_sinistre: 'Décès parent',
      date_sinistre: '2024-01-15',
      montant_demande: 100000,
      montant_approuve: 100000,
      statut: 'approuve',
      description: 'Décès du père'
    },
    {
      id: 2,
      membre_id: 8,
      nom_membre: 'HELENE EPSE MOMO',
      type_sinistre: 'Naissance',
      date_sinistre: '2024-01-20',
      montant_demande: 30000,
      montant_approuve: 30000,
      statut: 'paye',
      description: 'Naissance de son 2ème enfant'
    }
  ];

  // Composant Login
  const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      setError('');

      const membre = INITIAL_MEMBERS.find(m => m.email === email);
      if (membre && (password === 'combis2024' || password === 'admin')) {
        onLogin(membre);
      } else {
        setError('Email ou mot de passe incorrect. Utilisez un email de la liste avec le mot de passe:
  combis2024');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">🤝 LES COMBIS</h1>
            <p className="text-gray-600">Système d'Assistance Solidaire</p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none
  focus:border-blue-500"
                placeholder="exemple@combis.cm"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none
  focus:border-blue-500"
                placeholder="combis2024"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600 bg-gray-50 p-4 rounded">
            <p className="font-semibold mb-2">Comptes de test :</p>
            <p>• abena@combis.cm (Admin)</p>
            <p>• carlos@combis.cm (Trésorier)</p>
            <p>• bella@combis.cm (Membre)</p>
            <p className="font-semibold mt-2">Mot de passe : combis2024</p>
          </div>
        </div>
      </div>
    );
  };

  // Composant Dashboard
  const Dashboard = ({ user, membres, cotisations, sinistres }) => {
    const totalMembres = membres.length;
    const totalCotisations = cotisations.reduce((sum, c) => c.statut === 'payee' ? sum + c.montant : sum, 0);
    const cotisationsPayees = cotisations.filter(c => c.statut === 'payee').length;
    const totalSinistres = sinistres.reduce((sum, s) => s.statut === 'paye' ? sum + s.montant_approuve : sum, 0);

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord</h1>
          <div className="text-right">
            <p className="text-sm text-gray-600">Bienvenue,</p>
            <p className="font-semibold text-gray-900">{user.nom}</p>
            <p className="text-xs text-blue-600 capitalize">{user.role}</p>
          </div>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100">
                <span className="text-2xl">👥</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Total Membres</p>
                <p className="text-2xl font-bold text-gray-900">{totalMembres}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100">
                <span className="text-2xl">💰</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Cotisations Collectées</p>
                <p className="text-2xl font-bold text-gray-900">{totalCotisations.toLocaleString()} F</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100">
                <span className="text-2xl">✅</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Cotisations Payées</p>
                <p className="text-2xl font-bold text-gray-900">{cotisationsPayees}/{totalMembres}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-red-100">
                <span className="text-2xl">🚨</span>
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-600">Assistance Versée</p>
                <p className="text-2xl font-bold text-gray-900">{totalSinistres.toLocaleString()} F</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activités récentes */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Activités Récentes</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {sinistres.slice(0, 3).map((sinistre, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <p className="text-sm text-gray-600">
                    {sinistre.nom_membre} - {sinistre.type_sinistre} - {sinistre.montant_approuve.toLocaleString()}
   FCFA
                  </p>
                </div>
              ))}
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <p className="text-sm text-gray-600">{cotisationsPayees} cotisations payées ce mois</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Composant Liste des Membres
  const Membres = ({ membres, user }) => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Membres</h1>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {membres.length} membres
          </span>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Nom</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Contact</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Cotisation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Rôle</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {membres.map((membre) => (
                <tr key={membre.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{membre.nom}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{membre.email}</div>
                    <div className="text-sm text-gray-500">{membre.telephone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {membre.cotisation_mensuelle.toLocaleString()} FCFA/mois
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full capitalize
                      ${membre.role === 'admin' ? 'bg-red-100 text-red-800' :
                        membre.role === 'tresorier' ? 'bg-green-100 text-green-800' :
                        'bg-blue-100 text-blue-800'}`}>
                      {membre.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                      {membre.statut}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Composant Cotisations
  const Cotisations = ({ cotisations, user }) => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Cotisations</h1>
          <div className="text-sm text-gray-600">
            Mois : {new Date().toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Membre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Statut</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date
   Paiement</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cotisations.map((cotisation) => (
                <tr key={cotisation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{cotisation.nom_membre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {cotisation.montant.toLocaleString()} FCFA
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full
                      ${cotisation.statut === 'payee' ? 'bg-green-100 text-green-800' : 'bg-red-100
  text-red-800'}`}>
                      {cotisation.statut === 'payee' ? 'Payée' : 'Impayée'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {cotisation.date_paiement || '-'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Composant Sinistres
  const Sinistres = ({ sinistres, user }) => {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Gestion des Sinistres</h1>
          {user.role === 'admin' && (
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Nouveau Sinistre
            </button>
          )}
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Membre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Montant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase
  tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sinistres.map((sinistre) => (
                <tr key={sinistre.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-gray-900">{sinistre.nom_membre}</div>
                    <div className="text-sm text-gray-500">{sinistre.description}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{sinistre.type_sinistre}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(sinistre.date_sinistre).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {sinistre.montant_approuve.toLocaleString()} FCFA
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full
                      ${sinistre.statut === 'paye' ? 'bg-green-100 text-green-800' :
                        sinistre.statut === 'approuve' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'}`}>
                      {sinistre.statut === 'paye' ? 'Payé' :
                       sinistre.statut === 'approuve' ? 'Approuvé' : 'En attente'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Composant Navigation
  const Navigation = ({ activeTab, setActiveTab, user, onLogout }) => {
    const tabs = [
      { key: 'dashboard', label: 'Tableau de Bord', icon: '📊' },
      { key: 'membres', label: 'Membres', icon: '👥' },
      { key: 'cotisations', label: 'Cotisations', icon: '💰' },
      { key: 'sinistres', label: 'Sinistres', icon: '🚨' }
    ];

    return (
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <div className="flex items-center py-4">
                <span className="text-xl font-bold text-gray-900">🤝 LES COMBIS</span>
              </div>
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors
                      ${activeTab === tab.key
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                  >
                    {tab.icon} {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">Bonjour, {user.nom.split(' ')[0]}</span>
              <button
                onClick={onLogout}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </nav>
    );
  };

  // Application principale
  function App() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [membres] = useState(INITIAL_MEMBERS);
    const [cotisations] = useState(INITIAL_COTISATIONS);
    const [sinistres] = useState(INITIAL_SINISTRES);

    // Vérifier si l'utilisateur est connecté au chargement
    useEffect(() => {
      const savedUser = localStorage.getItem('combis_user');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    }, []);

    const handleLogin = (userData) => {
      setUser(userData);
      localStorage.setItem('combis_user', JSON.stringify(userData));
    };

    const handleLogout = () => {
      setUser(null);
      localStorage.removeItem('combis_user');
      setActiveTab('dashboard');
    };

    // Si l'utilisateur n'est pas connecté, afficher la page de connexion
    if (!user) {
      return <Login onLogin={handleLogin} />;
    }

    // Interface principale
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user={user}
          onLogout={handleLogout}
        />

        <main className="max-w-7xl mx-auto py-6 px-4">
          {activeTab === 'dashboard' && <Dashboard user={user} membres={membres} cotisations={cotisations}
  sinistres={sinistres} />}
          {activeTab === 'membres' && <Membres membres={membres} user={user} />}
          {activeTab === 'cotisations' && <Cotisations cotisations={cotisations} user={user} />}
          {activeTab === 'sinistres' && <Sinistres sinistres={sinistres} user={user} />}
        </main>
      </div>
    );
  }

  export default App;
