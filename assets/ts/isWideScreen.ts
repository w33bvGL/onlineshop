export function isWideScreen() {
    const windowOuterWidth = window.outerWidth

    if(windowOuterWidth >= 1024) {
        return 1;
    } else {
        return 0;
    }
}