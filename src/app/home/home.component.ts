import { Component, OnInit , ViewChild, ElementRef} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public responseArray: any = [];
  public employeesInfoArray: any =[];
  public employeesDetilsArray: any =[];
  public model: any = {};
  public returnedArray: any =[];
  public employee = "";
  public result: any = [];
  

  constructor(
    public router: Router,
    private commonservice: CommonService,
		private route: ActivatedRoute,
  ) { 
    
  }

  ngOnInit() {

// Load employees from service
    this.getEmployee();
    
  
  }

// Navigate to employee details page

  passEmployeeId(id: string) {
     this.router.navigateByUrl('employeeDetails/'+id);
 
   }

// Fetch employee list

   getSearchResult(p, event){

      this.commonservice.callGetRequest('searchMembers', "findMembers?username=" + this.model.employee).subscribe((res) => {
      this.responseArray = res['response'];
      this.employeesInfoArray = this.responseArray;
      this.employeesDetilsArray = this.employeesInfoArray['userDetailList'];
      this.result.push(res['this.employeesDetilsArray']);
      this.returnedArray = this.employeesDetilsArray;

       })

   }
// Fetch employee list
   getEmployee(){
    this.commonservice.callGetRequest('getEmployeeList',"listAllMembers").subscribe((res) => {
     
      if (res['message'] == 'Member details extracted successfully') {
          
        this.responseArray = res['response'];
        this.employeesInfoArray = this.responseArray;
        this.employeesDetilsArray = this.employeesInfoArray['userDetailList'];
        this.returnedArray = this.employeesDetilsArray;
      }
     
  },
     );
   }

}
