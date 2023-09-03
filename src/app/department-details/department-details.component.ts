import { Component } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent {
  public departmentId: any;

  constructor(private route: ActivatedRoute, private router: Router){
  }

  ngOnInit(){
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.departmentId = params.get('id');
    })
  }

  goPrevious(){
    let previousId = parseInt(this.departmentId) - 1;
    this.router.navigate(['/department', previousId]);
  }
  
  goNext(){
    let nextId = parseInt(this.departmentId) + 1;
    this.router.navigate(['/department', nextId]);
  }

  goToDepartmentsList(){
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/department', {id: selectedId, test: 'testvalue'}])
  }
}
