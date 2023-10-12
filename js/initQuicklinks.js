window.addEventListener('load', () => {
    // quicklink.listen();
    quicklink.prefetch([
        '/',
        '/about/',
        '/submissions/',
        '/contact/',
        '/img/about_us-tim-patch-min.webp',
        '/img/contact-min.webp',
        '/img/submissions-phil-crop-min.webp',
        '/img/home_background-pickawood-min.webp'
    ]);
});