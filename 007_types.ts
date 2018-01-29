//Boolean
//Number
//String
//Array
var ages : number[] = [33, 28, 11];

//Tuple
let player : [number, string, number, number];
player = [3, "Jordan", 24, 74];

//Enum
enum ApprovalStatus {Approved, Pending, Rejected};
let job: ApprovalStatus = ApprovalStatus.Pending;

//Any
var apiData : any[] = [4, "Supe", true];

//Void
function printItOut(msg: string) : void {
  console.log(msg);
}