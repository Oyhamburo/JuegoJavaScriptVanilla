function startAnimation(option) {
    switch (option) {
        case 'inicio':
            animate()
            break;
        case 'cementery':
            animateCementery()
            break;
        case 'posionShop':
            animatePosionShop()
            break;
        case 'rute':
            // animateRute()
            break;
        default:
            break;
    }
}