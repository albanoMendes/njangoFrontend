import { useState,  useEffect} from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button, Paper} from '@mui/material';
import { ChevronRight }  from '@mui/icons-material';
import classes from "./More.module.css";
import blogimage from '../../assets/Centrolucro.jpg';
import ReactPaginate from 'react-paginate';
//import ReactPaginate from 'react-paginate';
import serviceactive from './serviceactive';
import Activebox from '../Activebox';
import Footerblog from '../blog/Footerblog';

const LIMIT = 6;
const MAX_ITEMS = 6;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

const pageSize = 6;

function Moreactives(props) {

	const { primery, secudary } = props;
	const [activos, setActivos] = useState([]);
	const [offset, setOffset] = useState(0)
	const current = offset ? (offset / LIMIT) + 1 : 1;
	const pages = Math.ceil(activos.length/LIMIT);
	const first = Math.max(current - MAX_LEFT, 1);

	const [pagination, setPagination] = useState({
		count: 0,
		from: 0,
		to: pageSize
	})


	function onPageChange(page) {
	    
	}

	const handlePageClick = (data) =>{
		console.log()
		if(activos.length > 0) {
			const from = (data.selected - 1) * pageSize;
	    	const to = (data.selected - 1) * pageSize + pageSize;
	    	setPagination({...pagination, from: from, to: to})
		} else {
			setPagination({...pagination, from: 0, to: pageSize})
		}
		

	   
	}

	useEffect(() => {
	    //setInfo({});
	    serviceactive.getData({from: pagination.from, to: pagination.to}).then(response => {
	    	
	    	setPagination({ ...pagination, count: response.count})
	    	if(response.count > 0 && response.data.length == 0){
	    		serviceactive.getData({from: 0, to: pageSize}).then(response => {
					setPagination({ 
						count: response.count,
						from: 0,
						to: pageSize
					})
					setActivos(response.data)
	    			console.log(response)
	    		})
	    	}
	    	setActivos(response.data)
	    	console.log(response)
	    })
	    
	 }, [pagination.from, pagination.to]);

	return(
		<>
			<img src={blogimage} width={'100%'} height={320}/>
		
			<div 
				className={classes.sombra}
			>
		
				<div 
					//className={classes.content}
					style={{
						//m: 10
					}}
				>
					<Typography					
						sx={{
							mt: 22,
							ml: 10,
							fontSize: '1.2rem',
							fontWeight: 500,
							color: ' #BDC1C9',
							fontFamily: 'Oswald, serif',
							'@media (max-width: 800px)': { fontSize: '1rem', mt: 28 },
							'@media (max-width: 400px)': { fontSize: '.7rem' },
							
						}}

					>

					<Divider  
				    	sx={{
				    		fontWeight: 700,  
				    		mt: 2,
				    		fontSize: 15,
	                		width: 50,
	                		border: `1px solid #BDC1C9`,
	                		fontFamily: 'Oswald, serif',
							'@media (max-width: 800px)': { fontSize: 12 },
							'@media (max-width: 400px)': { fontSize:  10 },
	            		}}
	                /> INVSTIMENTO
				       
				    </Typography>
				    <Typography					
						sx={{
							ml: 10,
							fontSize: '3.5rem',
							fontWeight: 200,
							color: 'white',
							fontFamily: 'Oswald, serif',
							'@media (max-width: 800px)': { fontSize: '2.5rem', mt: 1 },
							'@media (max-width: 400px)': { fontSize: '1.5rem' },
							
						}}

					>

					Investimentos Activos
				       
				    </Typography>

				    <Box
				    	sx={{
				    		display: 'flex',
				    		mt: 5, 
				    		color: ' #BDC1C9',
				    	}}
				    >
				    	<Typography					
							sx={{
								//mt: 5,
								ml: 10,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.7rem' },
								
							}}

						>

						Início
					       
					    </Typography>
				    	<ChevronRight 
				    		sx={{
				    			ml: 3,
				    			mr: 3, 
				    			mt: .5, 
				    			fontSize: '1.1rem', 
				    			fontWeight: 700,
				    			'@media (max-width: 800px)': { mt: .1 },

				    		}}
				    	/>
				    	<Typography					
							sx={{
								//mt: 5,
								//ml: 5,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.6rem' },
								
							}}

						>

						Investimento
					       
					    </Typography>
					    <ChevronRight 
					    	sx={{
					    		ml: 3, 
					    		mr: 3, 
					    		mt: .5, 
					    		fontSize: '1.1rem', 
					    		fontWeight: 700,
					    		'@media (max-width: 800px)': { mt: .1 },
					    	}}
					    />
					    <Typography					
							sx={{
								//mt: 5,
								//ml: 5,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.6rem' },
								
							}}

						>

						Investimentos Activos
					       
					    </Typography>
				    </Box>

				</div>
			</div>

			<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
						//pl: 5,
						m: 4,
					}}
				>

					
					{activos.length == 0 ?

						<Typography					
							sx={{
								//mt: 5,
								//ml: 5,
								fontSize: '.9rem',
								fontWeight: 500,
								fontFamily: 'Oswald, serif',
								'@media (max-width: 800px)': { fontSize: '.8rem' },
								'@media (max-width: 400px)': { fontSize: '.6rem' },
								
							}}

						>

							Não têm blogs
					       
					    </Typography>
					 : 
						 <Grid sx={{ flexGrow: 1, mt: .1 }} container spacing={2}>
							<Grid item xs={12}>
								<Grid container justifyContent="center" spacing={2}>
									{
										activos.map((slide, index) => {
											return(
												<Grid key={index} item sm={6} md={4} >
													<Activebox primery={primery} secudary={secudary} activo={slide}/>
												</Grid>
											)
											
										})
									}
									
								</Grid>
							</Grid>
						</Grid>
					}
					{activos.length == 0 ?
						''
						:
						<Box
							className={classes.pagination}
			          		sx={{
								display: 'flex',
								justifyContent: 'start',	
								mt: 1,
								alignItems: 'start',
								ml: '-70%',
								'@media (max-width: 800px)': { ml: '-60%', },
								'@media (max-width: 500px)': { ml: 0, },
							}}
		          		>

							<ReactPaginate
								previousLabel={
									<button 
							        	//size="small"
							        	//onClick={submit}
							        	onClick={() => onPageChange(current - 1)}
							          	disabled={current === 1}
							        >
							        	{'<'}
							        </button>
								}
								nextLabel={
									<button 
						        	//size="small"
						        	//onClick={submit}
						        	onClick={() => onPageChange(current - 1)}
						          	disabled={current === 1}
							        	
							        >
							        	{'>'}
							        </button> 
								}
								breakLabel={'...'}
								pageCount={pagination.count}
								marginPagesDisplayed={3}
								pageRageDisplayed={3}
								containerClassName={classes.pagination}
								activeClassName={`${classes.item} ${classes.active}`}
        						disabledClassName={classes.disabled_page}
								onPageChange={handlePageClick}

							/>
						</Box>
					}
					
					
				</Box>
				<Paper
					elevation={1}
					sx={{					
		         		//p: 8,
		         		m: 1,
		        		borderRadius: 0,
					}}
				>
					<Footerblog primery={''} secudary={secudary} />
				</Paper>

					
			
		</>
	)


}

export default Moreactives;
