import { useCallback, useEffect, useRef, useState } from "react";
//import { makeStyles } from "@mui/styles";
import { Button, Typography, Box} from "@mui/material";
import classes from "./Publicidades.module.css";
import {useNavigate} from 'react-router-dom';
import Model from './Model';
import SignInOutContainer from '../components/login/SignInOutContainer';
import Publish from './Publish';


const rows = [
	{
		id: 1,
		empresa: 'SEGMENT LTD',
		segment: 'VENDA',
		capital: 100000,
		credito: 50000,
		lucro: 10,
		descricao: 'Controle de fluxo de caixa, folhas de salários, cadastros de Funcionários ...',
		image: 'investment_option.jpg',
		more: 'saber mais'
	},
	{
		id: 2,
		empresa: 'LUIZA LDA',
		segment: 'SERVIÇO',
		capital: 150000,
		credito: 100000,
		lucro: 20,
		descricao: 'Controle de Entradas estoque, cardapio, folhas de salários, cadastros de Funconários ...',
		image: 'microsite_individual.jpg',
		more: 'saber mais'
	},
	
];

const Slide = ({ item }) => {
	const styles = {
		backgroundImage: `url(../assets/publicidades/${item.image})`,
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	};
	return <div className="slide" style={styles}>
		<h1>{item.title}</h1>
	</div>
}



function Publicidades(props) {
	const { primery, secudary, logado, setLogado, setUser, setStatus } = props;

	const [slides, setSlides] = useState(rows);
	const [currentSlide, setCurrentSlide] = useState(0);
  	const slideLength = slides.length;
  	const [openModel, setOpenModel] = useState(false);
	const [title, setTitle] = useState('');
	const [opcao, setOpcao] = useState('');
	let navigate = useNavigate();

  	const autoScroll = true;
  	let slideInterval;
  	let intervalTime = (8000*2);

  	const nextSlide = () => {
    	setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    	//console.log("next");
  	};

  	const prevSlide = () => {
    	setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    	//console.log("prev");
  	};

  	function auto() {
  	  slideInterval = setInterval(nextSlide, intervalTime);
  	}

  	const submit = ()=>{

		if(logado){

		} else {
			setOpenModel(true);
			setTitle('')
		}

	};

  	/*useEffect(() => {
    	setCurrentSlide(0);
    	fetch("http://localhost:8000/publicidadesdb/")
        .then((response)=>response.json())
        .then((responseJson)=>{ sombra
           setSlides(responseJson)
        })  

  	}, []);*/

  	useEffect(() => {
    	if (autoScroll) {
      		auto();
    	}
    	return () => clearInterval(slideInterval);
  	}, [currentSlide]);


	return(
		<>
			{slides.length == 0? 
             <Typography sx={{m:'1px auto'}}>Não há publicidades</Typography>
             :
				<div className={classes.slider} >

					<a className={classes.prev} onClick={prevSlide}>&#10094;</a>
					<a className={classes.next} onClick={nextSlide}>&#10095;</a>

					{slides.map((slide, index) => {
						return (
							<div  key={index} className={index === currentSlide ?
								`${classes.myslider} ${classes.current}` : `${classes.myslider}`}  >
								{index === currentSlide && (
									<>
										<Publish primery={primery} secudary={secudary} submit={submit} slide={slide}/>
									</>
									
								)}								
							</div>
						)
	                })

					}
				</div>
	
			}
			<Model
	        openModel = {openModel}
	        setOpenModel={setOpenModel}
	        title={title}
		   >
        		<SignInOutContainer setTitle={setTitle} tab={0} setClose={setOpenModel} setUser={setUser} opcao={'CRIAR'} setOpcao={setOpcao}/>
      	</Model>
			
		</>
	)

}
export default Publicidades;