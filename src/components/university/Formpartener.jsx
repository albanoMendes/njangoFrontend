import {useState, useRef, forwardRef, useEffect} from 'react';
import {Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "./Form.module.css";


export default function Formpartener(props) {

	const {primery, secudary, partenerin, opcao, foto, banner,  setOpenModel, tipoUser } = props;

	const [parter, setParter] = useState({
	    id: 0,
	    name: '',
	    curso: '', 
	    semestre: '', 
	    phone: '',
	    email: '',
	})

	const handleChannge=(e)=>{
		setParter({...parter,[e.target.name]: e.target.value})
	};

  useEffect(() => { 

    if(opcao == 'EDITAR'){
      //console.log(negocio)
       setParter({
          id: 0,
          name: partenerin.name,
          curso: partenerin.curso, 
          semestre: partenerin.semestre, 
          phone: partenerin.phone,
          email: partenerin.email,
        })
    }

  }, [])


	return(

		<Paper
			elevation={0}  
			className={classes.paperStyle} 
			style={{background: ' rgba(0, 0, 0, .0)',}}
		>
			<Box

				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Box
					sx={{width: '100%'}}
				>

					<div className={classes.input_box} >
              <label for="fname" style={{}}>NAME</label>
							<input 
								type="text" 
								id="fname" 
								name="name" 
								value={parter.name}
								onChange={handleChannge}
								//style={styles.input}
							/>
          </div>
					
				</Box>
				<Box
					sx={{
            display: 'flex',
            '@media (max-width: 800px)': { 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                 width: '100%',
            },
          }}
				>
					<Box 
            sx={{
              width: '100%',
               '@media (max-width: 800px)': { 
                 width: '100%',

              },
            }}

          >
						<div className={classes.input_box} >
	             <label for="fcurso" style={{}}>CURSO</label>
								<input 
									type="text" 
									id="fcurso" 
									name="curso" 
									value={parter.curso}
									onChange={handleChannge}
									//style={styles.input}
								/>
	         </div>

					</Box>

					<Box 
            sx={{
              ml: .5,
              width: '100%',
              '@media (max-width: 800px)': { 
                 width: '100%',
                 ml: 0 ,
              },
            }}
          >
						<div className={classes.input_box} >
	             <label for="fsemestre" style={{}}>SEMESTRE</label>
								<input 
									type="text" 
									id="fsemestre" 
									name="semestre" 
									value={parter.semestre}
									onChange={handleChannge}
                  placeholder="Ex: 2024.1 ou 2024.2"
									//style={styles.input}
								/>
	         </div>
					</Box>
					
                    
					
				</Box>

        <Box
          sx={{
            display: 'flex',
            width: '100%',
            '@media (max-width: 800px)': { 
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                 width: '100%',
            },
          }}
        >
          <Box 
            sx={{
              width: '100%',
               '@media (max-width: 800px)': { 
                 width: '100%',

              },
            }}

          >
            <div className={classes.input_box} >
               <label for="femail" style={{}}>EMAIL</label>
                <input 
                  type="text" 
                  id="femail" 
                  name="email" 
                  value={parter.email}
                  onChange={handleChannge}
                  //style={styles.input}
                />
           </div>

          </Box>

          <Box 
            sx={{
              ml: .5,
              width: '100%',
              '@media (max-width: 800px)': { 
                 width: '100%',
                 ml: 0 ,
              },
            }}
          >
            <div className={classes.input_box} >
               <label for="fphone" style={{}}>TEL</label>
                <input 
                  type="text" 
                  id="fphone" 
                  name="phone" 
                  value={parter.phone}
                  onChange={handleChannge}
                  //style={styles.input}
                />
           </div>
          </Box>
          
                    
          
        </Box>
			
				</Box>  
        <Box sx={{ }}>
          <Button 
              type="submit"               
              sx={{
                  m: '2px 0',
                  color: 'white',
                  borderRadius: 0,
                  cursor: 'pointer',    
                  textDecoration: 'none',
                  fontSize: '12px',
                  fontWeight: 200,                                   
              backgroundColor: `${secudary}`,
              fontFamily: 'Wix Madefor Display, sans-serif',
              '&:hover': {
                  color: '#171010',
                  backgroundColor: '#AD8500',
                  cursor: 'pointer',
                  transition: '0.3s ease-in',
              },
                      
              }}      
              //onClick={handleSave}
          > 
              {opcao}
          </Button>
           <Button 
                  type="submit" 
                  sx={{
                      ml: 1,
                      borderRadius: 0,
                      color: 'white',
                fontSize: '12px',
                fontWeight: 200,
                backgroundColor: 'red',                          
                fontFamily: 'Wix Madefor Display, sans-serif',
                '&:hover': {
                    color: 'red',
                    fontSize: '10px',
                    //fontWeight: 100,
                    backgroundColor: `black`,
                    cursor: 'pointer',
                    transition: '0.3s ease-in',
                },
                      
                  }}
                  //onClick={handleFinishAfter}
                  
              > 
                  FECHAR
              </Button>   
      </Box>
		</Paper>
	)
}