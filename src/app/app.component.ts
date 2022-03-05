import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, HostListener, Inject } from '@angular/core';
import{Router} from '@angular/router';
import{MyserviceService} from './myservice.service'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  preserveWhitespaces: false,
  providers:[MyserviceService]

})
export class AppComponent {
  title = 'demo';



  Data: string = "Jalaram";
  fname: string = "Shreya"
  cols: number = 3;
  Students: { id: number; name: string; course: string; }[];
  text!: string;
  emp!: any;
  
  onClick() {
    console.log("this button is click");

  }

  // Students: any[];
  employee: any[] = [
    {
      id: "hyr389",
      name: "Shry",
      moNo: 9207188182,
      salary:38000,
      gender:"male"
    },
    {
      id: "hd389",
      name: "Mohan",
      moNo: 9207138182,
      salary:40000,
      gender:"male"
    },
    {
      id: "ed389",
      name: "Mitali",
      moNo: 9207328182,
      salary:50000,
      gender:"Female"

    },
    {
      id: "qd389",
      name: "Charmi",
      moNo: 9207139182,
      salary:98000,
      gender:"Female"
    },

  ]


  constructor(private Myservice:MyserviceService) {
    this.Students =
      [{
        id: 1,
        name: "Shreya",
        course: "Angular"

      },
      {
        id: 2,
        name: "Jnavi",
        course: "Java"
      },
      {
        id: 3,
        name: "Shrey",
        course: "Python"
      },
      {
        id: 4,
        name: "Lotaf",
        course: "Javascrpit"
      },
      {
        id: 5,
        name: "Mhohan",
        course: "React"
      }]
    }
    ngOnInit(){
      this.emp = this.Myservice.employee();
      this.text = this.Myservice.display();
    }
    // constructor(private roture:Router)
    // student(){
    //   this.roture.navigate(['/student'])
    // }
  getmoreStudents(): void {
    this.Students =
      [{
        id: 1,
        name: "Shreya",
        course: "Angular"

      },
      {
        id: 2,
        name: "Jnavi",
        course: "Java"
      },
      {
        id: 3,
        name: "Shrey",
        course: "Python"
      },
      {
        id: 4,
        name: "Lotaf",
        course: "Javascrpit"
      },
      {
        id: 5,
        name: "Mhohan",
        course: "React"
      },
      {
        id: 6,
        name: "Mansi",
        course: "Node"
      }



      ]
  }
 

  trackBystudentid(index: number, student: any): string {
    return student.id
  }

  public choose = '';
  setValue(drp: any) {
    this.choose = drp.target.value
  }
  isValid: boolean = true;
  changevalue(_valid: any) {
    this.isValid = _valid
  }
  CounteryDetalies: any[] = [
    {
      'contrey': "India",
      "people": [
        {
          "name": "Shreya",
        },
        {
          "name": "Janki"
        },
        {
          "name": "Subham"
        },
        {
          "name": "Prem"
        }

      ]
    },
    {
      'contrey': "USA",
      "people": [
        {
          "name": "Mani",
        },
        {
          "name": "Je"
        },
        {
          "name": "Trmp"
        },
        {
          "name": "Lee"
        }

      ]
    }

  ]
  people1: any[] = [
    {
      "name": "Janu",
      "conter": "India"
    },
    {
      "name": "Monja",
      "conter": "Londen"
    },
    {
      "name": "keya",
      "conter": "USA"
    },
    {
      "name": "bahrgav",
      "conter": "India"
    },
    {
      "name": " ve",
      "conter": "USA"
    },
    {
      "name": "Jone",
      "conter": "Londen"
    }

  ]
  // getColor(conter: any) {
  //   (2)
  //   switch (conter) {
  //     case 'India':
  //       return 'red';
  //     case 'USA':
  //       return 'green';
  //     case 'Londen':
  //       return 'Blue';
  //   }
  // }


  // checkngIf = false
  // btnClick(){
  //   alert("This is the click the button")
  // }
  // constructor(@Inject(MyserviceService) _service: any) {
  //   console.log(_service);

  //   console.log("this is component");

  // }
  // @HostListener("click",[`$event`])
  // onHostclick(_enent: any){
  //   alert('Hello')
  // }

}
