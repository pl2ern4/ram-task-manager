const USER = ['Alina Jacob', 'Daniel Bens', 'Jina Thomas','Not Assigned'];

const TICKET_TYPE = ['Story', 'Issue', 'Maintaince','Not Assigned'];

const TICKET_STATUS = ['Todo', 'inProgress', 'Done',];

const TICKET_ORDERBY = {
    modifiedDate: 'MODIFIED_DATE',
    createdDate: 'CREATED_DATE',
    bookmarked: 'BOOKMARKED',
    title: 'TITLE'
};

const ALERT_CONSTANT = {
    story: 'success',
    bug: 'error',
    maintaince:'info'
  }

export {USER, TICKET_TYPE, TICKET_STATUS, TICKET_ORDERBY, ALERT_CONSTANT}