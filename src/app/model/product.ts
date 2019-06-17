export class Product {

    constructor(public id: number,
                public name: string,
                public price: number,
                public imagePath: string,
                public onSale: boolean,
                public inCart: number) { }

}
