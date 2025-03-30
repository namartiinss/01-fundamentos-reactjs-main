import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/namartiinss.png',
      name: '@nathaliaMartins',
      role: 'Dev Front End @Suzano S.A'
    },

    content: [
      { type: 'paragraph', content: 'Oie pessu,' },
      { type: 'paragraph', content: 'Vou tomar um chocolate quente em Sao Paulo hoje!'},
      // { type: 'link', content: #Chocolate #cafe}
    ],
    publishedAt: new Date('2025-03-19 17:43:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/erosMariano.png',
      name: '@erosMariano',
      role: 'Dev Front End @Claro'
    },

    content: [
      { type: 'paragraph', content: 'Que delícia, Nat! Também quero!' },
      // { type: 'link', content: #Chocolate#cafe}
    ],
    publishedAt: new Date('2025-03-19 17:43:00'),
  },
]

function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />
        <main>
            {posts.map(post => {
              return (
                <Post 
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
        </main>
      </div>
    </div>
  )
}

export default App