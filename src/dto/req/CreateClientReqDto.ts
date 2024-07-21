export interface ClientReqDto {
    id?: number,
    nameClient: string,
    documentType: string,
    documentNumber: string,
    address: string,
    phone: string,
    email: string,
    creationDate: Date
}