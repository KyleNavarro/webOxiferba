/* OXIFERBA — comportamiento de la tarjeta de servicio (JS vanilla) */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Fotos de la tienda ---------- */
  function initDiapos(root) {
    var imgs = root.querySelectorAll('.diapos img');
    var puntos = root.querySelectorAll('.punto');
    var contador = root.querySelector('[data-contador]');
    if (imgs.length < 2) return;
    var actual = 0;
    var timer = null;

    function ir(n) {
      actual = (n + imgs.length) % imgs.length;
      imgs.forEach(function (img, i) {
        img.classList.toggle('is-activa', i === actual);
        img.setAttribute('aria-hidden', i === actual ? 'false' : 'true');
      });
      puntos.forEach(function (p, i) {
        p.setAttribute('aria-current', i === actual ? 'true' : 'false');
      });
      if (contador) contador.textContent = 'Foto ' + (actual + 1) + ' de ' + imgs.length;
    }
    function play() {
      if (reduceMotion || timer) return;
      timer = window.setInterval(function () { ir(actual + 1); }, 5000);
    }
    function pause() { window.clearInterval(timer); timer = null; }

    root.querySelector('[data-prev]').addEventListener('click', function () { pause(); ir(actual - 1); });
    root.querySelector('[data-next]').addEventListener('click', function () { pause(); ir(actual + 1); });
    puntos.forEach(function (p, i) {
      p.addEventListener('click', function () { pause(); ir(i); });
    });
    root.addEventListener('mouseenter', pause);
    root.addEventListener('mouseleave', play);
    root.addEventListener('focusin', pause);
    document.addEventListener('visibilitychange', function () { document.hidden ? pause() : play(); });

    ir(0);
    play();
  }
  document.querySelectorAll('[data-diapos]').forEach(initDiapos);

  /* ---------- Video: carga YouTube solo al pedirlo ---------- */
  document.querySelectorAll('[data-video]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-video');
      var marco = btn.parentNode;
      var iframe = document.createElement('iframe');
      iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?autoplay=1&rel=0';
      iframe.title = btn.getAttribute('aria-label') || 'Video';
      iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      marco.innerHTML = '';
      marco.appendChild(iframe);
      iframe.focus();
    });
  });

  /* ---------- Lomo del catálogo: marca la línea visible ---------- */
  var lomoLinks = document.querySelectorAll('.lomo a[href^="#"]');
  if (lomoLinks.length && 'IntersectionObserver' in window) {
    var porId = {};
    lomoLinks.forEach(function (a) { porId[a.getAttribute('href').slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        lomoLinks.forEach(function (a) { a.setAttribute('aria-current', 'false'); });
        var a = porId[e.target.id];
        if (a) a.setAttribute('aria-current', 'true');
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    Object.keys(porId).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }

  /* ---------- Formulario: arma el mensaje para WhatsApp o correo ---------- */
  var form = document.querySelector('[data-formulario]');
  if (form) {
    var estado = form.querySelector('.form-estado');
    var campos = {
      nombre: form.elements.nombre,
      email: form.elements.email,
      mensaje: form.elements.mensaje
    };
    var mensajes = {
      nombre: 'Escriba su nombre para saber a quién responder.',
      email: 'Escriba un correo válido, por ejemplo nombre@empresa.com.',
      mensaje: 'Cuéntenos qué necesita: producto, cantidad o servicio.'
    };

    function validar(nombre) {
      var input = campos[nombre];
      var ok = input.value.trim() !== '' && (nombre !== 'email' || input.checkValidity());
      var cont = input.closest('.form-campo');
      cont.classList.toggle('is-invalido', !ok);
      input.setAttribute('aria-invalid', ok ? 'false' : 'true');
      cont.querySelector('.error').textContent = ok ? '' : mensajes[nombre];
      return ok;
    }

    Object.keys(campos).forEach(function (n) {
      campos[n].addEventListener('blur', function () {
        if (campos[n].value.trim() !== '') validar(n);
      });
      campos[n].addEventListener('input', function () {
        if (campos[n].closest('.form-campo').classList.contains('is-invalido')) validar(n);
      });
    });

    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var via = ev.submitter ? ev.submitter.value : 'whatsapp';
      var errores = Object.keys(campos).filter(function (n) { return !validar(n); });
      if (errores.length) {
        campos[errores[0]].focus();
        estado.textContent = 'Revise los campos marcados.';
        estado.style.color = 'var(--rojo)';
        return;
      }
      var n = campos.nombre.value.trim();
      var e = campos.email.value.trim();
      var m = campos.mensaje.value.trim();
      var url;
      if (via === 'correo') {
        url = 'mailto:contacto@oxiferba.com'
          + '?subject=' + encodeURIComponent('Consulta desde la web - ' + n)
          + '&body=' + encodeURIComponent(m + '\n\n' + n + '\n' + e);
      } else {
        url = 'https://wa.me/573174374114?text='
          + encodeURIComponent('Hola Oxiferba, soy ' + n + ' (' + e + ').\n\n' + m);
      }
      var btn = ev.submitter;
      if (btn) {
        btn.classList.add('is-cargando');
        window.setTimeout(function () { btn.classList.remove('is-cargando'); }, 1200);
      }
      estado.style.color = '';
      estado.textContent = via === 'correo'
        ? 'Abriendo su programa de correo…'
        : 'Abriendo WhatsApp con su mensaje…';
      if (via === 'correo') window.location.href = url;
      else window.open(url, '_blank', 'noopener');
    });
  }
})();
