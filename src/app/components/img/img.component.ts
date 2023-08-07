import { Component, Input, Output, EventEmitter, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnDestroy{

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img  =>' ,this.img);
  }

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault:string = './assets/images/default.png'
/*   counter = 0;
  counterFn: number | undefined;  *///Sirve para destruir el proceso

  constructor() {
    //before render
    //no correr cosas de forma async, solo se corre una vez
    console.log('contructor','imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    //before - during render
    //changes inputs - esto corre multiples veces
    console.log('ngOnChanges','imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    //before render
    //aqui si corren cosas asyncronas, solo se corre una vez, como fetch, llamadas a API, promesas.
    console.log('ngOnInit','imgValue =>', this.img);
/*     this.counterFn = window.setInterval(() => { //Aqui va el contador porque es algo asyncrono
      this.counter += 1; //Cada vez que pase 1 seguno se aumentara en 1
      console.log('run counter');
    }, 1000); */
  }

  ngAfterViewInit() {
    //after render
    //aqui manejamos los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //se elimina este componente
    console.log('ngOnDestroy');
/*     window.clearInterval(this.counterFn) */ //Asi se limpia un evento y se finaliza
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('loaded hijo');
    this.loaded.emit(this.img);
  }
}
