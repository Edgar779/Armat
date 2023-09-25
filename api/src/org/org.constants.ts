/** Values */
export const GOOGLE_API_KEY = 'AIzaSyDnEVZH42jb76dK1GxIj1fqMXEWkBFJe80';
export const YELP_API_KEY = `X3HYTz42U0c9IX_Gd0I6j2ZgaokZctvRcQNUD2oF8Ex-p5W3bLKKWhTFBX3B9pso22YvdC7Z43sGA_qMYolPcNIWJGOJobi5odddAZIVjzS7XShkOfUQRs6D-jXOYXYx`;

/** Enums */
export enum OrgType {
  BUSINESS = 'BUSINESS',
  NON_PROFIT = 'NON_PROFIT',
}

export enum OrgStatus {
  PENDING = 'PENDING',
  ACTIVE = 'ACTIVE',
  ARCHIVED = 'ARCHIVED',
  REJECTED = 'REJECTED',
}

export enum OrgEditAction {
  APPROVE = 'APPROVE',
  REJECT = 'REJECT',
}

/** Objects */
export const summaries = {
  GET_EDITS: 'Gets the suggested edits for an organization by id',
  PROCESS_EDITS: 'Approve or reject the edits',
  GET_MANAGED: 'Gets the managed organizations of the current user identified by the session (token)',
  REMOVE_MANAGER: `Remove the organization manager if one exists`,
};
