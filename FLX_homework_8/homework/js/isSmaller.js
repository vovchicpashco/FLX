function isBigger(alpha, omega) {
    return alpha > omega;
}

function isSmaller(alpha, omega) {
    return !isBigger(alpha, omega);
}

isSmaller(5, -1);