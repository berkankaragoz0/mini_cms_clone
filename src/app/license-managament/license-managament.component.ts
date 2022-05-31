import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { License } from '../license';
import { LicenseService } from '../license.service';

@Component({
  selector: 'app-license-managament',
  templateUrl: './license-managament.component.html',
  styleUrls: ['./license-managament.component.css']
})
export class LicenseManagamentComponent implements OnInit {

  public licenses!: License[];
  public editLicense!: License;
  public deleteLicense!: License;
  
  constructor(private licenseService: LicenseService) { }

  ngOnInit(): void {
    this.getLicenses();
  }

  public getLicenses(): void{
    this.licenseService.getLicense().subscribe(
      (response: License[]) => {
        this.licenses=response;
      }
    );
  }
  
  public onAddLicense(addForm: NgForm): void{
    document.getElementById('add-license-form')?.click();
    this.licenseService.addLicense(addForm.value).subscribe(
      (response: License)=>{
        console.log(response);
        this.getLicenses();
        addForm.reset();
      }
    );
  }

  public onDeleteLicense(licenseId: number): void{
    this.licenseService.deleteLicense(licenseId).subscribe(
      (response: void)=>{
        console.log(response);
        this.getLicenses();
      }
    );
  }
  
  

}
