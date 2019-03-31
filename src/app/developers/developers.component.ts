import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  param:string =this.active.snapshot.params.list;
  webDevelopers = [
    {name: 'Jean Guillén', activity: 'Desarrollo de la página web', image: 'https://instagram.fgua3-1.fna.fbcdn.net/vp/56ecbb5ec4c329b0f71049a1f7b6ef49/5D42CF9C/t51.2885-19/s150x150/36148153_403154323426285_6924895772727050240_n.jpg?_nc_ht=instagram.fgua3-1.fna.fbcdn.net'},
    {name: 'Josué Orrego', activity: 'Desarrollo de la página web', image: 'https://instagram.fgua3-1.fna.fbcdn.net/vp/57f23c52e4cf175bd5cf1727c969568b/5D159AD9/t51.2885-19/s150x150/52816943_260919111509229_6214806729440362496_n.jpg?_nc_ht=instagram.fgua3-1.fna.fbcdn.net'},
    {name: 'David Polonsky', activity: 'Desarrollo de la página web', image: 'https://instagram.fgua3-1.fna.fbcdn.net/vp/4f55c2c664f57259e9a6826e8eb01b91/5D2E71AF/t51.2885-19/s150x150/50932762_257627961785751_2666813265023074304_n.jpg?_nc_ht=instagram.fgua3-1.fna.fbcdn.net'},
    {name: 'Oscar Rodríguez', activity: 'Desarrollo de la página web', image: 'https://instagram.fgua3-1.fna.fbcdn.net/vp/5deeef65e41c1655f651a9676853c9f4/5D44D658/t51.2885-19/s150x150/50815365_2514226091939570_6262375691266818048_n.jpg?_nc_ht=instagram.fgua3-1.fna.fbcdn.net'},
    {name: 'Samuel Jacobo', activity: 'Desarrollo de la página web', image: 'https://scontent.fgua3-2.fna.fbcdn.net/v/t1.0-9/12804890_569022846580727_105090012614834503_n.jpg?_nc_cat=109&_nc_ht=scontent.fgua3-2.fna&oh=6416507122913502475aa8964f17b71a&oe=5D0EBC9E'}
  ]

  mobileDevelopers = [
    {name: 'Emilio Hernández', activity: 'Desarrollo de la App móvil', image: 'https://instagram.fgua3-1.fna.fbcdn.net/vp/dddea88d2066fccc5d4531d0c0d324c0/5D4D5F15/t51.2885-19/s150x150/54511054_1234704643352977_2691461459564560384_n.jpg?_nc_ht=instagram.fgua3-1.fna.fbcdn.net'}
  ]

  constructor(public active: ActivatedRoute, public router: Router){

  }

  ngOnInit() {
    console.log(this.active.snapshot.params.list)
  }

  Back(){
    this.router.navigateByUrl('home')
  }

}
