function Jos(n, k) {
    if (n === 1) return 0;
    //recursive
    else {
        return Jos((n - 1, k) + k) % n;
    }
}
Jos(2, 3);
