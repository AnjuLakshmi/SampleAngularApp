import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public response: any = [];
  public responseArray: any = "";
  public employeeIdFromParam = "";

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
  ) { }

  ngOnInit() {

      this.route.params.subscribe(params => {
			
      this.employeeIdFromParam = params['id'];
      
        })

    this.loadMemberDetails();
  }
//Fetch member details

  private loadMemberDetails() {
    this.commonService.callGetRequest('employeeDetails','getUserDetail?userid=' + this.employeeIdFromParam).subscribe((res) => {
      if((res['message'] == 'Member details extracted successfully'))
        {
          this.response = res;
          this.responseArray = res['response'];
        }   
	
    })
   
  }

// Navigate to employee details page
 
  public editEmployeeDetails() {
  	this.router.navigateByUrl('editEmployee');
  }
  
// Navigate to home page

  public goHome() {
			this.router.navigateByUrl('home');
		}
	
}


