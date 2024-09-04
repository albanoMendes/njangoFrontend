import {useState, useRef, forwardRef, useEffect} from 'react';
import {Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "./Form.module.css";

export default function Formblog(props) {

	const {primery, secudary, blogin, opcao, foto, banner,  setOpenModel, tipoUser } = props;

	const [selectedImage, setSelectedImage] = useState();
    const [img, setImg] = useState(foto)
    const selectFile = useRef();

    const [selectedImagebanner, setSelectedImagebanner] = useState();
    const [imgbanner, setImgbanner] = useState(banner)
    const selectFilebanner = useRef();

    const [message, setMessage] = useState('');
    const [work, setWork] = useState('PRODUTOS');
    const [cor, setCor] = useState('#00809b');

    const [blog, setBlog] = useState({
	    id: 0,
	    title: '',
	    subtitle: '',
	    tipo: '',
	    autor: '',
	    data: '',
	    conteudo1: '', 
	    conteudo2: '', 
	    conteudo3: '', 
	    image1:'',
	    image2: '', 
	    more: '',
	})

	const handleChannge=(e)=>{
		setBlog({...blog,[e.target.name]: e.target.value})
	};

	useEffect(() => { 

		if(opcao == 'EDITAR'){
			//console.log(negocio)
			 setBlog({
		        id: blogin.id,
		        title: blogin.title,
		        subtitle: blogin.subtitle,
		        tipo: blogin.tipo,
		        autor: blogin.autor,
		        data: blogin.data,
		        conteudo1: blogin.conteudo1, 
		        conteudo2: blogin.conteudo2, 
		        conteudo3: blogin.conteudo3, 
		        image1: blogin.image1,
		        image2: blogin.image2, 
		        more: blogin.more,
	      	})
		}

	}, [])

    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImage(e.target.files[0]);
        }
    };

    const imageChangebanner = (e) => {
        if (e.target.files && e.target.files.length > 0) {
           setSelectedImagebanner(e.target.files[0]);
        }
    };

	return(
		<Paper
			elevation={0}  
			className={classes.paperStyle} 
			style={{background: ' rgba(0, 0, 0, .0)',}}
		>
			<Grid sx={{ flexGrow: 1 }} container spacing={2}>

				<Grid item xs={12}>

					<Grid container justifyContent="space-between" spacing={2}>

						<Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="ftitle" style={{}}>TITULO</label>
  								<input 
  									type="text" 
  									id="ftitle" 
  									name="title" 
  									value={blog.title}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.input_box} >
                            	<label for="fsubtitle" style={{}}>SUB TITULO</label>
  								<input 
  									type="text" 
  									id="fsubtitle" 
  									name="subtitle" 
  									value={blog.subtitle}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="objetivos" style={{}}>INTRODUÇÃO</label>						
								<textarea 
									id="objetivos"
									//cols={20}
									rows={6}								
									placeholder={`Resumo ou Definição.\nIntrodução do assunto`}
									name="descricao"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{blogin.conteudo1} 
								</textarea>
								
							</div>
                        </Grid>
                        
                        <Grid item xs={12} sm={6}>
                        	<Box sx={{mb: 1}}>
				                <IconButton size="small" sx={{borderRadius: 0, color: `${secudary}`}}  aria-label="upload picture" component="label">
				                    <input 
				                        hidden
				                        accept="image/*" 
				                        type="file" 
				                        ref={selectFilebanner}  
				                        onChange={imageChangebanner}                          
				                        required 
				                    />
				                        <PhotoCamera />
				                        <Typography variant="overline" display="block" sx={{fontFamily: 'Oswald, sans-serif',}} gutterBottom margin={1}>
				                            BANNER 1
				                        </Typography>	                       	
				                </IconButton>  
				                    
			                    <Box style={{
			                            marginTop: 1,
			                            display: "flex",
			                            flexDirection: "column",
			                        }}
			                    >
			                        <img							
			                            src={(selectedImagebanner === undefined) ? new URL(`../../assets/blog/${imgbanner}`, import.meta.url) : URL.createObjectURL(selectedImagebanner)}//{ foto : }
			                            style={{ maxWidth: "40%", maxHeight: 175 }}
			                            alt="Thumb"
			                        />
			                    </Box>
				            </Box>
                        </Grid>

                       <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="objetivos" style={{}}>DESENVOLVIMENTO</label>						
								<textarea 
									id="objetivos"
									//cols={20}
									rows={6}								
									placeholder={`Desenvolvimento do assuntos.\nRespostas de algumas perguntas ou questionamentos`}
									name="descricao"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{blogin.conteudo2} 
								</textarea>
								
							</div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<Box sx={{mb: 1}}>
				                <IconButton size="small" sx={{borderRadius: 0, color: `${secudary}`}}  aria-label="upload picture" component="label">
				                    <input 
				                        hidden
				                        accept="image/*" 
				                        type="file" 
				                        ref={selectFilebanner}  
				                        onChange={imageChangebanner}                          
				                        required 
				                    />
				                        <PhotoCamera />
				                        <Typography variant="overline" display="block" sx={{fontFamily: 'Oswald, sans-serif',}} gutterBottom margin={1}>
				                            BANNER 2
				                        </Typography>	                       	
				                </IconButton>  
				                    
			                    <Box style={{
			                            marginTop: 1,
			                            display: "flex",
			                            flexDirection: "column",
			                        }}
			                    >
			                        <img							
			                            src={(selectedImagebanner === undefined) ? new URL(`../../assets/blog/${img}`, import.meta.url) : URL.createObjectURL(selectedImagebanner)}//{ foto : }
			                            style={{ maxWidth: "40%", maxHeight: 175 }}
			                            alt="Thumb"
			                        />
			                    </Box>
				            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12}>
                        	<div className={classes.input_box}>
                        		<label for="objetivos" style={{}}>CONCLUSÃO</label>						
								<textarea 
									id="objetivos"
									//cols={20}
									rows={6}								
									placeholder={`Conclusão do assunto.\nSugestão de outras leituras.`}
									name="descricao"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{blogin.conteudo2} 
								</textarea>
								
							</div>
                        </Grid>
                        {tipoUser == '' ?
                        	''
                        	:
                        	<Grid item xs={12} sm={12}>
	                        	<div className={classes.input_box}>
	                        		<label for="objetivos" style={{}}>ARQUIVO</label>						
									<input type="file" id="myfile" name="myfile"/>
									
								</div>
	                        </Grid>

                        }
                        
                        <Grid item xs={12} sm={6}>
                             <div className={classes.input_box} >                            	
  								<label for="country" style={{}}>AREA DE CONHECIMENTO</label>
							    <select 
							    	id="country" 
							    	name="segment"
							    	onChange={handleChannge}
									value={blog.tipo}
							    	
							    >
								    <option 
								      	value="ECONÓNIA" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	ECONÓNIA
								    </option>
								    <option 
								      	value="FINANÇAS" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	FINANÇAS
								    </option>
								    <option 
								      	value="SOCIEDADE" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	SOCIEDADE
								    </option>
								    <option 
								      	value="MARKETING" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	MARKETING
								    </option>
								    <option 
								      	value="EMPRENDEDORISMO" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	EMPRENDEDORISMO
								    </option>		
								    <option 
								      	value="INVESTIMENTO" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	INVESTIMENTO
								    </option>										      
							    </select>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<Box 
                        		sx={{
                        			display: 'flex',
									lignItems: 'center',
	        						textAlign: 'center',
                        		}}
                        	>
                        		 <Typography variant="overline" display="block" sx={{fontFamily: 'Oswald, sans-serif',}} gutterBottom margin={1}>
		                            {'Apr 21, 2023 at 12:05 pm'}
		                        </Typography>	
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
                        </Grid>

					</Grid>

				</Grid>

			</Grid>
		</Paper>
	)

}
