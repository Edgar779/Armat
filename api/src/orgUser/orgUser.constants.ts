export enum OrgUser {
  ORGADMIN = 'ORGADMIN',
  ORGMANAGER = 'ORGMANAGER',
  ORGMEMBER = 'ORGMEMBER',
}

export const CSVFields = [
  { label: 'Email', value: 'email' },
  { label: 'Role', value: 'userType' },
  { label: 'FullName', value: 'fullName' },
  { label: 'PhoneNumber', value: 'phoneNumber' },
];
