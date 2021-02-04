import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, InsertResult } from 'typeorm';
import Image from './image'

@Entity('orphanages')
export default class Orphanage {
  @PrimaryGeneratedColumn('increment')
  id: number;
 
  @Column()
  lat: number;
  
  @Column()
  lon: number;
  
  @Column()
  name: string;

  @Column()
  about: string;
  
  @Column()
  instructions: string;
  
  @Column()
  opening_hours: string;
  
  @Column()
  open_on_weekends: boolean;

  @OneToMany(() => Image, image => image.orphanage, {
    cascade: ['insert', 'update' ]
  } )
  @JoinColumn({ name: 'orphanage_id'})
  images: Image[]; 
}