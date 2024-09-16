class Enemy {
    constructor(x, y, w, h, c, s) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.s = s;

        let randomIndex = Math.floor(Math.random() * enemigosImgs.length);
        this.img = enemigosImgs[randomIndex];
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

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
}
