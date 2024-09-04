import { useEffect, useState} from 'react';
import {Box, Divider, Grid, Card, CardContent, Typography, Button} from '@mui/material';
//import Carousel from "react-elastic-carousel";
//import ClientBox from "./ClientBox";
//import Item from "./Item";
import classes from "./Userinfo.module.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const rows = [
	{
		id: 1,
		name: 'Paulo Gustavo',
		tipo: 'EMPREENDEDOR',
		image: 'emprededor01.JPG',
		conteudo: 'Incrivelmente satisfeito com a aplicação que a Overtime desenvolveu para nós! Facilitou muito nossas operações diárias. Obrigado pela inovação',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 2,
		name: 'Amanda Richerth',
		tipo: 'INVESTIDOR(A)',
		image: 'invester02.JPG',
		conteudo: 'A produção multimídia da Overtime deu vida à nossa marca de uma maneira que nunca imaginamos. Estamos impressionados e agradecidos por sua visão criativa!',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 3,
		name: 'Miguel Manuel Mateus',
		tipo: 'EMPREENDEDOR',
		image: 'emprededor02.JPG',
		conteudo: 'O marketing estratégico da Overtime trouxe resultados tangíveis para nossos negócios. Agradecemos pela abordagem proativa e pelos insights valiosos.',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 4,
		name: 'Nilde Imperial',
		tipo: 'EMPREENDEDOR(A)',
		image: 'emprendeora02.JPG',
		conteudo: 'Agradecemos à Overtime por traduzir nossas ideias em uma experiência web excepcional. A navegação intuitiva e o design atraente são elogiados por nossos clientes',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 5,
		name: 'Afonso Ndimbala',
		tipo: 'INVESTIDOR',
		image: 'invester01.JPG',
		conteudo: 'A aplicação desktop da Overtime simplificou nossos processos internos de maneira eficiente. Muito obrigado pela eficácia e profissionalismo.',
		data: '2021-03-25',
		more: 'saber mais'
	},
	{
		id: 6,
		name: 'Matilde Ombala',
		tipo: 'EMPREENDEDOR(A)',
		image: 'emprendedora01.JPG',
		conteudo: 'A equipe da Overtime não só entregou um site incrível, mas também foi excepcionalmente colaborativa durante todo o processo. Obrigado pela parceria',
		data: '2021-03-25',
		more: 'saber mais'
	},
];


function UserTestemunhos(props) {

	const { primery, secudary } = props;
	const [slides, setSlides] = useState(rows)
	const settings = {
	  dots: true,
	  infinite: false,
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
	        //initialSlide: 2,
	        
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

	/*useEffect(() => {
		let tot = 0;  
        fetch("http://localhost:8000/messagedb/")
        .then((response)=>response.json())
        .then((responseJson)=>{
            //console.log(responseJson)            
            setSlides(responseJson)

        })  
        
        
    }, [])*/
	return(
		<Box
			sx={{minHeight: '380px',}}
		>
			<Box 
				sx={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					alignItems: 'center',
					//position: 'relative',
					color: `${primery}`,
					mt: 1

				}}
			>	
				
				<Typography					
					sx={{
						fontSize: '2rem',
						fontWeight: 200,
						fontFamily: 'Wix Madefor Display, serif',
						'@media (max-width: 800px)': { fontSize: '1.8rem' },
						'@media (max-width: 400px)': { fontSize: '1.4rem' },
						
					}}

				>
			       Testemunhos
			    </Typography>
              </Box>
              <Box
				sx={{
					display: 'flex',
					//position: 'relative',
					justifyContent: 'center',
					alignItems: 'center',
					mt: 1,
					//mb: ,
					'@media (max-width: 800px)': { 
            			display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
            		},
				}}
			> 
				{slides.length == 0? 
					<Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
				:
					<div className={classes.carousel}>
						<Slider {...settings}>
							{slides.map((slide, index) => {
			         			return(
			         				<Box key={index} sx={{m: 1}} >			         					
			         					<Card			         					
				         					sx={{
				         						//m: '0 1rem',
				         						minHeight: '200px',
												width: '350px',
												//background: '#D3D3DB',
												'@media (max-width: 600px)': { width: '320px', },
									             '@media (max-width: 320px)': { fontSize: '.6rem' },
				         					}}
				         					elevation={0}
				         				>
											<Box
												sx={{
													display: 'flex',
													mt: 1,
													p: 1,

												}}
											>
												<img 
													src={new URL(`../../assets/usuarios/${slide.image}`, import.meta.url)}  
													alt="Slide"
													style={{
														width: '40px',
														height: '40px',
													}}
												/>
												<div>
													<Typography
									                sx={{
									                    //justifyContent: 'center',
									                    //alignItems: 'center',
									                    color: `${secudary}`,
									                    fontWeight: 200,
									                    fontFamily: 'Wix Madefor Display, sans-serif',	
									                    fontSize: '17px',                       
									                    ml: 1,
									                    '@media (max-width: 600px)': { fontSize: '14px' },
									                    '@media (max-width: 320px)': { fontSize: '10px' },
									                }}  
									            >
									               {slide.name}
									            </Typography>
									            <Typography
									                sx={{
									                    //justifyContent: 'center',
									                    //alignItems: 'center',
									                    mt: -.5,
									                    ml: 1,
									                    fontWeight: 700,
									                    fontFamily: 'Oswald, sans-serif',	
									                    fontSize: '10px',                       
									                    //mb: -3,
									                    '@media (max-width: 600px)': { fontSize: '8px' },
									                    '@media (max-width: 320px)': { fontSize: '6px' },
									                }}  
									            >
									              {slide.tipo}
									            </Typography>
												</div>
											</Box>
											<CardContent>				
										        <Typography 
										        	sx={{
										        		mb: .5, 
										        		fontSize: '.8rem',
														fontWeight: 700,
														fontFamily: 'Wix Madefor Display, serif',
														mt: 1,
														'@media (max-width: 600px)': { fontSize: '.7rem' },
									                    //'@media (max-width: 320px)': { fontSize: '.6rem' },
										        	}} 
										        >
										          {slide.data}
										        </Typography>
										        <Typography 
										        	sx={{
														fontSize: '.9rem',
														//fontWeight: 700,
														fontFamily: 'Wix Madefor Display, serif',
														//textAlign: 'center',
														//width: 225,
														'@media (max-width: 600px)': { fontSize: '.7rem' },
									                    '@media (max-width: 320px)': { fontSize: '.6rem' },

													}}
										        >		          
										          {slide.conteudo}
										        </Typography>							        
										        
											</CardContent>

											
										</Card>
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
export default UserTestemunhos;