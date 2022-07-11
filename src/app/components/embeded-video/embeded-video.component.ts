import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-embeded-video',
  templateUrl: './embeded-video.component.html',
  styleUrls: ['./embeded-video.component.scss']
})
export class EmbededVideoComponent implements OnInit {
  @Input() key:string | null = null;
  @Input() site:string = "YouTube";
  sanitizeVideo :SafeResourceUrl ='';

  constructor(private sanitize:DomSanitizer) { }

  ngOnInit(): void {
    this.sanitizeVideo = this.getSafeUrl('https://www.youtube.com/embed/'+this.key);
  }
  getSafeUrl(url:string){
    return this.sanitize.bypassSecurityTrustResourceUrl(url);
  }
}
