export class CreateUpdateRestaurantDto {
    name: string;
    commercialRegister: string;
    expirationDate: Date;
    isActive:boolean;


    description: string;


  

    image: File | string;

   
    logo: string;

 
    street: string;

 
    aptNumber?: string;

 
    latitude: number;

    longitude: number;

 
    specialities: string[];
}

