window.addEventListener('load', () => {
    // quicklink.listen();
    quicklink.prefetch([
        '/',
        '/about/',
        '/submissions/',
        '/contact/',
        '/img/about_us-tim-patch-min.jpg',
        '/img/contact-min.jpg',
        '/img/submissions-phil-min-crop.jpg',
        '/img/home_background-pickawood-min.jpg'
    ]);
});