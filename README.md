# webOxiferba

Rediseño de [oxiferba.com](https://oxiferba.com) en HTML, CSS y JavaScript vanilla, sin dependencias ni paso de compilación.

## Páginas

- `index.html`: inicio
- `productos.html`: productos y servicios
- `nosotros.html`: quiénes somos
- `contacto.html`: contáctenos

## Ver en local

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

## Estructura

```
css/fonts.css     tipografías servidas desde el proyecto (Big Shoulders Stencil, Barlow)
css/styles.css    sistema visual "Tarjeta de servicio"
js/main.js        fotos de la tienda, video bajo demanda, índice del catálogo, formulario
assets/img        fotos, logo y logos de marcas y clientes del sitio original
assets/docs       Portafolio_Oxiferba.pdf
```

El formulario de contacto no usa servidor: arma el mensaje y abre WhatsApp (317-4374114) o el programa de correo con destino contacto@oxiferba.com.
