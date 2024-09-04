import { useState } from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
//import Carousel from "react-elastic-carousel";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import classes from "./Investative.module.css";
import  Activebox from "./Activebox.jsx";


const rows = [
	{
		id: 1,
		empresa: 'INFRATEC S.A',
		segment: 'SERVIÇO',		
		credito: 50000,
		entrada: 10000,
		lucro: 5000,
		logo: 'construir.png',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'NILDE COOCK LDA',
		segment: 'VENDA',		
		credito: 10000,
		entrada: 150000,
		lucro: 20000,		
		logo: 'cozinhar.png',
		more: 'saber mais'
	},
		
];


function Investmentative(props) {

	const { primery, secudary } = props;
	const [investactive, setInvestactive] = useState(rows);

	const settings = {
	  dots: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  initialSlide: 0,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        //initialSlide: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	  ]
	}
	//console.log(investactive)
	return(
		<Box>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					color: `${primery}`,
					mt: 30

				}}
			>	
				<Typography
					variant="p"
					sx={{
						fontSize: '1rem',
						fontWeight: 700,
						fontFamily: 'Wix Madefor Display, serif',
						'@media (max-width: 800px)': { fontSize: '.8rem' },
						
					}}
				>
					Investimentos aplicados
				</Typography>
				<Typography					
					sx={{
						fontSize: '2.5rem',
						fontWeight: 700,
						fontFamily: 'Wix Madefor Display, serif',
						'@media (max-width: 800px)': { fontSize: '1.8rem' },
						'@media (max-width: 400px)': { fontSize: '1.4rem' },
						
					}}

				>
			       Investimentos Ativos
			    </Typography>
			    <Divider  
			    	sx={{
			    		fontWeight: 700,  
			    		mt: 2,
			    		fontSize: 15,
                		width: 120,
                		border: `2px solid #BDC1C9`
            		}}
                />
			</Box>
			<Box
				sx={{
					display: 'flex',
					//position: 'relative',
					justifyContent: 'center',
					alignItems: 'center',
					'@media (max-width: 800px)': { 
	        			display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
	        		},
				}}
			> 
				{investactive.length == 0? 
				<Typography sx={{m:'1px auto'}}>Não há empresas para investit</Typography>
			:
				<div className={classes.carousel}>
					<Slider {...settings}>
						{investactive.map((slide, index) => {
		         			return(
		         				<Box key={index}>
		         					
		         					<Activebox primery={primery} secudary={secudary} activo={slide}  />

		         				</Box>
		         				
		         			)
		         		})}
					</Slider>
	        	</div>

			}
			</Box>
		</Box>
	)

}
export default Investmentative;