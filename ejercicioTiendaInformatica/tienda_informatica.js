const CATEGORIAS = [
	{ id: 1, nombre: "Ratones" },
	{ id: 2, nombre: "Teclados" },
	{ id: 3, nombre: "Monitores" }
];
const PRODUCTOS = [
	{ id: 1, categoria: 1, nombre: "Ratón Logitech G2023", precio:24.90, descripcion: "Tecnología LIGHTSYNC, un sensor para gaming y un diseño clásico con 6 botones", imagen: "logitech-g203.webp", caracteristicas: ["Ancho: 34mm", "Prof.: 116mm", "Alto: 42mm", "Peso: 85g"] },
	{ id: 2, categoria: 1, nombre: "Ratón MSI Clutch GM08",precio: 9.99, descripcion: "Con un preciso Sensor PAW-3519 óptico de hasta 3200 DPI", imagen: "msi-gm08.webp", caracteristicas: ["Ancho: 40mm", "Prof.: 128mm", "Alto: 40", "Peso: 92g"] },
	{ id: 3, categoria: 1, nombre: "Ratón Tempest MS300", precio: 15.23, descripcion: "Ratón gaming diseñado para ofrecer precisión y estilo a los gamers más exigentes", imagen: "tempest-ms300.webp", caracteristicas: ["Ancho: 41mm", "Prof.: 108mm", "Alto: 38", "Peso: 75g"] },
	{ id: 5, categoria: 2, nombre: "Teclado Corsair K55", precio: 72.19, descripcion: "Ilumine sus sesiones de juego con retroiluminación RGB de diez zonas", imagen: "teclado_corsair_k55.webp", caracteristicas: ["Color: Negro", "Iluminación: Sí"] },
	{ id: 6, categoria: 2, nombre: "Teclado Tempest K20", precio: 83.55, descripcion: "Un teclado con un diseño gaming exclusivo", imagen: "teclado_tempest_k20.webp", caracteristicas: ["Color: Blanco", "Tipo: Mecánico", "Layout: Español", "Peso: 450gr", "Nº teclas: 68"] },
	{ id: 7, categoria: 2, nombre: "Teclado Owlotech EMK500", precio: 34.99, descripcion: "Está diseñado para proporcionar una experiencia de uso ergonómica y comodísima", imagen: "teclado_owlotech.webp", caracteristicas: ["Color: Negro", "Tipo: Mecánico", "Peso: 112g"] },
	{ id: 8, categoria: 3, nombre: "Monitor LG 24GS50F", precio: 150.12, descripcion: "Monitor diseñado especialmente para gamers", imagen: "monitor_lg.webp", caracteristicas: ["Tipo HD: Full HD", "Pantalla táctil: No"] },
	{ id: 9, categoria: 3, nombre: "Monitor MSG G27", precio: 169.55, descripcion: "Equipado con un panel de 1920x1080, 250hz", imagen: "monitor_msi.webp", caracteristicas: ["Curvatura: 1500R", "Relación de aspecto: 16:9"] },

];


// Escribe aquí tu código

function filtrarProductos(idCategoria) {
	let productos=[];
	for (let i = 0; i < PRODUCTOS.length; i++) {
		if (idCategoria== PRODUCTOS[i].categoria) {
			productos.push(PRODUCTOS[i]);
		}
	}
	return productos;
} 

function filtrarProductosConId(id) {
	let productos=[];
	for (let i = 0; i < PRODUCTOS.length; i++) {
		if (id== PRODUCTOS[i].id) {
			productos.push(PRODUCTOS[i]);
		}
	}
	return productos;
}

addEventListener("load",  cambiarNombreCategorias())

function cambiarNombreCategorias() {
	let categorias = document.getElementById("categorias");
	categorias.innerHTML = ""; // Limpiar el contenido previo
	for (let i = 0; i < CATEGORIAS.length; i++) {
		let div = document.createElement("div");
		div.className="col";
		div.innerHTML=`<h1 onclick="mostrarProductos(${CATEGORIAS[i].id})"><span class="badge bg-info cursor-pointer">${CATEGORIAS[i].nombre}</span></h1>`;
		categorias.appendChild(div);
	}

}

function mostrarProductos(idCategoria) {
	let productos = filtrarProductos(idCategoria);
	let productosDiv = document.getElementById("productos");
	productosDiv.innerHTML = ""; // Limpiar el contenido previo
	for (let i = 0; i < productos.length; i++) {
		let div = document.createElement("div");
		div.className="col";
		div.innerHTML=`<div class="card" style="width: 18rem;">
			<img src="images/${productos[i].imagen}" class="card-img-top" alt="${productos[i].nombre}">
			<div class="card-body">
				<h5 class="card-title">${productos[i].nombre}</h5>
				<p class="card-text">${productos[i].descripcion}</p>
				<p class="card-text">${productos[i].precio}€</p>
				<a href="#" class="btn btn-primary" onclick="mostrarCaracteristicas(${productos[i].id})">Caracteristicas</a>
			</div>
		</div>`;
		productosDiv.appendChild(div);
	}
}

function mostrarCaracteristicas(id) {
	let productos = filtrarProductosConId(id);
	let caracteristicasDiv = document.getElementById("caracteristicas");
	caracteristicasDiv.innerHTML = ""; // Limpiar el contenido previo
	for (let i = 0; i <productos[0].caracteristicas.length; i++) {
		let li=document.createElement("li");
		li.className="list-group-item d-flex justify-content-between lh-sm";
		li.innerHTML=`<h6 class="my-0">${productos[0].caracteristicas[i]}</h6>`;
		caracteristicasDiv.appendChild(li);
	}
};