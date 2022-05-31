import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Content } from '../content'
import { ContentService } from '../content.service';

@Component({
  selector: 'app-content-management',
  templateUrl: './content-management.component.html',
  styleUrls: ['./content-management.component.css']
})
export class ContentManagamentComponent implements OnInit {
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

  public onAddContent(addForm: NgForm):void{
    document.getElementById('add-content-form')?.click();
    this.contentService.addContent(addForm.value).subscribe(
      (response: Content)=>{
        console.log(response);
        this.getContents();
        addForm.reset();
      }
    );
  }
  public onDeleteContent(contentId: number): void{
    this.contentService.deleteContent(contentId).subscribe(
      (response: void)=>{
        console.log(response);
        this.getContents();
      }
    );
  }

}
