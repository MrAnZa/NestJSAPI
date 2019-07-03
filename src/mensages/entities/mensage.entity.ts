import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Mensage {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nick: string;
    
    @Column()
    mensaje: string;

}
