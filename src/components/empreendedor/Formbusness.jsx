import {useState, useRef, forwardRef, useEffect} from 'react';
import {Box, FormLabel, Typography, Grid, Paper, Divider, IconButton,  RadioGroup, Radio, FormControlLabel, Button, TextField, FormControl, InputLabel, Select, MenuItem, Input} from '@mui/material';
import { LocationOn, PhotoCamera, LocalPhone } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { useTheme } from '@mui/material/styles';
import classes from "./Form.module.css";


export default function Formbusness(props) {

	const {primery, secudary, negocio, opcao, foto, banner, setNegocio, setOpenModel } = props;

	const [selectedImage, setSelectedImage] = useState();
    const [img, setImg] = useState(foto)
    const selectFile = useRef();

    const [selectedImagebanner, setSelectedImagebanner] = useState();
    const [imgbanner, setImgbanner] = useState(banner)
    const selectFilebanner = useRef();

    const [message, setMessage] = useState('');
    const [work, setWork] = useState('PRODUTOS');
    const [cor, setCor] = useState('#00809b');

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

	const [plano, setPlano] = useState({
	   	id: 1,
		empresa: '',
		segment: '',
		resumo: '',
		capital: 0,
		credito: 0,
		lucro: 0,
		descricao: '',
		objetivos: '',
		analise: '',
		missao: '',
		work: '',
		organizacao: '',
		markting: '',
		local: '',
		celular: '',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
	});

	 const handleChannge=(e)=>{
		setNegocio({...negocio,[e.target.name]: e.target.value})
	};

	useEffect(() => { 

		if(opcao == 'EDITAR'){
			//console.log(negocio)
		}


	}, [])
	/*
		const handleFinishAfter = async (e) => {
	        e.preventDefault();
	        console.log(total)
	        if(total > 0){
	            setInvestment({
	                profit: 0,
	                total: total,
	                status: 'PROCESSANDO',
	                idyield: rendimento.id,
	                idUser: investimento.idUser,
	                idNivel: investimento.idNivel,
	                data_in: ''
	            })
	            console.log(investment)
	            const formData = new FormData();
	            formData.append("profit", 0);
	            formData.append("total", total);
	            formData.append("status", 'PROCESSANDO');
	            formData.append("tipo", yielld.tipo);
	            formData.append("idyield", investimento.idyield);
	            formData.append("iduser", investimento.idUser);
	            formData.append("idnivel", investimento.idNivel);            
	            formData.append("foto", selectFile.current.files[0]);
	            //console.log(total)
	            //console.log(nivel.min)
	            //console.log(total < nivel.min)
	            ///console.log(total < nivel.max)
	            if(Number(total) > Number(nivel.min) && Number(total) < Number(nivel.max)){
	                axios({
	                    method: 'post',
	                    url: 'http://localhost:8080/criptoapp/src/api/investimentos/insert.php',
	                    data: formData,
	                    config: { headers: {'Content-Type': 'multipart/form-data' }}
	                })
	                .then(function (response) {
	                    //handle success
	                    console.log(response)                    
	                    setCor('#00809b')
	                    setMessage('Investimento cadastrada com sucesso!');
	                    setOpenModel(false)
	                })
	                .catch(function (response) {
	                    //handle error
	                    console.log(response)
	                    setCor('red');
	                    setMessage(response.data);
	                });

	            } else {
	                setCor('red');
	                setMessage(`[ERRO] O valor não esta no intervalo exigidos,\n para investir nesse nível!`);
	            }
	        } else {
	            setCor('red');
	            setMessage("Tem algum campo vazio. VERIFICA!")
	        }
	        
	        console.log(investment)
	    }

	*/



	/*
		const handleSave = async (e) => {
	        e.preventDefault();
	        if(total > 0){
	            if(opcao === "FINALIZAR"){
	                setInvestment({
	                    profit: 0,
	                    total: total,
	                    status: 'PEDENTE',
	                    idyield: investimento.idyield,
	                    idUser: investimento.idUser,
	                    idNivel: investimento.idNivel,
	                    data_in: data_in
	                })
	                console.log(investment)
	                const formData = new FormData();
	                formData.append("id", investimento.id);    
	                formData.append("total", investimento.total);
	                formData.append("status", 'PEDENTE');
	                formData.append("foto", selectFile.current.files[0]);
	                formData.append("opcao", opcao);

	                axios({
	                    method: 'post',
	                    url: 'http://localhost:8080/criptoapp/src/api/investimentos/update.php',
	                    data: formData,
	                    config: { headers: {'Content-Type': 'multipart/form-data' }}
	                })
	                .then(function (response) {
	                    //handle success
	                    //console.log(response)                    
	                    setCor('#00809b')
	                    setMessage('Investimento atualizado com sucesso!');
	                    setOpenModel(false)
	                })
	                .catch(function () {
	                    //handle error
	                    //console.log(response)
	                    setCor('red');
	                    setMessage('Algum erro, tente novamente!');
	                });


	            } else {
	                const formData = new FormData();
	                formData.append("profit", 0);   
	                formData.append("total", total);
	                formData.append("status", 'PEDENTE');
	                formData.append("tipo", yielld.tipo);
	                formData.append("idyield", investimento.idyield);
	                formData.append("iduser", investimento.idUser);
	                formData.append("idnivel", investimento.idNivel);
	                formData.append("foto", selectFile.current.files[0]);
	                formData.append("opcao", opcao);
	                if(Number(total) > Number(nivel.min) && Number(total) < Number(nivel.max)){
	                    axios({
	                        method: 'post',
	                        url: 'http://localhost:8080/criptoapp/src/api/investimentos/insert.php',
	                        data: formData,
	                        config: { headers: {'Content-Type': 'multipart/form-data' }}
	                    })
	                    .then(function (response) {
	                        //handle success
	                        console.log(response)                    
	                        setCor('#00809b')
	                        setMessage('Investimento cadastrada com sucesso!');
	                        setOpenModel(false)
	                    })
	                    .catch(function (response) {
	                        //handle error
	                        console.log(response)
	                        setCor('red');
	                        setMessage(response.data);
	                    });

	                } else {
	                    setCor('red');
	                    setMessage(`[ERRO] O valor não esta no intervalo exigidos,\n para investir nesse nível!`);
	                }
	                

	            }
	        } else {
	            setCor('red');
	            setMessage("Tem algum campo vazio. VERIFICA!")
	        }
	        
	    }

	*/
	
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
                            	<label for="fname" style={{}}>NOME DA EMPRESA</label>
  								<input 
  									type="text" 
  									id="fname" 
  									name="empresa" 
  									value={negocio.empresa}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                             <div className={classes.input_box} >                            	
  								<label for="country" style={{}}>TIPO DE TRABALHO</label>
							    <select 
							    	id="country" 
							    	name="segment"
							    	onChange={handleChannge}
									value={negocio.segment}
							    	
							    >
								    <option 
								      	value="VENDA" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	VENDA
								    </option>
								    <option 
								      	value="SERVIÇO" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	SERVIÇO
								    </option>
								    <option 
								      	value="OS DOIS" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	OS DOIS
								    </option>
								    <option 
								      	value="OS DOIS" 
								      	style={{
								      		fontSize: '12px',                                       
											fontFamily: 'Oswald, sans-serif',
											color: `${secudary}`,
								      	}} 
								    >
								      	OUTROS
								    </option>								      
							    </select>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="descricao" style={{}}>RESUMO EXECUTIVO</label>						
								<textarea 
									id="descricao"
									//cols={20}
									rows={6}								
									placeholder={`Resumo Executivo:\nDescreva sucintamente a visão da sua empresa`}
									name="resumo"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.resumo} 
								</textarea>
								
							</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="objetivos" style={{}}>DESCRIÇÃO</label>						
								<textarea 
									id="objetivos"
									//cols={20}
									rows={6}								
									placeholder={`Qual é o histórico da empresa?\nQuem são os fundadores e principais membros da equipe?`}
									name="descricao"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.descricao} 
								</textarea>
								
							</div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="objetivos" style={{}}>OBJETIVOS</label>						
								<textarea 
									id="objetivos"
									//cols={20}
									rows={6}								
									placeholder={`Objetivos:\nDescreva sucintamente as Metas de curto e longo prazo.`}
									name="objetivos"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.objetivos} 
								</textarea>
								
							</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="missao" style={{}}>MISSÃO</label>						
								<textarea 
									id="missao"
									//cols={20}
									rows={6}								
									placeholder={`Missão da empresa:\nQual é a missão da tua empresa?`}
									name="missao"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.missao} 
								</textarea>
								
							</div>
                        </Grid>


                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="analise" style={{}}>ANALISE</label>						
								<textarea 
									id="analise"
									//cols={20}
									rows={6}								
									placeholder={`Análise de Mercado:\nQuem são seus principais concorrentes diretos e indiretos?\n Qual é o tamanho total do mercado-alvo?\nQuais são as tendências e oportunidades no mercado?`}
									name="analise"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.analise} 
								</textarea>
								
							</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="organizacao" style={{}}>ORGANIZAÇÃO</label>						
								<textarea 
									id="organizacao"
									//cols={20}
									rows={6}								
									placeholder={`Organização e Gestão:\nDescreva a estrutura organizacional da empresa.\nQuais são as responsabilidades-chave de cada membro da equipe de gestão?`}
									name="organizacao"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.organizacao} 
								</textarea>
								
							</div>
                      	</Grid>


                      	<Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="servico" style={{}}>{work}</label>						
								<textarea 
									id="servico"
									//cols={20}
									rows={6}								
									placeholder={`${work}:\nQuais são os ${work} oferecidos?\nQual é o diferencial competitivo?`}
									name="work"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.work} 
								</textarea>
								
							</div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                        	<div className={classes.input_box}>
                        		<label for="estrategia" style={{}}>ESTRATÉGIA DE MARKETING:</label>						
								<textarea 
									id="estrategia"
									//cols={20}
									rows={6}								
									placeholder={`Estratégia de Marketing:\nComo você pretende posicionar a sua empresa no mercado?.\nQuais são os canais de marketing que você planeja utilizar?`}
									name="markting"
									onChange={handleChannge}
									//style={classes.textarea}	                        	
								>
									{negocio.markting} 
								</textarea>
								
							</div>
                      	</Grid>

                        <Grid item xs={12} sm={4}>
                        	<div className={classes.input_box} >
                            	<label for="capital" style={{}}>CAPITAL</label>
  								<input 
  									type="number" 
  									id="capital" 
  									name="capital" 
  									min={0}
  									value={negocio.capital}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        	<div className={classes.input_box} >
                            	<label for="credito" style={{}}>VALOR DE INVESTIMENTO</label>
  								<input 
  									type="number" 
  									id="credito" 
  									name="credito"
  									min={0} 
  									value={negocio.credito}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                        	<div className={classes.input_box} >
                            	<label for="lucro" style={{}}>LUCRO</label>
  								<input 
  									type="number" 
  									id="lucro" 
  									name="lucro"
  									min={0} 
  									value={negocio.lucro}
  									onChange={handleChannge}
  									//style={styles.input}
  								/>
                            </div>
                        </Grid>

                       

                        <Grid item xs={12} sm={6}>
                        	<div className={classes.search}>
									<span className={classes.form_element} >

										<span className={classes.fa_search}>
											<LocationOn
												sx={{
													fontSize: '1.8rem', 
													color: `${secudary}`,
													'@media (max-width: 982px)': { 
								            			fontSize: '1.5rem', 
								            		},
								            	}}
											/>
										</span>

										<input 
											type="text" 
											placeholder="INFORME ENDEREÇO"
											name="local"
											value={negocio.local}
  											onChange={handleChannge}
										/>
									</span>
								</div>  
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<div className={classes.search}>
									<span className={classes.form_element} >

										<span className={classes.fa_search}>
											<LocalPhone
												sx={{
													fontSize: '1.8rem', 
													color: `${secudary}`,
													'@media (max-width: 982px)': { 
								            			fontSize: '1.5rem', 
								            		},
								            	}}
											/>
										</span>

										<input 
											type="text" 
											placeholder="INFORME TELEFONE"
											name="celular"
											value={negocio.celular}
  											onChange={handleChannge}
										/>
									</span>
								</div>  
                        </Grid>

                        <Grid item xs={12} sm={6}>
                        	<Box sx={{mb: 1}}>
				                <IconButton size="small" sx={{borderRadius: 0, color: `${secudary}`}}  aria-label="upload picture" component="label">
				                    <input 
				                        hidden
				                        accept="image/*" 
				                        type="file" 
				                        ref={selectFile}  
				                        onChange={imageChange}                          
				                        required 
				                    />
				                        <PhotoCamera />
				                        <Typography variant="overline" display="block" sx={{fontFamily: 'Oswald, sans-serif',}} gutterBottom margin={1}>
				                            IMAGEM DA LOGO
				                        </Typography>	                       	
				                </IconButton>  
				                    
			                    <Box style={{
			                            marginTop: 1,
			                            display: "flex",
			                            flexDirection: "column",
			                        }}
			                    >
			                        <img							
			                            src={(selectedImage === undefined) ? new URL(`../../assets/Logos/${img}`, import.meta.url) : URL.createObjectURL(selectedImage)}//{ foto : }
			                            style={{ maxWidth: "20%", maxHeight: 100 }}
			                            alt="Thumb"
			                        />
			                    </Box>
				            </Box>
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
				                            BANNER
				                        </Typography>	                       	
				                </IconButton>  
				                    
			                    <Box style={{
			                            marginTop: 1,
			                            display: "flex",
			                            flexDirection: "column",
			                        }}
			                    >
			                        <img							
			                            src={(selectedImagebanner === undefined) ? new URL(`../../assets/publicidades/${imgbanner}`, import.meta.url) : URL.createObjectURL(selectedImagebanner)}//{ foto : }
			                            style={{ maxWidth: "40%", maxHeight: 175 }}
			                            alt="Thumb"
			                        />
			                    </Box>
				            </Box>
                        </Grid>

					</Grid>

				</Grid>

			</Grid>


			<Grid align="center" sx={{ mt: 1 }}>
                <Typography
                    component="p"
                        sx={{
                                color: `${cor}`,
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: 'bold', 
                                fontSize: '10px',
                                fontFamily: 'Roboto, sans-serif',
                                '@media (max-width: 600px)': { fontSize: '8px' },
                            }}
                        >
                            {message}
                    </Typography>
            </Grid>

            <Divider />
            <Box sx={{ mt: 1, mb: .5 }}>
                {opcao === "EDITAR"?
                    ''
                    :
                    <Button 
                        type="submit" 
                        sx={{
                            mr: 0.5,
                            borderRadius: 0,
                            //color: 'white',
			                fontSize: '12px',
			                fontWeight: 200,
			                backgroundColor: '#634100',				                   
			                fontFamily: 'Wix Madefor Display, sans-serif',
			                '&:hover': {
			                    color: '#171010',
			                    backgroundColor: `${secudary}`,
			                    cursor: 'pointer',
			                    transition: '0.3s ease-in',
			                },
                            
                        }}
                        //onClick={handleFinishAfter}
                        
                    > 
                        FINALIZAR DEPOIS
                    </Button>   
                }
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
            </Box>



		</Paper>
	)
}