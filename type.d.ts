export interface ProductProps{
    id:number;
    title:string;
    price: number;
    description:string;
    category:string;
    image:string;

    
}

export interface StoreProduct{
    id:number;
    title:string;
    price: number;
    description:string;
    category:string;
    image:string;
    quantity:number;

    
}

export interface stateProps{
    productData: [];
    favoriteData: [];
    userInfo: [];
    userInfo: null | string;
    next: any;

}