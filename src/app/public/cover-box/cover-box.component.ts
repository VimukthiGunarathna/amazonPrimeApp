import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CoverListService } from 'src/app/services/cover-list.service';

@Component({
  selector: 'app-cover-box',
  templateUrl: './cover-box.component.html',
  styleUrls: ['./cover-box.component.scss']
})
export class CoverBoxComponent implements OnInit {

  public cover_images_temp;
  public cover_image;
  public cover_photos = [];
  public base_url;
  constructor(
    private coverlistService: CoverListService,
    private config: NgbCarouselConfig
  ) {
    // customize default values of carousels used by this component tree
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.interval = 100000;
  }

  ngOnInit(): void {
    //Get configurations 
    this.coverlistService.getConfig().subscribe(data => {
      this.base_url = data.images.base_url + 'original';
      console.log(this.base_url);
      // Get all tv posters to the temp array 
      this.coverlistService.getMovieCover().subscribe(data => {
        console.log(data.results);
        this.cover_images_temp = data.results;
        this.cover_images_temp.forEach(element => {
          this.cover_photos.push(this.base_url + element.backdrop_path);
        });
        this.cover_image = this.cover_photos.slice(0, 1)
        this.cover_photos = this.cover_photos.slice(1, 4);
        console.log(this.cover_photos);
      });
    });
  }

}
