
import { UrlService } from './../../services/url.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
//constructor(private UrlService: UrlService) { }
// ngOnInit() {
//   this.UrlService.getDados().subscribe(response => {
//     console.log(response);
//   });
// }
}
