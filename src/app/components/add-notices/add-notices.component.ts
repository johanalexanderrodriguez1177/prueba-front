import { Component, HostBinding, OnInit } from '@angular/core';
import { Notice } from 'src/app/models/notice';
import { NoticesService } from '../../services/notices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-notices',
  templateUrl: './add-notices.component.html',
  styleUrls: ['./add-notices.component.css']
})
export class AddNoticesComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  notice: Notice = {
    Id: 0,
    Name: '',
    Description: ''
  };

  constructor(
    private noticesService:NoticesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  saveNotice() {
    delete this.notice.Id;
    this.noticesService.addNotice(this.notice)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/notices'])
        },
        err => console.error(err)
      )
  }

}
