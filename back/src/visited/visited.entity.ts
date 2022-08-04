import { Landmark } from 'src/landmarks/landmarks.entity';
import { Users } from 'src/users/users.entity';
import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Visited {
    @PrimaryGeneratedColumn()
    index: number;

    @Column({ type: 'longtext' })
    landmark_img: string;

    @Column()
    landmark_id: number;

    @Column()
    user_id: string;

    @ManyToOne(() => Landmark, (landmark) => landmark.visited, {
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'landmark_id' })
    landmark: Landmark;

    @ManyToOne(() => Users, (user) => user.visited, {
        eager: true,
        onDelete: 'CASCADE',
    })
    @JoinColumn({ name: 'user_id' })
    user: Users;
}
