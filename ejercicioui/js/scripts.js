//Variables Globales:
var televisor=document.getElementById('i1');
var comprar=document.getElementById('btncomprar');
var imagenes=document.getElementsByClassName('imagenes');
var titulo=document.getElementsByTagName('h1')[0];
var precio=document.getElementById('precio');
var cuotas=document.getElementById('cuotas');
var vendidos=document.getElementById('vendidos');

var listaImagenes=[	{id:"listaimg1",precio:"$4.799°°",info:"Smart TV Led HD Ken Brown 32 Kb-32-2260 Wi-fi,2 Hdmi",cuotas:"6 cuotas de $ 799",
					 vendidos:"31"},
					{id:"listaimg2",precio:"$3.599°°",info:"Smart TV Led Philips Delgado 22 Kb-33-1260 Macrofino",cuotas:"8 cuotas de $ 449",
					 vendidos:"27"},
					{id:"listaimg3",precio:"$2.999°°",info:"Smart TV Led HD Philco pld3214ht 12 Kb-34-5260 Wi-fi,2 Hdmi",cuotas:"4 cuotas de $ 749",
					 vendidos:"18"}
				  ];
					
eventos();

function eventos()
{
	for(var i=0;i<imagenes.length;i++)
	{
		imagenes[i].addEventListener('click',mostrarImagen);
		
	}
	
	comprar.addEventListener('click',modal);
}

//Muestra Modal al Presionar el boton Comprar:
function modal()
{
	$().toastmessage('showNoticeToast', 'Lo sentimos, no contamos con stock disponible, reintente más tarde');
}

//Muestra Foto, Titulo, Precio y Cantidad de articulos vendidos de la Imagen Seleccionada:
function mostrarImagen(ev)
{
	televisor.src=ev.target.src;
	
	for(var i=0;i<listaImagenes.length;i++)
	{
		//console.log(ev.target.id + ',' + listaImagenes[i].id)
		if(ev.target.id==listaImagenes[i].id)
		{
			titulo.innerHTML=listaImagenes[i].info;
			precio.innerHTML=listaImagenes[i].precio;
			cuotas.innerHTML=listaImagenes[i].cuotas;
			vendidos.innerHTML=listaImagenes[i].vendidos;
			//recuadra la imagen seleccionada:
			ev.target.style.border="1px solid black"; 
		}
		
	}
	
	//Saca el recuadro a todas las imagenes excepto a la seleccionada:
	for(var j=0;j<imagenes.length;j++)
	{
		if(ev.target.id!=imagenes[j].id)
		{
			imagenes[j].style.border="0";
		}
	}
	
}