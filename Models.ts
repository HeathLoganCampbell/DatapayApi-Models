
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
  EndDate? : Date;
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

enum ScopeLevel
{
  COUNTRY = "Country",
  COMPANY = "Company",
  EMPLOYEE = "Employee"
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

type ReferenceValue = {
  Id : string;
  Name : string;
  Value : string;
}

type ParameterComponent = {
  Id : string;
  Name : string;
  ValueType : string;
  ReferenceValues?:  ReferenceValue[]
}

type CompanyComponent = {
  Id : string;
  Code : string;
  Category : string;
  SubCategory : string;
  Parameters? : ParameterComponent[]
}

type ScopeOwner = {
  Id : string;
  Type : ScopeLevel;
}

type EmployeeComponent = {
  Id : string;
  StartDate : Date;
  EndDate? : Date;
  ParameterId : string;
  ReferenceValueId : string;
  Value: string;
  Owner : ScopeOwner;
}
