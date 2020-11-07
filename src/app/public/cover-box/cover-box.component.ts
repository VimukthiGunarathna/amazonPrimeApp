import { Component, OnInit } from '@angular/core';
import { CoverListService } from 'src/app/services/cover-list.service';

@Component({
  selector: 'app-cover-box',
  templateUrl: './cover-box.component.html',
  styleUrls: ['./cover-box.component.scss']
})
export class CoverBoxComponent implements OnInit {

  public id = 123;
  public tv_images_temp;
  public cover_photos = [];
  public base_url;
  constructor(
    private coverlistService: CoverListService
  ) { }

  ngOnInit(): void {
    //Get configurations 
    this.coverlistService.getConfig().subscribe(data => {
      this.base_url = data.images.base_url + 'original';
      console.log(this.base_url);
      // Get all tv posters to the temp array 
      this.coverlistService.getMovieCover(this.id).subscribe(data => {
        this.tv_images_temp = data.backdrops;
        this.tv_images_temp.forEach(element => {
          this.cover_photos.push(this.base_url + element.file_path);
        });
        console.log(this.cover_photos);
      });
    });
  }

}
