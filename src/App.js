import React, { useState, useEffect } from 'react';

  const MEMBERS = [
    { id: 1, nom: 'ABENA FILS', email: 'abena@combis.cm', role: 'admin' },
    { id: 2, nom: 'BELLA MARIE', email: 'bella@combis.cm', role: 'membre' },
    { id: 3, nom: 'CARLOS JUNIOR', email: 'carlos@combis.cm', role: 'tresorier' },
    { id: 4, nom: 'DIANE EPSE MBAH', email: 'diane@combis.cm', role: 'membre' },
    { id: 5, nom: 'ERIC FILS', email: 'eric@combis.cm', role: 'membre' }
  ];

  const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
      e.preventDefault();
      const user = MEMBERS.find(m => m.email === email);
      if (user && password === 'combis2024') {
        onLogin(user);
      } else {
        alert('Utilisez un email de la liste avec mot de passe: combis2024');
      }
    };

    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">🤝 LES COMBIS</h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Mot de passe</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
                required
              />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Se connecter
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-600">
            <p>Comptes de test :</p>
            <p>• abena@combis.cm (Admin)</p>
            <p>• carlos@combis.cm (Trésorier)</p>
            <p>Mot de passe : combis2024</p>
          </div>
        </div>
      </div>
    );
  };

  const Dashboard = ({ user }) => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Bienvenue {user.nom} ({user.role})</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">👥 Membres</h3>
          <p className="text-3xl font-bold text-blue-600">15</p>
          <p className="text-gray-600">Total membres</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">💰 Cotisations</h3>
          <p className="text-3xl font-bold text-green-600">375,000</p>
          <p className="text-gray-600">FCFA ce mois</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">🚨 Sinistres</h3>
          <p className="text-3xl font-bold text-red-600">130,000</p>
          <p className="text-gray-600">FCFA versés</p>
        </div>
      </div>
    </div>
  );

  const Membres = () => (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Gestion des Membres</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Nom</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Rôle</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {MEMBERS.map((member) => (
              <tr key={member.id}>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{member.nom}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{member.email}</td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                    {member.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const Navigation = ({ activeTab, setActiveTab, user, onLogout }) => (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-8">
            <div className="py-4">
              <span className="text-xl font-bold text-gray-900">🤝 LES COMBIS</span>
            </div>
            <div className="flex space-x-8">
              {[
                { key: 'dashboard', label: 'Tableau de Bord' },
                { key: 'membres', label: 'Membres' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab.key
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500'
                  }`}
                >
                  {tab.label}
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

  function App() {
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');

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
    };

    if (!user) {
      return <Login onLogin={handleLogin} />;
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          user={user}
          onLogout={handleLogout}
        />

        <main>
          {activeTab === 'dashboard' && <Dashboard user={user} />}
          {activeTab === 'membres' && <Membres />}
        </main>
      </div>
    );
  }

  export default App;
