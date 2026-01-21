import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  locationTitle: string;

  @Column()
  province: string; // PROVINCE, DISTRICT, SECTOR, CELL, VILLAGE

  @Column()
  district: string;



}
