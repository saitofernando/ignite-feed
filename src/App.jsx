import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

// author: { avatar_url:"", name:"", role:""}
// published: Date
// content: String

const posts = [
    {
       id: 1,
       author: {
        avatarUrl: 'https://github.com/filipedeschamps.png',
        name: 'Filipe Deschamps',
        role: 'Estudante',
       },
       content: [
        { type: 'paragraph', content:'Fala galeraa 👋' } ,
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
        { type: 'link', content: 'https://tabnews.com.br' },
       ],
       publishedAt: new Date('2023-06-04 00:00:00'),
    },
    {
        id: 2,
        author: {
         avatarUrl: 'https://media.licdn.com/dms/image/D4D03AQFoSTIXqeo-Pw/profile-displayphoto-shrink_200_200/0/1675218791127?e=1691625600&v=beta&t=sY1s3ivNuWoNrnHDdS3aawPRZu5XRd_DhQCprTifuvA',
         name: 'Keziah Caravallo',
         role: 'Professora de Biologia',
        },
        content: [
         { type: 'paragraph', content:'Fala galeraa 👋' } ,
         { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
         { type: 'link', content: 'https://tabnews.com.br' },
        ],
        publishedAt: new Date('2023-05-30 00:00:00'),
     },
     {
        id: 3,
        author: {
         avatarUrl: 'https://github.com/filipedeschamps.png',
         name: 'Filipe Deschamps',
         role: 'Estudante',
        },
        content: [
         { type: 'paragraph', content:'Fala galeraa 👋' } ,
         { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' }, 
         { type: 'link', content: 'https://tabnews.com.br' },
        ],
        publishedAt: new Date('2023-05-30 00:00:00'),
     },
];



export function App() {
    return (    
        <div>
            <Header />
            
            <div className={styles.wrapper}>
                <Sidebar />
               
                <main>
                   {posts.map(post => {
                    return (
                    <Post 
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
