import { Formater, User } from "../user/user";

export class Client {
    constructor(
        public id?: number,
        public name?: string,
        public mf?: string,
        public description?: string,
        public picture?: string,
        public createdBy?: number,
        public createdAt?: string,
        public updatedAt?: string,
        public updatedBy?: number,
        public active?: boolean,
        public contacts?: string,
        public adress?: string,
        public ville?: string,
        public userId?:number | User,
        public formaterId?:number | Formater,
        public total?:number,
        // pubblic formationId:number | Formater
      ) { }
}
