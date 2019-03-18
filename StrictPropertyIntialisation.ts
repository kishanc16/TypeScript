namespace strict_property_Initialisation_demo{

    class Rectangle{
        public width : number;
        public height : number;

        public constructor(width: number,height : number)
        {
            this.width = width;
            this.height = height;
        }
        public detHeight(height:number)
        {
            this.height = height;
        }
    }

    class Rectangle1{
        public width : number;
        public height : number;

        public constructor(width: number)
        {
            this.width = width;
        }
        public setHeight(height:number)
        {
            this.height = height;
        }
    }

    class Rectangle2{
        public width : number;
        public height !: number;

        public constructor(width: number)
        {
            this.width = width;
        }
        public setHeight(height:number)
        {
            this.height = height;
        }
    }

    class Rectangle3{
        public width : number;
        public height !: number;
    }

    class Rectangle4{
        public width : number;
        public height !: number;
    }
}