const productos = [];

exports.getCrearProducto = (req, res, next) => {
  res.render('crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' });
};

exports.postCrearProducto = (req, res, next) => {
  productos.push({ nombre: req.body.nombre });
  res.redirect('/')
};

exports.getProductos = (req, res, next) => {
  res.render('tienda', {prods: productos, titulo: 'La Tienda', path: '/'});
};
