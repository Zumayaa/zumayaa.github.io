class Player {
    constructor(x, y, w, h, c, s) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.s = s;
    }

    hit(otro) {
        if (this.x < otro.x + otro.w &&
            this.x + this.w > otro.x &&
            this.y < otro.y + otro.h &&
            this.y + this.h > otro.y) {

            return true;
        }
        return false;
    }
}