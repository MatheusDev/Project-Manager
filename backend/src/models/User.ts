import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({length: 150})
  name: string

  @Column({length: 150, unique: true})
  email: string

  @Column({length: 150})
  password: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default User