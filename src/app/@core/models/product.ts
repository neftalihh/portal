export class Product{
    constructor(
        public id ?: number,
        public upc ?: string,
        public description ?: string,
        public family ?: string,
        public type_milk ?: string,
        public type_product ?: string,
        public factor ?: number
    ){}
}