import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import {AutoStories, Downloading} from '@mui/icons-material';
import { visuallyHidden } from '@mui/utils';
import Model from "../Model";
import Read from "./Read";
import Deleteblog from "./Deleteblog";
import EditIcon from '@mui/icons-material/Edit';
import Formblog from './Formblog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Read from "./Read";
//import DeleteIcon from '@mui/icons-material/Delete';

function createData(id, title, subtitle, status, tipo, autor, data, conteudo1, conteudo2, conteudo3, image1, image2, more) {
  return {
    id,
    title,
    subtitle,
    status,
    tipo,
    autor,
    data,
    conteudo1, 
    conteudo2, 
    conteudo3, 
    image1,
    image2, 
    more,
  };
}

const rows = [
  createData(1, 
    '5 Tipos De Investimentos Que Todo Empreendedor Deve Conhecer', 
    'Onde começar a investir?', 
    'EDICAO',
    'ECONÓNIA',
    '(UCA) UNIVESIADE CATÓLICA DE ANGOLA', 
    'Apr 21, 2023 at 12:05 pm',
    `O que é investimento?
      O investimento é uma aplicação de dinheiro que o faz render. Nada mais é do que produtos oferecidos por instituições financeiras, como bancos.
      Esse produto oferece algo em troca: quando você investe, você adquire algo e, principalmente, o seu valor e sua valorização. 
      Pode ser ações de empresas, dívidas do Governo ou até mesmo imóveis. Sempre há algo para além do dinheiro envolvido em si, mas também o que é comprado e o valor de retorno que ele pode oferecer.`,
      `
      Afinal, a principal característica do investimento é fazer o dinheiro investido render.
      Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
      Investimentos de renda fixa
      São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
      Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.
      `,
      `
      Afinal, a principal característica do investimento é fazer o dinheiro investido render.
      Por isso, é sempre interessante entender o funcionamento de cada tipo de investimento, que podem ser dois: o de renda fixa e o de renda variável.
      Investimentos de renda fixa
      São os investimentos com rentabilidade e prazos definidos logo quando a aplicação é feita. Logo, a previsibilidade para esse tipo é mais fácil.
      Funcionam como empréstimos que serão pagos com retorno do investimento mais a taxa de parcelamento. São investimentos de pouco risco.
      `,
      'fundos_investimentos.jpg',
      'renda.jpeg',
      'mais',
  ),
  createData(
    2, 
    'Por que anunciar na internet? 9 razões pelas quais você deve investir', 
    'O que anunciar na internet pode fazer por mim?', 
    'EDICAO',
    'MARKETING', 
    '(UCA) UNIVESIADE CATÓLICA DE ANGOLA',
    'Apr 21, 2023 at 12:05 pm',
    ` 
      <p>Seu público-alvo passa muito tempo online?</p>
      <br/>
      <p>Se você responder “SIM” com segurança a esta questão, então é certo dizer que sua empresa pode se beneficiar de publicidade online. E você não precisa mais se questionar porque anunciar na internet.</p>
      <br/>
      <p>E caso você não tem certeza de quem é seu público-alvo ou quanto tempo ele passa navegando na web, talvez seja necessário dar um passo atrás e fazer uma pesquisa de mercado. Uma pesquisa de marketing geracional também pode ser um bom começo para ter uma idéia.</p>
      <br/>
      <p>Simplesmente saber que seus prospects estão online não é suficiente para definir se o marketing digital é ideal para o seu negócio. Você pode ter que cavar mais fundo para isso, mas, em geral, a publicidade online definitivamente tem vantagens.</p>
      <br/>

      <h2>O que anunciar na internet pode fazer por mim?</h2>
      <br/>
      <h3><strong>1. A publicidade online é rápida, flexível e rastreável</strong></h3>
      <br/>
    <p>Com publicidade online, você pode aproveitar os benefícios maravilhosos que vêm com a mídia digital como acesso instantâneo, atualizar e editar livremente seus anúncios e monitorar os resultados. Esses são apenas alguns motivos de porque anunciar na internet.</p>
    <br/>
    <p>Planejando um evento para promover seu novo serviço? Ao invés de colocar um anúncio no jornal local com seis semanas de antecedência, tendo que esperar semanas ou meses para saber se foi recebido. Você pode criar e lançar uma campanha online promovendo seu serviço ou evento em pouco mais de uma hora.</p>
    <br/>
    <p>Além disso, você pode acompanhar instantaneamente quais anúncios estão funcionando, quantas pessoas estão vendo, onde eles estão vendo, quem está clicando neles e quando.</p>
    <br/>
    <p>Com esse tipo de informação na ponta dos dedos, você pode otimizar seus anúncios instantaneamente se eles não estiverem com um bom desempenho. E não precisa aguardar até que os relatórios de vendas do final do mês lhe digam se seu anúncio no jornal estava funcionando ou não.</p>
    <br/>
     <h3><strong>2. Impulse o tráfego para o seu site e aumente as conversões.</strong></h3>
     <br/>
    <p>Uma vez que o site é o centro da presença online de uma marca, faz sentido comprar tráfego para seu site, certo?</p>
    <br/>
    <p>E os anúncios online podem gerar mais tráfego para o seu site. Quando você tem mais tráfego chegando ao seu site, você está aumentando a quantidade de leads do seu site.</p>
    <br/>
    <p>Importante: você precisa ter certeza de que seu site esteja configurado corretamente para converter visitantes em leads.</p>
    </br>

    <h3><strong>3. Aumentar a consciência da marca, credibilidade e confiança</strong></h3>
    <br/>
    <p>A execução de anúncios online destaca o nome da sua marca para os prospects online onde quer que estejam na web. Esse é outro ponto importante de porque anunciar na internet. Assim como através do rádio ou da TV, seus anúncios online manterão seu negócio na frente de potenciais compradores.</p>
    <br/>
    <p>Uma vez que seus clientes potenciais se familiarizarem com quem você é, eles começam a reconhecer a sua marca. A partir daí, estarão mais propensos a procurarem por você quando tiverem a necessidade do que sua marca pode oferecer.</p>
    <br/>
    <p>Não só isso, os anúncios online reforçam a ideia de que você é um negócio legítimo, de modo que a execução de anúncios pode aumentar a credibilidade para o seu negócio também.</p>
  `,
    `
    <h3><strong> 4. Promover para seus mercados-alvo específicos </strong></h3>
    <br/>
    <p>Quando você anuncia online, você pode personalizar sua mensagem para falar especificamente para seus mercados-alvo ou criar mensagens adaptadas para um público-alvo segmentado.</p>
    <br/>
    <p>Pense nisso assim: talvez você venda sistemas de segurança. Embora o seu produto possa atrair famílias e negócios, os benefícios do seu produto seriam diferentes para cada um.</p>
    <br/>
    <p>O dono de uma empresa não precisa de um sistema que lhe permita fechar sua porta de garagem em casa remotamente. E um pai de família não está interessado em monitorar o horário de entrada e saída dos funcionários.</p>
    <br/>
    <p>A publicidade é mais eficaz quando você está falando diretamente com as necessidades de cada pessoa em vez de usar uma mensagem geral para atrair o interesse de todos.</p>
    <br/>
    <p>É aí que a segmentação entra. Como proprietário de uma empresa de segurança, você escreveria dois anúncios com mensagens separadas: uma adaptada aos donos de empresas, a outra para os usuários comuns. A publicidade dessa maneira é muito mais econômica do que na TV, rádio ou publicidade impressa.</p>
    <br/>
    <p>O marketing digital permite que você segmente e especifique seus mercados-alvo para obter o máximo de seus esforços de marketing. Isso evita que sua mensagem cheque a pessoas que você não está interessado em trabalhar.</p>
    <br/>
    <p>Crie um planejamento de campanha de marketing para orientar suas ações para cada público específico.</p>
    <br/>
    <h3><strong> 5. Alcance os Millennials difíceis de alcançar </strong></h3>
    <br/>
    <p>É inegável que desde o nascimento desta geração (que inclui pessoas nascidas entre 1981 e 2000), praticamente todos os campos da tecnologia fizeram avanços significativos.</p>
    <br/>
    <p>Os Millennials tiveram uma exposição extrema a todos os aparelhos modernos e plataformas. Eles não vêem resultados imediatos, excelente serviço e preços competitivos como benefício de trabalhar com uma empresa, essa é a sua expectativa.</p>
    <br/>
    <p>Esta geração tem um potencial extremo de poder de compra. E se você quiser que eles te notem, terá que se conectar com eles. Uma maneira ideal de fazer isso é interagir e anunciar onde eles onde estão: online.</p>
    <br/>
    
    <h3><strong> 6. Engaje-se novamente com prospects anteriores com anúncios de remarketing </strong></h3>
    <br/>
    <p>Com o remarketing, você pode alcançar pessoas com base em suas atividades online anteriores, principalmente, aquelas que estiveram em seu site.</p>
    <br/>
    <p>Se lembra da semana passada quando você entrou no site da Netshoes para olhar um par de tênis de caminhada? Quantas vezes você viu o mesmo tênis exibido em outros sites desde então? Provavelmente, muitas vezes, certo? E mesmo que você tenha comprado um par na Centauro, esses tênis ainda estão seguindo você.</p>
    <br/>
    <p>Por quê? Porque você foi incluído no remarketing. As empresas fazem remarket porque sabem que os visitantes do site impactados com anúncios gráficos são 70% mais propensos a converter em seu site. Você pode aproveitar esse poder também para garantir que seus clientes potenciais não se esqueçam de você.</p>
    <br/>
    `,
    `
      <h3><strong>7. Conheça seus clientes potenciais onde estão </strong></h3>
      <br/>
      <p>Novamente, os tempos mudaram. Parece que todos estão online e quando os consumidores estão fazendo decisões de compra, eles tendem a fazer uma pesquisa online pesada antes de efetivamente comprar.</p>
      <br/>
      <p>Ou talvez já tenham feito a pesquisa e eles estão prontos para dar o passo final. Onde quer que estejam, vá até eles, forneça as informações que eles desejam, criando anúncios para alcançar clientes em cada etapa do funil de venda.</p>
      <br/>
      <p>Por exemplo, você escreveu um artigo de blog que atende uma pergunta comum sobre os seus serviços. Você pode criar um anúncio com base nessa publicação para despertar interesse nos consumidores que estão na fase inicial de busca por informações no ciclo de compra.</p>
      <br/>
      <p>Outros consumidores podem estar prontos para dar o próximo passo e agendar uma consulta. Então você pode montar anúncios que criem mais urgência, encorajando-os a realizar essa ação agora.</p>
      <br/>

      <h3><strong>8. Diminua seus custos de marketing </strong></h3>
      <br/>
      <p>Outro motivo de porque anunciar na internet é que você tem uma quantidade grande de controle sobre seus custos de publicidade ao executar anúncios online.</p>
      <br/>
      <p>Primeiramente, as campanhas de publicidade online geralmente são muito menos dispendiosas do que a transmissão de anúncios de rádio, TV e mídia impressa. Em segundo lugar, você escolhe exatamente o que deseja gastar e quando quer gastá-lo. Não gosta do orçamento original que definiu para sua campanha? Mude-o em menos de um minuto.</p>
      <br/>
      <p>Em terceiro lugar, você decide e mantém o controle total de quando seus anúncios são exibidos e por quanto tempo. Os seus anúncios não estão funcionando? Pause a campanha para diminuir os gastos.</p>      
      <br/>
      <p>Usar ferramentas de controle financeiro também podem ajudá-lo a controlar e analisar seus investimentos.</p>
      <br/>

      <h3><strong>9. Seus concorrentes estão fazendo isso </strong></h3>
      <br/>
      <p>Todos nós aprendemos a não fazer algo apenas porque outras pessoas estão fazendo, mas neste caso, há uma exceção. Se a sua concorrência estiver envolvida com o seu público-alvo, eles estão ganhando participação no mercado e ganhando lucros que podem ser seus. E os prospects nunca saberão seu nome, se você não colocá-lo bem na frente de seus rostos.</p>
      <br/>
      <p>É como esperar que você ganhe na Mega Sena, mas nunca fazer uma aposta. Ninguém vai chegar até você para resolver uma necessidade, se eles não sabem quem você é. Então vá lá e mostre o que você faz.</p>
      <br/>
      <p>Fornecer uma experiência memorável ao usuário, oferecer informações valiosas e delinear chamadas de ação claras ajuda a ganhar a atenção que você deseja no seu mercado-alvo.</p>
      <br/>
      <p>Não há dúvida de que a publicidade online é um método econômico, eficiente e conveniente para promover o seu negócio. Na medida em que ajuda a aumentar o reconhecimento da marca, ganhar a confiança dos clientes e direcionar exatamente quem você quer trabalhar.</p>
      <br/>
      <p>Convencido de porque anunciar na internet? Comece então um plano de marketing para divulgar seus negócios online.</p>
    `,
    'marketing_digital.jpg', 
    'Maketing_digital.png',
    'more',
  ),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'title',
    numeric: false,
    disablePadding: false,
    label: 'Titulo',
  },
  {
    id: 'subtitle',
    numeric: true,
    disablePadding: false,
    label: 'Subtitulo',
  },
  {
    id: 'tipo',
    numeric: true,
    disablePadding: false,
    label: 'Tipo',
  },
  {
    id: 'data',
    numeric: true,
    disablePadding: false,
    label: 'Data',
  },
  {
    id: 'opcao',
    numeric: true,
    disablePadding: false,
    label: 'Opção',
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              sx={{
                fontSize: '.9rem',
                fontFamily: 'Oswald, sans-serif',
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ 
            flex: '1 1 100%',
            color: '#F9CC19', 
            fontSize: '1.2rem',
            fontFamily: 'Oswald, sans-serif',
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Artigos
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

function Artigospainel(props) {

	const { primery, secudary, logado, setLogado, user, setUser, status, setStatus, empresa } = props;

	const [blog, setBlog] = React.useState({
	    id: 0,
	    title: '',
	    subtitle: '',
	    status: '',
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

  const [openModel, setOpenModel] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [opcao, setOpcao] = React.useState('');

    const [blogs, setBlogs] = React.useState(rows);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('subtitle');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleLendo = (blog) => {
      setOpcao('READ');
      //setTitle('EDITAR VENDA');
      setOpenModel(true);
      setBlog({
        id: blog.id,
        title: blog.title,
        subtitle: blog.subtitle,
        tipo: blog.tipo,
        autor: blog.autor,
        data: blog.data,
        conteudo1: blog.conteudo1, 
        conteudo2: blog.conteudo2, 
        conteudo3: blog.conteudo3, 
        image1: blog.image1,
        image2: blog.image2, 
        more: blog.more,
      })
      
    };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );
  	const handleAdd = () => {
      setOpcao('ADD');
      setTitle('CADASTRAR ARTIGO');
      setOpenModel(true);

    };

   
    	//console.log(currencies)
   const handleEditar = (blog) => {
    	//console.log(currencies)
    	if(blog.status == 'PUBLICADO' ){
			toast.success('Artigo Publicado!', {
				theme: 'dark',
				fontFamily: 'Oswald, sans-serif',
			});
			
		} else {
		   setOpcao('EDITAR');
	       setTitle('EDITAR ARTIGO');
	       setOpenModel(true);
	       setBlog({
		        id: blog.id,
		        title: blog.title,
		        subtitle: blog.subtitle,
		        tipo: blog.tipo,
		        autor: blog.autor,
		        data: blog.data,
		        conteudo1: blog.conteudo1, 
		        conteudo2: blog.conteudo2, 
		        conteudo3: blog.conteudo3, 
		        image1: blog.image1,
		        image2: blog.image2, 
		        more: blog.more,
	      	})
		}
      
   };


   const handleDelete = (blog) => {

   		if(blog.status == 'PUBLICADO' ){
			toast.success('Artigo Publicado!', {
				theme: 'dark',
				fontFamily: 'Oswald, sans-serif',
			});
			
		} else {
		   setOpcao('DELETE');
	       setTitle('DELETAR ARTIGO');
	       setOpenModel(true);
	       setBlog({
		        id: blog.id,
		        title: blog.title,
		        subtitle: blog.subtitle,
		        tipo: blog.tipo,
		        autor: blog.autor,
		        data: blog.data,
		        conteudo1: blog.conteudo1, 
		        conteudo2: blog.conteudo2, 
		        conteudo3: blog.conteudo3, 
		        image1: blog.image1,
		        image2: blog.image2, 
		        more: blog.more,
	      	})
		}
      
    };



      
      
 

  	const getComponent = () =>{
      switch(opcao){
        case 'ADD': 
              return <Formblog blogin={blog} tipoUser={''} foto={'sem-foto.jpg'} banner={'sem-foto.jpg'}  opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary}  />; 
        case 'READ':
        	return <Read primery={primery} secudary={secudary} blog={blog}/>;
        case 'EDITAR':           
              return <Formblog blogin={blog} tipoUser={'IIIII'} foto={blog.image1} banner={blog.image2}  opcao={opcao} setOpenModel={setOpenModel} primery={primery} secudary={secudary}  />; 
        case 'DELETE':
              return <Deleteblog blog={blog} setOpenModel={setOpenModel}  primery={primery} secudary={secudary}/>;
       	case 'CLOSE':
              return //<Bancocontainer  primery={primery} secudary={secudary}/>;
        default: 
          return null;
      }
    }

	return(
		<>
			<Grid container>
				<Grid item xs={12} sm={12} md={8}>
                   <Typography
		                sx={{
		                    fontWeight: 400,
		                    fontSize: '25px',                   
		                    fontFamily: 'Oswald, sans-serif',
		                    '@media (max-width: 800px)': { fontSize: '15px' },
		                }}
		            >
		                ARTIGOS EM PRODUÇÃO
		            </Typography>
		            <Typography
		                    sx={{                    
		                        fontSize: '15px',                                       
		                        fontFamily: 'Wix Madefor Display, sans-serif',
		                        '@media (max-width: 800px)': { fontSize: '10px' },
		                    }}
		                >
		                Crie e consulte aqui os estatus dos artigos em produção
		            </Typography>        
                </Grid>

                <Grid item xs={12} sm={12} md={4}>
                		<Paper                     	
	                    	elevation={1} 
	                        sx={{
	                            p: 1,
	                            //bgcolor: '#F2F2F2',
	                            mb: 1,
	                            minWidth: 200,
	                            borderRadius: 0, 
	                            display: 'flex', 
		            			flexDirection: 'column',
		            			justifyContent: 'center',
		            			alignItems: 'center',
		    					textAlign: 'center',    

	                        }}
	                    >
	                        <Typography
	                            sx={{
	                                fontWeight: 'bold',               
	                                fontSize: '12px',
	                                pl: 1,
	                                pt: 1,
	                                fontFamily: 'Wix Madefor Display, sans-serif',
	                                '@media (max-width: 800px)': { fontSize: '8px' },
	                            }}
	                        >
	                            {'Total De Artigos'}
	                        </Typography>
	                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
	                                <Typography
	                                    sx={{
	                                        pl: 1,
					                      	fontSize: '35px', 
											fontWeight: 500, 
											fontFamily: 'Six Caps, sans-serif',
											'@media (max-width: 800px)': { fontSize: '25px' },                          
	                                        
	                                        
	                                    }}
	                                >
	                                    {`${rows.length}`}
	                                </Typography>
	                    
	                            </div>              
	                    </Paper>

                </Grid>
                
			</Grid>

			<Box
	                sx={{  
	                    display: 'flex', 
	                    float: 'right',
	                    //mb: 1,
	                    //mt: -2,
	                    //width:  '100%'                   
	                }}
	            >
	            	<IconButton  
	                    onClick={() => handleAdd()}                                    
	                    sx={{  
	                        //mr: -2,
	                        borderRadius: 0, 
	                        height: 30, 
	                        width: 40,                  
	                        color: `${secudary}`,
	                        border: `1px solid ${secudary}`,                       
	                        fontSize: '20px',
	                        fontFamily: 'Wix Madefor Display, sans-serif',
			                '&:hover': {
			                    color: 'white',		                   
			                    cursor: 'pointer',
			                    transition: '0.3s ease-in',
			                },
	                    }}
	                >
	                	+
	                </IconButton>
	            </Box>

			
			<Box
				sx={{mt: 5}}
			>
				{blogs.length == 0 ? 
					<Typography
	                    sx={{
	                        pl: 1,
	                      	fontSize: '35px', 
							fontWeight: 500, 
							fontFamily: 'Six Caps, sans-serif',
							'@media (max-width: 800px)': { fontSize: '25px' },                          
	                        
	                        
	                    }}
	                >
	                    Não tem nenhum Artigo
	                </Typography>
					:
					<Box sx={{ width: '100%' }}>
			        <Paper sx={{ width: '100%', mb: 2 }}>
			          <EnhancedTableToolbar numSelected={selected.length} />
			          <TableContainer>
			            <Table
			              //sx={{ minWidth: 600 }}
			              aria-labelledby="tableTitle"
			              size={dense ? 'small' : 'medium'}
			            >
			              <EnhancedTableHead
			                numSelected={selected.length}
			                order={order}
			                orderBy={orderBy}
			                onSelectAllClick={handleSelectAllClick}
			                onRequestSort={handleRequestSort}
			                rowCount={rows.length}
			              />
			              <TableBody>
			                {visibleRows.map((row, index) => {
			                  const isItemSelected = isSelected(row.id);
			                  const labelId = `enhanced-table-checkbox-${index}`;

			                  return (
			                    <TableRow
			                      hover
			                      //onClick={(event) => handleClick(event, row.id)}
			                      //role="checkbox"
			                      //aria-checked={isItemSelected}
			                      //tabIndex={-1}
			                      //key={row.id}
			                      //elected={isItemSelected}
			                      sx={{ 
			                        cursor: 'pointer', 
			                        
			                      }}
			                    >
			                    
			                      <TableCell
			                        component="th"
			                        id={labelId}
			                        scope="row"
			                        //padding="none"
			                        sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.title}
			                      </TableCell>
			                      <TableCell 
			                        align="right" 
			                        sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.subtitle}
			                      </TableCell>
			                      <TableCell 
			                        align="right"
			                         sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.tipo}
			                      </TableCell>
			                      <TableCell 
			                        align="right"
			                        sx={{
			                          fontSize: '.7rem', 
			                          fontFamily: 'Wix Madefor Display, sans-serif',
			                        }}
			                      >
			                        {row.data}
			                      </TableCell>

			                      <TableCell align={'center'}>
			                      		<IconButton 
			                                onClick={() => handleEditar(row)} 
			                                size="small" 
			                                aria-label="show 4 new mails" 
			                                color="inherit"
			                                sx={{ borderRadius: 0 }}
			                            >
			                                <EditIcon sx={{ color: `${'#F9CC19'}`, fontSize: '15px'}} />
			                            </IconButton>
			                            <IconButton 
			                                onClick={() => handleLendo(row)} 
			                                size="small" 
			                                aria-label="show 4 new mails" 
			                                color="inherit"
			                                sx={{ borderRadius: 0 }}
			                            >
			                                <AutoStories sx={{ color: `${'#F9CC19'}`, fontSize: '15px'}} />
			                            </IconButton>
			                            <IconButton 
			                                //onClick={() =>  handleDelete(row)} 
			                                size="small" 
			                                aria-label="show 4 new mails" 
			                                color="inherit"
			                                sx={{ borderRadius: 0 }}
			                            >
			                                <Downloading sx={{ color: `blue`, fontSize: '15px'}} />
			                            </IconButton>  
			                            <IconButton 
			                                onClick={() =>  handleDelete(row)} 
			                                size="small" 
			                                aria-label="show 4 new mails" 
			                                color="inherit"
			                                sx={{ borderRadius: 0 }}
			                            >
			                                <DeleteIcon sx={{ color: `red`, fontSize: '15px'}} />
			                            </IconButton>                           
			                             
			                      </TableCell>
			                    </TableRow>
			                  );
			                })}
			                {emptyRows > 0 && (
			                  <TableRow
			                    style={{
			                      height: (dense ? 33 : 53) * emptyRows,
			                    }}
			                  >
			                    <TableCell colSpan={6} />
			                  </TableRow>
			                )}
			              </TableBody>
			            </Table>
			          </TableContainer>
			          <TablePagination
			            rowsPerPageOptions={[5, 10, 25]}
			            component="div"
			            count={rows.length}
			            rowsPerPage={rowsPerPage}
			            page={page}
			            onPageChange={handleChangePage}
			            onRowsPerPageChange={handleChangeRowsPerPage}
			          />
			        </Paper>
			        <FormControlLabel
			          control={<Switch checked={dense} onChange={handleChangeDense} />}
			          label="Dense padding"
			        />
		      	</Box>

		      
			}
		</Box>
			<Model
	            title={title}
	            openModel = {openModel}
	            setOpenModel = {setOpenModel}
	        >
	         	{
	         		getComponent()
	         	}
	      	</Model>      

			<ToastContainer /> 
		</>
	)
}
export default Artigospainel;