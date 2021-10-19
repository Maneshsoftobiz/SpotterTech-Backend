import { Entity, Column, PrimaryGeneratedColumn, } from "typeorm";

@Entity({ name: "users" })
export class Users {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstname: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    hashPassword: string;
} 