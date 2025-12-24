import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'video-embed',
  imports: [NgSwitch, NgSwitchCase],
  templateUrl: './video-embed.html',
  styleUrl: './video-embed.scss',
  standalone: true,
})
export class VideoEmbed implements OnInit {
  @Input() site: string = 'YouTube';
  @Input() key: string | null = null;
  videoUrls: SafeResourceUrl = '';
  constructor(private sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    switch (this.site) {
      case 'YouTube':
        this.videoUrls = this.getSafeUrl(`https://www.youtube.com/embed/${this.key}`);
        break;
      // Future cases for other video sites can be added here
      case 'Vimeo':
        this.videoUrls = this.getSafeUrl(`https://www.vimeo.com/embed/${this.key}`);
        break;
    }
  }
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
