import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { IssueStatus } from '../../common/enums/issue-status.enum';
import { User } from '../../auth/entity/user.entity';
import { Category } from '../../categories/entity/category.entity';
import { Location } from '../../locations/entity/location.entity';

@Entity()
export class Issue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('text')
  description: string;

  @Column({ type: 'enum', enum: IssueStatus, default: IssueStatus.PENDING })
  status: IssueStatus;

  @Column('decimal')
  latitude: number;

  @Column('decimal')
  longitude: number;

  @ManyToOne(() => Category)
  category: Category;

  @ManyToOne(() => User)
  reportedBy: User;

  @ManyToOne(() => Location)
  location: Location;

  @CreateDateColumn()
  createdAt: Date;
}
