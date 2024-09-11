const Producto = require('../models/producto');

exports.getCrearProducto = (req, res, next) => {
  res.render('crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' });
};

exports.postCrearProducto = (req, res, next) => {
  const producto = new Producto(req.body.nombre);
  producto.save();
  res.redirect('/')
};

exports.getProductos = (req, res, next) => {
  const productos = Producto.fetchAll();
  res.render('tienda', {prods: productos, titulo: 'La Tienda', path: '/'});
};
