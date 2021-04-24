export interface AlertQualifiedEvent {
  id: string;
  alert_id: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  alert_severity: string;
  care_recipient_id: string;
}

export interface CheckInEvent {
  id: string;
  visit_id: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  care_recipient_id: string;
}

export interface CheckOutEvent {
  id: string;
  visit_id: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  care_recipient_id: string;
}

export interface ConcernRaisedEvent {
  id: string;
  note: string;
  visit_id: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  care_recipient_id: string;
}

export interface TaskCompletedEvent {
  id: string;
  visit_id: string;
  timestamp: string;
  event_type: string;
  caregiver_id: string;
  task_instance_id: string;
  task_schedule_id: string;
  care_recipient_id: string;
  task_definition_id: string;
  task_schedule_note: string;
  task_definition_description: string;
}

export interface PhysicalHealthObservationEvent {}

export enum EventTypes {
  AlertQualified = 'alert_qualified',
  CheckIn = 'check_in',
  CheckOut = 'check_out',
  ConcernRaised = 'concern_raised',
  TaskCompleted = 'task_completed',
  PhysicalHealthObservation = 'physical_health_observation',
}

export interface Query {
  page?: number;
  limit?: number;
  recipient_id?: string;
  event_type?: string;
}
