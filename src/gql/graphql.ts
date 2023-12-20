/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: { input: any; output: any; }
};

export type ConferenceData = {
  __typename?: 'ConferenceData';
  conferenceId?: Maybe<Scalars['String']['output']>;
  conferenceSolution?: Maybe<ConferenceSolution>;
  createRequest?: Maybe<CreateConferenceRequest>;
  eTag?: Maybe<Scalars['String']['output']>;
  entryPoints?: Maybe<Array<Maybe<EntryPoint>>>;
  notes?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<ConferenceParameters>;
  signature?: Maybe<Scalars['String']['output']>;
};

export type ConferenceParameters = {
  __typename?: 'ConferenceParameters';
  addOnParameters?: Maybe<ConferenceParametersAddOnParameters>;
  eTag?: Maybe<Scalars['String']['output']>;
};

export type ConferenceParametersAddOnParameters = {
  __typename?: 'ConferenceParametersAddOnParameters';
  eTag?: Maybe<Scalars['String']['output']>;
  parameters?: Maybe<Array<KeyValuePairOfStringAndString>>;
};

export type ConferenceRequestStatus = {
  __typename?: 'ConferenceRequestStatus';
  eTag?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['String']['output']>;
};

export type ConferenceSolution = {
  __typename?: 'ConferenceSolution';
  eTag?: Maybe<Scalars['String']['output']>;
  iconUri?: Maybe<Scalars['String']['output']>;
  key?: Maybe<ConferenceSolutionKey>;
  name?: Maybe<Scalars['String']['output']>;
};

export type ConferenceSolutionKey = {
  __typename?: 'ConferenceSolutionKey';
  eTag?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CreateConferenceRequest = {
  __typename?: 'CreateConferenceRequest';
  conferenceSolutionKey?: Maybe<ConferenceSolutionKey>;
  eTag?: Maybe<Scalars['String']['output']>;
  requestId?: Maybe<Scalars['String']['output']>;
  status?: Maybe<ConferenceRequestStatus>;
};

export type CreatorData = {
  __typename?: 'CreatorData';
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  self?: Maybe<Scalars['Boolean']['output']>;
};

export type CustomLocationData = {
  __typename?: 'CustomLocationData';
  label?: Maybe<Scalars['String']['output']>;
};

export type EntryPoint = {
  __typename?: 'EntryPoint';
  accessCode?: Maybe<Scalars['String']['output']>;
  eTag?: Maybe<Scalars['String']['output']>;
  entryPointFeatures?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  entryPointType?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  meetingCode?: Maybe<Scalars['String']['output']>;
  passcode?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  pin?: Maybe<Scalars['String']['output']>;
  regionCode?: Maybe<Scalars['String']['output']>;
  uri?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  anyoneCanAddSelf?: Maybe<Scalars['Boolean']['output']>;
  attachments?: Maybe<Array<Maybe<EventAttachment>>>;
  attendees?: Maybe<Array<Maybe<EventAttendee>>>;
  attendeesOmitted?: Maybe<Scalars['Boolean']['output']>;
  colorId?: Maybe<Scalars['String']['output']>;
  conferenceData?: Maybe<ConferenceData>;
  /** @deprecated This property is obsolete and may behave unexpectedly; please use CreatedDateTimeOffset instead. */
  created?: Maybe<Scalars['DateTime']['output']>;
  createdDateTimeOffset?: Maybe<Scalars['DateTime']['output']>;
  createdRaw?: Maybe<Scalars['String']['output']>;
  creator?: Maybe<CreatorData>;
  description?: Maybe<Scalars['String']['output']>;
  eTag?: Maybe<Scalars['String']['output']>;
  end?: Maybe<EventDateTime>;
  endTimeUnspecified?: Maybe<Scalars['Boolean']['output']>;
  eventType?: Maybe<Scalars['String']['output']>;
  extendedProperties?: Maybe<ExtendedPropertiesData>;
  gadget?: Maybe<GadgetData>;
  guestsCanInviteOthers?: Maybe<Scalars['Boolean']['output']>;
  guestsCanModify?: Maybe<Scalars['Boolean']['output']>;
  guestsCanSeeOtherGuests?: Maybe<Scalars['Boolean']['output']>;
  hangoutLink?: Maybe<Scalars['String']['output']>;
  htmlLink?: Maybe<Scalars['String']['output']>;
  iCalUID?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  kind?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  locked?: Maybe<Scalars['Boolean']['output']>;
  organizer?: Maybe<OrganizerData>;
  originalStartTime?: Maybe<EventDateTime>;
  privateCopy?: Maybe<Scalars['Boolean']['output']>;
  recurrence?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  recurringEventId?: Maybe<Scalars['String']['output']>;
  reminders?: Maybe<RemindersData>;
  sequence?: Maybe<Scalars['Int']['output']>;
  source?: Maybe<SourceData>;
  start?: Maybe<EventDateTime>;
  status?: Maybe<Scalars['String']['output']>;
  summary?: Maybe<Scalars['String']['output']>;
  transparency?: Maybe<Scalars['String']['output']>;
  /** @deprecated This property is obsolete and may behave unexpectedly; please use UpdatedDateTimeOffset instead. */
  updated?: Maybe<Scalars['DateTime']['output']>;
  updatedDateTimeOffset?: Maybe<Scalars['DateTime']['output']>;
  updatedRaw?: Maybe<Scalars['String']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
  workingLocationProperties?: Maybe<EventWorkingLocationProperties>;
};

export type EventAttachment = {
  __typename?: 'EventAttachment';
  eTag?: Maybe<Scalars['String']['output']>;
  fileId?: Maybe<Scalars['String']['output']>;
  fileUrl?: Maybe<Scalars['String']['output']>;
  iconLink?: Maybe<Scalars['String']['output']>;
  mimeType?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type EventAttendee = {
  __typename?: 'EventAttendee';
  additionalGuests?: Maybe<Scalars['Int']['output']>;
  comment?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  eTag?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  optional?: Maybe<Scalars['Boolean']['output']>;
  organizer?: Maybe<Scalars['Boolean']['output']>;
  resource?: Maybe<Scalars['Boolean']['output']>;
  responseStatus?: Maybe<Scalars['String']['output']>;
  self?: Maybe<Scalars['Boolean']['output']>;
};

export type EventDateTime = {
  __typename?: 'EventDateTime';
  date?: Maybe<Scalars['String']['output']>;
  /** @deprecated This property is obsolete and may behave unexpectedly; please use DateTimeDateTimeOffset instead. */
  dateTime?: Maybe<Scalars['DateTime']['output']>;
  dateTimeDateTimeOffset?: Maybe<Scalars['DateTime']['output']>;
  dateTimeRaw?: Maybe<Scalars['String']['output']>;
  eTag?: Maybe<Scalars['String']['output']>;
  timeZone?: Maybe<Scalars['String']['output']>;
};

export type EventReminder = {
  __typename?: 'EventReminder';
  eTag?: Maybe<Scalars['String']['output']>;
  method?: Maybe<Scalars['String']['output']>;
  minutes?: Maybe<Scalars['Int']['output']>;
};

export type EventWorkingLocationProperties = {
  __typename?: 'EventWorkingLocationProperties';
  customLocation?: Maybe<CustomLocationData>;
  eTag?: Maybe<Scalars['String']['output']>;
  officeLocation?: Maybe<OfficeLocationData>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ExtendedPropertiesData = {
  __typename?: 'ExtendedPropertiesData';
  private__?: Maybe<Array<KeyValuePairOfStringAndString>>;
  shared?: Maybe<Array<KeyValuePairOfStringAndString>>;
};

export type GadgetData = {
  __typename?: 'GadgetData';
  display?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  iconLink?: Maybe<Scalars['String']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  preferences?: Maybe<Array<KeyValuePairOfStringAndString>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};

export type KeyValuePairOfStringAndString = {
  __typename?: 'KeyValuePairOfStringAndString';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type OfficeLocationData = {
  __typename?: 'OfficeLocationData';
  buildingId?: Maybe<Scalars['String']['output']>;
  deskId?: Maybe<Scalars['String']['output']>;
  floorId?: Maybe<Scalars['String']['output']>;
  floorSectionId?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
};

export type OrganizerData = {
  __typename?: 'OrganizerData';
  displayName?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  self?: Maybe<Scalars['Boolean']['output']>;
};

export type Query = {
  __typename?: 'Query';
  allShifts: Array<Event>;
  get: Array<Event>;
};


export type QueryGetArgs = {
  employeeName: Scalars['String']['input'];
};

export type RemindersData = {
  __typename?: 'RemindersData';
  overrides?: Maybe<Array<Maybe<EventReminder>>>;
  useDefault?: Maybe<Scalars['Boolean']['output']>;
};

export type SourceData = {
  __typename?: 'SourceData';
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type GetAllEventQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventQuery = { __typename?: 'Query', allShifts: Array<{ __typename?: 'Event', description?: string | null, creator?: { __typename?: 'CreatorData', displayName?: string | null } | null, start?: { __typename?: 'EventDateTime', dateTimeDateTimeOffset?: any | null } | null, end?: { __typename?: 'EventDateTime', dateTimeDateTimeOffset?: any | null } | null }> };

export type GetEventQueryVariables = Exact<{
  employeeName: Scalars['String']['input'];
}>;


export type GetEventQuery = { __typename?: 'Query', get: Array<{ __typename?: 'Event', description?: string | null, start?: { __typename?: 'EventDateTime', dateTimeDateTimeOffset?: any | null } | null, end?: { __typename?: 'EventDateTime', dateTimeDateTimeOffset?: any | null } | null }> };


export const GetAllEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllEvent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShifts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"creator"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"start"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTimeDateTimeOffset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"end"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTimeDateTimeOffset"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllEventQuery, GetAllEventQueryVariables>;
export const GetEventDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEvent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"employeeName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"employeeName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"employeeName"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"start"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTimeDateTimeOffset"}}]}},{"kind":"Field","name":{"kind":"Name","value":"end"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dateTimeDateTimeOffset"}}]}}]}}]}}]} as unknown as DocumentNode<GetEventQuery, GetEventQueryVariables>;