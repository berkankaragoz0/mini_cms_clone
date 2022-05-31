import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-vod-contents',
  templateUrl: './vod-contents.component.html',
  styleUrls: ['./vod-contents.component.css']
})
export class VodContentsComponent implements OnInit {

  public contents!: Content[];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.getContents();
  }

  public getContents(): void{
    this.contentService.getContent().subscribe(
      (response: Content[]) => {
        this.contents=response;
      }
    );
  }

}
