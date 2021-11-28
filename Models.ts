
type AccessTokenResponse =
{
  access_token : string;
  epires_in : Number;
  token_type : string;
}

type Company = {
  Id : string;
  Name : string;
  Code : string;
}

type PayGroup = {
  Id : string;
  CompanyId: string;
  Code : string;
  Name : string;
}

type PayPeriod = {
  StartDate : Date;
  EndDate : Date;
}

type PayRun = {
  Id : Number;
  PayGroupId: string;
  RunType : RunType;
  Status : PayRunStatus;
  Locked : boolean;
  PayPeriod : PayPeriod;
  FinalisationDate : string;
  DCDate : Date;
  ExcludeFromBanking : boolean;
}

enum PayRunStatus
{
  PENDING = "Pending",
  IN_PROGRESS = "In Progress",
  REQUIRES_AUTHORISATION = "Requires Authorisation",
  AUTHORISED = "Authorised",
  FINALISED = "Finalised",
  CLOSED = "Closed"
}

enum PayRunSortBy
{
  PERIOD = "period",
  CREATION = "creation",
  FINALISATION = "finalisation"
}

enum RunType
{
  MAIN = "Main",
  MANUAL = "Manual"
}

type Employee = {
  Id : string;
  Type : string;
  CompanyId : string;
  Code : string;
  FirstName : string;
  LastName : string;
  StartDate : Date;
}
