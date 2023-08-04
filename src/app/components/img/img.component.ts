import { Component, Input, Output, EventEmitter, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnDestroy{

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault:string = './assets/images/default.png'

  constructor() {
    //before render
    //no correr cosas de forma async, solo se corre una vez
    console.log('contructor','imgValue =>', this.img);
  }

  ngOnChanges() {
    //before - during render
    //changes inputs - esto corre multiples veces
    console.log('ngOnChanges','imgValue =>', this.img);
  }

  ngOnInit(): void {
    //before render
    //aqui si corren cosas asyncronas, solo se corre una vez, como fetch, llamadas a API, promesas.
    console.log('ngOnInit','imgValue =>', this.img);
  }

  ngAfterViewInit() {
    //after render
    //aqui manejamos los hijos
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    //se elimina este componente
    console.log('ngOnDestroy');
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('loaded hijo');
    this.loaded.emit(this.img);
  }
}
