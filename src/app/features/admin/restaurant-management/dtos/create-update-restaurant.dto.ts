export class CreateUpdateRestaurantDto {
    name: string;

    commercialRegister: string;

    expirationDate: Date;

    description: string;

    image: File | string;

    logo: string;

    street: string;


    latitude: number;

    longitude: number;

    specialities: string[];
}

