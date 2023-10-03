export interface Cliente{
    id?: string;
    nombre: string;
    apellido: string;
    email: string;
    sexo: Sexo;
}

export enum Sexo{
    Masculino='Masculino',
    Femenino='Femenino'
}
