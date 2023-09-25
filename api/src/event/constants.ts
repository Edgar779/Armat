export enum EventLocation {
  PHYSICAL = 'PHYSICAL',
  VIRTUAL = 'VIRTUAL',
}

export enum CTAButtonType {
  REGISTER = 'REGISTER',
  BUT_TICKETS = 'BUY_TICKETS',
  DONATE = 'DONATE',
  MORE_INFO = 'MORE_INFO',
  BOOK_NOW = 'BOOK_NOW',
  CONTACT_US = 'CONTACT_US',
  EMAIL = 'EMAIL',
}

export enum EventStatus {
  PENDING = 'PENDING',
  PUBLISHED = 'PUBLISHED',
  REJECTED = 'REJECTED',
  UNPUBLISHED = 'UNPUBLISHED',
}

export enum EventAccess {
  PUBLIC = 'PUBLIC',
  LISTS = 'LISTS',
  MEMBERS = 'MEMBERS',
}

export enum State {
  Alabama = 'Alabama',
  Alaska = 'Alaska',
  Arizona = 'Arizona',
  Arkansas = 'Arkansas',
  California = 'California',
  Colorado = 'Colorado',
  Connecticut = 'Connecticut',
  Delaware = 'Delaware',
  Florida = 'Florida',
  Georgia = 'Georgia',
  Hawaii = 'Hawaii',
  Idaho = 'Idaho',
  Illinois = 'Illinois',
  Indiana = 'Indiana',
  Iowa = 'Iowa',
  Kansas = 'Kansas',
  Kentucky = 'Kentucky',
  Louisiana = 'Louisiana',
  Maine = 'Maine',
  Maryland = 'Maryland',
  Massachusetts = 'Massachusetts',
  Michigan = 'Michigan',
  Minnesota = 'Minnesota',
  Mississippi = 'Mississippi',
  Missouri = 'Missouri',
  Montana = 'Montana',
  Nebraska = 'Nebraska',
  Nevada = 'Nevada',
  New_Hampshire = 'New Hampshire',
  New_Jersey = 'New Jersey',
  New_Mexico = 'New Mexico',
  New_York = 'New York',
  North_Carolina = 'North Carolina',
  North_Dakota = ' North Dakota',
  Ohio = 'Ohio',
  Oklahoma = 'Oklahoma',
  Oregon = 'Oregon',
  Pennsylvania = 'Pennsylvania',
  Rhode_Island = 'Rhode Island',
  South_Carolina = 'South Carolina',
  South_Dakota = 'South Dakota',
  Tennessee = 'Tennessee',
  Texas = 'Texas',
  Utah = 'Utah',
  Vermont = 'Vermont',
  Virginia = 'Virginia',
  Washington = 'Washington',
  West_Virginia = 'West Virginia',
  Wisconsin = 'Wisconsin',
  Wyoming = 'Wyoming',
}

export enum EventSorting {
  AZ = 'AZ',
  ZA = 'ZA',
  NEWEST = 'NEWEST',
  OLDEST = 'OLDEST',
}

export const DAYS_TO_NOTIFY = 2;

export const summaries = {
  GET_EVENT_SPONSORS: `Gets the sponsors of an event. If there is a user, system will check if the user is the 
  creator of the event, or the manager of the organization that created the event or the system admin and return the list of all sponsors, wheather accepted or not.
  If the user is non of these or there is no user, the system will return only sponsors that are accepted`,
  SET_SPONSOR_STATUS: `Accept or reject the sponsor request. Only system admin or org manager can do this`,
  GET_SPONSORED_EVENTS: `Finds and returns the events for a specific organization. The sponsoring request 
  must be accepted for the event to be returned. Will include events that are past as well. Organization and user are not populated. When the user clicks on the event, 
  request to get single event must be sent, but depending if its Published or Archived, either to get past event or get event endpoint `,
  GET_SPONSOR_REQUESTS: `Get the sponsor requests that are pending for an organization. Only admin or org manager can get these`,
  EDIT_SPONSOR: `Edit the note for the sponsor. In order to select the correct sponsor, the event id and the orgId is required`,
};
