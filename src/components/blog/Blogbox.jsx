import { useState } from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';


function Blogbox(props) {

	const { primery, secudary, blog } = props;
	//console.log(blog)
	return(
		<Card   elevation={0} sx={{ maxWidth: 600 , p: 1 }}>
			<Box>
				<Typography
					component={'div'}
					sx={{
						maxWidth: '600px', 
						height: '300px',
						mb: 1
					}}
				>
					<img src={new URL(`../../assets/blog/${blog.image}`, import.meta.url)} width={'100%'} height={'100%'}/>
				</Typography>

				<Typography			                 
	                variant="p" 
	                component={'div'}
	                sx={{
	              		fontWeight: 300,
	              		//mt: 1,
			            fontSize: '1rem',
			            fontFamily: 'Oswald, sans-serif',
	              		color: `${secudary}`,
	              		//ml: .5,
	              		'@media (max-width: 500px)': { 
	            			//fontSize: '2.5rem',	
	            			//mt: -2,	 
	        			},
	        			'&:hover': {
			              	color: '#AD8500',
			                cursor: 'pointer',
			                //color: 'white',
			                transition: 'all 1s',
			             },
	          		}}

	        	>
	          
	              {blog.title}
	          	</Typography>
	          	<Box
	          		sx={{
						display: 'flex',
						justifyContent: 'space-between',	
						mt: 1,
						//ml: .5,
					}}
	          	>
	          		<Typography			                 
		                variant="p" 
		                component={'div'}
		                sx={{
		              		fontWeight: 500,
		              		//mt: 1,
				            fontSize: '.8rem',
				            fontFamily: 'Oswald, sans-serif',
		              		color: `${primery}`,
		              		//ml: .5,
		              		'@media (max-width: 500px)': { 
		            			fontSize: '.6rem',	
		            			//mt: -2,	 
		        			},
		          		}}

		        	>
		          
		              by {blog.autor}
		          	</Typography>
		          	<Typography			                 
		                variant="p" 
		                component={'div'}
		                sx={{
		              		fontWeight: 500,
		              		//mt: 1,
				            fontSize: '.8rem',
				            fontFamily: 'Oswald, sans-serif',
		              		color: `${primery}`,
		              		//ml: .5,
		              		'@media (max-width: 500px)': { 
		            			fontSize: '.6rem',	
		            			//mt: -2,	 
		        			},
		          		}}

		        	>
		          
		              {blog.data}
		          	</Typography>
		          	<Typography			                 
		                variant="p" 
		                component={'div'}
		                sx={{
		              		fontWeight: 500,
		              		//mt: 1,
				            fontSize: '.8rem',
				            fontFamily: 'Oswald, sans-serif',
		              		color: `${secudary}`,
		              		//ml: .5,
		              		'@media (max-width: 500px)': { 
		            			fontSize: '.6rem',	
		            			//mt: -2,	 
		        			},
		        			'&:hover': {
				              	color: '#AD8500',
				                cursor: 'pointer',
				                //color: 'white',
				                transition: 'all 1s',
				             },
		          		}}

		        	>
		          
		              {blog.tipo}
		          	</Typography>
	          	</Box>

	          	<Box sx={{mt: 2, maxHeight: 70}}>
	          		<Typography			                 
		                variant="p" 
		                component={'div'}
		                sx={{
		              		fontWeight: 600,
		              		
				            fontSize: '.8rem',
				            fontFamily: 'Wix Madefor Display, sans-serif',
		              		color: `${primery}`,
		              		//ml: .5,
		              		'@media (max-width: 500px)': { 
		            			//fontSize: '2.5rem',	
		            			//mt: -2,	 
		        			},
		          		}}

		        	>
		          
		              {blog.conteudo}
		          	</Typography>
	          	</Box> 
			</Box>
		</Card>
	)

}

export default Blogbox;