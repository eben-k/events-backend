import { Column, Entity, ObjectLiteral, PrimaryColumn } from 'typeorm';

@Entity({ name: 'events' })
export class EventEntity {
  @PrimaryColumn()
  id!: string;

  @Column()
  event_type!: string;

  @Column()
  caregiver_id!: string;

  @Column()
  care_recipient_id!: string;

  @Column()
  visit_id!: string;

  @Column()
  alert_id!: string;

  @Column()
  rejected_event_id!: string;

  @Column()
  observation_event_id!: string;

  @Column()
  task_instance_id!: string;

  @Column({ type: 'json' })
  payload!: ObjectLiteral;

  @Column()
  timestamp!: Date;
}
