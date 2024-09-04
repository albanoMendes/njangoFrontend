import { useState } from 'react';
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';
//import Carousel from "react-elastic-carousel";
//import ClientBox from "./ClientBox";
//import Item from "./Item";
import classes from "./Investements.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { WhatsApp } from '@mui/icons-material';
import InvestmentBox from './InvestmentBox';
const rows = [
	{
		id: 1,
		empresa: 'SEGMENT S.A',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'é uma startup que desenvolve soluções inovadoras para automação residencial, focando em IoT e conectividade.',
		objetivos: 'Nosso principal objetivo é tornar a vida das pessoas mais fácil e eficiente, oferecendo produtos inteligentes e sustentáveis.',
		missao: ' Nossa missão é proporcionar praticidade e segurança por meio de tecnologias avançadas, promovendo um estilo de vida moderno e sustentável.',
		oferta: 'Oferecemos uma variedade de dispositivos inteligentes, desde termostatos até sistemas de segurança, todos integrados para fornecer uma experiência residencial conectada',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Qualidade dos nossos produtos, e motagem fratuita',
		entrega: 'Os produtos são entregue na loja, ou ai domicilio',
		local: 'Luanda. Cazenga, Asa Branca casa nº 43',
		image: 'investment_option.jpg',
		logo: 'Logo_s.png',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'COFFE HOUSE LDA',
		segment: 'VENDA',
		capital: 150000,
		credito: 100000,
		lucro: 20,		
		descricao: 'Empresa dedicada a fornecer café sustentável, apoiando agricultores locais e promovendo práticas ecológicas.',
		objetivos: 'Oferecer o melhor café e acompanhates do pais, e garatir a satisfação dos nossos clientes, em nossos os estabelecimentos!',
		missao: 'Missão de fornecer café de alta qualidade enquanto impacta positivamente as comunidades produtoras',
		oferta: 'Café e acompanhates',
		organizacao: 'Funcional',
		operacional: `
			Parcerias com cooperativas de agricultores locais.
			Implementação de práticas sustentáveis na cadeia de fornecimento.
		`,
		caraOne: 'Café de origem única, cultivado de forma sustentável e comércio justo',
		entrega: 'As entregas são feitas nas lojas e ao domicílio',
		local: 'Malanje, Katepa rua Nzinga nº 42',
		image: 'microsite_individual.jpg',
		logo: 'Logo_c.png',
		more: 'saber mais'
	},
	
	
];

function Investmenthome(props) {

	const { primery, secudary, logado, setLogado, setStatus, setUser } = props;
	const [investments, setInvestments] = useState(rows);
	/*useEffect(() => {
    	setCurrentSlide(0);
    	fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
           setSlides(responseJson)
        })  

  	}, []);*/

	const settings = {
	  dots: true,
	  infinite: true,
	  speed: 500,
	  slidesToShow: 3,
	  slidesToScroll: 3,
	  //initialSlide: 0,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        //initialSlide: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        initialSlide: 2
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
	
	return(
		<Box>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					color: `${primery}`,
					mt: 5

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
					Empresas para investir
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
			       Investimentos
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
				{investments.length == 0? 
				<Typography sx={{m:'1px auto'}}>Não há empresas para investit</Typography>
			:
				<div className={classes.carousel}>
					<Slider {...settings}>
						{investments.map((slide, index) => {
		         			return(
		         				<Box key={index}>
		         					<InvestmentBox primery={primery} secudary={secudary} slide={slide} logado={logado} setLogado={setLogado} setStatus={setStatus} />


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
export default Investmenthome;