import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { }
  id;
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
