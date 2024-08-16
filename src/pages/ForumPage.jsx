import React, { useState } from 'react';

const fakeTopics = [
  {
    id: 1,
    title: 'Comment participer à un projet de reforestation ?',
    author: 'Alice Dupont',
    date: '2024-08-15',
    comments: [
      { author: 'Jean Martin', date: '2024-08-16', content: 'Vous pouvez commencer par rejoindre un projet existant.' },
      { author: 'Marie Dubois', date: '2024-08-16', content: 'N’oubliez pas de vérifier les détails du projet avant de contribuer.' },
    ],
  },
  {
    id: 2,
    title: 'Quelles sont les meilleures pratiques pour la reforestation ?',
    author: 'Paul Durand',
    date: '2024-08-14',
    comments: [
      { author: 'Laura Simon', date: '2024-08-15', content: 'Il est important de choisir les bonnes espèces d’arbres.' },
      { author: 'Pierre Lefevre', date: '2024-08-15', content: 'Le suivi et la maintenance régulière sont essentiels.' },
    ],
  },
];

const fakeFAQ = [
  {
    question: 'Comment créer un compte ?',
    answer: 'Pour créer un compte, cliquez sur le bouton "S\'inscrire" en haut à droite et suivez les instructions.',
  },
  {
    question: 'Comment puis-je contribuer à un projet ?',
    answer: 'Allez sur la page du projet et cliquez sur le bouton "Contribuer". Vous pouvez choisir le montant que vous souhaitez donner.',
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les cartes de crédit, PayPal, et d\'autres moyens de paiement en ligne.',
  },
  {
    question: 'Comment contacter le support client ?',
    answer: 'Vous pouvez contacter le support client via la section "Contactez-nous" au bas de la page.',
  },
];

const Forum = () => {
  const [newTopicTitle, setNewTopicTitle] = useState('');
  const [newTopicContent, setNewTopicContent] = useState('');
  const [topics, setTopics] = useState(fakeTopics);
  const [openQuestion, setOpenQuestion] = useState(null);

  const handleNewTopicSubmit = () => {
    if (newTopicTitle && newTopicContent) {
      const newTopic = {
        id: topics.length + 1,
        title: newTopicTitle,
        author: 'Vous',
        date: new Date().toISOString().split('T')[0],
        comments: [],
      };
      setTopics([newTopic, ...topics]); // Ajouter le nouveau sujet au début de la liste
      setNewTopicTitle('');
      setNewTopicContent('');
    }
  };

  const handleNewCommentSubmit = (topicId, commentContent) => {
    if (commentContent) {
      const updatedTopics = topics.map(topic => {
        if (topic.id === topicId) {
          return {
            ...topic,
            comments: [...topic.comments, { author: 'Vous', date: new Date().toISOString().split('T')[0], content: commentContent }],
          };
        }
        return topic;
      });
      setTopics(updatedTopics);
    }
  };

  const toggleFAQ = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Forum</h1>

      {/* Section FAQ */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">FAQ</h2>
        {fakeFAQ.map((faq, index) => (
          <div key={index} className="mb-4 border p-4 rounded-lg">
            <h3
              className="text-lg font-semibold cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </h3>
            {openQuestion === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>

      {/* Formulaire pour créer un nouveau sujet */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Créer un Nouveau Sujet</h2>
        <input
          className="border p-2 mb-2 w-full"
          placeholder="Titre du sujet"
          value={newTopicTitle}
          onChange={(e) => setNewTopicTitle(e.target.value)}
        />
        <textarea
          className="border p-2 mb-2 w-full"
          placeholder="Contenu du sujet"
          value={newTopicContent}
          onChange={(e) => setNewTopicContent(e.target.value)}
        />
        <button
          className="bg-green-500 text-white p-2 rounded"
          onClick={handleNewTopicSubmit}
        >
          Publier le sujet
        </button>
      </div>

      {/* Liste des sujets du forum */}
      <div className="mb-6">
        {topics.map((topic) => (
          <div key={topic.id} className="mb-6 border p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">{topic.title}</h3>
            <p className="mb-2 text-sm">Par {topic.author} le {topic.date}</p>
            <div className="mb-4">
              <h4 className="text-md font-semibold">Commentaires</h4>
              {topic.comments.map((comment, index) => (
                <div key={index} className="border p-2 rounded mb-2">
                  <p className="text-sm">{comment.author} le {comment.date}</p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </div>
            <NewCommentForm topicId={topic.id} onNewComment={handleNewCommentSubmit} />
          </div>
        ))}
      </div>
    </div>
  );
};

const NewCommentForm = ({ topicId, onNewComment }) => {
  const [commentContent, setCommentContent] = useState('');

  const handleCommentSubmit = () => {
    onNewComment(topicId, commentContent);
    setCommentContent('');
  };

  return (
    <div className="mb-4">
      <textarea
        className="border p-2 mb-2 w-full"
        placeholder="Votre commentaire"
        value={commentContent}
        onChange={(e) => setCommentContent(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={handleCommentSubmit}
      >
        Publier le commentaire
      </button>
    </div>
  );
};

export default Forum;
