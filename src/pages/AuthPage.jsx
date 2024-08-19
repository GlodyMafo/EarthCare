

// pages/AuthPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import users from '../hooks/users.json'; // Importer les données JSON

const AuthPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const user = users.find((user) => user.email === email && user.password === password);

        if (user) {
            onLogin(user); // Met à jour l'état d'authentification avec l'utilisateur
            if (user.role === 'admin') {
                navigate('/admin'); // Redirige vers la page Admin si l'utilisateur est admin
            } else {
                navigate('/profile'); // Redirige vers la page Profile si l'utilisateur est un user
            }
        } else {
            setError('Email ou mot de passe incorrect');
        }
    };

    const handleRegister = (e) => {
        e.preventDefault();
        const userExists = users.some((user) => user.email === newEmail);

        if (userExists) {
            setError('Un utilisateur avec cet email existe déjà');
        } else {
            // Enregistrer le nouvel utilisateur
            const newUser = {
                id: users.length + 1, // Simplement pour l'exemple
                profilePicture: "https://via.placeholder.com/150",
                name: newEmail.split('@')[0], // Utiliser la partie avant '@' comme nom
                email: newEmail,
                password: newPassword,
                role: 'user', // Définir le rôle par défaut comme 'user'
                description: "",
                contributions: [],
                achievements: [],
            };

            // Vous devrez mettre à jour votre backend ou fichier JSON ici
            // Ici, nous allons simplement afficher un message pour l'exemple
            console.log('Nouvel utilisateur enregistré :', newUser);
            // Simuler l'ajout au JSON (en pratique, cela devrait être fait côté serveur)
            users.push(newUser);

            // Connexion immédiate après inscription
            onLogin(newUser);
            navigate('/profile');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-sm p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-bold mb-6">{isRegistering ? 'Inscription' : 'Connexion'}</h2>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={isRegistering ? handleRegister : handleLogin}>
                    {isRegistering && (
                        <div className="mb-4">
                            <label className="block text-sm font-bold mb-2" htmlFor="newEmail">
                                Email
                            </label>
                            <input
                                type="email"
                                id="newEmail"
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    )}
                    {isRegistering && (
                        <div className="mb-6">
                            <label className="block text-sm font-bold mb-2" htmlFor="newPassword">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="newPassword"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    )}
                    {!isRegistering && (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-bold mb-2" htmlFor="password">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </>
                    )}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded-md"
                    >
                        {isRegistering ? 'S\'inscrire' : 'Se connecter'}
                    </button>
                    <div className="mt-4 text-center">
                        {isRegistering ? (
                            <p>
                                Déjà un compte ?{' '}
                                <button
                                    type="button"
                                    onClick={() => setIsRegistering(false)}
                                    className="text-blue-500"
                                >
                                    Connexion
                                </button>
                            </p>
                        ) : (
                            <p>
                                Pas encore de compte ?{' '}
                                <button
                                    type="button"
                                    onClick={() => setIsRegistering(true)}
                                    className="text-blue-500"
                                >
                                    Inscription
                                </button>
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthPage;
