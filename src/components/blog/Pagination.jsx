import React from 'react';
import classes from "./More.module.css";
import {Box, Divider, Grid, Card, CardMedia, CardActions, IconButton, CardContent, Typography, Button} from '@mui/material';

const MAX_ITEMS = 4;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

function Pagination({ limit, total, offset, setOffset, primery, secudary }) {

	const current = offset ? (offset / limit) + 1 : 1;
	const pages = Math.ceil(total/limit);
	const first = Math.max(current - MAX_LEFT, 1);

	function onPageChange(page) {
	    setOffset((page - 1) * limit);
	}


	return(
		<ul className={classes.pagination} >
			<li>
				<button 
		        	//size="small"
		        	//onClick={submit}
		        	onClick={() => onPageChange(current - 1)}
		          	disabled={current === 1}
		        >
		        	{'<'}
		        </button>     
			</li>
			{Array.from({ length: MAX_ITEMS })
				.map(( _, index) => index + first)
				.map((page) => (
					<li key={page}>
						<button 
				        	//size="small"
				        	//onClick={submit}
				        	onClick={() => onPageChange(page)}
				            className={
				                page === current
				                ? 'pagination__item--active'
				                : null
					            }
					        	
					        >
					        	{page}
				        	</button>
			           
			         </li>
			))}

			<li>
			<button 
	        	//size="small"
	        	//onClick={submit}
	        	onClick={() => onPageChange(current - 1)}
	          	disabled={current === 1}
	        	
	        >
	        	{'>'}
	        </button>     
		  </li>
		</ul>
	)

}

export default Pagination;