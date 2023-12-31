class Player {
    constructor(matrixBody, left, top, width, height, imgSrc) {
        this.matrixBody = matrixBody;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;
        this.directionX = 0;
        this.directionY = 0;
        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.matrixBody.appendChild(this.element);
        this.collisionBugIndex = 0;
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        if (this.left < 0) {
            this.left = 0;
        }

        if (this.top < 0) {
            this.top = 0;
        }

        if (this.left > this.matrixBody.clientWidth - this.width) {
            this.left = this.matrixBody.clientWidth - this.width;
        }

        if (this.top > this.matrixBody.clientHeight - this.height) {
            this.top = this.matrixBody.clientHeight - this.height;
        }

        // this is just a test
    }


    didCollide(bug) {
        if(
            this.left < bug.left + bug.width &&
            this.left + this.width > bug.left &&
            this.top < bug.top + bug.height &&
            this.top + this.height > bug.top
        ) {
            return true;
            
        } else {
            return false;
        }
    }


    didCollideWithAnyBug(bugs) {
        for (const bug of bugs) {
            if(this.didCollide(bug)) {
                this.collisionBugIndex = bugs.indexOf(bug);
                return true;
            }
        }
        return false;
    }

}