import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepainel from './pages/Homepainel';
import Entrepreneurpainel from './pages/Entrepreneurpainel';
import Investidorpainel from './pages/Investidorpainel';
import Financeiropainel from './pages/Financeiropainel';
import Universitypainel from './pages/Universitypainel';
import Rhpainel from './pages/Rhpainel';
import Investirpainel from './pages/Investirpainel';

//Rhpainel
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const [count, setCount] = useState(0)
  const [primery, setPrimery] = useState('#ddd')
  const [secudary, setSecudary] = useState('#F9CC19')
  const [logado, setLogado] = useState(false)
  const [read, setRead] = useState(true)
  const [status, setStatus] = useState('FAZER LOGIN')

  const [user, setUser] = useState({
    id: 0,
    name: '',
    lastname: '',
    img: '',
    formacao: '',
    skill: '',
    typeUser: '',
    email: '',
    phone: '',
    idCountry: ''
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} read={read}/>}  />
          </Routes>
          <Routes>
            <Route path="/Entrepreneur" element={<Entrepreneurpainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} />}  />
          </Routes>
          <Routes>
            <Route path="/Investidor" element={<Investidorpainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} />}  />
          </Routes>
          <Routes>
            <Route path="/Financeiro" element={<Financeiropainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} />}  />
          </Routes>
          <Routes>
            <Route path="/University" element={<Universitypainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} />}  />
          </Routes>
          <Routes>
            <Route path="/Rh" element={<Rhpainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} />}  />
          </Routes>
          <Routes>
              <Route path="/Investir/:id" element={<Investirpainel primery={primery} secudary={secudary} logado={logado} user={user} setUser={setUser} setStatus={setStatus}  />}  />
          </Routes>
        </BrowserRouter>    
        <CssBaseline />
      </ThemeProvider>
      
    </>
  )
  
}

export default App;
/*
  <Route path="/" element={<Homepainel primery={primery} secudary={secudary} logado={logado} setLogado={setLogado} user={user} setUser={setUser} status={status} setStatus={setStatus} />}  />
          <Route path="/Investir" element={<Investirpainel primery={primery} secudary={secudary}  />}  />

*/
