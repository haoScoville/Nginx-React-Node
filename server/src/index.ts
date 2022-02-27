import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true, }))

app.get('/', (req, res) => {
  res.send('Hi There')
})

app.get('/books', (req, res) => {
  res.json([
    {
      title: 'Dragon ball',
      author: 'Akira Toriyama',
    },
    {
      title: 'Detective Conan',
      author: 'Gosho Aoyama',
    },
    {
      title: 'Naruto',
      author: 'Kishimoto Masashi',
    },
    {
      title: 'Doraemon',
      author: 'Fujiko Fujio',
    }
  ])
})

app.get('/movies', (req, res) => {
  console.log("CALL");
  
  res.json([
    {
      title: 'Matrix',
      characters: ['Neo', 'Trinity'],
    },
    {
      title: 'Detective Conan',
      characters: ['Conan', 'Ran'],
    },
    {
      title: 'Iron man',
      characters: ['Tony Stark'],
    },
    {
      title: 'Spider man',
      characters: ['Peter Parker', 'Mary Jane'],
    }
  ])
})

app.listen('3001', () => undefined)
