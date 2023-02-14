import { IsString, Length, Min, IsNumber } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class TortaData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  nev: string;

  @Column()
  @Min(5)
  @IsNumber()
  ar: number;
}
