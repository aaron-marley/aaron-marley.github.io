  var app= angular.module('empleos',[]);

 app.controller('EmpresaController',function(){

 	this.labore= company;
 });
app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(newValue){
      this.tab = newValue;
    };

    this.isSet = function(tabName){
      return this.tab === tabName;
    };
  });
 var company = [
  {
    nameclase:" ",
 	nav:"",
 	nombre:'Codeman Company',
 	url:'#',
 	enlace:'',
 	classenlace:'',
 	giro:'Desarrollos Web',
 	logo:'img/empleos/frenlace.jpg',
 	puesto:'Desarrollador Web Freelance.',
 	lugar:'Home Office ',
 	tel:':55-40585030.',
 	tiempo:'Enero del 2017 -Agosto 2017.',
 	
 	actividaduno:'-Maquetación de pàgina web y diseño responsivo de pagina web,Validaciones de formulario, Recaptcha.',
 	actividaddos:'-Proceso de altas, bajas y modificaciones  ',
 	actividadtres:'-Trabajo de equipo con diseñador gràfico. ',
 	
 	tecnologias:'  HTML 5,JAVASCRIPT, JQUERY, Sass, Css3, Bootstrap,Angular 3.5,Ajax,Recaptcha ',
 	

 },
 {
 	nameclase:" ",
 	nav:"",
 	nombre:'Kopernet',
 	url:'#',
 	enlace:'',
 	classenlace:'',
 	giro:'Desarrollos Web',
 	logo:'img/empleos/frenlace.jpg',
 	puesto:'Desarrollador Web Freelance.',
 	lugar:'Home Office',
 	tel:':55- 53172783.',
 	tiempo:'Febrero del 2017 - Marzo del 2017.',
 	
 	actividaduno:'Obtención y validación de ubicación y check in para realizar registros . ',
 	actividaddos:'Monitorización de procesos e informar status que se encuentran o faltan.',
 	actividadtres:'Validación de cambio de contraseña para el login. ',
 	
 	tecnologias:'  HTML 5,JAVASCRIPT, JQUERY, CSS3, Bootstrap,Angular 3.5  ',

 },
 {
 	nameclase:" ",
 	nav:"",
 	nombre:'Talented People ',
 	url:'#',
 	enlace:'Autódromo Hermanos Rodriguez',
 	classenlace:'',
 	giro:'Outsourcing.',
 	logo:'img/empleos/outsourcing.jpg',
 	puesto:'Soporte Técnico Analista en Formúla 1.',
 	lugar:'Autodromo Hermanos Rodriguez ',
 	tel:':55-40585030.',
 	tiempo:'Octubre del 2016 - Noviembre del 2016.',
 	
 	actividaduno:'Configuraciones de sistemas de puntos de ventas a servidores.',
 	actividaddos:'Consultas de ventas en el servidor. ',
 	actividadtres:'Instalación de puntos de ventas a servidores de la red. ',
 	
 	tecnologias:'Sql Server 2010. ',
 	
 },
 
 {
 	nameclase:"chamba",
 	nav:'list2',
 	nombre:'Consorcio Laboro.',
 	url:'#',
 	enlace:'',
 	 	classenlace:'',
 	giro:'Outsourcing.',
 	logo:'img/empleos/outsourcing.jpg',
 	puesto:'Desarrollador Web.',
 	lugar:'Satelite, Estado de México.',
 	tel:'53-93-07-00.',
 	tiempo:'Noviembre del 2015 -Abril del 2016.',
 	actividaduno:'Modificasciones a módulos de los sistemas web de la compañia desarrollando soluciones para las nuevas necesidades de la empresa.',
 	actividaddos:'Envió masivo de mail utilizando  para diferentes servicios de la empresa construcción de plantillas personalizadas para cada campaña.',
 	actividadtres:'Sistemas de sorteo de beneficios para el personal que administra la empresa notificando por correo, llevando un processo de aceptación de terminos y condiciones para canjear su beneficio, llevando un registro en la base de datos.',
 	tecnologias:'PHP 4, PHP 5, MYSQL, JAVASCRIPT,JQUERY, HTML 5, CSS3, Bootstrap , Diseño Responsivo.  ',

 	


 },


 {
 	nameclase:" ",
 	nav:"list2",
 	nombre:'Mampower.',
 	url:'#',
 	enlace:'',
 	classenlace:'',
 	giro:'Outsourcing.',
 	logo:'img/empleos/outsourcing.jpg',
 	puesto:'Soporte Técnico Analista en Formúla 1.',
 	lugar:'Autóromo Hermanos Rodriguez',
 	tel:'01-55-4147-5000.',
 	tiempo:'Octubre del 2015 - Noviembre del 2015.',
 	
 	actividaduno:'Configuraciones de sistemas de puntos de ventas a servidores.',
 	actividaddos:'Consultas de ventas en el servidor. ',
 	actividadtres:'Instalación de puntos de ventas a servidores de la red. ',
 	
 	tecnologias:'Sql Server 2010. ',
 	
 },
 {
 	nameclase:"chamba ",
 	nav:"list2",
 	nombre:'Sertec.',
 	url:'#',
 	enlace:'',
 	classenlace:'',
 	giro:'Gestion de Cobranza.',
 	logo:'img/empleos/sertec.jpg',
 	puesto:'Programador  Analista.',
 	lugar:'SERTEC, Avenida Benjamín Franklin No. 98, Planta Baja, Cuauhtémoc, Hipódromo, 11800 Ciudad de México.',
 	tel:' 01-55-52-78-43-27.',
 	tiempo:'Marzo del 2015 - Septiembre del 2015.',
 	
 	actividaduno:'Modificación de módulos de los sistemas Web de la compañia.',
 	actividaddos:'Amplio Manejo de base de datos para generar reportes de acuerdo a las necesidades de cada departamento. ',
 	actividadtres:'Validaciones de campos. ',
 	tecnologias:'PHP 5,HTML 5,MYSQL, JQUERY . ',


 	
 },

{
 	nameclase:" ",
 	nav:"list2",
 	nombre:'Ld Suministros Industriales.',
 	url:'http://ld.org.mx/',
 	enlace:'Sitio Web desarrollado',
 	classenlace:'enlacebtn',
 	giro:'Comercializadora de productos industriales.',
 	logo:'img/empleos/frenlace.jpg',
 	puesto:'Desarrollador Web Freelance.',
 	lugar:'San Juan Ixtacala,Tlalnepantla de Baz Estado de México.',
 	tel:' 58-94-16-06.',
 	tiempo:'Abril del 2015 - Mayo del 2015.',
 	
 	actividaduno:'Desarrollo y Diseño de la página web.',
 	actividaddos:'Diseño responsivo. ',
 	actividadtres:'Manejo de Redes Sociales . ',
 tecnologias:' PHP 5, PHP MAILER, JAVASCRIPT, JQUERY,HTML 5, CSS3, Bootstrap , Diseño Responsivo. ',


 	
 },


 ];
