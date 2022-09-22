import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent } from 'igniteui-angular';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  @ViewChild(IgxBannerComponent, { static: true })
  public banner!: IgxBannerComponent;
  // public contentWidth = '384px';
  public imageUrls = ['https://www.infragistics.com/angular-demos-lob/assets/images/card/media/the_red_ice_forest.jpg',
      'https://www.infragistics.com/angular-demos-lob/assets/images/card/media/yosemite.jpg'];
      
      data= 'Release notes about the new version of GDS-World'
  public ngOnInit() {
      this.banner.open();
}
}
