import { Component, OnInit } from '@angular/core';
import { NoticesService } from '../../services/notices.service';
import { Notice } from '../../models/notice';

@Component({
  selector: 'app-notices-list',
  templateUrl: './notices-list.component.html',
  styleUrls: ['./notices-list.component.css']
})
export class NoticesListComponent implements OnInit {

  public noticias: Array<any> = []

  constructor(
    private noticesService:NoticesService
  ) {}

  ngOnInit() {

    this.noticesService.getNoticias().subscribe((resp: any)=>{
      this.noticias = resp
    })

  }

}
