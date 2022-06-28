namespace CricketHero {
    
    export class Vector2D {
    
        public x: number;
        public y: number;

        constructor(x?: number, y?: number) {

            this.x = x;
            this.y = y;
        }

        public plus (a: Vector2D): Vector2D {

            let v = new Vector2D(this.x, this.y);

            v.x = v.x + a.x;
            v.y = v.y + a.y;

            return v;
        }

        public minus (a: Vector2D): Vector2D {
            
            let v = new Vector2D(this.x, this.y);

            v.x = v.x - a.x;
            v.y = v.y - a.y;
            
            return v;
        }

        public times(m: any): Vector2D {

            let v = new Vector2D(this.x, this.y);

            if (m instanceof Vector2D) {
                v.x *= m.x;
                v.y *= m.y;
            } else {
                v.x *= m;
                v.y *= m; 
            }

            return v;
        }  
        
        // NO SE USA
        public invert(): Vector2D {

            let v = new Vector2D(this.x, this.y);
            v.x *= -1;
            v.y *= -1;
            
            return v;
        }

        public normalize(): Vector2D {

            var v = new Vector2D(this.x, this.y);
            v = v.times(1 / v.magnitude);

            return v;
        }

        public dot (v: Vector2D): number {

            return this.x * v.x + this.y * v.y;
        } 

        // NO SE USA
        public cross(v: Vector2D): number {

            return Math.abs(this.x * v.y - this.y * v.x);
        }

        public angleBetween (v: Vector2D): number {

            return Math.acos(this.dot(v) / (this.magnitude * v.magnitude)) * 180 / Math.PI;
        }

        public getRightNormal(): Vector2D {

            return new Vector2D(this.y, -this.x);
        }

        public getLeftNormal(): Vector2D {

            return new Vector2D(-this.y, this.x);
        }

    
        public get angle(): number {
            return Math.atan2(this.y, this.x) * 180 / Math.PI;
        }

        public set angle(angle: number) {

            let a: number;

            if (isNaN(angle)) {
                a = 0;
            } else {
                a = angle * (Math.PI / 180);
            }
            
            let l = Math.sqrt(this.x * this.x + this.y * this.y);
            
            this.x = l * Math.cos(a);
            this.y = l * Math.sin(a);
        }

        public get magnitude(): number {

            return Math.sqrt(this.x * this.x + this.y * this.y);
        }

        public get magnitudeSquared(): number {
            
            return this.x * this.x + this.y * this.y;
        }
    }
}

