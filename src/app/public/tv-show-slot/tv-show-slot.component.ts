import { Component, OnInit } from '@angular/core';
import { CoverListService } from 'src/app/services/cover-list.service';

@Component({
  selector: 'app-tv-show-slot',
  templateUrl: './tv-show-slot.component.html',
  styleUrls: ['./tv-show-slot.component.scss']
})
export class TvShowSlotComponent implements OnInit {


  public cover_photos = [];
  public base_url;
  public movie_images_temp;
  public movie_image;

  constructor(private coverlistService: CoverListService) { }

  ngOnInit(): void {
    //Get configurations 
    this.coverlistService.getConfig().subscribe(data => {
      this.base_url = data.images.base_url + 'original';
      console.log(this.base_url);
      // Get all tv posters to the temp array 
      this.coverlistService.getTrendingTvShows().subscribe(data => {
        console.log(data.results);
        this.movie_images_temp = data.results;
        this.movie_images_temp.forEach(element => {
          this.cover_photos.push(this.base_url + element.poster_path);
        });
        this.movie_image = this.cover_photos.slice(0, 1)
        this.cover_photos = this.cover_photos.slice(1, 4);
        console.log(this.cover_photos);
      });
    });
  }

}
