class Bug {
    constructor(matrixBody) {
        this.matrixBody = matrixBody;
        this.left = Math.floor(Math.random() * 950);
        this.top = Math.floor(Math.random() * 450);
        this.width = 25;
        this.height = 25;
        this.element = document.createElement("img");
        this.element.src = "/images/bug-test.png";
        this.element.style.position ="absolute";
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.matrixBody.appendChild(this.element);
        setInterval(() => {this.move()}, 500);
            

    }

    move() {

        // Adjust the interval as needed for desired speed

       // get a random number how often the object should move
            const repetitionArr = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, 200, 250, 300, 350, 400];
            // const repetitionArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50];
            const indexRepition = Math.floor(Math.random() * repetitionArr.length);
            const repetitionNumber = repetitionArr[indexRepition]
            
            // get a random direction the object should move into
            const directionArr = [`left`, `right`, `up`, `down`]
            const indexDirection = Math.floor(Math.random() * directionArr.length);
            let moveDirection = directionArr[indexDirection];
            
        
            
            // check if direction was already used before
            
            // Update position according to repetitionNumber and moveDirection
                    // for(let i = 0; i <= repetitionNumber; i++) {
                    //         switch(moveDirection) {
                    //         case "left":
                    //             setTimeout(() => {
                    //                 this.left = this.left - 1;
                    //             this.element.style.left = `${this.left}px`;
                    //             if(this.left < 0) {
                    //                 this.left = 0;
                    //             }},100)
                    //             console.log("moved left left-1")
                    //             break;
                    //         case "right":
                    //             setTimeout(() => {
                    //             this.left = this.left + 1; // or left -= 1; for short
                    //             this.element.style.left = `${this.left}px`;
                    //             if (this.left > this.matrixBody.clientWidth - this.width) {
                    //                 this.left = this.matrixBody.clientWidth - this.width;
                    //             }},100)
                    //             console.log("moved right left+1")
                    //             break;
                    //         case "up":
                    //             setTimeout(() => {
                    //             this.top = this.top - 1; // or top -= 1; for short
                    //             this.element.style.top = `${this.top}px`;
                    //             if(this.top < 0) {
                    //                 this.top = 0;
                    //             }},100)
                    //             console.log("moved up top-1")
                    //             break;
                    //         case "down":
                    //             setTimeout(() => {
                    //             this.top = this.top + 1; // or top += 1; for short
                    //             this.element.style.top = `${this.top}px`;
                    //             if (this.top > this.matrixBody.clientHeight - this.height) {
                    //                 this.top = this.matrixBody.clientHeight - this.height;
                    //             }},100)  
                    //             console.log("moved down top+1")
                    //             break;
                    //         }
            
                    // } 
            
                    for(let i = 0; i <= repetitionNumber; i++) {
                        switch(moveDirection) {
                        case "left":
                            this.left = this.left - 1;
                            this.element.style.left = `${this.left}px`;
                            if(this.left < 0) {
                                this.left = 0;
                            }
                            // console.log("moved left left-1")

                            break;
                        case "right":
                            this.left = this.left + 1; // or left -= 1; for short
                            this.element.style.left = `${this.left}px`;
                            if (this.left > this.matrixBody.clientWidth - this.width) {
                                this.left = this.matrixBody.clientWidth - this.width;
                            }
                            // console.log("moved right left+1")
                            break;
                        case "up":
                            this.top = this.top - 1; // or top -= 1; for short
                            this.element.style.top = `${this.top}px`;
                            if(this.top < 0) {
                                this.top = 0;
                            }
                            // console.log("moved up top-1")
                            break;
                        case "down":
                            this.top = this.top + 1; // or top += 1; for short
                            this.element.style.top = `${this.top}px`;
                            if (this.top > this.matrixBody.clientHeight - this.height) {
                                this.top = this.matrixBody.clientHeight - this.height;
                            }  
                            // console.log("moved down top+1")
                            break;
                            }
                        }
        }
    }