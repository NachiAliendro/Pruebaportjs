const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const projects = [
    { id: 1, name: 'Proyecto 1', description: 'Descripción del Proyecto 1' }, 
    { id: 2, name: 'Proyecto 2', description: 'Descripción del Proyecto 2' }, 
 
];

app.get('/api/projects', (req, res) => {
    res.json(projects);
});

app.listen(PORT, () => {
    console.log(`Servidor ON on http://localhost:${PORT}`);
});