function formatTime(date) {
    const day = Math.floor(date / (24 * 60));
    const hour = Math.floor((date % (24 * 60)) / 60);
    const minute = Math.floor((date % (24 * 60)) % 60);
    return day + " day(s) " + hour + " hour(s) " + minute + " minute(s).";
}

formatTime(120);
formatTime(59);
formatTime(1440);